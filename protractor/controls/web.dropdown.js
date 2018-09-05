let WebControl = require("../base/web.control");

class WebDropdown extends WebControl {
    constructor(baseControlWebElement, title) {
        super(baseControlWebElement, title)
    }

    async open() {
        console.log(`Opening ${this.constructor.name} \"${this.controlTitle}\"`);
        await this.click;
    }

    async selectItemByLabelValue(itemText) {
        //TODO
    }

    async selectItemByVisibleText(itemText) {
        //TODO
    }

    async getSelectedValue() {
        //TODO
    }
}

module.exports = WebDropdown;