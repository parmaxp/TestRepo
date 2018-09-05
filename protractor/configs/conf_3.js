exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../specs_v1/spec_3.js'],
    capabilities:{
        browserName: 'chrome'
    }
}