const { createBdd } = require('playwright-bdd');
const { test, expect } = require('../fixtures');

const { Given, When, Then } = createBdd(test);

let postId;

Given('there is a post available for Facebook publishing', async ({ postFacebookPage }) => {
  await postFacebookPage.open();
  postId = await postFacebookPage.getFirstPostId();
  await postFacebookPage.selectFirstPost();
});

When('admin adds the post to the Facebook posting queue', async ({ postFacebookPage }) => {
  await postFacebookPage.addToQueue();
});

Then('the post is in the Facebook posting queue', async ({ postFacebookPage }) => {
  await postFacebookPage.openQueue();
  await expect(postFacebookPage.postCheckbox(postId)).toBeVisible();
});

Given('a post is in the Facebook posting queue', async ({ postFacebookPage }) => {
  await postFacebookPage.openQueue();
  postId = await postFacebookPage.getFirstPostId();
  await postFacebookPage.selectFirstPost();
});

When('admin removes the post from the queue', async ({ postFacebookPage }) => {
  await postFacebookPage.removeFromQueue();
});

Then('the post is no longer in the Facebook posting queue', async ({ postFacebookPage }) => {
  await postFacebookPage.openQueue();
  await expect(postFacebookPage.postCheckbox(postId)).toHaveCount(0);
});
