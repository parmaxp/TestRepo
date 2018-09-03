exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec_1.js'],
    multiCapabilities:[{
        browserName: 'chrome'
    }, {
        browserName: 'firefox'
    }]
}