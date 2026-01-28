import { test } from "@playwright/test"
import { HeaderPage } from "../../pages/header/header"
import { loginWeb } from "../../pages/authenitication/autheniticatiohScenarios"
import { filterByParams } from "../../pages/sessions/sessionPageScenarios"
import { SESSIONS_TEST_DATA } from "./sessions-testData"

const prepareSessionsSearchTest = async (data) => {
    const { page, testData } = data
    const headerPage = new HeaderPage(page)

    await loginWeb(page, testData)

    await headerPage.clickSessionsButton()
}

for (const testData of SESSIONS_TEST_DATA) {
    const { testDescription } = testData
    test.describe('Sessions search', () => {
        test(`Filter by ${testDescription}`, async ({ page }) => {
            await prepareSessionsSearchTest({ page, testData })
            await filterByParams(page, testData)
        })
    })
}