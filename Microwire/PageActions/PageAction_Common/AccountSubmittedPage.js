"use strict";
let argv = require('optimist').argv
let safeAction = require("../../../Utilities/CommonActions.js");
let accountSubmitted_loc = require("../../Locator/Locator_Common/AccountSubmittedPage_Locator.js");
let signUpPage = require(".//SignUpPage.js");
let waitTime = require("../../TestData/TestData_Common/Waits.js");
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const logger = log4js.getLogger("univar");
class AccountSubmittedPage{

    verifySuccessLineAlert(status){
        safeAction.domStatus();
        let successAlert = safeAction.waitForVisible(accountSubmitted_loc.SUCCESSlINEALERT,waitTime.MEDIUMWAIT,"Success Line Alert in Account Submitted page");
        safeAction.safeAsserts(status,successAlert,"Success line alert is not displayed in account submitted page");
    }

    verifyAccountRequestSubmittedText(status){
        safeAction.domStatus();
        let accountSubmittedTxt = safeAction.waitForVisible(accountSubmitted_loc.ACCOUNTSUBMITTEDTEXT,waitTime.MEDIUMWAIT,"Account submitted text in account submitted page")
        safeAction.safeAsserts(status,accountSubmittedTxt,"Account submitted text in account submitted page");
    }

    verifyNewAccountRequestSubmittedText(status){
        safeAction.domStatus();
        let accountSubmittedTxt = safeAction.waitForVisible(accountSubmitted_loc.NEWACCOUNTREQUESTSUBMITTEDTEXT,waitTime.MEDIUMWAIT,"New Account submitted text in account submitted page")
        safeAction.safeAsserts(status,accountSubmittedTxt,"Account submitted text in account submitted page");
    }
}
module.exports = new AccountSubmittedPage();