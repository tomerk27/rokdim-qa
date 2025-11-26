export class SessionsPage {
    /**
     * @param {import(@playwright/test).Page} page 
     */
    constructor(page) {
        this.page = page
        this.location = page.getByRole('textbox', { name: 'Location: Enter address or' })
        this.day = page.getByRole('button', { name: 'choose Day' })
        this.guide = page.getByRole('textbox', { name: 'Guide' })
        this.type = page.getByRole('button', { name: 'choose Type' })
    }

    async fillLocation(location) {
        await this.location.fill(location)
    }

    async fillDay(day) {
        await this.day.click()
        await this.page.getByRole('button', { name: day }).click()
    }

    async fillGuide(guide) {
        await this.guide.fill(guide)
    }

    async fillType(type) {
        await this.type.click()
        await this.page.getByRole('button', { name: type }).click()
    }

    async getAllSessions() {
        const rows = await this.page.locator('[data-testid="table-row-element"]');
        const rowsCount = await rows.count();

        const sessions = []

        for(let i; i < rowsCount; i++) {
            sessions.push(rows.nth(i))
        }     
        return sessions   
    }
}