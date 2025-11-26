import dotenv from 'dotenv'
import { expect } from '@playwright/test'

dotenv.config()

export const goToMainPage = async (page) => {
    await page.goto(process.env.BASE_URL_WEB)
    await expect(page).toHaveURL(process.env.BASE_URL_WEB)
}