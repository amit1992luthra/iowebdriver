class PersonalizedHomePage_Locator{
    constructor() {
        this.LOGO_HEADER = "//div[@class='header content']//a[@class='logo']";
        this.PRODUCT_CATLOGlINK = "//span[text()='Product Catalog']";
        this.PRODUCT_CATEGORIES = "//a/span[contains(text(),'Product Categories')]";
        this.INNOVATION_LINK = "//a/span[contains(text(),'Innovation')]";
        this.SERVICES_LINK = "//a/span[contains(text(),'Services')]";
        this.SUPPLIERS_LINK = "//a[@role='menuitem'][contains(text(),'Suppliers')]";
        this.CONTACT_US_CTA = "//div[@class='header-phone']/a[contains(text(),'Contact Us')]";
        this.SIGNUP_LINK = "(//ul[@class='header links']//a[contains(text(),'Sign Up')])[1]";
        this.COUNTRYSTORE_IMG = "div#switcher-store-trigger";
        this.SIGN_LINK = "//li[@class='authorization-link']/a[contains(text(),'Sign In')]";
        this.ORDERS_LINK = "//li[@class='order-link']/a";
        this.MYACCOUNT_BTN = "(//p[@class='logged-in'])[1]";
        this.SHOWCART_LINK = "//a[@class='action showcart']";
        this.ACCOUNT_USERNAME ="//div[@class='account_user_name']/h1[contains(text(),'%s')]";
        this.ACCOUNT_INFO = "//p[@class='contact-info'][contains(text(),'%s')]";
        this.ORDERHISTORY_LINK = "//p[contains(text(),'order history')]/../a";
        this.ORDERHISTROY_TRUCKIMG = "//p[contains(text(),'order history')]/../../img[@alt='Truck image']";
        this.ORDERHISTORY_RIGHTARROW="//p[contains(text(),'order history')]/..//i";
        this.QUOTED_PRODUCTS_LINK="//div[@class='content']/a[contains(text(),'Quoted Products')]";
        this.DISCOVER_PRODUCTS_LINK="//div[@class='content']/a[contains(text(),'Discover Products')]";
        this.ACCOUNT_INFORMATION_TEXT = "//h2[text()='Account Information']";
        this.CONTACT_INFORAMTION_EMAIL = "//p[@class='contact-info'][1]";
        this.CONTACT_A_REPRESENTATIVE_TEXT = "//h2[text()='Contact a Representative']";
        this.RECENT_ORDERS_TEXT= "//h2[text()='Recent Orders']";
        this.RECENTLY_VIEWED_PRODUCTS= "//h2[text()='Recently Viewed']";
        this.FOOTER_ORDER_HISTORY_LINK="//a[@class='links__history'][contains(text(),'Order History')]";
        this.FOOTER_QUOTED_PRODUCTS_LINK= "//a[@class='links__quotes'][contains(text(),'Quoted Products')]";
        this.CONTACT_US_FORM= "//a[@class='pagebuilder-button-primary']/span[contains(text(),'Contact Us')]";
        this.SUCCESSMESSAGE="//div[@class='container']";
    }
}
module.exports = new PersonalizedHomePage_Locator();