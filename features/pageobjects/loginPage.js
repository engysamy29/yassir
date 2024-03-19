

class Login{


    get Username(){
        return $('#user-name')
    }

    get Password(){
        return $('#password')
    }

    get LoginBtn(){
        return $('#login-button')
    }

    async FillLoginForm(name, password){
        await this.Username.setValue(name);
        await this.Password.setValue(password);
    }

    async open(){
        await browser.url('https://www.saucedemo.com/');
    }

}

module.exports = new Login();
