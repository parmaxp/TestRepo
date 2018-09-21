let loginPage = require("../page_objects/login.page");
async function createScreenShotAllure() {
    let screenshotFile = await browser.takeScreenshot();
    await allure.createAttachment("Screenshot", () => {
        return new Buffer(screenshotFile, "base64")
    }, 'image/png')();
}


describe('Login Functionality', function () {
    let user_1 = {
        emailAddress: "kaliolla2013+Production+freeupgrade01@gmail.com",
        password: "nitro12345"
    };
    let myDocumentsPage = "https://cloud.gonitro.com/documents/my-documents"

    it('User should be able to login', async function () {
        browser.waitForAngularEnabled(false);
        await allure.createStep('Step 1 - Open login page', async () => await loginPage.get())();
        await allure.createStep('Step 2 - Set email', async () => await loginPage.setEmail(user_1.emailAddress))();
        await allure.createStep('Step 3 - Click Continue', async () => await loginPage.clickContinue())();
        await allure.createStep('Step 4 - Set password', async () => {
            await browser.sleep(1000);
            await loginPage.setPassword(user_1.password);
            await createScreenShotAllure();
        })();
        await allure.createStep('Step 5 - Click Continue', async () => await loginPage.clickContinue())();
        await allure.createStep('Step 6 - Check user is loged in', async () => await browser.wait(ExpectedConditions.urlContains(myDocumentsPage), 2000, "User should be logged in"))();              
    });
});