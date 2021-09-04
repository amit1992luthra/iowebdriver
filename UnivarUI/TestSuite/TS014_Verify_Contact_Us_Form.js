"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/TestData_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js");
let testData = require("../TestData/TestLevelData/TestCaseData.js");
let commonSuccessMsg = require("../TestData/TestLevelData/CommonMessage.js");
let productCatalogPage = require("../PageActions/PageAction_Common/ProductCatlog.js");
let contactUSForm = require("../PageActions/PageAction_Common/ContactUSForm.js");
let homePage = require("../PageActions/PageAction_Common/HomePage.js");
let signInPage = require("../PageActions/PageAction_Common/SignInPage");
//let personalizedHomepage = require("../PageActions/PageAction_Common/PersonalizedHomePage.js");
describe('TS014_Verify_Contact_Us_Form',function(){
    it ('TS014_Verify_Contact_Us_Form', () => {
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password);
        homePage.verifyHomePage(testData.common.trueStatus);
        homePage.clickOnSignInLink();
        let personalizedHomepage = signInPage.loginWithValidCredentials(testData.common.email,testData.common.password);
        personalizedHomepage.verifyPersonalizedHomePage();
        personalizedHomepage.clickOnContactUsButton();
        contactUSForm.verifyContactUSForm();
        contactUSForm.enterDetailsInContactUsForm(testData.common.firstName_Dynamic,testData.common.lastName_Dynamic,
            testData.common.mailinatorMail_Dynamic,testData.common.phoneNumber_Dynamic,testData.common.companyName_Dynamic,
            testData.common.jobTitle_Dynamic,testData.common.countryCodeForCanada,testData.common.marketName);
        personalizedHomepage.verifySuccessToastMessage(commonSuccessMsg.commonSuccessMessage.ContactUsFormSubmitSuccessMsg);
    })
})