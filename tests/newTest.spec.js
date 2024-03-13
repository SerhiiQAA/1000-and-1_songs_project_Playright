const {test, expect } = require('@playwright/test')

test('First test', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/')
    await page.locator('input').type('Hello')
    await page.locator('input').press('Enter')
    
})