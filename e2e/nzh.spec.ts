import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("NZ Herald", async ({ page }) => {
  test.slow();
  await page.goto("https://www.nzherald.co.nz/");
  await page.waitForTimeout(3000);
  await page.locator(".story-card__image-link").first().force.click();
  const headline = await page.locator("h1").innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "nzh.txt");
  fs.writeFileSync(filePath, headline);
  page.close;
});
