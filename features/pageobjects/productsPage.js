const { $$ } = require('@wdio/globals')
const { $ } = require('@wdio/globals')

class productPage{


    get CartBtn(){
        return $('div[class="shopping_cart_container"]')
    }

    get AddToCart(){
        return $('button[class="btn btn_primary btn_small btn_inventory"]')
    }

    get Items(){
        return $$('//div[@class="inventory_item"]//div[@class="inventory_item_description"]//a//div')
    }

    get twitterIcon(){
        return $('*[class="social_twitter"]')
    }

    async scrollintoBrowser(Value){
        await browser.scroll(0,Value)
    }

    async AddSearchitem(itemName){
        for (const item of await this.Items) {
            const itemId = await item.getText();
            if(itemId.includes(itemName)){
                await item.click();
                await this.AddToCart.waitForDisplayed()
                await this.AddToCart.click();
                await browser.back();
            }
        }
    }

}

module.exports = new productPage();
