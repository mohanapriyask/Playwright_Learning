import { test, chromium, expect } from '@playwright/test';
 
test('Launch Chrome and Edge in parallel', async () => {

const [chromeBrowser, edgeBrowser] = await Promise.all([

chromium.launch({ channel: 'chrome', headless: false }),

chromium.launch({ channel: 'msedge', headless: false })

]);

const [chromePage, edgePage] = await Promise.all([
chromeBrowser.newPage(),
edgeBrowser.newPage()
]);
 
await Promise.all([
chromePage.goto('https://www.flipkart.com'),
edgePage.goto('https://www.redbus.in')
]);

await expect(chromePage).toHaveURL(/flipkart/);
await expect(edgePage).toHaveURL(/redbus/);
await Promise.all([
chromeBrowser.close(),
edgeBrowser.close()
]);
26
});