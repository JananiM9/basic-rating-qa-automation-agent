# Basic QA Automation Agent — Full Documentation

> 🔒 **Internal Cognizant tool — not for external distribution.**

A VS Code extension that hosts an AI prompt library for the QA team. The prompts help build a basic Python + Selenium + pytest-bdd test automation framework.

---

## 1. What this is

A small **VS Code extension** with three things bundled together:

1. **A prompt library** — 10 carefully-written AI prompts (saved as `.md` files) that produce production-ready code for a test automation framework.
2. **A sidebar UI** — browse the prompts by category, just like any built-in VS Code feature.
3. **Copy & Insert actions** — one click sends a prompt to your clipboard or drops it directly into the file you're editing.

**Purpose:** A QA engineer who needs to write a Page Object, a feature file, or a CI workflow can pick the right prompt, copy it, and paste it into ChatGPT / Copilot / Claude — instead of writing the prompt by hand every time.

---

## 2. Repository layout

```
basic-rating-qa-automation-agent/
├── .git/                       ← git history
├── .gitignore                  ← excludes node_modules, .vsix files
├── .vscode/
│   └── launch.json             ← lets you press F5 to test the extension locally
├── .vscodeignore               ← excludes files from the packaged .vsix
├── resources/
│   ├── sidebar.svg             ← activity bar icon (the icon you click)
│   └── icon.png                ← marketplace icon (128×128)
├── package.json                ← extension manifest (commands, views, etc.)
├── extension.js                ← the entire extension code (~140 lines)
├── LICENSE                     ← Cognizant internal-use license
├── README.md                   ← short intro for end users
├── BUILD.md                    ← how to package and share the .vsix
├── DOCUMENTATION.md            ← this file
└── prompts/                    ← the 10 prompts
    ├── 01-project-skeleton.md
    ├── 02-basic-conftest.md
    ├── 03-constants-module.md
    ├── 04-base-page-object.md
    ├── 05-domain-page-object.md
    ├── 06-feature-file.md
    ├── 07-step-definitions.md
    ├── 08-allure-utils.md
    ├── 09-ci-pipeline.md
    └── 10-framework-readme.md
```

### What each file does

| File | Purpose |
|---|---|
| `package.json` | Tells VS Code what the extension contributes — commands, sidebar, settings. Anything user-visible is declared here. |
| `extension.js` | The full runtime — loads prompts from disk, registers commands, renders the sidebar. |
| `prompts/*.md` | The actual value of the extension. Each is one focused prompt with a title, category, description, and body. |
| `resources/sidebar.svg` | Black-and-white icon shown in the activity bar (left strip in VS Code). |
| `resources/icon.png` | Full-color icon shown when this is browsed in the Extensions panel. |
| `LICENSE` | Cognizant internal-use proprietary notice. |
| `.vscode/launch.json` | Dev-time config — pressing F5 opens a sandboxed VS Code with this extension loaded. |
| `.vscodeignore` | Tells the packager which files to exclude from the `.vsix` (keeps it small and clean). |

---

## 3. How the extension boots

1. VS Code starts up.
2. It sees `"activationEvents": ["onStartupFinished"]` in `package.json` → calls `activate()` in `extension.js`.
3. `activate()` does three things:
   1. **Loads all 10 prompts** from the `prompts/` folder — reads each `.md`, extracts the frontmatter (title, category, description), keeps the body in memory.
   2. **Registers four commands** that the user can invoke (see Section 4).
   3. **Registers the sidebar tree view** — the panel that shows up when you click the activity bar icon.

After that, the extension is idle until you click something or run a command.

---

## 4. The four commands

All commands are available via `Ctrl+Shift+P` → start typing **"Basic QA"**.

| Command | What it does |
|---|---|
| **Basic QA: Copy Prompt to Clipboard** | Opens a quick-pick dropdown of all prompts. Pick one → its body is copied to your clipboard. A toast confirms which prompt was copied. |
| **Basic QA: Insert Prompt at Cursor** | Same picker, but instead of clipboard the prompt body is inserted directly at your editor's cursor. Warns you if no file is open. |
| **Basic QA: Refresh Prompts** | Re-reads the `prompts/` folder. Use this after you've added or edited a `.md` file — no restart needed. |
| **Basic QA: Hello** | A simple "the extension is active" notification — useful for confirming installation worked. |

---

## 5. The sidebar

Click the **Basic QA Agent** icon in the activity bar (left strip). A panel opens showing all prompts grouped by category:

```
▼ CI/CD
    CI/CD Pipeline (GitHub Actions)
▼ Core Framework
    Base Page Object Class
    Basic conftest.py
▼ Foundation
    Constants Module
    Framework README Generator
    Project Skeleton Generator
▼ Reporting
    Allure Utils Helper Module
▼ Test Authoring
    Domain Page Object Generator
    Feature File (Gherkin) Generator
    Step Definitions Generator
```

**Interactions:**
- **Hover any prompt row** → two inline icons appear: copy 📋 and insert ➡️
- **Click a prompt row** → copies it to clipboard (single-click shortcut)
- **Top of the panel** → a refresh button to reload from disk

---

## 6. Prompt file format

Each `.md` file under `prompts/` has the same structure:

```markdown
---
title: Base Page Object Class
category: Core Framework
description: Generate a CommonPageObject base class with common Selenium helpers
tags: [page-object, selenium, base-class]
---

You are writing page_objects/common_page_objects.py — the base class every
page object inherits from.

Required methods (all with type hints and one-line docstrings):
- __init__(self, driver) — stores driver, creates self.wait
- find(locator: tuple) -> WebElement — waits for presence, returns element
...
```

