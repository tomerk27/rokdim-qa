import { HeaderPage } from "./header";

export const gotoMarkidSite = async(page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.markidLogo.click()

    await headerPage.checkMarkidSite()
}

export const gotoDunavSite = async(page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.dunavLogo.click()

    await headerPage.checkDunavSite()
}

export const gotoYaronMeisharPage = async(page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.yaronMeisharLogo.click()

    await headerPage.checkGoingToYaronMeisharPage()
}