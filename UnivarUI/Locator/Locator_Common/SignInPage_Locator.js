class SignInPage_Locator{
    constructor(){
        this.SIGNINACCOUNT_TEXT ="//span[@id='block-customer-login-heading'][contains(text(),'Sign In to Your Account')]";
        this.UNIVARSOLUIONS_IMG ="//img[@alt='Univar Solutions']";
        this.SIGNIN_BUTTON = "//fieldset[@class='fieldset login']//span[text()='Sign In']/..";
        this.PASSWORDFIELD ="//div[@class='control']/input[@name='login[password]']";
        this.EMAILFIELD ="//div[@class='control']/input[@name='login[username]']";
        this.CREATEACCOUNT_BTN = "//a[text()='Create an Account']";
        this.FORGOTPASSWORD_LINK ="//fieldset[@class='fieldset login']//a[text()='Forgot Your Password?']";
        this.SUCCESSMESSAGE="//div[@class='container']"
    }
}
module.exports = new SignInPage_Locator();