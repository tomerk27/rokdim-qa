import { HeaderPage } from "./header";

export const gotoMarkidSite = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.markidLogo.click()

    await headerPage.checkMarkidSite()
}

export const gotoDunavSite = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.dunavLogo.click()

    await headerPage.checkDunavSite()
}

export const gotoYaronMeisharPage = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.yaronMeisharLogo.click()

    await headerPage.checkGoingToYaronMeisharPage()
}

export const gotoSessionsPage = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.clickSessionsButton()

    await headerPage.checkSessionsClick()
}

export const gotoDancesPage = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.clickDancesButton()

    await headerPage.checkDancesClick()
}

export const gotoTeachersPage = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.clickTeachersButton()

    await headerPage.checkTeachersClick()
}

export const gotoVipPage = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.clickVipButton()

    await headerPage.checkVipClick()
}

export const gotoAboutUsPage = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.clickAboutUsButton()

    await headerPage.checkAboutUsClick()
}

export const gotoRokdimNirkodaPage = async (page) => {
    const headerPage = new HeaderPage(page)
    await headerPage.clickRokdimNirkodaButton()

    await headerPage.checkRokdimNirClick()
}