export class AdvancedSearchPage {
    /**
     * @param {import(@playwright/test).Page} page 
     */
    constructor(page) {
        this.page = page
        this.danceName = this.page.getByRole('textbox').nth(2)
        this.choreographers = this.page.getByRole('textbox', { name: 'Choreographers' })
        this.performers = this.page.getByRole('textbox', { name: 'Performers' })
        this.lyricists = this.page.getByRole('textbox', { name: 'Lyricists' })
        this.composers = this.page.getByRole('textbox', { name: 'Composers' })
        this.shape = this.page.getByRole('combobox')
        this.yearFrom = this.page.locator('div:nth-child(7) > .w-full.h-auto > .flex > .relative > .ext-gray-900')
        this.yearTo = this.page.locator('div:nth-child(8) > .w-full.h-auto > .flex > .relative > .ext-gray-900')
        this.searchButton = this.page.getByRole('button', { name: 'Search' })
    }

    async fillDanceName(dance) {
        await this.danceName.fill(dance)  
    }

    async fillChoregraphers(choreographers) {
        await this.choreographers.fill(choreographers)
    }

    async fillPerformers(performers) {
        await this.performers.fill(performers)
    }

    async fillLyricists(lyricists) {
        await this.lyricists.fill(lyricists)
    }

    async fillComposers(composers) {
        await this.composers.fill(composers)
    }

    async chooseShape(shape) {
        await this.shape.selectOption(shape)
    }
    
    async fillYearFrom(yearFrom) {
        await this.yearFrom.fill(yearFrom)
    }

    async fillYearTo(yearTo) {
        await this.yearTo.fill(yearTo)
    }

    async clickSearch() {
        await this.searchButton.click()
    }
}