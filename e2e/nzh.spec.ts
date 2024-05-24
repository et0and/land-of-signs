import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("NZ Herald", async ({ page }) => {
  test.slow();
  await page.goto("https://www.nzherald.co.nz/");
  await page.waitForTimeout(3000);
  await page.locator("#toaster-close").click();
  await page
    .locator(
      "#main > section.section-chain.section-chain-with-native.section-chain-with-native--triple-hero-list.section-chain--triple-hero-list > div > div.chain-main > article > div > div > a > div.story-card__heading-wrapper > h2"
    )
    .first()
    .click();
  const headline = await page.locator("h1").innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "nzh.txt");
  fs.writeFileSync(filePath, headline);

  await page.close();
});
