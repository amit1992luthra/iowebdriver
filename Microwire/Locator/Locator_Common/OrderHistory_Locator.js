class OrderHistory_Locator{
    constructor() {
        this.ORDERHISTORY_TITLE = "//div[@class='title']/h2[contains(text(),'Order History')]";
        this.ITEMS_HOME = "(//ul[@class='items']/li/strong)[last()]";
        this.ORDERHISTORY_FILTERS = "//div[@class='orders-history__filters']//a";
        this.ORDERHEADER_RANDOM = "(//div[@class='order-item__header']/h3)[%s]"
        this.ORDER_SEARCHBOX = "//input[@id='search-order']";
        this.SEARCHTERM_TEXT ="//div[@class='search-term']";
        this.ORDERHEADER_LIST = "(//div[@class='order-item__header']/h3)";
        this.TOOLBAR_NUMBER = "//p[@class='toolbar-amount']/span";
        this.ORDERTOTAL = "//h3[contains(text(),'%s')]/..//p[contains(text(),'Order Total')]";
        this.ORDER_PO = "//h3[contains(text(),'%s')]/..//p[contains(text(),'PO')]";
        this.ORDER_ORDERED = "//h3[contains(text(),'%s')]/..//p[contains(text(),'Ordered')]";
        this.ORDER_SHIPPINGADDRESS= "//h3[contains(text(),'%s')]/..//i[@class='fal fa-calendar-alt']/.."
        this.ORDER_CALENDERLOGO = "//h3[contains(text(),'11967944')]/..//i[@class='fal fa-calendar-alt']";
        this.ORDER_TRUCKLOGO = "//h3[contains(text(),'11967944')]/..//i[@class='fal fa-truck']";
    }
}
module.exports = new OrderHistory_Locator();