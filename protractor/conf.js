exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js', 'spec_1.js', 'spec_2.js'],
    capabilities:{
        browserName: "chrome",
        directConnect: true
    }
}