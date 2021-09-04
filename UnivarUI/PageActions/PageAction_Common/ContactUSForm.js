"use strict";
let argv = require('optimist').argv
var expect = require("chai").expect;
let commonAction = require("../../../Utilities/CommonActions.js");
let contactUsForm_Loc= require("../../Locator/Locator_Common/ContactUSForm_Locator.js");
let productCatalogPage = require("../../Locator/Locator_Common/ProductCatlogPage_Locator.js");
let waiTime = require("../../TestData/TestData_Common/Waits.js");
const log4js = require("log4js");
const logger = log4js.getLogger("univar");
const common = require("mocha/lib/interfaces/common");
let testData = require("../../TestData/TestLevelData/TestCaseData.js");
require("../../../Utilities/log4js.js");
class ContactUSForm{
    verifyContactUSForm(){
       commonAction.waitForVisible(contactUsForm_Loc.CONTACT_US_FORM,waiTime.MEDIUMWAIT,"Contact Us form");
       let contactUsFormText = commonAction.safeIsVisible(contactUsForm_Loc.CONTACT_US_FORM_HEADER_TEXT,"Contact Us form Header text");
       expect(contactUsFormText,"Not Finding What You Need? is not displayed").to.be.true;
    }
    enterFirstName(firstName){
        commonAction.setValue(contactUsForm_Loc.FIRST_NAME,firstName,"First Name");
    }
    enterLastName(lastName){
        commonAction.setValue(contactUsForm_Loc.LAST_NAME,lastName,"Last Name");
    }
    enterEmail(email){
        commonAction.setValue(contactUsForm_Loc.EMAIL,email,"Email");
    }
    enterPhoneNumber(phoneNumber){
        commonAction.setValue(contactUsForm_Loc.PHONE_NUMBER,phoneNumber,"Phone Number");
    }
    enterCompanyName(companyName){
        commonAction.setValue(contactUsForm_Loc.COMPANY_NAME,companyName,"Company Name");
    }
    enterJobTitle(jobTitle){
        commonAction.setValue(contactUsForm_Loc.JOB_TITLE,jobTitle,"Job Title");
    }
    selectCountry(countryName){
        commonAction.selectByValue(contactUsForm_Loc.COUNTRY_NAME,countryName,"Country Name");
    }
    selectMarket(marketName){
        commonAction.selectByValue(contactUsForm_Loc.MARKET,marketName,"Market Name");
    }
    selectNoRadio(){
        commonAction.safeVisibleClick(contactUsForm_Loc.NO_RADIO,waiTime.MEDIUMWAIT,"No Radio");
    }
    clickTermsAndConditionsCheckBox(){
        commonAction.safeVisibleClick(contactUsForm_Loc.TERMS_AND_CONDITIONS_BOX,waiTime.MEDIUMWAIT,"Terms and conditions checkbox");
    }
    clickOnSubmitButton(){
        browser.pause(5000)
        commonAction.safeIsVisible(contactUsForm_Loc.SUBMIT_BUTTON,"Submit Button");
        commonAction.browserkeys("Enter","Press Enter");
        // commonAction.waitForClickable(contactUsForm_Loc.SUBMIT_BUTTON,waiTime.MEDIUMWAIT,"Submit Button on Contact Us For");
        // commonAction.scrollTo(contactUsForm_Loc.SUBMIT_BUTTON,"Submit Button");
        // commonAction.safeJavaScriptClick(contactUsForm_Loc.SUBMIT_BUTTON,"Submit Button on Contact Us Form");
    }
    enterDetailsInContactUsForm(firstName,lastName,email,phoneNumber,companyName,jobTitle,countryName,marketName){
        this.enterFirstName(firstName);
        this.enterLastName(lastName);
        this.enterEmail(email);
        this.enterPhoneNumber(phoneNumber);
        this.enterCompanyName(companyName);
        this.enterJobTitle(jobTitle);
        this.selectCountry(countryName);
        this.selectMarket(marketName);
        this.selectNoRadio();
        this.clickTermsAndConditionsCheckBox();
        this.clickOnSubmitButton()
    }
}
module.exports=new ContactUSForm();


