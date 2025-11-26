import { AdvancedSearchPage } from "./advancedSearchPage";
import { expect } from '@playwright/test'

export const searchDance = async(page, testData) => {
    const { danceData } = testData
    const { 
        danceName, 
        choreographers, 
        performers, 
        lyricists, 
        composers, 
        shape, 
        yearFrom, 
        yearTo,
        negativeTest
    } = danceData

    const advancesSearchPage = new AdvancedSearchPage(page)

    danceName && await advancesSearchPage.fillDanceName(danceName)
    choreographers && await advancesSearchPage.fillChoregraphers(choreographers)
    performers && await advancesSearchPage.fillPerformers(performers)
    lyricists && await advancesSearchPage.fillLyricists(lyricists)
    composers && await advancesSearchPage.fillComposers(composers)
    shape && await advancesSearchPage.chooseShape(shape)
    yearFrom && await advancesSearchPage.fillYearFrom(yearFrom)
    yearTo && await advancesSearchPage.fillYearTo(yearTo)

    await advancesSearchPage.clickSearch()

    if(!negativeTest)
        await expect(page.locator('[data-testid="table-row-element"]').nth(0)).toBeVisible()
    else
        await expect(page.locator('[data-testid="table-row-element"]').nth(0)).not.toBeVisible()
}