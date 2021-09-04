class AccountSubmittedPage_Locator{
    constructor(){
        this.SUCCESSlINEALERT ="//*[@id='Success-Line-Art']";
        this.ACCOUNTSUBMITTEDTEXT = "//span[text()='Account Request Submitted']";
        this.NEWACCOUNTREQUESTSUBMITTEDTEXT = "//span[text()='New Account Request Submitted']";
    }
}
module.exports = new AccountSubmittedPage_Locator();