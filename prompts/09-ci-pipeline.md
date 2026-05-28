---
title: 09. CI/CD Pipeline (GitHub Actions)
category: 5. CI/CD
description: Generate a basic GitHub Actions workflow that runs pytest and publishes Allure reports
tags: [ci, github-actions, allure]
---

You are creating .github/workflows/ci.yml for a Python + Selenium + pytest-bdd framework with Allure reporting.

Requirements:
1. Triggers: push to any branch, pull_request to main.
2. Single-job (no matrix for simplicity). OS: ubuntu-latest. Python: 3.11.
3. Cache pip based on requirements.txt hash.
4. Install Chrome and ChromeDriver matching versions.
5. Run pytest in headless mode: `pytest --alluredir=allure-results -m "smoke"`. On main-branch push, run the full suite (no marker filter).
6. Upload allure-results as a workflow artifact.
7. On main-branch push only: publish the Allure HTML report to GitHub Pages.
8. Cancel any in-progress runs on the same branch (concurrency).

Pin all action versions (no @main).

## Output format

1. The workflow YAML wrapped in a single ```yaml code block.
2. Below it, ALWAYS include this footer:

```
📁 Save to: .github/workflows/ci.yml (replace existing stub)
⚙️ Setup:
  - git add .github/workflows/ci.yml
  - git commit -m "Add CI workflow"
  - git push
✅ Verify: open the GitHub Actions tab in your repo — the workflow should appear and start running
```
