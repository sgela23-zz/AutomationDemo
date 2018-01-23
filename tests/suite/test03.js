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
  'Register to Road Partner': function (browser) {
     var main =  browser.page.MainPage();
     var partner = browser.page.PartnersPage();
     browser.assert.title("Ragnar Home | Find an Overnight Road or Trail Running Relay Near You!");
     main.clickPartnersTab();
     browser.keys('\uE015');
     browser.keys('\uE007');
     partner.checkRoadPartnersTitle("ROAD PARTNERS");
     browser.frame(0); // Changing Selenium page scope
     partner.fillFnameInput("Santiago");
     partner.fillLnameInput("Gelabert");
     partner.fillEmail("arkhamlvl2test@gmail.com");
     partner.fillPhone("555 090 998");
     partner.fillCompanyInput("Testing 4 You");
     partner.fillJobTitle("QA Engineer");
     partner.fillCompanyLoc("137967"); //Value for California
     partner.clickLearnMore();
     partner.checkMsg();
 },
};
