const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const fs = require('fs'); // ✅ ADD THIS

const MCP_URL = 'http://localhost:3000/tool';

// Call MCP tools
async function callTool(tool, args = {}) {
  const res = await fetch(MCP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, args })
  });

  return res.json();
}

// Groq API call (your working setup)
async function generateWithGroq(prompt) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.2
    })
  });

  const data = await res.json();

  if (!data.choices || !data.choices.length) {
    console.error("Groq Error:", JSON.stringify(data, null, 2));
    throw new Error("Failed to get response from Groq");
  }

  return data.choices[0].message.content;
}

// Main Agent
async function runAgent(url) {
  console.log('Opening page...');
  await callTool('openPage', { url });

  console.log('Fetching DOM...');
  const dom = await callTool('getDOM');


const prompt = `
You are a Senior SDET (Software Development Engineer in Test) responsible for validating complete user flows in a web application.

You are given:
- UI DOM snapshot
- Valid login credentials

CREDENTIALS:
- Username: ${"vintonagent@gmail.com"}
- Password: ${"123456"}

TASK:
1. Identify login form fields from the DOM
2. Generate step-by-step test flow to:
   - Enter username
   - Enter password
   - Click login button
3. After login, analyze dashboard page DOM
4. Validate whether login was successful
5. Verify dashboard components are loaded correctly
6. Identify broken/missing elements or anomalies

CHECKS AFTER LOGIN:
- Dashboard page loads successfully
- Important widgets/menus are visible
- No error messages or blank screens
- Navigation menu is functional
- User-specific data is visible

OUTPUT FORMAT:
Provide results in this structure:

1. Login Test Case
- Steps
- Expected Result
- Actual Observation (based on DOM)

2. Dashboard Validation Test Cases
- Functional tests
- UI validation tests
- Negative scenarios (if login fails or dashboard broken)

3. Bugs / Issues Found (if any)

RULES:
- Do not assume selectors blindly; use DOM structure
- Focus on real user behavior
- Highlight missing or broken elements
- Be strict like a real QA engineer

UI DOM:
${JSON.stringify(dom.result, null, 2)}
`;


  try {
    const output = await generateWithGroq(prompt);

    console.log('\n===== GENERATED TEST CASES =====\n');
    console.log(output);

    // ✅ SAVE TO FILE
    const fileName = `test-cases-${Date.now()}.md`;

    fs.writeFileSync(fileName, output, 'utf-8');

    console.log(`\n✅ Test cases saved successfully: ${fileName}`);

  } catch (err) {
    console.error("Error generating test cases:", err.message);
  }
}

// Run agent
runAgent('https://bingoadmin.aistechnolabs.pro/admin');