---
title: 08. Step Definitions Generator
category: 4. Test Authoring
description: Generate pytest-bdd step definitions wired to Page Objects with Allure step wrapping
tags: [pytest-bdd, step-defs]
---

You are writing pytest-bdd step definitions for a .feature file.

Input feature file content:
{{feature_content}}

Conventions:
- File path: step_defs/test_<feature_name>.py
- Use `from pytest_bdd import scenarios, given, when, then, parsers`
- Bind with `scenarios("../features/<filename>.feature")` at the top
- Use `parsers.parse` with named placeholders (no regex unless necessary)
- Steps call Page Object methods — never raw driver calls
- Share state across steps via a SimpleNamespace fixture called `context`
- Wrap each step body in `with allure.step(f"..."):`
- Assertions go in then-steps only, with human-readable messages

Use the `setup_driver` fixture from conftest.py.

If a Page Object method doesn't exist yet, leave a TODO comment with the suggested signature but still write the step.

## Output format

1. The step definitions Python content wrapped in a single ```python code block.

Important reminder for the AI: the `Background:` step `Given the user is logged in with valid credentials` MUST be implemented by calling `LoginPage(setup_driver).login(...)` — import `LoginPage` from `page_objects.login_page`. Do not re-implement login logic in the step file.

2. Below the code block, ALWAYS include this footer:

```
📁 Save to: step_defs/test_<feature_name>.py
  👉 If you are filling the sample stub created by Prompt 01, save to:
     step_defs/test_sample_dashboard.py
⚙️ No new dependencies
✅ Verify: pytest step_defs/test_<feature_name>.py -v
```

If you used Page Object methods that don't exist yet, also include:

```
⚠️ Missing Page Object methods (add these to the corresponding page object):
  - <ClassName>Page.<method_name>(...)
  - ...
```
