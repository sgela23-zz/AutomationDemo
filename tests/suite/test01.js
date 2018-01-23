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
  'Login with account Test': function (browser) {
     var main =  browser.page.MainPage();
     var login =  browser.page.LoginPage(); 
     browser.assert.title("Ragnar Home | Find an Overnight Road or Trail Running Relay Near You!");
     main.clickLogin();
     login.checkTitleLogin('Existing Account Login');
     login.fillEmailInput('santiago.gela@gmail.com');
     login.fillPwdInput("Ragnarokkb23");
     login.clickLoginBtn();
     login.checkAccountIsLogged();
 },
};
