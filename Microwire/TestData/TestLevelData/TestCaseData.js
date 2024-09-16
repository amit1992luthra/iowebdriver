"use strict";
let argv = require('optimist').argv
let commonActions = require("../../../Utilities/CommonActions.js");
class testCaseData {
    constructor(){
        this.common ={
            "auth_userName": "univar",
            "auth_password": "Gorilla2020",
            "email": "srinath.bandi@univarsolutions.com",
            "userName": "Srinath",
            "password": "AbCd1234",
            "country_Canada": "Canada",
            "country_UK": "United Kingdom",
            "country_USA": "United State",
            "trueStatus": "true",
            "falseStatus": "false",
            "firstName_Dynamic": "FirstName"+commonActions.getRandomString(4),
            "lastName_Dynamic": "LastName"+commonActions.getRandomString(4),
            "phoneNumber_Dynamic": commonActions.getRandomNumber(10),
            "companyName_Dynamic": "CompanyName_"+commonActions.getRandomString(4),
            "mailinatorMail_Dynamic": "univarMail"+commonActions.getRandomNumber(4)+"@mailinator.com",
            "companyAddress": "Company Address "+commonActions.getRandomString(4),
            "companyBuildingNumber": "CompanyBuilding"+commonActions.getRandomNumber(4),
            "cityName_Dynamic": "City Name "+commonActions.getRandomString(3),
            "jobTitle_Dynamic":"JobTitle "+commonActions.getRandomString(5),
            "countryCodeForCanada":"CA",
            "marketName":"3D Printing",
            "zipCode": "10002",
            "accountNumber": "121070",
            "mailinatorInboxURL":"https://www.mailinator.com/v4/public/inboxes.jsp",
            "mailinatorEmailId":"univarMail3230@mailinator.com",
            "password_Dynamic":"AbCd"+commonActions.getRandomNumber(4),
        }
    }
}

module.exports = new testCaseData();