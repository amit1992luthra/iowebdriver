"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/Locator_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js")
let homePage = require("../PageActions/PageAction_Common/HomePage.js");
let testData = require("../TestData/TestLevelData/TestCaseData.js");
let commonMessageData = require("../TestData/TestLevelData/CommonMessage.js");
let pageData = require("../TestData/TestLevelData/PageLevelData.js")
let safeAction = require("../../Utilities/CommonActions.js");
describe("TS009_SearchByOrderNumberOnOrderHistoryListing", function () {
    it('TS009_SearchByOrderNumberOnOrderHistoryListing', () => {
        let commonTestData = testData.common;
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password)
        homePage.verifyHomePage(testData.common.trueStatus);
        let signInPage = homePage.clickOnSignInLink();
        let personalizedHomePage =signInPage.loginWithValidCredentials(commonTestData.email,commonTestData.password);
        personalizedHomePage.verifyPersonalizedHomePage(testData.common.userName);
        let orderHistoryLink =personalizedHomePage.verifyAndClickOnOrderHistoryLink();
        orderHistoryLink.verifyOrderHistoryPage(pageData.orderHistoryPage.orderHistory);
        orderHistoryLink.verifyOrderHistoryFilters([pageData.orderHistoryPage.allOrders,pageData.orderHistoryPage.openOrders,pageData.orderHistoryPage.completedOrders,pageData.orderHistoryPage.cancelledOrders]);
        let orderID =orderHistoryLink.getOrderIdFromOrderList(safeAction.getRandomNumber(2));
        console.log("Order id ",orderID)
        orderHistoryLink.searchOrderUsingSearchBox(orderID);
        orderHistoryLink.verifyOrderMatchingText(orderID);
        orderHistoryLink.verifyOrderDetails(orderID);
    });
});

