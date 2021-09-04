"use strict";
let argv = require('optimist').argv
let commonActions = require("../../../Utilities/CommonActions.js");
let waitTime = require("../../TestData/TestData_Common/Waits");
let shippingPage_Loc= require("../../Locator/Locator_Common/ShippingPage_Locator.js");
let expect = require("chai").expect;
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const logger = log4js.getLogger("univar");
class ShippingPage{
    VerifyShippingPage(){
        commonActions.waitForVisible(shippingPage_Loc.CHECKOUT_BREADCRUMB,waitTime.MEDIUMWAIT,"Checkout Breadcrumb on Shipping Page");
        let breadCrumb = commonActions.safeGetText(shippingPage_Loc.CHECKOUT_BREADCRUMB,waitTime.MEDIUMWAIT,"Checkout BreadCrumb on Shipping Page");
        expect(breadCrumb,"Breadcrumb on checkout page is not equal to").to.be.equal("Checkout");
       let shippingAddressHeader = commonActions.safeIsVisible(shippingPage_Loc.SHIPPING_PAGE_TITLE,waitTime.MEDIUMWAIT,"Shipping Page Header");
         expect (shippingAddressHeader,"Shipping Page Header is not visible").to.be.true;
         commonActions.waitForVisible(shippingPage_Loc.ORDER_SUMMARY_TITLE,waitTime.MEDIUMWAIT,"Order Summary header");
         let orderSummaryHeader = commonActions.safeIsVisible(shippingPage_Loc.ORDER_SUMMARY_TITLE,waitTime.MEDIUMWAIT,"Order Summary Header");
        expect (orderSummaryHeader,"Order Summary Header is not visible").to.be.true;
         commonActions.waitForVisible(shippingPage_Loc.SHIPPING_METHOD_TITLE,waitTime.MEDIUMWAIT,"Shipping Method Header on Shipping Page");
        let shippingMethodHeader = commonActions.safeIsVisible(shippingPage_Loc.SHIPPING_METHOD_TITLE,"Shipping Method Header on Shipping Page");
        expect(shippingMethodHeader, "Shipping Method Header on Shipping Page is not visible").to.be.true;
        commonActions.waitForVisible(shippingPage_Loc.SHIPPING_METHOD_DEFAULT,waitTime.MEDIUMWAIT,"Standard Shipping selected by default");
        let standardShippingDefault = commonActions.safeIsVisible(shippingPage_Loc.SHIPPING_METHOD_DEFAULT,"Standard Shipping selected by default");
        expect(standardShippingDefault,"Standard Shipping is not selected by default").to.be.true;
    }
}
module.exports = new ShippingPage();