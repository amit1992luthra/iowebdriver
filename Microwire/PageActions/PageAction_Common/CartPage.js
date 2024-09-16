"use strict";
let argv = require('optimist').argv
let commonActions = require("../../../Utilities/CommonActions.js");
let cartPage_Loc =  require("../../Locator/Locator_Common/CartPage_Locator.js");
let waiTime = require("../../TestData/TestData_Common/Waits.js");
let shippingPage_Loc = require("../../Locator/Locator_Common/ShippingPage_Locator.js");
let shippingPageAction = require("../PageAction_Common/ShippingPage.js");
require("../../../Utilities/log4js.js");
var expect = require("chai").expect;
class CartPage{
    verifyCartPage(){
        commonActions.waitForVisible(cartPage_Loc.CART_BREADCRUMB,waiTime.MEDIUMWAIT,"Cart BreadCrumb");
        let breadCrumb = commonActions.safeGetText(cartPage_Loc.CART_BREADCRUMB,waiTime.MEDIUMWAIT,"Cart BreadCrumb");
        expect(breadCrumb,"Breadcrumb Name is not equal to").to.be.equal("Cart")
        commonActions.waitForVisible(cartPage_Loc.CART_PAGE_TITLE_TEXT,waiTime.MEDIUMWAIT,"Shopping Cart Title");
       let cartSummary=  commonActions.safeIsVisible(cartPage_Loc.CART_SUMMARY_TEXT,"Cart Summary");
        expect(cartSummary,"Cart Summary").to.be.true;
    }
    verifyProductNameAndPrice(productName, productPrice){
        let prodcutName_actual = commonActions.safeGetText(cartPage_Loc.PRODUCT_NAME,waiTime.MEDIUMWAIT,"Product Name");
        expect(prodcutName_actual,"Product Name").to.be.equal(productName);
        let product_price = commonActions.safeGetText(cartPage_Loc.PRODUCT_PRICE,waiTime.MEDIUMWAIT,"Product Price");
        expect(product_price, "Product Price").to.be.equal(productPrice);
    }
    getTotalPrice(productPrice, productQuantity){
        let itemPrice = parseFloat(productPrice);
        let itemQty = parseInt(productQuantity);
        return (itemPrice*itemQty).toFixed(2);
    }
    verifyCartTotal(totalPrice,currencyCode){
        let totalPrice1 = "$"+totalPrice+" "+currencyCode;
        let cartSubTotal= commonActions.safeGetText(cartPage_Loc.CART_SUBTOTAL,waiTime.MEDIUMWAIT,"Cart SubTotal");
        expect(cartSubTotal,"Cart Subtotal is not equal"+ cartSubTotal).to.be.equal(totalPrice1);
    }
    clickOnProceedToCheckoutButton(){
        commonActions.safeVisibleClick(cartPage_Loc.PROCEED_TO_CHECKOUT_BUTTON,waiTime.MEDIUMWAIT,"Proceed To Checkout");
        return shippingPageAction

    }
}
module.exports=new CartPage();