import { SessionsPage } from "./sessionsPage"
import { expect } from '@playwright/test'

export const filterByDay = async (page, testData) => {
    const sessionsPage = new SessionsPage(page)

    const { sessionData } = testData
    const { day } = sessionData 
}