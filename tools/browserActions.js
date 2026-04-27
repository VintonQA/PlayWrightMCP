let page;

// You must already be setting page somewhere in your browser tool
function setPage(p) {
  page = p;
}

// ================= CLICK =================
async function click(selector) {
  console.log(`🖱️ Clicking selector: ${selector}`);

  await page.waitForSelector(selector, { timeout: 5000 });
  await page.click(selector);

  return true;
}

// ================= TYPE (FIXED) =================
async function type(selector, value) {
  console.log(`⌨️ Typing into: ${selector} → ${value}`);

  await page.waitForSelector(selector, { timeout: 5000 });

  await page.focus(selector);

  // 🔥 Clear existing value properly
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.value = "";
  }, selector);

  // 🔥 REAL typing (React-safe)
  await page.keyboard.type(value, { delay: 100 });

  return true;
}

module.exports = { click, type, setPage };