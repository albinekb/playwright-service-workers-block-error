import { chromium } from 'playwright'

console.log('Launching browser...')
const browser = await chromium.launch({ headless: true })

const context = await browser.newContext({ serviceWorkers: 'block' })
const page = await context.newPage()
console.log('Page created')

page.on('pageerror', (error) => {
  console.error('\n\nPage error:\n', `URL: ${page.url()}\n`, error, '\n\n')
})
console.log('Going to google.com...')
await page.goto('https://google.com')
console.log('Went to google.com, going back...')
await page.goBack()
console.log('goBack done, closing browser...')

await context.close()
await browser.close()

console.log('Browser closed')
