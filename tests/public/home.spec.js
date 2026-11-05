const { test, expect } = require('../../fixtures');

test.describe('Search', () => {
  test('search with keyword as article title', async ({ page, homePage, searchResultsPage  }) => {
    const keyword = 'Từ hôm nay (2/11), ngân hàng áp dụng quy định mới với khách chuyển tiền đến các tài khoản sau';

    await homePage.open();
    await homePage.search(keyword);

    await expect(searchResultsPage.heading).toContainText(keyword);
    await expect(searchResultsPage.resultWithText(keyword).first()).toBeVisible();
  });
});
