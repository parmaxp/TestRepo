describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.ginhub.io/protractor-demo');
        expect(browser.getTitle()).toEquel('Super Calculator');
    });
});