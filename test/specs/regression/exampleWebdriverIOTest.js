describe('TrueAutomation.IO page webdirverio', () => {
    it('should set email to email field', () => {
        browser.url('https://trueautomation.io');
        browser.click('.login-btn');
        browser.click('.sign-up-container a');
        browser.setValue('*[name="email"]', 'your@gmail.com');
    });
});
