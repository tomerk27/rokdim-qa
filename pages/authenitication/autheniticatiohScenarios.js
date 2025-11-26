import { LoginPage } from './loginPage'
import { goToMainPage } from '../../utils/utils'
import { HeaderPage } from '../header/header'

export const loginWeb = async(page, testData, negativeTest) => {
    const {userData} = testData

    const headerPage = new HeaderPage(page)
    const loginPage = new LoginPage(page)

    await goToMainPage(page)
    await headerPage.clickLoginButton()

    await loginPage.fillLoginForm(userData)
    await loginPage.clickLoginButton()

    await loginPage.checkLogin(negativeTest, userData)
}

export const logoutWeb = async(page, testData) => {
    const {userData} = testData

    const headerPage = new HeaderPage(page)

    await headerPage.clickLogoutButton()
    await headerPage.checkLogout(userData)         
}