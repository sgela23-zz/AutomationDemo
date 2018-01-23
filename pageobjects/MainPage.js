module.exports = {
  url: 'https://sweatworks-dev.ragnarrelay.com/',
  elements: {
    loginButton: {
      selector: '#login'
    },

    partnersTab : {
      selector : '.nav.navbar-nav > li:nth-of-type(5) > a'
    },
   
    roadPartners : {
        selector :'.nav.navbar-nav > li:nth-of-type(5) > ul > li > div > .row > div:nth-of-type(2) >div > div > ul > li:nth-of-type(1)'
    }
  },
    commands: [{

        clickLogin() {
            this
                .waitForElementVisible('@loginButton', 8000)
                .click('@loginButton')
            return this.api;
        },

        clickPartnersTab() {
            this
                .waitForElementVisible('@partnersTab', 8000)
                .click('@partnersTab')
            return this.api;
        },

         clickPartnersRd() {
            this
                .waitForElementVisible('@roadPartners', 8000)
                .click('@roadPartners')
            return this.api;
        },
    }]
};
