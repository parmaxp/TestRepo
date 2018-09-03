exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec_3.js'],
    capabilities:{
        browserName: 'chrome'
    }
}