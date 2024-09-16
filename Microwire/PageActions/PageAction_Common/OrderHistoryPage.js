"use strict";
let argv = require('optimist').argv
let safeAction = require("../../../Utilities/CommonActions.js");
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const logger = log4js.getLogger("univar");
let orderHistory_Loc = require("../../Locator/Locator_Common/OrderHistory_Locator.js");
let personalizedHomePage_loc = require("../../Locator/Locator_Common/PersonalizedHomePage_Locator.js");
let waitTime = require("../../TestData/TestData_Common/Waits.js");
let accountSubmittedPage = require(".//AccountSubmittedPage.js");
let pageData = require("../../TestData/TestLevelData/PageLevelData.js");
class orderHistoryPage{

    //Verify Order History Page
    verifyOrderHistoryPage(orderHistoryTitle){
        safeAction.waitForVisible(orderHistory_Loc.ORDERHISTORY_TITLE,waitTime.LONGWAIT,"Order History title in Order History Page");
        let orderHistoryText = safeAction.safeGetText(orderHistory_Loc.ORDERHISTORY_TITLE,waitTime.MEDIUMWAIT,"Order History title in Order History Page");
        safeAction.safeAsserts('equal',orderHistoryText,"Order history didn't matched",orderHistoryTitle);
        let orderHistoryHome = safeAction.safeGetText(orderHistory_Loc.ITEMS_HOME,waitTime.MEDIUMWAIT,"Order History home in Order History Page");
        safeAction.safeAsserts('equal',orderHistoryHome,"Order history home didn't matched",orderHistoryTitle);
    }

    //Verify Tabs in Order History page
    verifyOrderHistoryFilters(filterList){
      let filtersTab=  safeAction.getElements(orderHistory_Loc.ORDERHISTORY_FILTERS,"Order history filters tab in order history page")
        if(filterList.length == filtersTab.length) {
            for (let i = 0; i < filtersTab.length; i++) {
                safeAction.safeAsserts('contains', safeAction.safeGetText(filtersTab[i], waitTime.MEDIUMWAIT, `${filterList[i]} tab in order history page`), `${filterList[i]} tab is not displayed in order history page`, filterList[i])
            }
        }
        else {
            logger.error("Tab length is not equal");
            safeAction.safeAsserts('equal',filterList.length,"Tabs length is not equal",filtersTab.length)
        }
    }

    //get Order id from list
    getOrderIdFromOrderList(position){
        safeAction.domStatus();
        safeAction.waitForVisible(orderHistory_Loc.ORDERHEADER_LIST,waitTime.LONGWAIT,"Order ID lists")
        let orderID_Vis = safeAction.safeIsVisible(orderHistory_Loc.ORDERHEADER_LIST,"Order ID lists");
        if(orderID_Vis) {
            let orderId_Loc = orderHistory_Loc.ORDERHEADER_LIST + "[" + position + "]";
            let orderID_Text = safeAction.safeGetText(orderId_Loc, waitTime.MEDIUMWAIT, `Order Id from order history list at position ${position}`);
            let orderID = (orderID_Text.split('#'))[1];
            return orderID.trim();
       }
        else {
            safeAction.safeAsserts('true',orderID_Vis,"Order is not displayed in the list in order history page");
        }
    }
    //Search Order using order search box
    searchOrderUsingSearchBox(orderID){
        safeAction.waitForClickable(orderHistory_Loc.ORDER_SEARCHBOX,waitTime.MEDIUMWAIT,"Order Search box");
        safeAction.setValue(orderHistory_Loc.ORDER_SEARCHBOX,orderID,"Order Search box");
        safeAction.browserkeys('Enter')
    }

    verifyOrderMatchingText(orderID){
        let orderMatchingText =safeAction.safeGetText(orderHistory_Loc.SEARCHTERM_TEXT,waitTime.MEDIUMWAIT,"1 Order Matching text in order history page");
        safeAction.safeAsserts('equal',orderMatchingText,"Order matching text didn't matched",`1 Orders Matching "${orderID}"`)
    }

    verifyTheToolbarNumberAfterSorting(count){
        let num = safeAction.safeGetText(orderHistory_Loc.TOOLBAR_NUMBER,waitTime,"Toolbar number after searching in order history page");
        safeAction.safeAsserts('equal',num,"Toolbar number is not matched", `${count} Item`)
    }

    verifyOrderDetails(orderID){
        let totalOrder_loc =safeAction.dynamicLocator(orderHistory_Loc.ORDERTOTAL, orderID)
        let totalOrderText =safeAction.safeGetText(totalOrder_loc,waitTime.MEDIUMWAIT,"Order Total for order in order history page")
        let totalOrderText1 = (totalOrderText.split('$'))[1];
        safeAction.safeAsserts('notNull',totalOrderText1,"Total Oder of order is null");

        let po_loc =safeAction.dynamicLocator(orderHistory_Loc.ORDER_PO, orderID)
        let poText =safeAction.safeGetText(po_loc,waitTime.MEDIUMWAIT,"PO for order in order history page")
        let poText1 = (poText.split('#'))[1];
        safeAction.safeAsserts('notNull',poText1,"PO of order is null");

        let ordered_loc =safeAction.dynamicLocator(orderHistory_Loc.ORDER_ORDERED, orderID)
        let orderedText =safeAction.safeGetText(ordered_loc,waitTime.MEDIUMWAIT,"Ordered for order in order history page")
        let orderedText1 = (orderedText.split('Ordered '))[1];
        safeAction.safeAsserts('notNull',orderedText1,"Ordered of order is null");

        let address_loc =safeAction.dynamicLocator(orderHistory_Loc.ORDER_SHIPPINGADDRESS, orderID)
        let addressText =safeAction.safeGetText(address_loc,waitTime.MEDIUMWAIT,"Shipping address for order in order history page")
        safeAction.safeAsserts('notNull',addressText,"Shipping address of order is null");
    }
}
module.exports = new orderHistoryPage();