const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const MCP_URL = 'http://localhost:3000/tool';

async function callTool(tool, args = {}) {
  const res = await fetch(MCP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, args })
  });

  return res.json();
}

async function runAgent(url) {
  console.log('Opening page...');
  await callTool('openPage', { url });

  console.log('Fetching DOM...');
  const dom = await callTool('getDOM');

  const prompt = `
You are a QA engineer.

Based on this UI structure, generate test cases.

UI:
${JSON.stringify(dom.result, null, 2)}

Return:
- Functional test cases
- Negative test cases
- Edge cases
`;

  const { OpenAI } = require('openai');
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: prompt
  });

  console.log('\n===== GENERATED TEST CASES =====\n');
  console.log(response.output[0].content[0].text);
}

// Run agent
runAgent('https://example.com');