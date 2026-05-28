---
title: 05. Base Page Object Class
category: 2. Core Framework
description: Generate a CommonPageObject base class with common Selenium helpers, no time.sleep
tags: [page-object, selenium, base-class]
---

You are writing page_objects/common_page_objects.py — the base class every page object inherits from.

Required methods (all with type hints and one-line docstrings):
- __init__(self, driver) — stores driver, creates self.wait (WebDriverWait with DEFAULT_WAIT)
- find(locator: tuple) -> WebElement — waits for presence, returns element
- find_all(locator: tuple) -> list[WebElement] — waits for presence, returns list
- click(locator: tuple) — waits for clickable, then clicks
- type_text(locator: tuple, text: str, clear_first: bool = True) — waits, clears, sends keys
- is_visible(locator: tuple, timeout: int = 10) -> bool — returns True/False without throwing
- get_text(locator: tuple) -> str
- scroll_into_view(locator: tuple)
- wait_for_url_contains(fragment: str, timeout: int = 15)

Rules:
- No time.sleep() anywhere. Every wait uses WebDriverWait.
- Use the constants from utils.constants for default timeouts.
- Methods that fail should raise with a clear message including the locator and action.

## Output format

1. The `common_page_objects.py` content wrapped in a single ```python code block.
2. Below it, ALWAYS include this footer:

```
📁 Save to: page_objects/common_page_objects.py (replace existing stub)
⚙️ No new dependencies
✅ Verify: python -c "from page_objects.common_page_objects import CommonPageObject"
```
