import { test } from '@playwright/test';
test('CSS Selector example', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");

    
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
       
    await page.waitForTimeout(2000);
    await page.locator('[id="warnSubmit"]').click();
    await page.waitForTimeout(5000);
     // Set zoom to 80%
    /* await page.evaluate(() => {
        document.body.style.zoom = '80%';
    }); */
    await page.locator('[id="username"]').fill('democsr2');
    await page.locator('[id="password"]').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator('text=CRM/SFA').click();
    let pageTitle = await page.title();
    console.log(pageTitle);
    let pageUrl = page.url();
    console.log(pageUrl);
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    await page.locator('[id="createLeadForm_companyName"]').fill('SES');
    await page.locator('[id="createLeadForm_firstName"]').fill('Mohanapriya');
    await page.locator('[id="createLeadForm_lastName"]').fill('Sampathkumar');
    await page.locator('[id="createLeadForm_firstNameLocal"]').fill('Mohanapriya');
    await page.locator('[id="createLeadForm_lastNameLocal"]').fill('Sampathkumar');
    await page.locator('[id="createLeadForm_personalTitle"]').fill('Mrs');
    await page.locator('[id="createLeadForm_generalProfTitle"]').fill('Senior Analyst');
    await page.locator('[id="createLeadForm_annualRevenue"]').fill('2400000');
    await page.locator('[id="createLeadForm_departmentName"]').fill('QA');
    //await page.locator('[id="createLeadForm_dataSourceId"]').click()
    const dropdownValues = await page.locator('[id="createLeadForm_dataSourceId"]').allTextContents();
    for (const value of dropdownValues) {
        console.log(value.trim());
    }
    //await page.locator('[id="createLeadForm_dataSourceId"]').selectOption('Conference');
    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('9962262508');
    await page.locator('[name="submitButton"]').click();
    /* let pageTitle1 = await page.title();
   console.log(pageTitle1);
   let pageUrl1 = page.url();
   console.log(pageUrl1); */

    await page.waitForLoadState('load')
});