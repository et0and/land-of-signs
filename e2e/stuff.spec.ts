import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("Stuff", async ({ page }) => {
  await page.goto("https://stuff.co.nz/");
  await page.locator("#stories-for-1-module-350287958").first().click();
  const headline = await page.locator("h1").innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "stuff.txt");
  fs.writeFileSync(filePath, headline);
});
