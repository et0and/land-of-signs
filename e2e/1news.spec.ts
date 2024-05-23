import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("1News", async ({ page }) => {
  test.slow();
  await page.goto("https://www.1news.co.nz/");
  await page
    .locator(
      ".default__StyledMainStory-sc-zw9hsb-0 > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)"
    )
    .first()
    .click();

  // Extract the text content of the h1 element
  const headline = await page
    .locator(".default__SyledHeadline-sc-ht8few-1")
    .innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "1news.txt");
  fs.writeFileSync(filePath, headline);
  page.close;
});
