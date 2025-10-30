import { LoginPage } from './loginPage'

export const loginWeb = async(page, email, password, negativeTest) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.fillEmailInput(email)
    await loginPage.fillPaswordInput(password)
    await loginPage.clickLoginButton()

    await loginPage.checkLogin(negativeTest)
}

//export const logoutWeb = async(page) => {
//    const loginPage = new LoginPage(page)
//    
//}