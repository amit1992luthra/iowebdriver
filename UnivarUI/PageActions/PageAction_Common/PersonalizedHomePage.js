"use strict";
let argv = require('optimist').argv
let commonActions = require("../../../Utilities/CommonActions.js");
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const logger = log4js.getLogger("univar");
let homePageLoc = require("../../Locator/Locator_Common/HomePage_Locator.js");
let personalizedHomePage_loc = require("../../Locator/Locator_Common/PersonalizedHomePage_Locator.js");
let waitTime = require("../../TestData/TestData_Common/Waits.js");
let accountSubmittedPage = require(".//AccountSubmittedPage.js");
let orderHistoryPage = require(".//OrderHistoryPage.js");
const common = require("mocha/lib/interfaces/common");
const safeAction = require("../../../Utilities/CommonActions.js");
const signInPage_loc = require("../../Locator/Locator_Common/SignInPage_Locator.js");
const WaitPage = require("../../TestData/TestData_Common/Waits");
const ProductCatalog_LOC = require("../../Locator/Locator_Common/ProductCatlogPage_Locator");
var expect = require("chai").expect;
class PersonalizedHomePage{

    //Verify Personalized page gets loaded
    verifyPersonalizedHomePage(){
        commonActions.domStatus();
        commonActions.waitForVisible(personalizedHomePage_loc.ORDERS_LINK,waitTime.VERYLONGWAIT,"Orders Link in personalized home page");
        commonActions.waitForVisible(personalizedHomePage_loc.MYACCOUNT_BTN,waitTime.MEDIUMWAIT,"My Account in personalized home page");
        let accountUserName_Loc = commonActions.dynamicLocator(personalizedHomePage_loc.ACCOUNT_USERNAME,"Hello");
        let accountUserName =commonActions.safeIsVisible(accountUserName_Loc,"Username in Personalized home page");
        commonActions.safeAsserts('true',accountUserName,`${accountUserName} is not displayed in personalized home page`);
        return this;
    }

    //Verify And Click on Order history link
    verifyAndClickOnOrderHistoryLink(){
    commonActions.waitForVisible(personalizedHomePage_loc.ORDERHISTROY_TRUCKIMG,waitTime.MEDIUMWAIT,"Truck image in order history link");
    let rightArrow =commonActions.safeIsVisible(personalizedHomePage_loc.ORDERHISTORY_RIGHTARROW,"Right arrow in order history tab");
    commonActions.safeAsserts('true',rightArrow,"Right arrow in personalized home screen is not displayed");
    commonActions.waitForClickable(personalizedHomePage_loc.ORDERS_LINK,waitTime.MEDIUMWAIT,"Order History Link");
    commonActions.safeVisibleClick(personalizedHomePage_loc.ORDERS_LINK,waitTime.MEDIUMWAIT,"Order History link in personalized home page");
    return orderHistoryPage;
    }
    //Verify Product Catalog Link is Clickable from personalized Homepage
    clickOnProductCatalogLink(){
        commonActions.waitForClickable(personalizedHomePage_loc.PRODUCT_CATLOGlINK,waitTime.MEDIUMWAIT,"Product Catalog Link On Personalized Homepage");
        commonActions.safeVisibleClick(personalizedHomePage_loc.PRODUCT_CATLOGlINK,waitTime.MEDIUMWAIT,"Product Catalog Link On Personalized Homepage ");
    }

