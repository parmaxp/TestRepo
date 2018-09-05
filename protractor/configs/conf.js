exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test_specs/*.js'],
    capabilities:{
        browserName: "firefox",
        directConnect: true
    }
}