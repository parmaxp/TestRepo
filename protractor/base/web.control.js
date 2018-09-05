class WebControl {
    constructor(baseControlWebElement, title) {
        if (new.target === WebControl) {
            throw new TypeError("Cannot construct Abstract WebControl instances directly");
        }
        this._baseControlWebElement = baseControlWebElement;
        this.controlTitle = title;
        this._isInitialized;
    };

    getBaseControlWebElement() {
        if (this._baseControlWebElement) {
            return this._baseControlWebElement;
        } else {
            throw new Error(`Web Control \"${this.controlTitle}\" is \"Undefined\"`);
        }
    };

    async initializeWebControl() {
        if (!this._isInitialized) {
            console.log(`Initialising \"${this.controlTitle}\" ${this.constructor.name} control`);
            await browser.wait(ExpectedConditions.presenceOf(this.getBaseControlWebElement()), browser.params.implicitWait
            , `\"${this.controlTitle}\" is not located ${this.getBaseControlWebElement().locator()}`);
            this._isInitialized = true;
        } else {
            console.log(`\"${this.controlTitle}\" control object already initialised`)
        }
        return this;
    }

    async click() {
        await this.initializeWebControl();
        console.log(`Clicking on ${this.constructor.name} \"${this.controlTitle}\"`);
        await this.getBaseControlWebElement().click();
    };
}

module.exports = WebControl;