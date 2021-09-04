class ProductCatlogPage_Locator {
    constructor() {
this.PRODUCT_CATALOG_BREADCRUMB = "//li[contains(@class,'item category')]/strong";
this.QUOTED_PRODUCTS_TAB_ACTIVE = "//a[@class='filter__item active']";
this.ALL_PRODUCTS_TAB = "//a[@class='filter__item ']";
this.FILTERS_HEADER = "//strong[@data-role='title']/i[@class='far fa-filter']";
this.RESET_FILTER = "//a[@class = 'reset-filters']";
this.SORT_BY_FILTER = "(//label[@class='sorter-label'][contains(text(),'Sort By')]/../..//select[@id='sorter'])[1]";
this.TOOLBAR_NUMBER = "(//span[@class='toolbar-number'])[last()]";
this.REQUEST_QUOTE_BUTTON = "(//button[@class='action request_quote button button--alt request-quote'])[%s]";
this.SUCCESSMESSAGE="//div[@class='container']";
this.CONTACT_US_BUTTON = "//span[@data-element='link_text']";
this.ADD_TO_CAART_BUTTON = "(//button[@title='Add to Cart'])[%s]";
this.VIEW_CART_BUTTON_ON_TOAST_MESSAGE = "//div[@class='container']/a";
this.PRODUCT_NAME = "(//a[@class='product-item-link product-name'])[%p]";
this.PRODUCT_PRICE = "(//li[@class='product-item-price']/span[@class='price'])[%s]";


    }
}
module.exports = new ProductCatlogPage_Locator();