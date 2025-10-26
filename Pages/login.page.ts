import { Page } from '@playwright/test';
import { LoginLocators } from '../Locators/login.locators';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.fill(LoginLocators.usernameField, username);
    await this.page.fill(LoginLocators.passwordField, password);
    await this.page.click(LoginLocators.loginButton);
  }

  async navigateToDevZone() {

  await this.page.click(LoginLocators.clickNavToDZ);
  // Wait for the new page (tab) to open after clicking
  
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent('page'),  // Wait for new page
    this.page.click(LoginLocators.navToDZ)     // This action opens the new tab
  ]);

  // Wait until the new page is fully loaded
  await newPage.waitForLoadState('domcontentloaded');

  // Now you can perform actions in the new page
  await newPage.click(LoginLocators.buildClick);
  await newPage.click(LoginLocators.pageClick);

  await this.page.bringToFront();

  await this.page.click(LoginLocators.clickNavToDZ);
  await this.page.click(LoginLocators.navToDZ);
}
}
