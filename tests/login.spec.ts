import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login.page';
import Credentials from '../Utilities/login.json';
import testData1 from '../Utilities/config.json'

test.describe.serial(`Login tests using 2 different data set in serial mode`,async () => {
for(let data of Credentials){
test(`Login into Quickly app by reading data from JSON ${data.testCaseID},${data.description}`, async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto(testData1[0].baseUrl);
  await page.waitForLoadState('networkidle');
  await loginPage.login(data.username,data.password);
  await page.waitForTimeout(5000);
  await loginPage.navigateToDevZone();
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
  await page.waitForTimeout(5000);
})
}

});
