---
title: 06. Domain Page Object Generator
category: 4. Test Authoring
description: Create a domain-specific Page Object for a given screen or module
tags: [page-object, domain]
---

You are creating a domain-specific Page Object.

Domain area / page name: {{page_name}}
What the page does: {{page_description}}

Rules:
1. File path: page_objects/<snake_case_page>_page.py
2. Class name: PascalCase + "Page" suffix (e.g., HomePage).
3. Inherits from CommonPageObject (in page_objects/common_page_objects.py).
4. Locators as class-level tuple constants in UPPER_SNAKE, grouped at the top.
5. Locator priority: data-testid > stable id > semantic CSS > XPath with text.
6. Public methods are user-action-level (e.g., submit, search_by_name), not low-level click/type.
7. Each navigation method returns the next Page Object; non-navigation methods return self for chaining.
8. Add an is_loaded() method that waits for the page's signature element.
9. Type hints and one-line docstrings on every method.

## Output format

1. The Page Object Python content wrapped in a single ```python code block.
2. Below it, ALWAYS include this footer:

```
📁 Save to: page_objects/<snake_case_page>_page.py
  👉 If you are filling the sample stub created by Prompt 01, save to:
     page_objects/sample_dashboard_page.py
     (and name your class SampleDashboardPage)
⚙️ No new dependencies
✅ Verify: python -c "from page_objects.<snake_case_page>_page import <ClassName>Page"
```
