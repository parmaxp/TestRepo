let loginPage = require("../page_objects/login.page")

describe('Login Functionality', function () {
    let user_1 = {
        emailAddress: "kaliolla2013+Production+freeupgrade01@gmail.com",
        password: "nitro12345"
    };
    let myDocumentsPage = "https://cloud.gonitro.com/documents/my-documents"

    it('User should be able to login', async function () {
        await browser.waitForAngularEnabled(false);
        await loginPage.get();
        await loginPage.setEmail(user_1.emailAddress);
        await loginPage.clickContinue();
        await browser.sleep(2000);
        await loginPage.setPassword(user_1.password);
        await loginPage.clickContinue();
        await browser.wait(ExpectedConditions.urlContains(myDocumentsPage), 2000, "User should be logged in");
    });
});