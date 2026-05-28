# Building & Sharing the Extension

## One-time setup

Install the VS Code Extension Manager:

```powershell
npm install -g @vscode/vsce
```

## Build the VSIX

From the project folder:

```powershell
vsce package
```

Output: `basic-qa-automation-agent-0.0.1.vsix` in the same folder.

## Install locally

```powershell
code --install-extension basic-qa-automation-agent-0.0.1.vsix
```

Restart VS Code. The **Basic QA Agent** icon should appear in the activity bar.

## Uninstall

```powershell
code --uninstall-extension qa-tools.basic-qa-automation-agent
```

## Share with the QA team

Drop the `.vsix` file on Microsoft Teams / SharePoint / shared drive.
Teammates install via:

- **UI:** Extensions panel → `…` menu → Install from VSIX → select the file
- **Command line:** `code --install-extension <path-to-vsix>`

## Bump the version

Edit `version` in `package.json`, then rebuild:

```powershell
vsce package
```

Or let vsce bump it:

```powershell
vsce package patch    # 0.0.1 → 0.0.2
vsce package minor    # 0.0.1 → 0.1.0
vsce package major    # 0.0.1 → 1.0.0
```
