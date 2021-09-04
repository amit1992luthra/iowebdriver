class HomePage_Locator{
    constructor() {
        this.LOGO_HEADER = "//div[@class='header content']//a[@class='logo']";
        this.PRODUCT_CATLOGlINK = "//span[text()='Product Catalog']";
        this.SIGNUP_LINK = "(//ul[@class='header links']//a[contains(text(),'Sign Up')])[1]";
        this.COUNTRYSTORE_IMG = "div#switcher-store-trigger";
        this.SIGN_LINK = "//li[@class='authorization-link']/a[contains(text(),'Sign In')]";
        this.COOKIE_BANNER = "//div[@id='truste-consent-track']";
        this.COOKIE_CONSENT_BUTTON = "//button[@id='truste-consent-button']";
        this.COOKIE_PREFERENCE_BUTTON = "//button[@id='truste-show-consent']";
        this.COOKIE_POLICY_LINK = "a.truste-cookie-link";

    }
}
module.exports = new HomePage_Locator();