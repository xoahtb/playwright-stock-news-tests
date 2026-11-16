const { BasePage } = require('./BasePage');

class PostFacebookPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstRowCheckbox = page.locator('table input.row-chk').first();
    this.postButton = page.locator('#btn-post');
    this.removeButton = page.locator('#btn-remove');
  }

  async open() {
    await this.navigate('/Admin/PostFacebook');
  }

  async openQueue() {
    await this.navigate('/Admin/PostFacebook?keyword=&newsType=&pageSize=30&pageIndex=0&inQueue=true');
  }

  async getFirstPostId() {
    return this.firstRowCheckbox.getAttribute('value');
  }

  async selectFirstPost() {
    await this.firstRowCheckbox.check();
  }

  async addToQueue() {
    await this.postButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async removeFromQueue() {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.removeButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  postCheckbox(postId) {
    return this.page.locator(`table input.row-chk[value="${postId}"]`);
  }
}

module.exports = { PostFacebookPage };
