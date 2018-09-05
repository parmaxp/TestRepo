exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 45000,
    getPageTimeout: 30000,
    specs: ['../test_specs/*.js'],
    capabilities:{
        browserName: "chrome",
        directConnect: true
    }
}