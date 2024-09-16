let resetPasswordLoc = require("../../Locator/Locator_Common/ResetPasswordPage_Locator");
let safeAction = require("../../../Utilities/CommonActions");
let waitTime = require("../../TestData/TestData_Common/Waits");
class ResetPasswordPage{
verifyResetPasswordPage(){
    safeAction.domStatus();
    let resetPasswordText = safeAction.safeIsVisible(resetPasswordLoc.RESET_PASSWORD_TEXT,"Reset Password Text");
    safeAction.safeAsserts("true",resetPasswordText,"Reset Password Text")
    let resetPasswordURL= safeAction.getUrl()
    safeAction.safeAsserts("contains",resetPasswordURL,"Reset Password URL","createpassword");
}

    /**
     * enter new password
     * @param password
     */
    enterNewPassword (password){
    safeAction.setValue(resetPasswordLoc.NEW_PASSWORD_FIELD,password,"New Password");
}
enterConfirmPassword(password){
    safeAction.setValue(resetPasswordLoc.CONFIRM_NEW_PASSWORD,password,"Confirm Password");
}
clickSetPasswordButton(){
    safeAction.safeVisibleClick(resetPasswordLoc.SET_PASSWORD_BUTTON,waitTime.MEDIUMWAIT,"Set Password Button");
}


}

module.exports = new ResetPasswordPage();