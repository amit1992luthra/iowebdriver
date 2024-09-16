"use strict";
let argv = require('optimist').argv
let environmentData = require("../TestData/Locator_Common/"+ argv.countryName +"/EnvData_"+ argv.environmentName +".js")
let testData = require('../TestData/TestLevelData/TestCaseData.js')
let homePage = require('../PageActions/PageAction_Common/HomePage.js')
describe('TS010_VerifyCookieBannerOnHomePage',function(){
    it('TS010_VerifyCookieBannerOnHomePage', () => {
        homePage.navigateToAppHomePage(environmentData.app_URL,testData.common.auth_userName,testData.common.auth_password)
        homePage.verifyCookies()

    })

})