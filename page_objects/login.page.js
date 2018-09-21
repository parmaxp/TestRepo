let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.text.input");
let loginTextInput = new WebTextInput(element(by.id('password')), "Password");
let continueButton = new WebButton(element(by.xpath('//input[@value="Continue"]')), "Continue");

class LoginPage{
    constructor() {
        this.emailTextInput = new WebTextInput(element(by.id('username')), "Email");
    };

    async get() {
      await browser.get('https://sso.gonitro.com');
    };

    async setEmail(email) {
      await this.emailTextInput.sendKeys(email);
    };
  
    async setPassword(password) {
      await loginTextInput.sendKeys(password);
      };

    async clickContinue() { 
      await continueButton.click();
    }
  };

  module.exports = new LoginPage();