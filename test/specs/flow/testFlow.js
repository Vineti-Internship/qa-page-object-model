const assert = require('assert');
const HomePageObject = require('pages/HomePageObject').default;
const HomeConfig = require('configurations/HomePageConfiguration');
const SignInPageObject = require('pages/SignInPageObject').default;
const SignInConfig = require('configurations/SignInConfiguration');

describe('Amazon', () => {
    describe('Login functionality', () =>{
        let homePageObject = new HomePageObject(HomeConfig);
        let signInPageObject = new SignInPageObject(SignInConfig);
        it('sign in Text is correct', () => {
            homePageObject.navigateToAmazon();
            homePageObject.clickOnAccountList();
            const signInText = signInPageObject.getHeaderText();
            assert.equal(signInText, 'Sign in');
        })

        it('Email lable text is correct', ()=>{
            signInPageObject.setEmail();
            assert(signInPageObject.getEmailLabel(), 'Email (phone for mobile accounts)');
        })

        it('Password label text is correct', ()=> {
            signInPageObject.setPassword();
            assert(signInPageObject.getPassLabel(), 'Password');
        })

    })
})