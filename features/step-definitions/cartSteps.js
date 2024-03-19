const { When, Then } = require('@wdio/cucumber-framework');
const CartPage = require('../pageobjects/cartPage')


When(/^user click checkout button$/, async () => {
	await CartPage.Checkoutbtn.click()
});

Then(/^Verify "(.*)" items added correctly$/, async (itemsNumbers) => {
	await expect(await CartPage.countCartItems()).equal(await Number(itemsNumbers))
});

Then(/^Verify that Checkout form appears$/, async () => {
	await CartPage.CheckoutForm.isDisplayed()
});

When(/^user firstname "(.*)", "(.*)" lastname, and "(.*)" zipCode$/, async (firstname, lastname, zipcode) => {
	await CartPage.fillCheckoutForm(firstname,lastname,zipcode)
	await CartPage.continueBtn.click()
});

Then(/^Verify that "(.*)" displayed in cart$/, async (itemName) => {
	const result = await CartPage.VerifyCart(itemName)
	expect(result).to.be.true;
});

When(/^user click finish button$/, async () => {
	await CartPage.finishBtn.click()
});

Then(/^Verify Order placed succefully$/, async () => {
	expect(await CartPage.orderMessage.getText()).contain("Thank you")
	expect(await CartPage.orderState.getText()).contain("Complete")
});
