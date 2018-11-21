const ta = require('trueautomation-helper').ta;

describe('TrueAutomation.IO page', () => {
    xit('should set email to email field', () => {
        browser.url('https://trueautomation.io');
        browser.click('.login-btn');
        browser.click('.sign-up-container a');
        browser.setValue('*[name="email"]', 'your@gmail.com');
    });

    it('should set email to email field', () => {
        browser.url('https://trueautomation.io');
        browser.click(ta('loginBtn', '.login-btn'));
        browser.click(ta('signUpBtn', '.sign-up-container a'));
        browser.setValue(ta('emailFld', '*[name="email"]'), 'your@gmail.com');
    });
});
