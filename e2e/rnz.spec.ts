import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("RNZ", async ({ page }) => {
  await page.goto("https://www.rnz.co.nz/");
  await page.locator("div.o-digest--news").first().click();
  const headline = await page.locator("h1").innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "rnz.txt");
  fs.writeFileSync(filePath, headline);
  page.close();
});
