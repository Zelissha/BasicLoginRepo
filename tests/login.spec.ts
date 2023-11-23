import { expect, test } from "@playwright/test";
import { SecureAreaPage } from "../pages/SecureAreaPage";

import { LoginPage } from "../pages/loginPage";



test("Testing Login Functionality", async ({ page }) => {
 
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("tomsmith", "SuperSecretPassword!");

  const succes = new SecureAreaPage(page);

  console.log(succes.checkThePage());

  await expect(await succes.checkThePage()).toContainText("You logged into a secure area!");
});


test("Testing Negative Login Scenario", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login("invalid_username", "invalid_password");
  await expect(await Login.errormessage).toContainText("invalid");
});

test("Testing Negative Login Scenario2", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login("tomsmith", "invalid_password");
  await expect(await Login.wrongPassworderror).toContainText("password");
});



