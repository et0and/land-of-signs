import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("RNZ", async ({ page }) => {
  test.slow();
  await page.goto("https://www.rnz.co.nz/");
  await page.waitForTimeout(3000);
  await page.locator("#documentContent > div > div.t-home-top > div > div.c-top-stories__primary.primary.layout--lead_story.has-secondary.item-count--3 > div > div.o-digest__detail > h3 > a").first().click();
  const headline = await page.locator("#documentContent > div.content__primary.u-divider-bottom\@until-medium > div > header > h1").innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "rnz.txt");
  fs.writeFileSync(filePath, headline);

  await page.close();
});
