const base = require('@playwright/test');
const { test: bddBase } = require('playwright-bdd');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { AdReviewPage } = require('../pages/AdReviewPage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');
const { PostFacebookPage } = require('../pages/PostFacebookPage');

const test = bddBase.extend({
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
  postFacebookPage: async ({ page }, use) => {
    const postFacebookPage = new PostFacebookPage(page);
    await use(postFacebookPage);
  },
});

module.exports = { test, expect: base.expect };