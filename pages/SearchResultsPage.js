const { BasePage } = require('./BasePage');

class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.locator('.news-list-page-title');
  }

  resultWithText(text) {
    return this.page.locator('.nld-list .nld-item').filter({ hasText: text });
  }
}

module.exports = { SearchResultsPage };
