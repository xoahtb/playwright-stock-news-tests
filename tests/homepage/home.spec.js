const { test, expect } = require('../../fixtures');

test.describe('Trang chủ - Tìm kiếm', () => {
  test('tìm kiếm với từ khóa là tiêu đề bài viết', async ({ page, homePage }) => {
    const keyword = 'Từ hôm nay (2/11), ngân hàng áp dụng quy định mới với khách chuyển tiền đến các tài khoản sau';

    await homePage.open();
    await homePage.search(keyword);

    await expect(page).toHaveURL(
      `/News/NewsBySearch?keyword=${encodeURIComponent(keyword)}`
    );
    await expect(page.locator('.news-list-page-title')).toContainText(`"${keyword}"`);

    const resultCount = await page.locator('.nld-list .nld-item').count();
    expect(resultCount).toBeGreaterThanOrEqual(1);
  });
});
