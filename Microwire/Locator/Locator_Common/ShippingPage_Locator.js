class shippingPage_Locator{
    constructor() {
        this.SHIPPING_PAGE_TITLE = "//div[contains(text(),'Shipping Address')]";
        this.ORDER_SUMMARY_TITLE = "//span[contains(text(),'Order Summary')]";
        this.SHIPPING_METHOD_TITLE = "//div[contains(text(),'Shipping Methods')]";
        this.SHIPPING_METHOD_DEFAULT = "//label[@for='standard_shipping']/input[@checked='true']/../span[@class='checkmark']";
        this.CHECKOUT_BREADCRUMB = "(//ul[@class='items']/li)[last()]";
    }
}
module.exports = new shippingPage_Locator();