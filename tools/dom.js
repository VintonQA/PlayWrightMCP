const { getPage } = require('../utils/playwright');

async function getDOM() {
  const page = getPage();

  const data = await page.evaluate(() => {
    const inputs = Array.from(document.querySelectorAll('input')).map(el => ({
      name: el.name || '',
      type: el.type || '',
      placeholder: el.placeholder || ''
    }));

    const buttons = Array.from(document.querySelectorAll('button')).map(el => ({
      text: el.innerText.trim()
    }));

    const links = Array.from(document.querySelectorAll('a')).map(el => ({
      text: el.innerText.trim(),
      href: el.href
    }));

    return { inputs, buttons, links };
  });

  return data;
}

module.exports = { getDOM };