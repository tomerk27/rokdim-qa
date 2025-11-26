import { test } from '@playwright/test'
import { createTestData } from '../../utils/testData'
import { loginWeb, logoutWeb } from '../../pages/authenitication/autheniticatiohScenarios'

test.describe('Successful Log in/out test', () => {

    const testData = createTestData()

    test('Login', async ({page}) => {
        await loginWeb(page, testData, true)
    })

    test('logout', async ({page}) => {
        await loginWeb(page, testData)
        await logoutWeb(page, testData)
    })
})