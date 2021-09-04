"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/TestData_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js");
let personalizedHomepage = require("../PageActions/PageAction_Common/PersonalizedHomePage.js");
let testData = require("../TestData/TestLevelData/TestCaseData.js");
let homePage = require("../PageActions/PageAction_Common/HomePage.js");
let signInPage = require("../PageActions/PageAction_Common/SignInPage")
describe('TS012_Verify_Reset_Password',function(){
    it ('TS012_Verify_Reset_Password', () => {
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password);
        homePage.verifyHomePage(testData.common.trueStatus);
            homePage.clickOnSignInLink();
        signInPage.loginWithValidCredentials(testData.common.email,testData.common.password);
        personalizedHomepage.verifyPersonalizedHomePage()
        personalizedHomepage.verifyMandatoryFieldsOnPersonalizedHomepage()

    })
})