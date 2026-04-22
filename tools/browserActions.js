const { getPage } = require('../utils/playwright');

async function click(selector) {
  const page = getPage();

  await page.click(selector);

  return {
    success: true,
    action: 'click',
    selector
  };
}

async function type(selector, text) {
  const page = getPage();

  await page.fill(selector, text);

  return {
    success: true,
    action: 'type',
    selector,
    text
  };
}

module.exports = { click, type };