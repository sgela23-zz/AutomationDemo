module.exports = {
  before(browser) {
    browser.windowMaximize();
    var main =  browser.page.MainPage();
    main.navigate()   
 },
  after(browser){
    browser.end();
  },

  '@tags': ['Test'],
  'Create Account': function (browser) {
     var main =  browser.page.MainPage();
     var login =  browser.page.LoginPage(); 
     browser.assert.title("Ragnar Home | Find an Overnight Road or Trail Running Relay Near You!");
     main.clickLogin();
     login.checkTitleLogin('Existing Account Login');
     login.clickCreateAccount();
     login.checkTitleNewAccount('Create Free Account');
     login.fillFnameInput();
     login.fillLnameInput();
     login.fillEmailInput();
     login.fillCreatePwdInput(); // Must be at least 8 characters in length - Must contain both upper and lower case letters - Must contain at least one number
     login.fillRePwdInput();
     login.clickCreateAccountBtn();
     login.checkAccountIsLogged();
 },
};
