const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { AdReviewPage } = require('../pages/AdReviewPage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  adReviewPage: async ({ page }, use) => {
    const adReviewPage = new AdReviewPage(page);
    await use(adReviewPage);
  },
  searchResultsPage: async ({ page }, use) => {
    const searchResultsPage = new SearchResultsPage(page);
    await use(searchResultsPage);
  },
});

module.exports = { test, expect: base.expect };