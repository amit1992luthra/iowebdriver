"use strict";
let argv = require('optimist').argv
let commonAction = require("../../../Utilities/CommonActions.js");
let waitTime = require("../../TestData/TestData_Common/Waits.js");
let testCaseData = require("../../TestData/TestLevelData/TestCaseData.js");
let mailinatorPage_loc= require("../../Locator/Locator_Common/MailinatorPage_Locator.js");
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const safeAction = require("../../../Utilities/CommonActions");
const common = require("mocha/lib/interfaces/common");
const logger = log4js.getLogger("univar");
class MailinatorPage{

    //Verify Mailinator page
    navigateToMailinatorInboxPageAndVerify(){
        commonAction.navigate(testCaseData.common.mailinatorInboxURL);
       let publicText = commonAction.safeIsVisible(mailinatorPage_loc.PUBLIC_MESSAGE_TEXT,"Public Messages Text on Mailinator Inbox page");
       commonAction.safeAsserts('true',publicText,"Public Messages Text is not displayed on Mailinator Inbox page");
    }

    //Enter Email In Search Box
    enterEmailInSearchBoxAndClickGo(email){
        commonAction.waitForClickable(mailinatorPage_loc.SEARCH_BOX,waitTime.MEDIUMWAIT,"Search box in Mailinator inbox page");
        commonAction.setValue(mailinatorPage_loc.SEARCH_BOX,email,"Univar Mailinator Email");
        commonAction.safeVisibleClick(mailinatorPage_loc.GO_BUTTON,waitTime.MEDIUMWAIT,"Go Button");
    }

    //Verify To Email
    verifyToEmailInMailinatorInbox(email){
        let email1 = (email.split("@"))[0]
        commonAction.domStatus()
        browser.pause(1000)
        let ToEmail=  commonAction.safeGetText(mailinatorPage_loc.TO_EMAIL,waitTime.MEDIUMWAIT,"To Email in Mailinator Inbox")
        commonAction.safeAsserts('equal',ToEmail,"To Email is not matched in Mailinator Inbox",email1.toLowerCase())
    }

    //Click on the first reset password email
    clickOnFirstResetPasswordEmailLink(){
        commonAction.safeVisibleClick(mailinatorPage_loc.FIRST_RESET_EMAIL,waitTime.MEDIUMWAIT,"First reset password email")
    }
    //Click on the rest password button
    clickOnResetPasswordButton(){
        let resetPasswordURL = commonAction.getAttribute(mailinatorPage_loc.RESET_PASSWORD_BUTTTON,"href","Reset Password Button Link")
        commonAction.safeVisibleClick(mailinatorPage_loc.RESET_PASSWORD_BUTTTON,waitTime.MEDIUMWAIT,"Reset Password Button")
        return resetPasswordURL;
    }
    clickOnResetPasswordAndNavigate(){
        this.switchToEmailMessageBodyFrame()
        let resetPasswordURL = this.clickOnResetPasswordButton()
        safeAction.switchWindow("Set a New Password","Set a new password tab")
        safeAction.domStatus();
    }
    switchToEmailMessageBodyFrame(){
        commonAction.safeFrameSwitch("html_msg_body","html_msg_body frame in mailinator page")
    }
}
module.exports = new MailinatorPage();