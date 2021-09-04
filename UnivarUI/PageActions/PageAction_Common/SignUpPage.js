"use strict";
let argv = require('optimist').argv
let safeAction = require("../../../Utilities/CommonActions.js");
require("../../../Utilities/log4js.js");
const log4js = require("log4js");
const logger = log4js.getLogger("univar");
let homePageLoc = require("../../Locator/Locator_Common/HomePage_Locator.js");
let signUpPage_loc = require("../../Locator/Locator_Common/SignUpPage_Locator.js");
let waitTime = require("../../TestData/TestData_Common/Waits.js");
let accountSubmittedPage = require(".//AccountSubmittedPage.js")
class SignUpPage{

    //Verify Sign up page
    verifySignupPage(){
       let currentUrl = safeAction.getUrl();
       logger.info("verify Sign up page url should contain create text")
       safeAction.safeAsserts('contains',currentUrl,`${currentUrl} doesn't contains create`,'create');
       let createAccountText = safeAction.safeIsVisible(signUpPage_loc.CREATE_ACCOUNT_TEXT,"Create account text in Sign up page")
        safeAction.safeAsserts('true',createAccountText,"Create account text is not visible in sign up page");
    }
    //Click On My company has purchased from Univar Solutions before radio button
    clickOnCmpnyPurchasedBefore(){
        safeAction.waitForClickable(signUpPage_loc.EXISTING_ACCOUNT_RADIOBTN, waitTime.MEDIUMWAIT,"My company has purchased from Univar Solutions before radio button");
        safeAction.safeVisibleClick(signUpPage_loc.EXISTING_ACCOUNT_RADIOBTN, waitTime.MEDIUMWAIT,"My company has purchased from Univar Solutions before radio button");
    }
    //Enter First Name
    enterFirstName(firstName){
        safeAction.domStatus();
        safeAction.waitForVisible(signUpPage_loc.FIRSTNAME_FIELD,waitTime.LONGWAIT,"First name in sign up page");
        safeAction.setValue(signUpPage_loc.FIRSTNAME_FIELD, firstName,"\"First name in sign up page\"")
    }
    //Enter First Name
    enterLastName(lastName){
        safeAction.waitForVisible(signUpPage_loc.LASTNAME_FIELD,waitTime.MEDIUMWAIT,"Last name in sign up page");
        safeAction.setValue(signUpPage_loc.LASTNAME_FIELD,lastName,"Last name in sign up page");
    }
    //Enter First Name
    enterEmail(email){
        safeAction.waitForVisible(signUpPage_loc.EMAILADDRESS_FIELD,waitTime.MEDIUMWAIT,"Email field in sign up page");
        safeAction.setValue(signUpPage_loc.EMAILADDRESS_FIELD,email,"Email field in sign up page");
    }
    //Enter First Name
    enterCompanyName(companyName){
        safeAction.waitForVisible(signUpPage_loc.COMPANY_FIELD,waitTime.MEDIUMWAIT,"Company name in sign up page");
        safeAction.setValue(signUpPage_loc.COMPANY_FIELD,companyName,"Company name in sign up page");
    }
    //Enter First Name
    enterPhoneNumber(phoneNumber){
        safeAction.waitForVisible(signUpPage_loc.PHONE_NUMBER_FIELD,waitTime.MEDIUMWAIT,"Phone Number in sign up page");
        safeAction.setValue(signUpPage_loc.PHONE_NUMBER_FIELD,phoneNumber,"Phone Number in sign up page");
    }

    enterUserDetails(firstName, lastName, phoneNum, companyName, email){
        this.enterFirstName(firstName);
        this.enterLastName(lastName);
        this.enterEmail(email);
        this.enterCompanyName(companyName)
        this.enterPhoneNumber(phoneNum)
    }
    //Click on Provide Shipping address radio btn
    clickOnProvideShippingAddressRadioButton(){
        safeAction.waitForClickable(signUpPage_loc.PROVIDE_SHIPPINGADDRESS_RADIOBTN,waitTime.MEDIUMWAIT,"Provide Account Number Radio Button");
        safeAction.safeVisibleClick(signUpPage_loc.PROVIDE_SHIPPINGADDRESS_RADIOBTN,waitTime.MEDIUMWAIT,"Provide Account Number Radio Button");
    }

