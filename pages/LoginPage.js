const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.userInput = page.getByLabel('Tài khoản', { exact: true });
    this.passInput = page.getByLabel('Mật khẩu', { exact: true });
    this.submitBtn = page.getByRole('button', { name: 'Đăng nhập' });
    this.errorMessage = page.getByRole('alert');
  }

  async open() {
    await this.navigate('/User/Login');
  }
  
  async login(user, pass) {
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.submitBtn.click();
  }
}

module.exports = { LoginPage };