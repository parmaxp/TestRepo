let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.text.input");

class LoginPage{
    constructor() {
        this.emailTextInput = new WebTextInput(element(by.id('username')), "Email");
        this.loginTextInput = new WebTextInput(element(by.id('password')), "Password");
        this.continueButton = new WebButton(element(by.xpath('//input[@value="Continue"]')), "Continue");
  
    };
    
    async get() {
      await browser.get('https://sso.gonitro.com');
    };

    async setEmail(email) {
      await this.emailTextInput.sendKeys(email);
    };

    getEmailText() {
        return  this.emailTextInput.getText();
      };
  
    async setPassword(password) {
        await this.loginTextInput.sendKeys(password);
      };

    async clickContinue() {
        await this.continueButton.click();
    }
    
  };
  module.exports = new LoginPage();