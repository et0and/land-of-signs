import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("Business Desk", async ({ page }) => {
  await page.goto("https://businessdesk.co.nz/");
  await page.locator("h1.card-title").first().click();

  // Extract the text content of the h1 element
  const headline = await page.locator(".article-title").innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "bd.txt");
  fs.writeFileSync(filePath, headline);
});
