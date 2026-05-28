
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

let prompts = [];
let extensionContext;
let treeProvider;

function activate(context) {
  extensionContext = context;
  loadPrompts();

  treeProvider = new PromptTreeProvider();
  vscode.window.registerTreeDataProvider('basicQa.tree', treeProvider);

  context.subscriptions.push(
    vscode.commands.registerCommand('basicQa.hello', () => {
      vscode.window.showInformationMessage('Basic QA Automation Agent is active.');
    }),
    vscode.commands.registerCommand('basicQa.copyPrompt', copyPrompt),
    vscode.commands.registerCommand('basicQa.insertPrompt', insertPrompt),
    vscode.commands.registerCommand('basicQa.refresh', () => {
      loadPrompts();
      treeProvider.refresh();
      vscode.window.showInformationMessage(`Reloaded ${prompts.length} prompts.`);
    })
  );
}

// --- Prompt loading ---

function loadPrompts() {
  prompts = [];
  const dir = path.join(extensionContext.extensionPath, 'prompts');
  if (!fs.existsSync(dir)) return;

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const full = path.join(dir, file);
    const raw = fs.readFileSync(full, 'utf8');
    const meta = parseFrontmatter(raw);
    prompts.push({
      id: file.replace(/\.md$/, ''),
      path: full,
      title: meta.title || file,
      category: meta.category || 'General',
      description: meta.description || '',
      body: meta.body
    });
  }
  prompts.sort((a, b) => a.title.localeCompare(b.title));
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { body: raw };
  const yaml = match[1];
  const body = match[2];
  const meta = { body };
  for (const line of yaml.split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    meta[kv[1].trim()] = kv[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return meta;
}

// --- Commands ---

async function copyPrompt(item) {
  const prompt = item && item.prompt ? item.prompt : await pickPrompt('Copy which prompt?');
  if (!prompt) return;
  await vscode.env.clipboard.writeText(prompt.body);
  vscode.window.showInformationMessage(`Copied: ${prompt.title}`);
}

async function insertPrompt(item) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('Open a file first, then run Insert Prompt.');
    return;
  }
  const prompt = item && item.prompt ? item.prompt : await pickPrompt('Insert which prompt?');
  if (!prompt) return;
  await editor.edit((e) => e.insert(editor.selection.active, prompt.body));
}

async function pickPrompt(placeHolder) {
  const items = prompts.map((p) => ({
    label: p.title,
    description: p.category,
    detail: p.description,
    prompt: p
  }));
  const choice = await vscode.window.showQuickPick(items, {
    placeHolder,
    matchOnDescription: true,
    matchOnDetail: true
  });
  return choice ? choice.prompt : null;
}

// --- Tree view ---

class PromptTreeProvider {
  constructor() {
    this._onDidChange = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChange.event;
  }
  refresh() { this._onDidChange.fire(); }
  getTreeItem(el) { return el; }
  getChildren(el) {
    if (!el) {
      const categories = [...new Set(prompts.map((p) => p.category))].sort();
      return categories.map((c) => new GroupItem(c));
    }
    return prompts
      .filter((p) => p.category === el.label)
      .map((p) => new PromptItem(p));
  }
}

class GroupItem extends vscode.TreeItem {
  constructor(label) {
    super(label, vscode.TreeItemCollapsibleState.Expanded);
  }
}

class PromptItem extends vscode.TreeItem {
  constructor(prompt) {
    super(prompt.title, vscode.TreeItemCollapsibleState.None);
    this.prompt = prompt;
    this.description = prompt.description;
    this.tooltip = `${prompt.title}\n\n${prompt.description}`;
    this.contextValue = 'prompt';
    // Single-click → open the prompt .md file in a new editor tab.
    // (The inline copy/insert icons handle those actions separately.)
    this.command = {
      command: 'vscode.open',
      title: 'Open Prompt',
      arguments: [vscode.Uri.file(prompt.path)]
    };
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
