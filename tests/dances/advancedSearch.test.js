import { test } from '@playwright/test'
import { createTestData } from '../../utils/testData'
import { HeaderPage } from '../../pages/header/header'
import { searchDance } from '../../pages/dances/advanced-search/advencedSearchScenarios'
import { loginWeb } from '../../pages/authenitication/autheniticatiohScenarios'

test.describe('Advanced search test', () => {

    const testData = createTestData()
    
    test.beforeEach('Search preparations', async ({page}) => {
        const headerPage = new HeaderPage(page)

        await loginWeb(page, testData)

        await headerPage.clickDancesButton()
    })

    test('Search dance', async ({page}) => {
        await searchDance(page, testData)
    })
})