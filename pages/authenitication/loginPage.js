export class LoginPage {
    /**
     * @param {import(@playwright/test).Page} page 
     */
    constructor(page) {
        this.page = page

        this.emailInput = this.page.locator('input[type="text"]')
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password (min 6 characters)' })
        this.loginButton = this.page.getByRole('button', { name: 'Login'})
        this.registerLink = this.page.getByRole('link', { name: 'Register' })
    }

    async fillEmailInput(email) {
        await this.emailInput.fill(email)
    }

    async fillPaswordInput(password){
        await this.passwordInput.fill(password)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }

    async clickRegisterLink(){
        await this.registerLink.click()
    }
}