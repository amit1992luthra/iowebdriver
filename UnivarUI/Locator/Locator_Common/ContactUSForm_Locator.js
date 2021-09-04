class ContactUSForm_Locator{
    constructor() {
        this.CONTACT_US_FORM = "//aside[contains(@class,'contact-modal-popup')]/div[@class='modal-inner-wrap']";
        this.CONTACT_US_FORM_HEADER_TEXT= "//h1[contains(@id,'modal-title')][contains(text(),'Not Finding What You Need?')]";
        this.FIRST_NAME = "//input[@id='cu_first_name']";
        this.LAST_NAME = "input#cu_last_name";
        this.EMAIL = "input#cu_email";
        this.PHONE_NUMBER = "//input[@name='phone'][@id='cu_phone']";
        this.COMPANY_NAME = "//input[@id='cu_company']";
        this.JOB_TITLE = "input#cu_title";
        this.COUNTRY_NAME = "//label[@for='cu_title']/../../div/select[@id='country']";
        this.MARKET = "//select[@id='cu_market']";
        this.NO_RADIO = "//label[@for='cu_no']/span[@class='checkmark']";
        this.TERMS_AND_CONDITIONS_BOX= "//label[@for='cu-terms-of-use']";
        this.SUBMIT_BUTTON= "//button[@class='button button--primary']";
    }
}
module.exports = new ContactUSForm_Locator();