    //Enter Company Address
    enterCompanyAddress(cmpnyAdress){
        safeAction.setValue(signUpPage_loc.COMPANY_ADDRESS_FIELD,cmpnyAdress,"Company Address in Sign up Page")
    }
    //enter Unit, Suite and Building
    enterBuildingAndUnitNumber(buildAndUnitNumber){
        safeAction.setValue(signUpPage_loc.UNIT_FIELD,buildAndUnitNumber,"Unit, Suite, Building, etc. in Sign up page");
    }
    //enter City
    enterCity(city){
        safeAction.setValue(signUpPage_loc.CITY_FIELD,city,"City in Sign up page");
    }
    //enter ZipCode
    enterZipCode(zipCode){
        safeAction.setValue(signUpPage_loc.ZIPCODE,zipCode,"ZipCode in Sign up page");
    }
    //Select Country
    selectCountry(country){
        if(argv.countryName == 'UK')
            country === 'United Kingdom';
        safeAction.waitForVisible(signUpPage_loc.COUNTRYDROPDOWN,waitTime.MEDIUMWAIT,"Country Drop down in Sign up page");
        safeAction.selectByText(signUpPage_loc.COUNTRYDROPDOWN,country,`${country} in country dropdown in sign up page`);
    }
    //Continue button in Sign up page
    clickOnContinueButton(){
        safeAction.safeVisibleClick(signUpPage_loc.CONTINUE_BUTTON,waitTime.MEDIUMWAIT,"Continue button in sign up page");
        safeAction.domStatus();
        return accountSubmittedPage;
    }
    //Cancel Button
    clickOnCancelButton(){
        safeAction.safeVisibleClick(signUpPage_loc.CANCEL_BUTTON,waitTime.MEDIUMWAIT,"Cancel Button in Sign up page");
    }
    //Select state using random index
    selectRandomStateFromDropDown(){
        safeAction.waitForClickable(signUpPage_loc.STATE_DROPDOWN,waitTime.MEDIUMWAIT,"State drop down in sign up page");
        safeAction.selectByIndex(signUpPage_loc.STATE_DROPDOWN,safeAction.getRandomNumber(1),"State drop down in sign up page");
    }
    //Enter Shipping address details
    enterShippingAddressDetails(cmpnyAddress,buildingNumber,city,zipCode,country){
        this.enterCompanyAddress(cmpnyAddress);
        this.enterBuildingAndUnitNumber(buildingNumber);
        this.enterCity(city);
        this.enterZipCode(zipCode);
        this.selectRandomStateFromDropDown()
        this.selectCountry(country)
    }
    //Click On My company has purchased from Univar Solutions never radio button
    clickOnCmpnyNeverPurchased(){
        safeAction.waitForClickable(signUpPage_loc.NEWACCOUNT_RADIOBTN, waitTime.LONGWAIT,"My company has never purchased from Univar Solutions before radio button");
        safeAction.safeVisibleClick(signUpPage_loc.NEWACCOUNT_RADIOBTN, waitTime.LONGWAIT,"My company has never purchased from Univar Solutions before radio button");
        safeAction.domStatus();
    }
    //Enter Account number in sign up page
    enterAccountNumber(accountNumber){
        safeAction.waitForVisible(signUpPage_loc.ACCOUNT_NUMBER_TEXTBOX,waitTime.MEDIUMWAIT,"Account Number in Sign up page");
        safeAction.setValue(signUpPage_loc.ACCOUNT_NUMBER_TEXTBOX,accountNumber,"Account Number in Sign up page");
    }
    //Verify if Cancel button is displayed in sign up page
    verifyIfCancelButtonIsDisplayed(status){
        safeAction.domStatus();
        let cancelButton =safeAction.safeIsVisible(signUpPage_loc.CANCEL_BUTTON,"Cancel Button in Sign up page");
        safeAction.safeAsserts(status,cancelButton,"Cancel Button in Sign up page is not displayed")
    }
    //Verify if Continue button is displayed in sign up page
    verifyIfContinueButtonIsDisplayed(status){
        safeAction.domStatus();
        let cancelButton =safeAction.safeIsVisible(signUpPage_loc.CONTINUE_BUTTON,"Continue Button in Sign up page");
        safeAction.safeAsserts(status,cancelButton,"Continue Button in Sign up page is not displayed")
    }

    // Verify First Name error message
    verifyFirstNameErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.FIRSTNAME_FIELD,waitTime.LONGWAIT,"First name in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.FIRSTNAME_ERROR,waitTime.MEDIUMWAIT,"Error message in First name field");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify Last Name error message
    verifyLastNameErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.LASTNAME_FIELD,waitTime.LONGWAIT,"Last name in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.LASTNAME_ERROR,waitTime.MEDIUMWAIT,"Error message in Last name field");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify Email error message
    verifyEmailErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.EMAILADDRESS_FIELD,waitTime.LONGWAIT,"Email in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.EMAIL_ERROR,waitTime.MEDIUMWAIT,"Error message in Email field");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify Company Address error message
    verifyCompanyErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.COMPANY_FIELD,waitTime.LONGWAIT,"Company field in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.COMPANY_ERROR,waitTime.MEDIUMWAIT,"Error message in Company field");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify City error message
    verifyCityErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.CITY_FIELD,waitTime.LONGWAIT,"City field in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.CITY_ERROR,waitTime.MEDIUMWAIT,"Error message in City field");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify State error message
    verifyStateErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.STATE_DROPDOWN,waitTime.LONGWAIT,"State/Province in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.STATE_ERROR,waitTime.MEDIUMWAIT,"Error message in State/Province field");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify ZipCode error message
    verifyZipCodeErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.ZIPCODE,waitTime.LONGWAIT,"ZipCode in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.ZIPCODE_ERROR,waitTime.MEDIUMWAIT,"Error message in ZipCode field");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify Account error message
    verifyAccountErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.ACCOUNT_NUMBER_TEXTBOX,waitTime.LONGWAIT,"Account text box in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.ACCOUNT_ERROR,waitTime.MEDIUMWAIT,"Error message in Account text box");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify Phone error message
    verifyPhoneErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.PHONE_NUMBER_FIELD,waitTime.LONGWAIT,"Phone number in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.PHONE_ERORR,waitTime.MEDIUMWAIT,"Error message in Phone number text box");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
    // Verify Copmany Address error message
    verifyCompanyAddressErrorMsg(errorMessage){
        safeAction.waitForVisible(signUpPage_loc.COMPANY_ADDRESS_FIELD,waitTime.LONGWAIT,"Company Address in Sign up page");
        let errorMsg = safeAction.safeGetText(signUpPage_loc.COMPANY_ERROR,waitTime.MEDIUMWAIT,"Error message in Company Address text box");
        safeAction.safeAsserts('equal',errorMsg,`${errorMsg} is not matched with ${errorMessage}`,errorMessage);
    }
}
module.exports = new SignUpPage();