module.exports = {
  url: 'https://sweatworks-dev.ragnarrelay.com/',
  elements: {

    communityPartnersTitle: {
      selector: '.main-title.mega-title'
    },

    firstName : {
      selector : '#pardot-form > .form-field.first_name.pd-text.required > input'
    },

    lastName : {
      selector : '.form-field.last_name.pd-text.required > input'
    },

    emailAddress : {
      selector : '.form-field.email.pd-text.required > input'
    },
    
    phoneNumber : {
      selector : '.form-field.phone.pd-text > input'
    },

    company : {
      selector : '.form-field.company.pd-text.required > input'
    },

    jobTitle : {
      selector : '.form-field.job_title.pd-text > input'
    },

    companyLocation : {
      selector : '.form-field.state.pd-select > select'
    },

    races : {
        selector : '.form-field.Race.pd-select.required > select'
    },

    learnMore : {
      selector : '.submit > input'
    },
    thankMsg : {
        selector : '.form > p'
    }

  },
    commands: [{

        checkCommunityPartnersTitle(title) {
            this
                .waitForElementVisible('@communityPartnersTitle', 10000)
                .expect.element('@communityPartnersTitle').text.to.equal(title);
            return this.api;
        },

         fillFnameInput(fname) {
            this 
                .waitForElementVisible('@firstName', 12000)
                .setValue('@firstName', fname)
            return this.api;
        },

        fillLnameInput(lName) {
            this
                .waitForElementVisible('@lastName', 8000)
                .setValue('@lastName', lName)
            return this.api;
        },

         fillEmail(email) {
            this
                .waitForElementVisible('@emailAddress', 8000)
                .setValue('@emailAddress', email)
            return this.api;
        },

        fillPhone(phone) {
            this
                .waitForElementVisible('@phoneNumber', 8000)
                .setValue('@phoneNumber', phone)
            return this.api;
        },

        fillCompanyInput(company) {
            this
                .waitForElementVisible('@company', 8000)
                .setValue('@company', company)
            return this.api;
        },

        fillJobTitle(jobTitle) {
            this
                .waitForElementVisible('@jobTitle', 8000)
                .setValue('@jobTitle', jobTitle)
            return this.api;
        },

        fillCompanyLoc(value) {
            this
                .waitForElementVisible('@companyLocation', 8000)
                .click("@companyLocation",()=>{
                   this.click("option[value='"+ value + "']"); 
            });
            return this.api;
        },

        selectRace(value) {
            this
                .waitForElementVisible('@races', 8000)
                .click("@races",()=>{
                   this.click("option[value='"+ value + "']"); 
            });
            return this.api;
        },


        
        clickLearnMore() {
            this
                .waitForElementVisible('@learnMore', 8000)
                .click('@learnMore')
            return this.api;
        },


         checkMsg() {
            this
                .waitForElementVisible('@thankMsg', 10000)
                .expect.element('@thankMsg').text.to.contain('Thank you');
            return this.api;
        },
    

    
    }]
};
