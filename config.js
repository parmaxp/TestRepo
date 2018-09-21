exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['nitro_cloud_specs/*.js'],
    capabilities: {
        browserName: "chrome",
        directConnect: true
    },
    onPrepare: function() {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(async () => {
            let screenshotFile = await browser.takeScreenshot();

            await allure.createAttachment("Screenshot", () => {
                return new Buffer(screenshotFile, "base64");
            }, 'image/png')();
        });
      }
};

