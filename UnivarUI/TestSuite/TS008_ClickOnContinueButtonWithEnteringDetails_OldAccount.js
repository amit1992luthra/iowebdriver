"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/Locator_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js")
let homePage = require("../PageActions/PageAction_Common/HomePage.js");
let testData = require("../TestData/TestLevelData/TestCaseData.js");
let commonMessageData = require("../TestData/TestLevelData/CommonMessage.js");
describe("TS008_ClickOnContinueButtonWithEnteringDetails_OldAccount", function () {
    it('TS008_ClickOnContinueButtonWithEnteringDetails_OldAccount', () => {
        let commonErrorMessage = commonMessageData.commonErrorMessage;
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password)
        homePage.verifyHomePage(testData.common.trueStatus);
        let signUpPage = homePage.clickOnSignUpLink();
        signUpPage.verifySignupPage()
        signUpPage.clickOnCmpnyPurchasedBefore();
        signUpPage.clickOnContinueButton();
        signUpPage.verifyFirstNameErrorMsg(commonErrorMessage.thisFieldRequired);
        signUpPage.verifyLastNameErrorMsg(commonErrorMessage.thisFieldRequired);
        signUpPage.verifyEmailErrorMsg(commonErrorMessage.thisFieldRequired);
        signUpPage.verifyCompanyErrorMsg(commonErrorMessage.thisFieldRequired);
        signUpPage.verifyPhoneErrorMsg(commonErrorMessage.thisFieldRequired);
        signUpPage.verifyAccountErrorMsg(commonErrorMessage.thisFieldRequired);

    });
});

