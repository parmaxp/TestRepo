exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../nitro_cloud_specs/*.js'],
    capabilities: {
        browserName: "chrome",
        directConnect: true
    },
    onPrepare: function() {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({ resultDir: 'allure-results' }));
    }
};

