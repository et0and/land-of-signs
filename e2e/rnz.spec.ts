import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("RNZ", async ({ page }) => {
  test.slow();
  await page.goto("https://www.rnz.co.nz/");
  await page.waitForTimeout(3000);
  await page.locator(".o-digest__headline").first().click();
  const headline = await page.locator(".c-story-header__headline").innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "rnz.txt");
  fs.writeFileSync(filePath, headline);

  await page.close();
});
