import { expect } from "@playwright/test"

export class SessionsPage {
    /**
     * @param {import(@playwright/test).Page} page 
     */
    constructor(page) {
        this.page = page
        this.location = this.page.getByRole('textbox', { name: 'Location: Enter address or' })
        this.day = this.page.getByRole('button', { name: 'choose Day' })
        this.guide = this.page.getByRole('textbox', { name: 'Guide' })
        this.type = this.page.getByRole('button', { name: 'choose Type' })
    }

    async fillLocation(location) {
        await this.location.fill(location)
        const firstSuggestion = await this.location.locator('.suggestion-item').first().click()
        await firstSuggestion.wairFor({state: 'visible'})
        await firstSuggestion.click()
    }

    async fillDay(day) {
        await this.day.click()
        await this.page.getByRole('button', { name: day, exact: true }).click()
    }

    async fillGuide(guide) {
        await this.guide.fill(guide)
        await this.page.getByTestId('flowbite-card').getByRole('button', { name: guide }).click();
    }

    async fillType(type) {
        await this.type.click()
        await this.page.getByRole('button', { name: type, exact: true }).click()
    }

    async getSessions() {
        await this.page.waitForSelector('[data-testid="table-row-element"]');
        const rows = this.page.locator('[data-testid="table-row-element"]')
        console.log(rows)
        return rows
    }

    async checkFilter(filterParams) {
        const sessions = await this.getSessions()
        const count = await sessions.count()

        for (let i = 0; i < count; i++) {
            const session = sessions.nth(i)
            for (const filterParam of filterParams) {
                await expect(session.getByText(filterParam)).toBeVisible();
            }
        }
    }
}