"use strict";
let argv = require('optimist').argv
let safeActions = require("../../../Utilities/CommonActions.js");
class PageLevelData {
    constructor(){
        this.orderHistoryPage ={
            "allOrders": "All Orders",
            "openOrders": "Open Orders",
            "completedOrders": "Completed Orders",
            "cancelledOrders": "Cancelled Orders",
            "orderHistory": "Order History"
        }
        this.commonSuccessMessage ={
        }
    }
}


module.exports = new PageLevelData();