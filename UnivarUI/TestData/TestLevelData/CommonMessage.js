"use strict";
let argv = require('optimist').argv
class commonMessages {
    constructor(){
        this.commonErrorMessage ={
            "thisFieldRequired": "This is a required field.",
            "selectOption": "Please select an option.",
            "enterValidEmail":"Please enter a valid email address (Ex: johndoe@domain.com)."
        }
        this.commonSuccessMessage ={
            "PLPRFQSuccessMsg":"Your quote Request has been Submitted.",
            "ResetPasswordSuccessMsg":"You updated your password.",
            "ContactUsFormSubmitSuccessMsg":"Thank you for contacting Univar Solutions. A representative will get back to you shortly.",
        }
    }
}

module.exports = new commonMessages();