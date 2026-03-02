const puppeteer = require("puppeteer");

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

  console.log("Navigating to local og.html...");
  await page.goto("http://localhost:5173/og.html?t=" + Date.now(), {
    waitUntil: "networkidle0",
  });

  // Wait an extra second for web components/fonts to render completely
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const dest = "public/og-image.png";
  console.log(`Saving screenshot to ${dest}...`);
  await page.screenshot({ path: dest });

  await browser.close();
  console.log("Done!");
})();
