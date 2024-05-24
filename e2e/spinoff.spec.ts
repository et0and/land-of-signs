import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("The Spinoff", async ({ page }) => {
  test.slow();
  await page.goto("https://thespinoff.co.nz/");
  await page.waitForTimeout(3000);
  await page
    .locator(
      "#homelading > section > section.flexCol1.flexFeature > article > div.body > a"
    )
    .first()
    .click();

  // Extract the text content of the h1 element
  const headline = await page
    .locator(".layout-article-header > h1:nth-child(4)")
    .innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "spinoff.txt");
  fs.writeFileSync(filePath, headline);

  await page.close();
});
