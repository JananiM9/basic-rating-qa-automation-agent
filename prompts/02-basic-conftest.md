---
title: 03. Basic conftest.py
category: 2. Core Framework
description: Generate a simple conftest.py with a Chrome driver fixture and Allure step hook
tags: [conftest, fixtures, driver]
---

You are writing a simple conftest.py for a Selenium + pytest-bdd framework with Allure reporting.

Requirements:
1. Session-scoped fixture `setup_driver` that:
   - Launches Chrome
   - Maximizes the window
   - Navigates to BASE_URL (imported from utils.constants)
   - Yields the driver
   - Quits the driver at teardown
2. Optional headless mode controlled by HEADLESS env var (default false).
3. A pytest_bdd_after_step hook that calls `attach_checkpoint_ss(driver, step.name, "PASS")` from utils.allure_utils so every step gets a screenshot in Allure.
4. A pytest_runtest_makereport hook that attaches a FAIL screenshot to Allure if a step fails.

## Output format

1. The `conftest.py` content wrapped in a single ```python code block.
2. Below it, ALWAYS include this footer:

```
📁 Save to: conftest.py (project root — replace existing stub)
⚙️ No new dependencies (allure-pytest is already in requirements.txt)
✅ Verify: pytest --collect-only
```
