const { test, expect } = require('../../fixtures');
const { saveLastPublishedPost } = require('../../utils/postData');

test.describe('Admin - Publish Post', () => {
  test('publish the post to display on the website', async ({ adReviewPage }) => {
    await adReviewPage.open();

    const postId = await adReviewPage.getFirstPostId();
    const postTitle = await adReviewPage.getFirstPostTitle();
    await adReviewPage.checkFirstPost();
    await adReviewPage.publishSelected();
    await expect(adReviewPage.postCheckbox(postId)).toHaveCount(0);

    saveLastPublishedPost({ id: postId, title: postTitle });
  });
});
