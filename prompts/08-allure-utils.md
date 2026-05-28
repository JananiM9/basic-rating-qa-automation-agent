---
title: 04. Allure Utils Helper Module
category: 3. Reporting
description: Generate utils/allure_utils.py with defensive screenshot and attachment helpers
tags: [allure, screenshots, reporting]
---

You are writing utils/allure_utils.py — a small helper module with attachment utilities used across the framework.

Required functions:

1. attach_checkpoint_ss(driver, name, status)
   - Takes a screenshot from the driver
   - Adds a colored label (green for "PASS", red for "FAIL") in the top-left corner before attaching
   - Attaches to Allure as PNG, named "<name> - <status>"
   - Safe-guards: skip silently if the driver session is invalid

2. attach_text_log(text, name)
   - Attaches arbitrary text to Allure as TEXT

3. attach_html_snapshot(driver, name)
   - Captures driver.page_source and attaches as HTML

All functions must be defensive — never raise. Log a warning and continue on failure. The framework should never fail because of a reporting helper.

## Output format

1. The `allure_utils.py` content wrapped in a single ```python code block.
2. Below it, ALWAYS include this footer:

```
📁 Save to: utils/allure_utils.py (replace existing stub)
⚙️ No new dependencies (allure-pytest is already in requirements.txt)
✅ Verify: python -c "from utils.allure_utils import attach_checkpoint_ss"
```
