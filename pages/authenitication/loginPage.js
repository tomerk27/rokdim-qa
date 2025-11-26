import { expect } from "@playwright/test"
export class LoginPage {
    /**
     * @param {import(@playwright/test).Page} page 
     */
    constructor(page) {
        this.page = page

        this.emailInput = this.page.locator('form').filter({ hasText: 'EmailPassword (min 6' }).locator('input[type="text"]')
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password (min 6 characters)' })
        this.loginButton = this.page.getByRole('button', { name: 'Login', exact: true })
        this.registerLink = this.page.getByRole('link', { name: 'Register' })
    }

    async fillLoginForm(loginData){
        const {email, password} = loginData

        if(email)
            await this.emailInput.fill(email)

        if(password)
            await this.passwordInput.fill(password)
    }
    async clickLoginButton(){
        await this.loginButton.click()
    }

    async clickRegisterLink(){
        await this.registerLink.click()
    }

    async checkLogin(negativeTest, userData) {
        const {username} = userData

        if(!negativeTest){
            await expect(this.page.getByText(username)).toBeVisible()
        }
        else{
            await expect(this.loginButton).toBeVisible()
        }
    }
}