const { chromium } = require('playwright');

let browser;
let page;

async function initBrowser() {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
  }
  return page;
}

function getPage() {
  if (!page) {
    throw new Error('Page not initialized. Call openPage first.');
  }
  return page;
}

module.exports = {
  initBrowser,
  getPage
};