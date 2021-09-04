"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/Locator_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js")
let homePage = require("../PageActions/PageAction_Common/HomePage")
let signInPage = require("../PageActions/PageAction_Common/SignInPage")
let testData = require("../TestData/TestLevelData/TestCaseData")
let personalizedHomepage = require("../PageActions/PageAction_Common/PersonalizedHomePage")
let productCatalogPage = require("../PageActions/PageAction_Common/ProductCatlog")
let commonSuccessMsg = require("../TestData/TestLevelData/CommonMessage")
describe('TS011_RFQ_LoggedInUserOnPLP',function(){
    it ('TS011_RFQ_LoggedInUserOnPLP', () => {
        let commonData = testData.common
homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password)
        homePage.clickOnSignInLink()
        signInPage.enterEmail(testData.common.email)
        signInPage.enterPassword(testData.common.password)
        signInPage.clickOnSignInButton()
        personalizedHomepage.verifyPersonalizedHomePage()
        personalizedHomepage.clickOnProductCatalogLink()
        productCatalogPage.VerifyProductCatalogPage_LoggedIn()
        productCatalogPage.ClickOnAllProductsTab()
        productCatalogPage.ClickOnRFQButton(1)
        productCatalogPage.VerifySuccessToastMessage(commonSuccessMsg.commonSuccessMessage.PLPRFQSuccessMsg)


    })
})