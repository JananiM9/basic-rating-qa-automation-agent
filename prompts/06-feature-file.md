---
title: 07. Feature File (Gherkin) Generator
category: 4. Test Authoring
description: Generate a .feature file with declarative scenarios and proper tags
tags: [gherkin, bdd, feature]
---

You are writing a .feature file for a pytest-bdd test suite.

Module / screen: {{module_name}}
Functional requirements: {{requirements}}

Rules:
1. One Feature per file with a 2-3 line narrative (As a / I want / So that).
2. Use Background for shared setup (login, navigate to module).
3. Cover: golden path, at least 2 negative paths, 1 boundary case.
4. Use Scenario Outline + Examples table for data-driven cases.
5. Steps are declarative (e.g., "the user submits the form", not "click Submit button").
6. Tag scenarios with @smoke, @regression, @negative, @boundary as appropriate.

## Output format

1. The `.feature` content wrapped in a single ```gherkin code block.

Important reminder for the AI: the feature's `Background:` section MUST log the user in by calling the reusable login utility — write the Given step as something like `Given the user is logged in with valid credentials` so the user can reuse the existing `LoginPage` from `page_objects/login_page.py`.

2. Below the code block, ALWAYS include this footer:

```
📁 Save to: features/<feature_name>.feature
  👉 If you are filling the sample stub created by Prompt 01, save to:
     features/sample_dashboard.feature
⚙️ No new dependencies
✅ Verify: pytest --collect-only   # should pick up the new scenarios
➡ Next: run Prompt 08 to generate the matching step definitions
```
