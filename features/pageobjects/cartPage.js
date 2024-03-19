const { $$ } = require('@wdio/globals')
const { $ } = require('@wdio/globals')

class cartPage{


    get CartItems(){
        return $$('div[class="cart_item"]')
    }

    get Checkoutbtn(){
        return $('#checkout')
    }

    get CheckoutForm(){
        return $('div[class="checkout_info_wrapper"]')
    }

    get firstname(){
        return $('#first-name')
    }
    get lastname(){
        return $('#last-name')
    }
    get postalCode(){
        return $('#postal-code')
    }

    get continueBtn(){
        return $('#continue')
    }

    get finishBtn(){
        return $('#finish')
    }

    get CartItemsNames(){
        return $$('//div[@class="cart_item"]//div[@class="cart_item_label"]//a//div')
    }

    get orderMessage(){
        return $('h2[class="complete-header"]')
    }

    get orderState(){
        return $('//div[@class="header_secondary_container"]//*[@class="title"]')
    }

    async countCartItems() {
        return await this.CartItems.length;
    }

    async fillCheckoutForm(firstname, lastname, zipcode) {
        await this.firstname.setValue(firstname);
        await this.lastname.setValue(lastname);
        await this.postalCode.setValue(zipcode);
    }

    async VerifyCart(itemName) {
        let productFoundA = false;
        for (const item of await this.CartItemsNames) {
            const text = await item.getText()
            if (await text.includes(itemName)) {
                productFoundA = true;
            }
        }
        return productFoundA;
    }


}

module.exports = new cartPage();
