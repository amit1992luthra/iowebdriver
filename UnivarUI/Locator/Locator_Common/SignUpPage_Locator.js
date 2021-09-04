class SignUpPage_Locator{
    constructor(){
    this.ACCOUNT_NUMBER_TEXTBOX = "//input[@id='account-number']";
    this.ACCOUNTREQUEST_SUBMITTEDTEXT = "//span[text()='Account Request Submitted']";
    this.CANCEL_BUTTON = "//span[contains(text(),'Cancel')]";
    this.CITY_FIELD = "//input[@title='City']";
    this.COMPANY_ADDRESS_FIELD = "//input[@title='Company Address']";
    this.COMPANY_FIELD = "//input[@title='Company']";
    this.CONTINUE_BUTTON = "button.submit.button";
    this.COUNTRYDROPDOWN = "//select[@name='country_id']";
    this.CREATE_ACCOUNT_TEXT = "//*[@class='legend']/span[contains(text(),'Create an Account')]";
    this.EMAILADDRESS_FIELD = "input#email_address";
    this.EXISTING_ACCOUNT_RADIOBTN ="//input[@value='existing-account']/../span";
    this.FIRSTNAME_FIELD ="//input[@title='First Name']";
    this.LASTNAME_FIELD ="//input[@title='Last Name']";
    this.NEWACCOUNT_RADIOBTN = "//input[@value='new-account']/../span";
    this.PHONE_NUMBER_FIELD = "//input[@title='Phone Number']";
    this.PROVIDE_ACCOUNTNUMBER_RADIOBTN = "//input[@value='prov_account_number']/../span";
    this.PROVIDE_SHIPPINGADDRESS_RADIOBTN = "//input[@value='prov_ship_addr']/../span";
    this.STATE_DROPDOWN = "//select[@id='region_id']";
    this.SUCCESS_LINEART = "#Success-Line-Art";
    this.UNIT_FIELD = "//input[@title='Unit']";
    this.ZIPCODE = "//input[@name='postcode']";
    this.FIRSTNAME_ERROR = "//div[@id='firstname-error']";
    this.LASTNAME_ERROR = "//div[@id='lastname-error']";
    this.EMAIL_ERROR = "//div[@id='email_address-error']";
    this.COMPANY_ERROR = "//div[@id='company-error']";
    this.PHONE_ERORR = "//div[@id='telephone-error']";
    this.COMPANYADDRESS_ERROR = "//div[@id='street_1-error']";
    this.CITY_ERROR = "//div[@id='city-error']";
    this.STATE_ERROR = "//div[@id='region_id-error']";
    this.ZIPCODE_ERROR = "//div[@id='zip-error']";
    this.ACCOUNT_ERROR = "//div[@id='account-number-error']";
    }
}
module.exports = new SignUpPage_Locator();