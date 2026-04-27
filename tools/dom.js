const { getPage } = require('../utils/playwright');

// ================= BASIC DOM =================
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

// ================= 🔥 STABLE CLICKABLE ELEMENTS =================
async function getClickableElements() {
  const page = getPage();

  const elements = await page.evaluate(() => {

    function isVisible(el) {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }

    function getUniqueSelector(el) {
      // 1️⃣ ID (best)
      if (el.id) {
        return `#${el.id}`;
      }

      // 2️⃣ name attribute
      if (el.name) {
        return `[name="${el.name}"]`;
      }

      // 3️⃣ data attributes (very stable in modern apps)
      const dataAttrs = Array.from(el.attributes)
        .filter(attr => attr.name.startsWith('data-'));

      if (dataAttrs.length > 0) {
        const attr = dataAttrs[0];
        return `[${attr.name}="${attr.value}"]`;
      }

      // 4️⃣ aria-label (accessibility)
      if (el.getAttribute('aria-label')) {
        return `[aria-label="${el.getAttribute('aria-label')}"]`;
      }

      // 5️⃣ class-based scoped selector
      if (el.className && typeof el.className === 'string') {
        const classes = el.className
          .split(' ')
          .filter(c => c.trim())
          .slice(0, 2)
          .join('.');

        if (classes) {
          const parent = el.parentElement;
          if (parent) {
            const siblings = parent.querySelectorAll(
              `${el.tagName.toLowerCase()}.${classes}`
            );

            if (siblings.length === 1) {
              return `${el.tagName.toLowerCase()}.${classes}`;
            }
          }
        }
      }

      // 6️⃣ nth-of-type within parent (scoped, safer than global)
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children)
          .filter(child => child.tagName === el.tagName);

        const index = siblings.indexOf(el) + 1;

        return `${el.tagName.toLowerCase()}:nth-of-type(${index})`;
      }

      // fallback
      return el.tagName.toLowerCase();
    }

    const raw = document.querySelectorAll(
      'button, a, [role="button"], input[type="button"], input[type="submit"]'
    );

    const results = [];
    const seen = new Set();

    raw.forEach((el) => {
      if (!isVisible(el)) return;

      const selector = getUniqueSelector(el);

      // ❗ Avoid duplicates
      if (seen.has(selector)) return;
      seen.add(selector);

      results.push({
        tag: el.tagName.toLowerCase(),
        text: el.innerText?.trim().slice(0, 50) || '',
        selector
      });
    });

    return results;
  });

  return elements;
}

module.exports = {
  getDOM,
  getClickableElements
};