"use strict";
let argv = require('optimist').argv
let safeAction = require("../../../Utilities/CommonActions.js");
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const logger = log4js.getLogger("univar");
let homePageLoc = require("../../Locator/Locator_Common/HomePage_Locator.js");
let signInPage_loc = require("../../Locator/Locator_Common/SignInPage_Locator.js");
let waitTime = require("../../TestData/TestData_Common/Waits.js");
let accountSubmittedPage = require(".//AccountSubmittedPage.js");
let personalizedHomePage = require("../PageAction_Common/PersonalizedHomePage.js");
const ProductCatalog_LOC = require("../../Locator/Locator_Common/ProductCatlogPage_Locator");
const WaitPage = require("../../TestData/TestData_Common/Waits");
class SignInPage{

    //Verify Sign In page
    verifySignInPage(){
       let currentUrl = safeAction.getUrl();
       logger.info("verify Sign In page url should contain login text")
       safeAction.safeAsserts('contains',currentUrl,`${currentUrl} doesn't contains Login`,'login');
       let signAccountText = safeAction.waitForVisible(signInPage_loc.SIGNINACCOUNT_TEXT,waitTime.LONGWAIT,"Sign In to Your Account text in Sign In page")
        safeAction.safeAsserts('true',signAccountText,"Create account text is not visible in sign up page");
       let univarSolutionImg = safeAction.safeIsVisible(signInPage_loc.UNIVARSOLUIONS_IMG,"Univar Solutions image in Sign in page");
        safeAction.safeAsserts('true',univarSolutionImg,"Univar Solutions image in Sign in page");
    }
    //Enter email text
    enterEmail(email){
        safeAction.waitForClickable(signInPage_loc.EMAILFIELD,waitTime.MEDIUMWAIT,"Enter email in sign in page");
        safeAction.setValue(signInPage_loc.EMAILFIELD,email,"Enter email in sign in page");
    }
    //Enter password text
    enterPassword(password){
        safeAction.waitForClickable(signInPage_loc.PASSWORDFIELD,waitTime.MEDIUMWAIT,"Enter Password in sign in page");
        safeAction.setValue(signInPage_loc.PASSWORDFIELD,password,"Enter Password in sign in page");
    }
    //Click on Sign In button
    clickOnSignInButton(){
        safeAction.waitForClickable(signInPage_loc.SIGNIN_BUTTON,waitTime.MEDIUMWAIT,"Sign In button in sign in page");
        safeAction.safeVisibleClick(signInPage_loc.SIGNIN_BUTTON,waitTime.MEDIUMWAIT,"Sign In button in sign in page");
        return personalizedHomePage;
    }
    //Create An Account button
    clickOnCreateAnAccountBtn(){
        safeAction.waitForClickable(signInPage_loc.CREATEACCOUNT_BTN,waitTime.MEDIUMWAIT,"Create An Account button in sign in page");
        safeAction.safeVisibleClick(signInPage_loc.CREATEACCOUNT_BTN,waitTime.MEDIUMWAIT,"Create An Account button in sign in page");
    }

    loginWithValidCredentials(email, password){
        this.verifySignInPage();
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickOnSignInButton();
        return personalizedHomePage;
    }

 clickOnForgotPasswordLinkCTA(){
        //safeAction.waitForClickable(signInPage_loc.FORGOTPASSWORD_LINK,waitTime.MEDIUMWAIT,"Forgot Password Link on sign in page");
        safeAction.safeVisibleClick(signInPage_loc.FORGOTPASSWORD_LINK,waitTime.MEDIUMWAIT,"Forgot Password Link on sign in page");
 }
    VerifySuccessToastMessage(successToastMsg) {
        safeAction.waitForVisible(signInPage_loc.SUCCESSMESSAGE, WaitPage.VERYLONGWAIT, "Success Toast Message")
        let RFQSuccessToast = safeAction.safeGetText(ProductCatalog_LOC.SUCCESSMESSAGE, WaitPage.VERYLONGWAIT,successToastMsg)
        safeAction.safeAsserts('contains', RFQSuccessToast, successToastMsg+" is not displayed",successToastMsg)
    }
}
module.exports = new SignInPage();