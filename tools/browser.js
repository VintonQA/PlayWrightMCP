const { initBrowser } = require('../utils/playwright');

async function openPage(url) {
  const page = await initBrowser();

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  return {
    success: true,
    url: page.url(),
    title: await page.title()
  };
}

module.exports = { openPage };