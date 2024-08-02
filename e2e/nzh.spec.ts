import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("NZ Herald", async ({ page }) => {
  test.slow();
  test.setTimeout(120000); // Increase timeout to 2 minutes

  await test.step("Navigate to NZ Herald", async () => {
    await page.goto("https://www.nzherald.co.nz/", { waitUntil: 'networkidle' });
  });

  await test.step("Close toaster if present", async () => {
    try {
      await page.locator("#toaster-close").click({ timeout: 5000 });
    } catch (error) {
      console.log("Toaster not found or couldn't be closed");
    }
  });

  await test.step("Click on first article", async () => {
    await page.locator("article h2").first().click();
  });

  await test.step("Extract headline", async () => {
    const headline = await page.locator("h1").innerText({ timeout: 10000 });

    // Write the headline to a file
    const filePath = path.join(process.cwd(), "data", "nzh.txt");
    fs.writeFileSync(filePath, headline);
  });
});
