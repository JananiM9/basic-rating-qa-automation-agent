---
title: 02. Constants Module
category: 1. Foundation
description: Generate utils/constants.py with environment-aware base URL and default timeouts
tags: [config, constants]
---

Generate utils/constants.py for a Selenium + pytest framework.

Constants needed:
- BASE_URL — the portal URL (read from env var BASE_URL, default to a sample URL)
- DEFAULT_WAIT — explicit wait timeout in seconds (default 30)
- NAVIGATE_TIMEOUT — small pause after navigation (default 3)
- POLL_FREQUENCY — WebDriverWait poll interval (default 0.5)
- HEADLESS — bool from env var HEADLESS (default False)
- BROWSER — browser name from env var BROWSER (default "chrome")

All values must be overridable via environment variables using `os.getenv(...)`.

Document each constant with a one-line comment.

## Output format

1. The `constants.py` content wrapped in a single ```python code block.
2. Below it, ALWAYS include this footer:

```
📁 Save to: utils/constants.py (replace existing stub)
⚙️ No new dependencies
✅ Verify: python -c "from utils.constants import BASE_URL; print(BASE_URL)"
```
