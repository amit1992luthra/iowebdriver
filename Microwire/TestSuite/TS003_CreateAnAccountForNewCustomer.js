"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/Locator_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js")
let homePage = require("../PageActions/PageAction_Common/HomePage.js");
let testData = require("../TestData/TestLevelData/TestCaseData.js")
describe("TS003_CreateAnAccountForNewCustomer", function () {
    it('TS003_CreateAnAccountForNewCustomer', () => {
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password)
        homePage.verifyHomePage(testData.common.trueStatus);
        let signUpPage = homePage.clickOnSignUpLink();
        signUpPage.verifySignupPage()
        signUpPage.clickOnCmpnyNeverPurchased();
        signUpPage.enterUserDetails(testData.common.firstName_Dynamic, testData.common.lastName_Dynamic,testData.common.phoneNumber_Dynamic,testData.common.companyName_Dynamic,testData.common.mailinatorMail_Dynamic);
        signUpPage.enterShippingAddressDetails(testData.common.companyAddress,testData.common.companyBuildingNumber,testData.common.cityName_Dynamic,testData.common.zipCode,argv.countryName);
        let accountSubmittedPage = signUpPage.clickOnContinueButton();
        accountSubmittedPage.verifySuccessLineAlert(testData.common.trueStatus);
        accountSubmittedPage.verifyNewAccountRequestSubmittedText();
    });
});

