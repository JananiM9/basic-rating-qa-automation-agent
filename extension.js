// Minimal VS Code extension entry point.
// Day 1: just register a placeholder "Hello" command to confirm the extension activates.
// Future days will add the sidebar, prompts, and copy/insert features.

const vscode = require('vscode');

function activate(context) {
  const hello = vscode.commands.registerCommand('basicQa.hello', () => {
    vscode.window.showInformationMessage('Basic Rating QA Automation Agent is active.');
  });
  context.subscriptions.push(hello);
}

function deactivate() {}

module.exports = { activate, deactivate };
