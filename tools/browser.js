const { initBrowser } = require('../utils/playwright');
const { setPage } = require('./browserActions'); // 🔥 IMPORTANT

async function openPage(url) {
  const page = await initBrowser();

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 🔥 SHARE PAGE WITH ACTIONS
  setPage(page);

  return {
    success: true,
    url: page.url(),
    title: await page.title()
  };
}

module.exports = { openPage };