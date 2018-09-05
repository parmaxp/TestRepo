let WebControl = require("../base/web.control");

class WebTextView extends WebControl {
    constructor(baseControlWebElement, title) {
        super(baseControlWebElement, title)
    }

    async getLabel() {
        console.log(`Geting label from  \"${test}\" to ${this.constructor.name} \"${this.controlTitle}\"`);
        return await new WebTextInput(this, element(by.css(this,getLocatorString() + "label"))).getText();
    }
}

module.exports = WebTextView;