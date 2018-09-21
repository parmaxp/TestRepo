let loginPage = require("../page_objects/login.page")
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
        await browser.waitForAngularEnabled(false);
        allure.createStep('Step 1', async function () {
            await loginPage.get();
        });
        allure.createStep('Step 2', async function () {
            await loginPage.setEmail(user_1.emailAddress);
            await loginPage.clickContinue();
        });
        allure.createStep('Step 3', async function () {
            await browser.sleep(2000);
            await loginPage.setPassword(user_1.password);
            await loginPage.clickContinue();
        });
        allure.createStep('Step 4', async function () {
            await browser.wait(ExpectedConditions.urlContains(myDocumentsPage), 2000, "User should be logged in");
        });
        await createScreenShotAllure();
                        
    });
});