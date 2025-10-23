import {expect} from '@playwright/test'
import { LoginPage } from './loginPage'

export const loginWeb = async(page, email, password, negativeTest) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.fillEmailInput(email)
    await loginPage.fillPaswordInput(password)
    await loginPage.clickLoginButton()

    if(!negativeTest){
        await expect(page).toHaveURL('rokdim.co.il')
    }
    else
        await expect(page).toHaveURL('https://rokdim.co.il/login?redirect=%2F')
}

export const logoutWeb = async(page) => {

}