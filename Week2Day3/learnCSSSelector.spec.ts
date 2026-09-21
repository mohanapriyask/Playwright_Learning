/* CSS Selector - used for style and design web page

Attribute priority:
1. Aria-label - Accessibiltiy-based, stable, first choice
2. ID - Unique identifier, stable, second choice. fast
3. Name - Form-related, less stable, fourth choice, not always unique
4. Class - Can be reused, less stable, third choice, for styling, changes often -> least reliable
5. Other attributes - Least stable, last choice

1. By ID:
   Syntax: #id
   Example: #username

2. By Class:
   Syntax: .classValue
   Example: .inputLogin

3. By Attribute:
   Syntax: [attributeName="attributeValue"]
   Example: [aria-label="username"], input[name="username"],input[id="username"]

4. Descendant Combinator:
   Syntax: ancestor descendant
   Example: div .inputLogin
*/

import { test } from '@playwright/test';
test('CSS Selector example', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(2000);
    await page.locator('[id="warnSubmit"]').click();
    await page.waitForTimeout(5000);
    //await page.locator('button:has-text("Submit")').click();
    await page.locator('[id="username"]').fill('democsr2');
    await page.locator('[id="password"]').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('text=CRM/SFA').click();
    let pageTitle = await page.title();
    console.log(pageTitle);
    let pageUrl = page.url();
    console.log(pageUrl);
});