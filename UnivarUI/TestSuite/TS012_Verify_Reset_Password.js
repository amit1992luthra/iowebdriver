"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/TestData_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js")
let homePage = require("../PageActions/PageAction_Common/HomePage")
let signInPage = require("../PageActions/PageAction_Common/SignInPage")
let testData = require("../TestData/TestLevelData/TestCaseData")
let forgotPasswordPage = require("../PageActions/PageAction_Common/ForgotPasswordPage")
let personalizedHomepage = require("../PageActions/PageAction_Common/PersonalizedHomePage")
let productCatalogPage = require("../PageActions/PageAction_Common/ProductCatlog")
let commonSuccessMsg = require("../TestData/TestLevelData/CommonMessage")
let mailinatorPage = require("../PageActions/PageAction_Common/MailinatorPage.js")
let resetPasswordPage = require("../PageActions/PageAction_Common/ResetPasswordPage.js")
describe('TS012_Verify_Reset_Password',function(){
    it ('TS012_Verify_Reset_Password', () => {
        let commonData = testData.common
homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password)
        homePage.clickOnSignInLink()
        signInPage.clickOnForgotPasswordLinkCTA()
        forgotPasswordPage.enterEmailAddress(testData.common.mailinatorEmailId)
        forgotPasswordPage.clickOnSubmitButton()
        homePage.verifyHomePage(testData.common.trueStatus);
        homePage.VerifySuccessToastMessage("If there is an account associated with "+ testData.common.mailinatorEmailId +" you will receive an email with a link to reset your password")
        mailinatorPage.navigateToMailinatorInboxPageAndVerify()
        mailinatorPage.enterEmailInSearchBoxAndClickGo(testData.common.mailinatorEmailId)
        mailinatorPage.clickOnFirstResetPasswordEmailLink()
        mailinatorPage.verifyToEmailInMailinatorInbox(testData.common.mailinatorEmailId)
        mailinatorPage.clickOnResetPasswordAndNavigate()
        resetPasswordPage.verifyResetPasswordPage()
        resetPasswordPage.enterNewPassword(testData.common.password_Dynamic)
        resetPasswordPage.enterConfirmPassword(testData.common.password_Dynamic)
        resetPasswordPage.clickSetPasswordButton()
        signInPage.verifySignInPage(commonSuccessMsg.commonSuccessMessage.ResetPasswordSuccessMsg)
        signInPage.enterEmail(testData.common.mailinatorEmailId)
        signInPage.enterPassword(testData.common.password_Dynamic)
        signInPage.clickOnSignInButton()
        personalizedHomepage.verifyPersonalizedHomePage()
    })
})