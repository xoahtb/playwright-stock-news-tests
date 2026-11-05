const { BasePage } = require('./BasePage');

class AdReviewPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstRowCheckbox = page.locator('input.row-chk').first();
    this.publishButton = page.getByRole('button', { name: 'Public bài đã chọn' }).first();
  }

  async open() {
    await this.navigate('/Admin/ReviewStockNews');
  }

  async getFirstPostId() {
    return this.firstRowCheckbox.getAttribute('value');
  }

  async checkFirstPost() {
    await this.firstRowCheckbox.check();
  }

  async publishSelected() {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.publishButton.click();
  }

  postCheckbox(postId) {
    return this.page.locator(`input.row-chk[value="${postId}"]`);
  }
}

module.exports = { AdReviewPage };