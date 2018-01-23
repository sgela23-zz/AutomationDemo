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
  'Register to Trail Partner': function (browser) {
     var main =  browser.page.MainPage();
     var trail = browser.page.TrailPartnersPage();
     browser.assert.title("Ragnar Home | Find an Overnight Road or Trail Running Relay Near You!");
     main.clickPartnersTab();
     browser.keys('\uE015');
     browser.keys('\uE015');
     browser.keys('\uE007');
     trail.checkTrailPartnersTitle("TRAIL PARTNERS");
     browser.frame(0);// Changing Selenium page scope
     trail.fillFnameInput("Santiago");
     trail.fillLnameInput("Gelabert");
     trail.fillEmail("arkhamlvl2test@gmail.com");
     trail.fillPhone("555 090 998");
     trail.fillCompanyInput("Testing 4 You");
     trail.fillJobTitle("QA Engineer");
     trail.fillCompanyLoc("137787"); //Value for California
     trail.clickLearnMore();
     trail.checkMsg();
},
};
