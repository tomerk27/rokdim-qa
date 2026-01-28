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
        await this.location.locator('.suggetion-item').first()
        //await this.page.getByRole('button', { name: location, exact: true}).click()
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
        const rows = await this.page.locator('[data-testid="table-row-element"]')
        console.log(rows)
        const rowsCount = await rows.count();
        const sessions = []

        for (let i = 0; i < rowsCount; i++) {
            sessions.push(rows.nth(i))
        }

        return sessions
    }

    async checkFilter(filterParams) {
        const sessions = await this.getSessions()


        for (const session of sessions) {
            for (const filterParam of filterParams) {
                await expect(session.getByText(filterParam)).toBeVisible();
            }
        }
    }
}