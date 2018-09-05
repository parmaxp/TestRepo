xdescribe('Login Functionality', function() {
    let loginButton = element(by.id('dnn_dnnLOGIN_loginLink'));
    let emailTextInput = element(by.xpath('//div[@class="field SignLogIn2"]/input[contains(@name, "EmailAddress")]'));
    let loginTextInput = element(by.xpath('//div[@class="field SignLogIn2"]/input[contains(@name, "txtPassword")]'));
    let signInSecurelyButton = element(by.xpath('//a[contains(@id, "btnRegisteredCustomer")]'));
    let user_1 = {
        emailAddress: "2016webdriver@gmail.com",
        password: "webdriver2016"
    };
  
    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://ua.sportsdirect.com/');
    });
  
    it('User should be able to login', function() {
        loginButton.click();
        emailTextInput.sendKeys(user_1.emailAddress);
        loginTextInput.sendKeys(user_1.password);
        signInSecurelyButton.click();

    });
  });