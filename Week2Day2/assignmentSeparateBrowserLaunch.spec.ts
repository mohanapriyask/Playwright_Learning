import { chromium, test } from 'playwright/test';

test('Launch Chrome and Edge Separately', async () => {
    const edgeBrowser = await chromium.launch({
        channel: 'msedge',
        headless: false
    });
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();
    await edgePage.goto('https://www.redbus.in');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('Edge URL:', edgePage.url());
    await edgeBrowser.close();

    const chromeBrowser = await chromium.launch({
        channel: 'chrome',
        headless: false
    });
    test.setTimeout(60000);
    const chromeContext = await chromeBrowser.newContext();
    const chromePage = await chromeContext.newPage();
    await chromePage.goto('https://www.flipkart.com', {
        waitUntil: 'domcontentloaded',
        timeout: 120000
    })
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('Chrome URL:', chromePage.url());
    await chromeBrowser.close();
});