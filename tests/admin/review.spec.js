const { test, expect } = require('../../fixtures');

test.describe('Admin - Duyệt tin', () => {
  test('public the post to display on the website', async ({ adReviewPage }) => {
    await adReviewPage.open();

    const postId = await adReviewPage.getFirstPostId();
    await adReviewPage.checkFirstPost();
    await adReviewPage.publishSelected();
    //console.log(`Published post with ID: ${postId}`);
    await expect(adReviewPage.postCheckbox(postId)).toHaveCount(0);
  });
});