### Frontmatter fields

| Field | What it does |
|---|---|
| `title` | Shown in the sidebar and the command-palette dropdown |
| `category` | Groups the prompt under that heading in the sidebar |
| `description` | The one-liner shown under the title |
| `tags` | Free-form tags (not displayed but searchable in the picker) |

### Substitution slots

Some prompts contain `{{placeholders}}` like `{{page_name}}` or `{{requirements}}`. These are **intentional fill-in-the-blanks** — the QA engineer pastes the real content there before sending the prompt to AI.

---

## 7. The 10 prompts

Each prompt is designed to produce a piece of a basic Python + Selenium + pytest-bdd framework.

| # | Prompt | What it builds |
|---|---|---|
| 1 | **Project Skeleton** | Folder structure + `requirements.txt`, `pytest.ini`, `.gitignore` |
| 2 | **Basic conftest.py** | Chrome driver fixture + Allure step hook |
| 3 | **Constants Module** | `BASE_URL`, timeouts, env-var overrides |
| 4 | **Base Page Object** | `CommonPageObject` with `find/click/type/is_visible` helpers, no `time.sleep` |
| 5 | **Domain Page Object** | Per-page class inheriting from the base, with proper locator priorities |
| 6 | **Feature File** | Gherkin `.feature` with declarative scenarios and tags |
| 7 | **Step Definitions** | pytest-bdd step defs wired to Page Objects, with Allure step wrapping |
| 8 | **Allure Utils** | Defensive screenshot/text/HTML attachment helpers |
| 9 | **CI/CD Pipeline** | GitHub Actions workflow with pytest + Allure publishing |
| 10 | **Framework README** | Day-one onboarding README for new QA engineers |

**Excluded on purpose** (kept for an advanced version): encrypted credentials, per-test logging, soft assert mechanism, multi-user role setup.

---

## 8. Building & sharing

Full instructions in [`BUILD.md`](BUILD.md). Quick version:

```powershell
# One-time
npm install -g @vscode/vsce

# Build
vsce package
# → basic-qa-automation-agent-0.0.1.vsix

# Install locally
code --install-extension basic-qa-automation-agent-0.0.1.vsix

# Share
# Drop the .vsix on Teams / SharePoint / shared drive
```

Teammates install via either:
- **UI:** Extensions panel → `…` menu → **Install from VSIX**
- **CLI:** `code --install-extension <file.vsix>`

---

## 9. Extending the extension

### Adding a new prompt (no code change needed)

1. Create a new `.md` file under `prompts/` with frontmatter (see Section 6).
2. Run **Basic QA: Refresh Prompts** from the command palette — your prompt appears in the sidebar.
3. When you're ready to ship: `vsce package` to produce the next `.vsix`.

### Renaming or removing a prompt

Just rename or delete the `.md` file. Refresh to see the change.

### Adding a new command

1. In `package.json` → `contributes.commands`, add a new entry:
   ```json
   { "command": "basicQa.myNewCommand", "title": "Basic QA: My New Command" }
   ```
2. In `extension.js`, register the handler inside `activate()`:
   ```js
   vscode.commands.registerCommand('basicQa.myNewCommand', () => { /* ... */ })
   ```
3. Rebuild with `vsce package`.

---

## 10. Naming reference

| Field | Value |
|---|---|
| Internal name | `basic-qa-automation-agent` |
| Display name | Basic QA Automation Agent |
| Publisher | `qa-tools` |
| Full extension ID | `qa-tools.basic-qa-automation-agent` |
| VSIX filename | `basic-qa-automation-agent-0.0.1.vsix` |
| Activity bar title | Basic QA Agent |
| Command prefix | `Basic QA: ...` |

---

## 11. Day-by-day build history

The extension was built over 7 days, each adding one capability:

| Day | What was added |
|---|---|
| Day 1 | Project skeleton — `package.json`, `extension.js`, README |
| Day 2 | F5 debug launch config + git initialization |
| Day 3 | Sidebar (activity bar icon + tree view with placeholders) |
| Day 4 | Prompt loading from disk + category-grouped sidebar |
| Day 5 | Copy + Insert + Refresh commands with inline icons |
| Day 6 | Marketplace icon, LICENSE, polished README, BUILD doc |
| Day 7 | `.vscodeignore` + packaging instructions for `.vsix` |

---

## 12. License

This is **internal Cognizant property**. See [`LICENSE`](LICENSE) for the full text. Summary:

- ✅ Cognizant employees & contractors may install, use, and modify it
- ✅ Internal Cognizant business purposes only
- ❌ Not for external distribution or republication
- ❌ Cannot be shared with third parties without written permission

---

## 13. Glossary

- **VSIX** — VS Code's extension package format (a zip with a manifest inside)
- **Activity bar** — the vertical strip of icons on the very left of VS Code
- **Frontmatter** — YAML metadata block at the top of a markdown file (between `---` markers)
- **Codicon** — VS Code's built-in icon set (used in `$(copy)`, `$(refresh)`, etc.)
- **TreeView** — the collapsible folder-and-item UI element used in sidebars
- **vsce** — the official VS Code Extension Manager CLI used to build and publish extensions

---

*Last updated for v0.0.1 — 2026-05-21.*
