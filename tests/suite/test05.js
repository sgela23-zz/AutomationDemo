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
     var community = browser.page.CommunityPartnersPage();
     browser.assert.title("Ragnar Home | Find an Overnight Road or Trail Running Relay Near You!");
     main.clickPartnersTab();
     browser.keys('\uE015');
     browser.keys('\uE015');
     browser.keys('\uE015');
     browser.keys('\uE007');
     community.checkCommunityPartnersTitle("COMMUNITY PARTNERS");
     browser.frame(0);// Changing Selenium page scope
     community.fillFnameInput("Santiago");
     community.fillLnameInput("Gelabert");
     community.fillEmail("arkhamlvl2test@gmail.com");
     community.fillPhone("555 090 998");
     community.fillCompanyInput("Testing 4 You");
     community.fillJobTitle("QA Engineer");
     community.fillCompanyLoc("2141"); //Value for California
     community.selectRace("180753");
     community.clickLearnMore();
     community.checkMsg();
    
},
};
