import { expect } from '@playwright/test'

export class HeaderPage {
    /**
     * @param {import(@playwright/test).Page} page
     */
    constructor(page) {
        this.page = page
        this.dashboardButton = this.page.getByRole('link', { name: 'logo', exact: true })
        this.sessionsButtondancesButton = this.page.getByRole('link', { name: 'Dances', exact: true })
        this.sessionsButton = this.page.getByRole('link', { name: 'Sessions', exact: true })
        this.teachersButton = this.page.getByRole('link', { name: 'Teachers' })
        this.vipButton = this.page.getByRole('link', { name: 'VIP', exact: true })
        this.aboutUsButton = this.page.getByRole('link', { name: 'About Us' })
        this.rokdimNirkodaButton = this.page.getByRole('link', { name: 'Rokdim-Nirkoda' })
        this.loginButton = this.page.getByRole('link', { name: 'Login/Signup' })
        this.logoutButton = this.page.getByRole('link', { name: '' })
        this.contactButton = this.page.getByRole('link').filter({ hasText: /^$/ }).nth(4)
        this.searchBar = this.page.getByRole('textbox', { name: 'Search', exact: true })
        this.searchButton = this.page.getByRole('button').first()

        this.markidLogo = this.page.getByRole('link', { name: 'markid' })
        this.dunavLogo = this.getByRole('link', { name: 'markid' })
        this.yaronMeisharLogo = this.page.getByRole('link', { name: 'yaron', exact: true })
    }
    
    async clickDashboardButton() {
        await this.dashboardButton.click()
    }

    async clickDancesButton() {
        await this.dancesButton.click()
    }

    async clickSessionsButton() {
        await this.sessionsButton.click()
    }

    async clickTeachersButton() {
        await this.teachersButton.click()
    }

    async clickVipButton() {
        await this.vipButton.click()
    }

    async clickAboutUsButton() {
        await this.aboutUsButton.click()
    }

    async clickRokdimNirkodaButton() {
        await this.rokdimNirkodaButton.click()
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async clickLogoutButton() {
        await this.logoutButton.click()
    }

    async clickContactButton() {
        await this.contactButton.click()
    }

    async searchContent(content) {
        if(content)
            await this.searchBar.fill(content)

        await this.searchButton.click() 
    }

    async checkMarkidSite() {
        await expect(this.page).toHaveURL('http://markid.co.il/')
    }

    async checkDunavSite() {
        await expect(this.page).toHaveURL('https://dunav.org.il/')
    }

    async checkGoingToYaronMeisharPage() {
        await expect(this.page).toHaveText('Mobile Phone: 052-5620447')
    }
}