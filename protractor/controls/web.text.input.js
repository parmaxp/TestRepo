let WebControl = require("../base/web.control");

class WebTextInput extends WebControl {
    constructor(baseControlWebElement, title) {
        super(baseControlWebElement, title)
    }

    async sendKeys(text) {
        await this.initializeWebControl();
        console.log(`Send \"${text}\" to ${this.constructor.name} \"${this.controlTitle}\"`);
        await this.getBaseControlWebElement().sendKeys(text);
    }

    // async sendKeys(text) {
    //     console.log(`Send \"${text}\" to ${this.constructor.name} \"${this.controlTitle}\"`);
    //     await this.sendKeys(text);
    // }

}

module.exports = WebTextInput;