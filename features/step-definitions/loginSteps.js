const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect} = require('@wdio/globals')
const LoginPage = require('../pageobjects/loginPage');


Given(/^User is on Home Page$/, async () => {
    await LoginPage.open()
});

When(/^user login with username "(.*)" and password "(.*)"$/, async (username, password) => {
	await LoginPage.FillLoginForm(username, password);
	await LoginPage.LoginBtn.click()
});
