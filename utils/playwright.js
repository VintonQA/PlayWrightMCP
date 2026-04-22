const { chromium } = require('playwright');

let browser;
let page;

async function initBrowser() {
  if (!browser) {
    browser = await chromium.launch({
      headless: false,      // 👈 show browser
      slowMo: 100           // 👈 slow actions for visibility
    });

    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 }
    });

    page = await context.newPage();
  }

  return page;
}

function getPage() {
  if (!page) {
    throw new Error('Page not initialized. Call openPage first.');
  }

  if (page.isClosed()) {
    throw new Error('Page is closed. Re-run openPage.');
  }

  return page;
}

module.exports = {
  initBrowser,
  getPage
};