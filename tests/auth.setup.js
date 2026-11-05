import { test as setup, expect } from '@playwright/test';

const { LoginPage } = require('../pages/LoginPage');
setup('đăng nhập', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(process.env.USER_NAME, process.env.USER_PASS);
  await expect(page.getByRole('link', { name: 'Đăng xuất' })).toBeVisible();
  await page.context().storageState({ path: 'playwright/.auth/user.json' });
});

// setup('tạo storageState trống', async ({ page }) => {
//   await page.context().storageState({ path: 'playwright/.auth/user.json' });
// });
