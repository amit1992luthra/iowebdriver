"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/Locator_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js")
let homePage = require("../PageActions/PageAction_Common/HomePage.js");
let testData = require("../TestData/TestLevelData/TestCaseData.js")
describe("TS005_ClickOnCancelButtonWithoutEnteringDetails", function () {
    it('TS005_ClickOnCancelButtonWithoutEnteringDetails', () => {
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password)
        homePage.verifyHomePage(testData.common.trueStatus);
        let signUpPage = homePage.clickOnSignUpLink();
        signUpPage.verifySignupPage()
        signUpPage.clickOnCmpnyNeverPurchased();
        signUpPage.clickOnCancelButton();
        signUpPage.verifySignupPage();
        signUpPage.verifyIfCancelButtonIsDisplayed(testData.common.falseStatus);
        signUpPage.verifyIfContinueButtonIsDisplayed(testData.common.falseStatus)
    });
});

