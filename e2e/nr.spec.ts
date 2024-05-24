import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("Newsroom", async ({ page }) => {
  await page.goto("https://newsroom.co.nz/");
  await page.waitForTimeout(3000);
  await page
    .locator(
      "#post-98872 > div > div.wp-block-group.is-style-default > div > div > div > div > div:nth-child(1) > div > div > article > div > h2 > a"
    )
    .first()
    .click();

  // Extract the text content of the h1 element
  const headline = await page.locator("h1").innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "nr.txt");
  fs.writeFileSync(filePath, headline);

  await page.close();
});
