const express = require('express');

const { openPage } = require('./tools/browser');
const { getDOM } = require('./tools/dom');
const { takeScreenshot } = require('./tools/screenshot');
const { runBasicTest } = require('./tools/testRunner');
const { click, type } = require('./tools/browserActions');
const app = express();
app.use(express.json());

// MCP Tool Endpoint
app.post('/tool', async (req, res) => {
  const { tool, args } = req.body;

  try {
    let result;

    switch (tool) {
      case 'openPage':
        result = await openPage(args.url);
        break;

      case 'getDOM':
        result = await getDOM();
        break;

      case 'screenshot':
        result = await takeScreenshot();
        break;

      case 'runTest':
        result = await runBasicTest();
        break;

        case 'click':
         result = await click(args.selector);
         break;

        case 'type':
        result = await type(args.selector, args.text);
        break;

      default:
        return res.status(400).json({ error: 'Unknown tool' });
    }

    res.json({
      success: true,
      result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Start Server
app.listen(3000, () => {
  console.log('MCP Server running on port 3000');
});