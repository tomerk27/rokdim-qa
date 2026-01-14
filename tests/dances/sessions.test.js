import { test } from "@playwright/test"
import { createTestData , createSessionsData} from "../../utils/testData"
import { HeaderPage } from "../../pages/header/header"
import { loginWeb } from "../../pages/authenitication/autheniticatiohScenarios"
import { filterByParams } from "../../pages/sessions/sessionPageScenarios"

test.describe('Sessions tests', () => {
    const sessionsData = createSessionsData({day: 'Wednesday'})
    const testData = createTestData({sessionsData})

    test.beforeEach('Test preparations', async ({page}) => {
        const headerPage = new HeaderPage(page)

        await loginWeb(page, testData)

        await headerPage.clickSessionsButton()
    })

    test('Filter by params', async ({page}) => {
        await filterByParams(page, testData)
    })
})