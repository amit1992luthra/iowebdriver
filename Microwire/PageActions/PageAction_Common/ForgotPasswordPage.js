let safeAction = require("../../../Utilities/CommonActions");
let forgotPasswordLocator = require("../../Locator/Locator_Common/ForgotPasswordPage_Locator");
let waitTime = require("../../TestData/TestData_Common/Waits");

class ForgotPasswordPage{
    enterEmailAddress(email){
        safeAction.waitForClickable(forgotPasswordLocator.EMAIL_FIELD,waitTime.MEDIUMWAIT,"Enter email in forgot password page");
        safeAction.setValue(forgotPasswordLocator.EMAIL_FIELD,email,"Enter email in forgot password page");
    }
    clickOnSubmitButton(){
        safeAction.safeVisibleClick(forgotPasswordLocator.SUBMIT_BUTTON,waitTime.MEDIUMWAIT,"Submit button");
    }

}

module.exports = new ForgotPasswordPage();