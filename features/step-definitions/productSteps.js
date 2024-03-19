const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect} = require('@wdio/globals')
const ProductPage = require('../pageobjects/productsPage');

When(/^user click on cart button$/, async () => {
	await ProductPage.CartBtn.click();
});

Then(/^Verify user is loggedin$/, async () => {
	await browser.pause(5000)
	await (await ProductPage.CartBtn).isDisplayed();
});

Then(/^Verify twitter Logo$/, async () => {
	browser.execute(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
	(await ProductPage.twitterIcon).isDisplayed()
});

When(/^user add "(.*)" into cart$/, async (SearchItems) => {
    const items = SearchItems.split(',');
    for (let item of items) {
        await ProductPage.AddSearchitem(item)
		await browser.pause(1000)
    }
});
