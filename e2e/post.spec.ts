import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("The Post", async ({ page }) => {
  test.slow();
  await page.goto("https://www.thepost.co.nz/");
  await page.locator(".page-container").first().click();

  // Extract the text content of the h1 element
  const headline = await page
    .locator(
      "div.swiper-slide:nth-child(1) > article:nth-child(1) > header:nth-child(1) > div:nth-child(1) > h1:nth-child(2)"
    )
    .innerText();

  // Write the headline to a file
  const filePath = path.join(process.cwd(), "data", "thepost.txt");
  fs.writeFileSync(filePath, headline);
  page.close();
});
