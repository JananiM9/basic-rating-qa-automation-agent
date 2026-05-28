---
title: 01. Project Skeleton Generator
category: 1. Foundation
description: Create the full folder structure with starter files, a reusable login utility, and sample feature/step-def/page-object that demonstrate Background-driven login
tags: [scaffold, setup]
---

You are bootstrapping a basic Python + Selenium + pytest-bdd test automation framework.

## What to do

**If you can create files directly in this workspace (Copilot Edits / Agent mode):**
Create every folder and file listed below with the exact content shown. Do not just describe — actually create them.

**If you can only respond in chat (regular Copilot Chat / ChatGPT / Claude):**
Output a single PowerShell script wrapped in one ```powershell code block. The script must create every folder and write every file with the exact content shown.

Either way, the user must end up with a working project that can be opened in VS Code and have tests immediately collected.

## Folders to create

- features/
- step_defs/
- page_objects/
- utils/
- .github/workflows/

## Files to create — with full content

### `requirements.txt`
```
selenium==4.21.0
pytest==8.2.0
pytest-bdd==7.1.2
allure-pytest==2.13.5
webdriver-manager==4.0.1
```

### `pytest.ini`
```ini
[pytest]
markers =
    smoke: smoke tests
    regression: regression tests
    negative: negative path tests
addopts = -v --tb=short --strict-markers
testpaths = step_defs
bdd_features_base_dir = features/
```

### `.gitignore`
```
__pycache__/
*.pyc
.venv/
venv/
.pytest_cache/
.idea/
.vscode/
allure-results/
allure-report/
*.log
.env
```

### `conftest.py`
```python
# To be replaced using Prompt 03 (Basic conftest.py).
# Placeholder so pytest doesn't complain.
```

### `utils/__init__.py`
(empty file)

### `utils/constants.py`
```python
# To be replaced using Prompt 02 (Constants Module).
BASE_URL = "https://example.com"
DEFAULT_WAIT = 30
```

### `utils/allure_utils.py`
```python
# To be replaced using Prompt 04 (Allure Utils Helper Module).
```

### `page_objects/__init__.py`
(empty file)

### `page_objects/common_page_objects.py`
```python
# To be replaced using Prompt 05 (Base Page Object Class).
```

### `page_objects/login_page.py` — REUSABLE login utility (consumed by every feature's Background)
```python
from selenium.webdriver.common.by import By


class LoginPage:
    """Reusable login utility. Every feature's Background calls login() before running scenarios."""

    USERNAME_INPUT = (By.ID, "username")
    PASSWORD_INPUT = (By.ID, "password")
    SUBMIT_BUTTON = (By.CSS_SELECTOR, "button[type='submit']")

    def __init__(self, driver):
        self.driver = driver

    def login(self, username: str, password: str):
        """Type credentials and submit the login form."""
        self.driver.find_element(*self.USERNAME_INPUT).send_keys(username)
        self.driver.find_element(*self.PASSWORD_INPUT).send_keys(password)
        self.driver.find_element(*self.SUBMIT_BUTTON).click()
```

### `page_objects/sample_dashboard_page.py` — EMPTY STUB (filled by Prompt 06)
```python
# Stub — fill this by running Prompt 06 (Domain Page Object Generator).
# The Page Object class should be named SampleDashboardPage and live in this file.
```

### `step_defs/__init__.py`
(empty file)

### `features/sample_dashboard.feature` — EMPTY STUB (filled by Prompt 07)
```gherkin
# Stub — fill this by running Prompt 07 (Feature File Generator).
# The feature's Background must call the reusable LoginPage utility before each scenario.
```

### `step_defs/test_sample_dashboard.py` — EMPTY STUB (filled by Prompt 08)
```python
# Stub — fill this by running Prompt 08 (Step Definitions Generator).
# Must bind to ../features/sample_dashboard.feature and use:
#   - LoginPage from page_objects.login_page (for the Background)
#   - SampleDashboardPage from page_objects.sample_dashboard_page (for the scenarios)
```

### `.github/workflows/ci.yml`
```yaml
# To be replaced using Prompt 09 (CI/CD Pipeline).
```

### `README.md`
```markdown
# QA Automation Framework

Generated via the Basic QA Automation Agent extension.

## Next steps

1. **Install dependencies first:**
   ```
   pip install -r requirements.txt
   ```

2. Replace stubs by running these prompts in order:
   - Prompt 02 → utils/constants.py
   - Prompt 03 → conftest.py
   - Prompt 04 → utils/allure_utils.py
   - Prompt 05 → page_objects/common_page_objects.py
   - Prompt 06 → real Page Objects (one per page)
   - Prompt 07 → real feature files
   - Prompt 08 → real step definitions
   - Prompt 09 → .github/workflows/ci.yml
   - Prompt 10 → this README

## Run the sample test

```
pytest -m smoke --alluredir=allure-results
allure serve allure-results
```
```

## Final summary — ALWAYS include this at the end

Print a clear, copy-friendly summary in this exact format:

```
✅ Created N folders and M files

📁 Files created:
  - requirements.txt
  - pytest.ini
  - .gitignore
  - conftest.py (stub — replace via Prompt 03)
  - utils/__init__.py
  - utils/constants.py (stub — replace via Prompt 02)
  - utils/allure_utils.py (stub — replace via Prompt 04)
  - page_objects/__init__.py
  - page_objects/common_page_objects.py (stub — replace via Prompt 05)
  - page_objects/login_page.py (reusable login utility — ready to use)
  - page_objects/sample_dashboard_page.py (empty stub — fill via Prompt 06)
  - step_defs/__init__.py
  - features/sample_dashboard.feature (empty stub — fill via Prompt 07)
  - step_defs/test_sample_dashboard.py (empty stub — fill via Prompt 08)
  - .github/workflows/ci.yml (stub — replace via Prompt 09)
  - README.md (stub — replace via Prompt 10)

⚙️ REQUIRED NEXT STEP — install dependencies:
  pip install -r requirements.txt

➡ Then run Prompts 02 → 10 in order to fill in the stubs.

✅ Verify the skeleton works:
  pytest --collect-only      # should discover the sample feature's 2 scenarios
```
