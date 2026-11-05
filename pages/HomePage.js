const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = page.locator('#keyword');
    this.searchButton = page.locator('#btnSearch');
  }

  async open() {
    await this.navigate('/');
  }

  async search(keyword) {
    await this.searchInput.fill(keyword);
    await Promise.all([
      this.page.waitForURL(/\/News\/NewsBySearch/),
      this.searchButton.click(),
    ]);
  }
}

module.exports = { HomePage };