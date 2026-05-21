---
title: Project Skeleton Generator
category: Foundation
description: Bootstrap the folder structure and starter config files for a basic Selenium + pytest-bdd framework
tags: [scaffold, setup]
---

You are bootstrapping a basic Python test automation framework for a web portal.

Generate the folder structure and starter files:

- features/                 (Gherkin .feature files)
- step_defs/                (pytest-bdd step definitions)
- page_objects/
  - common_page_objects.py  (BasePage with shared Selenium helpers)
- utils/
  - constants.py            (BASE_URL, timeouts, default wait)
  - allure_utils.py          (screenshot + step attach helpers)
- conftest.py               (driver fixture + Allure step hook)
- pytest.ini                (pytest config + markers)
- requirements.txt          (Selenium, pytest, pytest-bdd, allure-pytest)
- .gitignore
- README.md

Stack: Python 3.11+, Selenium 4, pytest, pytest-bdd, Allure.

Output the folder tree first, then the starter content for:
- requirements.txt
- pytest.ini
- .gitignore

Keep it minimal — no encrypted credentials, no per-test logging, no multi-user role setup. This is the basic skeleton meant for a beginner-friendly framework.
