"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/Locator_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js")
let homePage = require("../PageActions/PageAction_Common/HomePage.js");
let testData = require("../TestData/TestLevelData/TestCaseData.js")
let commonMessageData = require("../TestData/TestLevelData/CommonMessage.js");
let commonErrorMessage = commonMessageData.commonErrorMessage;
describe("TS006_ClickOnContinueButtonWithInvalidEmail_NewAccount", function () {
    it('TS006_ClickOnContinueButtonWithInvalidEmail_NewAccount', () => {
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password)
        homePage.verifyHomePage(testData.common.trueStatus);
        let signUpPage = homePage.clickOnSignUpLink();
        signUpPage.verifySignupPage()
        signUpPage.clickOnCmpnyNeverPurchased();
        signUpPage.enterEmail('test.com');
        signUpPage.clickOnContinueButton();
        signUpPage.verifyEmailErrorMsg(commonErrorMessage.enterValidEmail)

    });
});

