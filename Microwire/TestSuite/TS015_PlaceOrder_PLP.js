"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/TestData_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js");
let testData = require("../TestData/TestLevelData/TestCaseData.js");
let commonSuccessMsg = require("../TestData/TestLevelData/CommonMessage.js");
let productCatalogPage = require("../PageActions/PageAction_Common/ProductCatlog.js");
let homePage = require("../PageActions/PageAction_Common/HomePage.js");
//let cartPage =  require()
const signInPage = require("../PageActions/PageAction_Common/SignInPage");
describe('TS015_PlaceOrder_PLP',function(){
    it ('TS015_PlaceOrder_PLP', () => {
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password);
        homePage.verifyHomePage(testData.common.trueStatus);
        homePage.clickOnSignInLink();
        let personalizedHomepage = signInPage.loginWithValidCredentials(testData.common.email,testData.common.password);
        personalizedHomepage.verifyPersonalizedHomePage();
        personalizedHomepage.clickOnQuotedProductsCTA();
        productCatalogPage.VerifyProductCatalogPage_LoggedIn();
       let productName = productCatalogPage.clickOnAddToCartButton(2);
       let productPrice = productCatalogPage.getProductPrice(2)
        productCatalogPage.VerifySuccessToastMessage(productName + " has been added to your cart");
        let cartPage = productCatalogPage.clickOnViewCartButtonInSuccessToast();
          cartPage.verifyCartPage();
          cartPage.verifyProductNameAndPrice(productName, productPrice[0]);
          let cartTotal = cartPage.getTotalPrice(productPrice[1],1);
          cartPage.verifyCartTotal(cartTotal,productPrice[2]);
          cartPage.clickOnProceedToCheckoutButton().VerifyShippingPage();




         //let productPrice= [ProductPrice_dynamic,ProductPrice_dynamic3[0],ProductPrice_dynamic3[1]]
        
        
        
    })
})

