const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class SignInPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
      }

    getHeaderText(){
        return browser.element(this.selector.header).getText();
    }

    setEmail(){
        this.setValue(this.selector.emailField, 'raffi@vineli.com')
    }

    setPassword(){
        this.setValue(this.selector.passField, 'qatestuser')
    }

    getEmailLabel(){
        return this.getValue(this.selector.emailLabel);
    }

    getPassLabel(){
        return this.getValue(this.selector.passLabel);
    }

}