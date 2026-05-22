// Day 3: add a sidebar tree view with a few hard-coded placeholder items.
// Day 4 will replace these with real prompts loaded from the prompts/ folder.

const vscode = require('vscode');

function activate(context) {
  const hello = vscode.commands.registerCommand('basicQa.hello', () => {
    vscode.window.showInformationMessage('Basic Rating QA Automation Agent is active.');
  });
  context.subscriptions.push(hello);

  vscode.window.registerTreeDataProvider('basicQa.tree', new PlaceholderTreeProvider());
}

// A minimal tree provider — shows two categories, each with a couple of placeholder items.
// These get replaced on Day 4 with real prompts read from the prompts/ folder.
class PlaceholderTreeProvider {
  getTreeItem(el) { return el; }

  getChildren(el) {
    if (!el) {
      return [
        new GroupItem('Foundation'),
        new GroupItem('Test Authoring')
      ];
    }
    if (el.label === 'Foundation') {
      return [
        new LeafItem('Project Skeleton (placeholder)'),
        new LeafItem('Constants Module (placeholder)')
      ];
    }
    if (el.label === 'Test Authoring') {
      return [
        new LeafItem('Feature File (placeholder)'),
        new LeafItem('Step Definitions (placeholder)')
      ];
    }
    return [];
  }
}

class GroupItem extends vscode.TreeItem {
  constructor(label) {
    super(label, vscode.TreeItemCollapsibleState.Expanded);
  }
}

class LeafItem extends vscode.TreeItem {
  constructor(label) {
    super(label, vscode.TreeItemCollapsibleState.None);
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
