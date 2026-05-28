# Basic QA Automation Agent

A simple VS Code extension that hosts an AI prompt library for the QA team. The prompts help build a basic Python + Selenium + pytest-bdd test automation framework.

---

## 🚀 New here? Use prompts in this order

If you're starting a brand-new framework from scratch, run through these prompts **in sequence**. Each one produces output you'll save into your project.

| Step | Prompt | What it gives you | Where to use the output |
|---|---|---|---|
| 1 | **Project Skeleton Generator** | A PowerShell script | Run in PowerShell → creates folders + starter files |
| 2 | **Constants Module** | `utils/constants.py` content | Paste into the file the script created |
| 3 | **Basic conftest.py** | `conftest.py` content | Paste into the file the script created |
| 4 | **Allure Utils Helper Module** | `utils/allure_utils.py` content | Paste into the file the script created |
| 5 | **Base Page Object Class** | `page_objects/common_page_objects.py` | Paste into the file the script created |
| 6 | **Domain Page Object Generator** | Per-page object file | Save as `page_objects/<your_page>_page.py` |
| 7 | **Feature File (Gherkin) Generator** | A `.feature` file | Save as `features/<feature_name>.feature` |
| 8 | **Step Definitions Generator** | Step definition Python file | Save as `step_defs/test_<feature>.py` |
| 9 | **CI/CD Pipeline (GitHub Actions)** | YAML workflow | Save as `.github/workflows/ci.yml` |
| 10 | **Framework README Generator** | Full README | Save as `README.md` in the new framework folder |

> **Tip:** Steps 1–5 + 9 + 10 are **one-time setup**. Steps 6–8 are **per-feature** — repeat them every time you add a new test.

---

## How to use a prompt

1. **Click the Basic QA Agent icon** in the activity bar (left strip).
2. **Hover over a prompt row** → two icons appear:
   - 📋 **Copy** — copies the prompt to your clipboard
   - ➡ **Insert** — pastes it directly into the file you have open
3. **Click the row** → opens the prompt's full text in a new editor tab (good for reading before copying).
4. Paste the prompt into **ChatGPT, Copilot Chat, or Claude**.
5. Save the AI's response into the right file (see table above).

> **Note for chat panels:** **Insert at Cursor** only works in regular code files — it cannot target the GitHub Copilot Chat input box (VS Code doesn't expose chat panels as editors). For Copilot Chat, use **Copy 📋** and then `Ctrl+V` inside the chat box.

> **Tip for Copilot Edits / Agent mode:** If your AI tool supports creating files directly in the workspace (Copilot Edits, Cursor Agent, Claude Code, etc.), Prompt 01 will create all the folders and files for you in one go. Otherwise, AI returns a PowerShell script — run it once in your target folder to scaffold everything.

---

## Features

- 📚 **10 ready-to-use prompts** for project setup, Page Objects, feature files, step definitions, Allure reporting, CI/CD, and the framework README.
- 🌳 **Sidebar tree view** — prompts grouped by category for easy browsing.
- 📋 **Copy / Insert** — get the prompt where you need it in one click.
- 🔄 **Refresh** — reload prompts after adding new ones, no restart needed.

---

## Commands (Ctrl+Shift+P)

| Command | What it does |
|---|---|
| `Basic QA: Copy Prompt to Clipboard` | Pick a prompt and copy it |
| `Basic QA: Insert Prompt at Cursor` | Pick a prompt and insert it into the active editor |
| `Basic QA: Refresh Prompts` | Reload prompts from disk |
| `Basic QA: Hello` | Confirm the extension is active |

---

## Try it locally

1. Open this folder in VS Code.
2. Press `F5` — a new VS Code window opens with the extension loaded.
3. Click the **Basic QA Agent** icon in the activity bar.
4. Browse, copy, paste, build.

---

## Build & install

See [BUILD.md](BUILD.md).
