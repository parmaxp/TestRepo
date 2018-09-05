let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.text.input");

describe('Login Functionality', function () {
    let myAccountButton = new WebButton(element(by.id('myaccount')), "My Account");
    let emailTextInput = new WebTextInput(element(by.id('EmailAddress')), "Email Address");
    let loginTextInput = new WebTextInput(element(by.id('Password')), "Password");
    let continueButton = new WebButton(element(by.id('SignInContinue')), "Continue");
    let user_1 = {
        emailAddress: "2016webdriver@gmail.com",
        password: "webdriver2016"
    };
    let welcomePage = "https://www.mandmdirect.com/Secure/Account/Welcome"

    it('User should be able to login', async function () {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.mandmdirect.com/');
        await myAccountButton.click();
        await emailTextInput.sendKeys(user_1.emailAddress);
        await loginTextInput.sendKeys(user_1.password);
        await continueButton.click();
        await browser.wait(ExpectedConditions.urlContains("https://www.mandmdirect.com/Secure/Account/Welcome"),2000, "User is not logged in");
    });
});