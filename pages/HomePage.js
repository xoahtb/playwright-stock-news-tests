const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = page.locator('#keyword');
    this.searchButton = page.locator('#btnSearch');
    this.newsPosts = page.locator('a.pnews-item');
  }

  async open() {
    await this.navigate('/');
  }

  async getFirstNewsPostTitle() {
    return this.newsPosts.first().locator('.pnews-title').innerText();
  }

  async search(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
    await this.page.waitForURL(/\/News\/NewsBySearch/);
  }
}

module.exports = { HomePage };