    verifyMandatoryFieldsOnPersonalizedHomepage(){
       let productCategoryText = commonActions.safeIsVisible(personalizedHomePage_loc.PRODUCT_CATEGORIES,"Product Categories link");
       expect(productCategoryText,"Product Category Link is not visible").to.be.true;
       let productCatalogText = commonActions.safeIsVisible(personalizedHomePage_loc.PRODUCT_CATLOGlINK,"Product Catalog Link");
       expect(productCatalogText,"Product Catalog Link is not visible").to.be.true;
       let innovationsText = commonActions.safeIsVisible(personalizedHomePage_loc.INNOVATION_LINK,"Innovation Link");
       expect(innovationsText,"Innovation link is not visible").to.be.true;
       let servicesText = commonActions.safeIsVisible(personalizedHomePage_loc.SERVICES_LINK,"Services Link");
       expect(servicesText,"Services Link is not visible").to.be.true;
       let suppliersLink = commonActions.safeIsVisible(personalizedHomePage_loc.SUPPLIERS_LINK,"Suppliers Link");
       expect(suppliersLink,"Suppliers Link is not visible").to.be.true;
        let contactUsCTA = commonActions.safeIsVisible(personalizedHomePage_loc.CONTACT_US_CTA,"Contact Us CTA");
        expect(contactUsCTA,"Contact Us CTA is not visible").to.be.true;
        let orderHistoryCTA = commonActions.safeIsVisible(personalizedHomePage_loc.ORDERHISTORY_LINK,"Contact Us CTA");
        expect(orderHistoryCTA,"Order History CTA is not visible").to.be.true;
        let quotedProductsCTA = commonActions.safeIsVisible(personalizedHomePage_loc.QUOTED_PRODUCTS_LINK,"Quoted Products CTA");
        expect(quotedProductsCTA,"Quoted Products CTA is not visible").to.be.true;
        let discoverProductsCTA = commonActions.safeIsVisible(personalizedHomePage_loc.DISCOVER_PRODUCTS_LINK,"Discover Products CTA");
        expect(discoverProductsCTA,"Discover products CTA is not visible").to.be.true;
        let accountInformationText  = commonActions.safeIsVisible(personalizedHomePage_loc.ACCOUNT_INFORMATION_TEXT,"Account Information");
        expect(accountInformationText,"Account Information is not visible").to.be.true;
        let contactInformationEmail = commonActions.safeIsVisible(personalizedHomePage_loc.CONTACT_INFORAMTION_EMAIL,"Contact Information");
        expect(contactInformationEmail,"Contact Information is not visible").to.be.true;
        let contactARepresentative = commonActions.safeIsVisible(personalizedHomePage_loc.CONTACT_A_REPRESENTATIVE_TEXT,"Contact a Representative");
        expect(contactARepresentative,"Contact a Representative is not visible").to.be.true;
        let recentOrders = commonActions.safeIsVisible(personalizedHomePage_loc.RECENT_ORDERS_TEXT,"Recent Orders");
        expect(recentOrders,"Recent Order is not visible").to.be.true;
        let recentlyViewedProducts = commonActions.safeIsVisible(personalizedHomePage_loc.RECENTLY_VIEWED_PRODUCTS,"Recently Viewed Products");
        expect(recentlyViewedProducts,"Recently Viewed Products is not visible").to.be.true;
        let footerOrderHistoryCTA = commonActions.safeIsVisible(personalizedHomePage_loc.FOOTER_ORDER_HISTORY_LINK,"Order History link on the footer");
        expect(footerOrderHistoryCTA,"Order History link on the footer is not visible").to.be.true;
        let footerQuotedProducts = commonActions.safeIsVisible(personalizedHomePage_loc.FOOTER_QUOTED_PRODUCTS_LINK,"Footer Quoted Products link");
        expect(footerQuotedProducts,"Footer Quoted Products link is not visible").to.be.true;
    }

    clickOnContactUsButton(){
        commonActions.scrollTo(personalizedHomePage_loc.CONTACT_US_FORM,"Contact Us Form")
        commonActions.safeVisibleClick(personalizedHomePage_loc.CONTACT_US_FORM,waitTime.LONGWAIT,"Contact us Form");
    }
    verifySuccessToastMessage(successToastMsg) {
        safeAction.waitForVisible(personalizedHomePage_loc.SUCCESSMESSAGE, WaitPage.VERYLONGWAIT, "Success Toast Message")
        let ContactUsFormSuccessToast = safeAction.safeGetText(personalizedHomePage_loc.SUCCESSMESSAGE, WaitPage.VERYLONGWAIT,successToastMsg)
        safeAction.safeAsserts('contains', ContactUsFormSuccessToast, successToastMsg+" is not displayed",successToastMsg)
    }
    clickOnQuotedProductsCTA(){
        commonActions.safeVisibleClick(personalizedHomePage_loc.QUOTED_PRODUCTS_LINK,waitTime.MEDIUMWAIT,"Quoted Products CTA");


    }
}
module.exports = new PersonalizedHomePage();