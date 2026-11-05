# Playwright Stock News Tests
![Playwright Tests](https://github.com/xoahtb/playwright-stock-news-tests/actions/workflows/playwright.yml/badge.svg)

End-to-end tests for the admin workflow of a stock news website (https://dautuanyen.online), built with [Playwright](https://playwright.dev) and JavaScript. I built it to practice test automation: page objects, custom fixtures, a reusable login state and multi-browser runs.


## What is tested

- **Admin - review and publish a post:** log in as admin (saved login state), open the review page, select the first pending post, publish it, and check that the post leaves the review list.
- **Home page - search:** search by an article title, then check the results page URL, the results heading, and that at least one result is shown. This test is read-only.

Important: the publish test changes data. It publishes a real pending post. Run it only on a test environment, or on a site where you have permission.

## Key features

- **Page Object Model:** page classes in `pages/` (`BasePage`, `LoginPage`, `HomePage`, `AdReviewPage`) keep locators and actions out of the tests.
- **Custom fixtures:** `fixtures/index.js` extends Playwright's `test` so page objects are injected into each test.
- **Login once:** a `setup` project logs in and saves the session, and the browser projects reuse it.
- **Cross-browser:** Chromium, Firefox and WebKit projects.
- **Reporting and debugging:** HTML report, trace on first retry, 2 retries and 1 worker on CI.
- The site UI is in Vietnamese, so some locators use Vietnamese button names.

## Project structure

```
.github/workflows/    # CI workflow (GitHub Actions)
fixtures/             # custom Playwright fixtures
pages/                # page objects
tests/
  admin/              # admin tests (change data, need login)
  public/             # public tests (read-only, no login)
  auth.setup.js       # logs in once and saves the session
playwright.config.js  # projects, timeouts, reporter, base URL
package.json          # scripts and dependencies
```

## Getting started

Requirements: Node.js (LTS) and Git.

```bash
git clone https://github.com/xoahtb/playwright-stock-news-tests.git
cd playwright-stock-news-tests
npm ci
```

Copy `.env.example` to `.env` and fill in the admin login (use an account of a test environment):

```
USER_NAME=
USER_PASS=
```

```bash
npm test
```

`npm test` first runs `playwright install` (the `pretest` script) to download the browsers, then runs all tests.

## Commands

| Command | What it does |
|---|---|
| `npm test` | Run all tests (installs Playwright browsers first) |
| `npm run test:smoke` | Run only tests tagged `@smoke` |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run report` | Open the last HTML report |

## Notes

- Credentials are read from `.env` and are never committed. The saved login state in `playwright/.auth/` is also ignored by Git.
- The tests run against a live website. They can fail if the site changes its layout, responds slowly, or has no pending post to publish.
## Continuous integration

A GitHub Actions workflow (`.github/workflows/playwright.yml`) runs the public, read-only tests on Chromium, Firefox and WebKit on every push to `main`, and can also be started manually. The Playwright HTML report is uploaded as an artifact on each run.

The admin tests change data, so they run locally only.

## Author

Ho Thi Bich Xoa, QA Engineer. [LinkedIn](https://linkedin.com/in/xoaho)
