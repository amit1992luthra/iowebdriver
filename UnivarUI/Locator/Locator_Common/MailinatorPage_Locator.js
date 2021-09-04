class MailinatorPage_Locator{
    constructor() {
        this.PUBLIC_MESSAGE_TEXT = "//*[contains(text(),'Public Messages')]";
        this.SEARCH_BOX = "//input[@id='inbox_field']";
        this.GO_BUTTON = "div.wrapper-primary-input>button";
        this.FIRST_RESET_EMAIL = "(//*[contains(text(),'Reset your UnivarSolutions.com password')])[1]";
        this.TO_EMAIL = "(//div[contains(text(),'To')]/../div)[last()]";
        this.RESET_PASSWORD_BUTTTON = "//a[contains(text(),'Reset Password')]";



    }


}
module.exports = new MailinatorPage_Locator();