"use strict";
let argv = require('optimist').argv
let safeAction = require("../../../Utilities/CommonActions.js");
let homePageLoc = require("../../Locator/Locator_Common/HomePage_Locator.js");
let signUpPage = require(".//SignUpPage.js");
let waitTime = require("../../TestData/TestData_Common/Waits.js");
let signInPage= require(".//SignInPage.js")
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const ProductCatalog_LOC = require("../../Locator/Locator_Common/ProductCatlogPage_Locator");
const WaitPage = require("../../TestData/TestData_Common/Waits");
const logger = log4js.getLogger("univar");
class HomePage {

    //Navigate to app page
    navigateToAppHomePage(url, userName, password) {
        logger.info("Launching url ", url, "in " + argv.environmentName + " environment")
        if (argv.environmentName == 'QA' || argv.environmentName == 'Dev') {
            logger.info("Launching url with username " + userName + " and password " + password);
            let url_split = url.split('://')
            let url1 = `${url_split[0]}://${userName}:${password}@${url_split[1]}`
            safeAction.navigate(url1)
        } else {
            safeAction.navigate(url);
        }
    }

    //Verify Home page
    verifyHomePage(status) {
        let logo = safeAction.waitForVisible(homePageLoc.LOGO_HEADER, waitTime.LONGWAIT, "Univar logo in home page");
        safeAction.safeAsserts(status, logo, "Logo is not displayed in Home page");
        let storeImg = safeAction.waitForVisible(homePageLoc.COUNTRYSTORE_IMG, waitTime.MEDIUMWAIT, "Country store logo in home page");
        safeAction.safeAsserts(status, storeImg, "Country store logo is not displayed in Home page");
    }

    //Click on Sign up link in homepage
    clickOnSignUpLink() {
        safeAction.waitForClickable(homePageLoc.SIGNUP_LINK, waitTime.MEDIUMWAIT, "Sign up link in home page");
        safeAction.safeVisibleClick(homePageLoc.SIGNUP_LINK, waitTime.MEDIUMWAIT, "Sign up link in home page");
        return signUpPage;
    }

    //Click on Sign In link in homepage
    clickOnSignInLink() {
        safeAction.waitForClickable(homePageLoc.SIGN_LINK, waitTime.MEDIUMWAIT, "Sign In link in home page");
        safeAction.safeVisibleClick(homePageLoc.SIGN_LINK, waitTime.MEDIUMWAIT, "Sign In link in home page");
        return signInPage;
    }

    //Verify the cookie banner exists
    verifyCookies() {
        let cookieBanner = safeAction.safeIsVisible(homePageLoc.COOKIE_BANNER, 'Cookie Banner on home Page');
        safeAction.safeAsserts('true', cookieBanner, "Cookie banner is not displayed");
        safeAction.safeIsVisible(homePageLoc.COOKIE_CONSENT_BUTTON, "Consent To Cookies Button on home page");
        safeAction.waitForClickable(homePageLoc.COOKIE_CONSENT_BUTTON, waitTime.MEDIUMWAIT, "Consent to Cookies Button On home Page");
        safeAction.waitForClickable(homePageLoc.COOKIE_PREFERENCE_BUTTON, waitTime.MEDIUMWAIT, "Cookie Preference Button on home page");
        safeAction.waitForVisible(homePageLoc.COOKIE_POLICY_LINK, waitTime.SMALLWAIT, "Read our cookie policy link on home page");
    }

    VerifySuccessToastMessage(successToastMsg) {
        safeAction.waitForVisible(ProductCatalog_LOC.SUCCESSMESSAGE, WaitPage.VERYLONGWAIT, "Success Toast Message")
        let RFQSuccessToast = safeAction.safeGetText(ProductCatalog_LOC.SUCCESSMESSAGE, WaitPage.VERYLONGWAIT, "Request quote success message")
        safeAction.safeAsserts('contains', RFQSuccessToast, "Request quote success message", successToastMsg)
    }
}
module.exports = new HomePage();
