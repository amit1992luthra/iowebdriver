"use strict";
let argv = require('optimist').argv
let commonActions = require("../../../Utilities/CommonActions.js");
let ProductCatalog_LOC = require("../../Locator/Locator_Common/ProductCatlogPage_Locator");
let waitTime = require("../../TestData/TestData_Common/Waits");
let cartPage = require("../PageAction_Common/CartPage.js")
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const {MEDIUMWAIT} = require("../../TestData/TestData_Common/Waits");
const logger = log4js.getLogger("univar");
class ProductCatalog {
    //Verify Product catalog breadcrumb
    VerifyProductCatalogPage_LoggedIn(){
        commonActions.waitForVisible(ProductCatalog_LOC.PRODUCT_CATALOG_BREADCRUMB,waitTime.MEDIUMWAIT,"Product Catalog Breadcrumb for Logged in user on Product Landing Page");
        let productCatalogText = commonActions.safeGetText(ProductCatalog_LOC.PRODUCT_CATALOG_BREADCRUMB,waitTime.MEDIUMWAIT,"Product Catalog fro logged in user");
        commonActions.safeAsserts('equal',productCatalogText,"Product Catalog Breadcrumb Text for logged in user","Product Catalog");
        let quotedProductsTab = commonActions.safeIsVisible(ProductCatalog_LOC.QUOTED_PRODUCTS_TAB_ACTIVE,"Quoted Products Tab");
        commonActions.safeAsserts('true',quotedProductsTab,"Quoted Products Tab is not visible");
        let allProductsTab = commonActions.safeIsVisible(ProductCatalog_LOC.ALL_PRODUCTS_TAB,"All Products Tab");
         commonActions.safeAsserts('true',allProductsTab,"All Products Tab");
        let currentUrl = commonActions.getUrl()
        commonActions.safeAsserts('contains',currentUrl,"Product Catalog URL","product-catalog");
    }
    VerifyProductCatalogPage_Guest(){
        commonActions.waitForVisible(ProductCatalog_LOC.PRODUCT_CATALOG_BREADCRUMB,waitTime.MEDIUMWAIT,"Product Catalog Breadcrumb for Guest on Product Landing Page");
        let productCatalogText = commonActions.safeGetText(ProductCatalog_LOC.PRODUCT_CATALOG_BREADCRUMB,waitTime.MEDIUMWAIT,"Product Catalog for guest user");
        commonActions.safeAsserts('equal',productCatalogText,"product Catalog Breadcrumb Text for guest","Product Catalog");
        let currentUrl = commonActions.getUrl()
        commonActions.safeAsserts('contains',currentUrl,"Product Catalog URL","product-catalog");
    }
ClickOnAllProductsTab(){
        commonActions.safeVisibleClick(ProductCatalog_LOC.ALL_PRODUCTS_TAB,waitTime.MEDIUMWAIT,"All Products tab");
}
ClickOnRFQButton(index){
        let requestForQuoteButton_Loc= commonActions.dynamicLocator(ProductCatalog_LOC.REQUEST_QUOTE_BUTTON,index)
    commonActions.waitForClickable(requestForQuoteButton_Loc,waitTime.MEDIUMWAIT,"Request For Quote Button")
    commonActions.safeVisibleClick(requestForQuoteButton_Loc,waitTime.MEDIUMWAIT,"Request For Quote Button")
}
VerifySuccessToastMessage(successToastMsg){
        commonActions.waitForVisible(ProductCatalog_LOC.SUCCESSMESSAGE,waitTime.VERYLONGWAIT,"Success Toast Message")
    let RFQSuccessToast = commonActions.safeGetText(ProductCatalog_LOC.SUCCESSMESSAGE,waitTime.VERYLONGWAIT,successToastMsg)
    commonActions.safeAsserts('contains',RFQSuccessToast,successToastMsg+ " is not matched" ,successToastMsg)
    return this;
    }
    clickOnAddToCartButton(index){
        let addToCartLoc = (ProductCatalog_LOC.ADD_TO_CAART_BUTTON).replace("%s",index);
        logger.info("dynamic locator is ",addToCartLoc);
        commonActions.scrollTo(addToCartLoc,"Add to Cart Button");
        commonActions.safeVisibleClick(addToCartLoc,waitTime.MEDIUMWAIT,"Add To Cart Button");
        return this.getProductName(index)
    }
    getProductName(index){
        let productName = (ProductCatalog_LOC.PRODUCT_NAME).replace("%p",index);
        logger.info("dynamic locator is ",productName);
        let elementName = commonActions.safeGetText(productName,waitTime.MEDIUMWAIT,"Product Name");
        return elementName
    }
    getProductPrice(index){
        let productPrice =(ProductCatalog_LOC.PRODUCT_PRICE).replace("%s",index);
        logger.info("product price is", productPrice);
        let ProductPrice_dynamic = commonActions.safeGetText(productPrice,waitTime.MEDIUMWAIT,"Product Price");
        let ProductPrice_dynamic2 = ( ProductPrice_dynamic.split("$"))[1];
        let ProductPrice_dynamic3 = (ProductPrice_dynamic2.split(" "));
        logger.info("----------------------",ProductPrice_dynamic)
        return [ProductPrice_dynamic,ProductPrice_dynamic3[0],ProductPrice_dynamic3[1]]
    }
    clickOnViewCartButtonInSuccessToast(){
        commonActions.safeVisibleClick(ProductCatalog_LOC.VIEW_CART_BUTTON_ON_TOAST_MESSAGE,waitTime.LONGWAIT,"View Cart Button on Success Toast");
        return cartPage
    }


}
module.exports = new ProductCatalog()