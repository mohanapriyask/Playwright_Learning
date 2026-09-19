/* browser - actual browser engine that launches the browser
context - isolated browser session/incognito session
page-opens the page/tab within the context  */

import {chromium, test} from '@playwright/test';

 /* test('learn to launch the browser', async () => {      

   const browser = await chromium.launch({channel: 'msedge',headless: false});
   const context = await browser.newContext();
   const page = await context.newPage();    
   //await page.goto("https://fleetvision.web-ns-lu1-d-01.spo.internal.ses.com/");
   await page.goto("https://www.amazon.in/");          
   await browser.close();

}); */

test('learn to launch the browser', async ({page}) => {      
    
   await page.goto("https://www.amazon.in/");         

});