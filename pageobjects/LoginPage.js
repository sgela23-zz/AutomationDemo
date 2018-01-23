module.exports = {
  elements: {
    
    loginTitle: {
     selector: '#checkoutLoginForm> fieldset > legend'
    },
  //This is another way to select an element, going through a full CSS mapping
    emailInput: {
      selector: '.tab-pane.loginPageContainer.active.loginOnly > * .form-group:nth-of-type(1) > div > div > input'
    },
  //Common CSS ID selector
    pwdInput: {
      selector: '#checkoutLoginPassword'
    },

    accountLogin: {
      selector : '#checkoutLoginBtn'
    },

    createAccountLink: {
      selector : '.help-block.validationMsg.createAccount > small > a'
    },

    accountTitle: {
      selector: '#checkoutRegisterForm> fieldset > legend'
    },

    //// ------ need to create commands for elements below ----- //// 

    firstName : {
      selector : '.tab-pane.active.loginPageContainer.registerOnly > * .form-group:nth-of-type(1) > * input'
    },

    lastName : {
      selector : '.tab-pane.active.loginPageContainer.registerOnly > * .form-group:nth-of-type(2) > * input'
    },

    emailAddress : {
      selector : '.tab-pane.active.loginPageContainer.registerOnly > * .form-group:nth-of-type(3) > * input'
    },

    createPwd : {
      selector : '.tab-pane.active.loginPageContainer.registerOnly > * .form-group:nth-of-type(4) > * input'
    },

    reTapePwd : {
      selector : '.tab-pane.active.loginPageContainer.registerOnly > * .form-group:nth-of-type(5) > * input'
    },

    createAccountBtn : {
      selector : '.tab-pane.active.loginPageContainer.registerOnly > * .form-group:nth-of-type(6) > * button'
    },

    accountOverview : {
      selector : '.active > a'
    }


  },
    commands: [{

      checkTitleLogin(titleLogin) {
            this
                .waitForElementVisible('@loginTitle', 10000)
                .expect.element('@loginTitle').text.to.equal(titleLogin);
            return this.api;
        },

        fillEmailInput(mail) {
            this
                .waitForElementVisible('@emailInput', 10000)
                .setValue('@emailInput', mail)
            return this.api;
        },
        fillPwdInput(pwd) {
            this
                .waitForElementVisible('@pwdInput', 8000)
                .setValue('@pwdInput', pwd)
            return this.api;
        },
        clickLoginBtn() {
            this
                .waitForElementVisible('@accountLogin', 8000)
                .click('@accountLogin')
            return this.api;
        },
        clickCreateAccount() {
            this
                .waitForElementVisible('@createAccountLink', 8000)
                .click('@createAccountLink')
            return this.api;
        },
        checkTitleNewAccount(titleAccount) {
            this
                .waitForElementVisible('@accountTitle', 10000)
                .expect.element('@accountTitle').text.to.equal(titleAccount);
            return this.api;
        },
        fillFnameInput(fname) {
            this
                .waitForElementVisible('@firstName', 8000)
                .setValue('@firstName', fname)
            return this.api;
        },
        fillLnameInput(lastName) {
            this
                .waitForElementVisible('@lastName', 8000)
                .setValue('@lastName', lastName)
            return this.api;
        },
         fillEmailNewAccount(email) {
            this
                .waitForElementVisible('@emailAddress', 8000)
                .setValue('@emailAddress', email)
            return this.api;
        },
         fillCreatePwdInput(pwd) {
            this
                .waitForElementVisible('@createPwd', 8000)
                .setValue('@createPwd', pwd)
            return this.api;
        },
         fillRePwdInput(repwd) {
            this
                .waitForElementVisible('@reTapePwd', 8000)
                .setValue('@reTapePwd', repwd)
            return this.api;
        },
        clickCreateAccountBtn() {
            this
                .waitForElementVisible('@createAccountBtn', 8000)
                .click('@createAccountBtn')
            return this.api;
        },

        checkAccountIsLogged() {
            this
                .waitForElementVisible('@accountOverview', 10000)
                .expect.element('@accountOverview').text.to.equal("Account Overview");
            return this.api;
        }

    }]
};
