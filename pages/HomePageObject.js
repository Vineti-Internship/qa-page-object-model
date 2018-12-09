const BasePageObject = require('./BasePageObject.js').default

module.exports['default'] = class HomePageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
    }

    navigateToAmazon(){
        this.open('https://www.amazon.com/');
    }

    clickOnAccountList(){
        this.click(this.selector.accountList);
    }

    getHeaderText(){
        return browser.element(this.selector.header).getText();
    }

}