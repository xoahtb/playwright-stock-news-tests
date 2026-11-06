const { test, expect } = require('../../fixtures');
const { tryGetLastPublishedPost } = require('../../utils/postData');

test.describe('Home - Search', () => {
  test('search for the post that was just published', async ({ homePage, searchResultsPage }) => {
    await homePage.open();

    const lastPublishedPost = tryGetLastPublishedPost();
    const keyword = lastPublishedPost ? lastPublishedPost.title : await homePage.getFirstNewsPostTitle();

    await homePage.search(keyword);

    await expect(searchResultsPage.heading).toContainText(keyword);
    await expect(searchResultsPage.resultWithText(keyword).first()).toBeVisible();
  });
});