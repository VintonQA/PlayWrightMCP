const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const fs = require('fs');

const MCP_URL = 'http://localhost:3000/tool';
const BASE_URL = 'https://bingoadmin.aistechnolabs.pro/admin';

// ================= TOOL CALL =================
async function callTool(tool, args = {}) {
  const res = await fetch(MCP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, args })
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error || "Tool failed");
  }

  return data.result;
}

// ================= GROQ =================
async function generateWithGroq(prompt) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are a Senior QA Engineer.

Rules:
- Do NOT assume things not visible
- Avoid generic statements
- Do NOT report fake issues
- Use interaction results for functional bugs

Return ONLY valid JSON.
          `
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    })
  });

  const data = await res.json();

  if (!data.choices) {
    console.error("Groq Error:", data);
    throw new Error("Groq failed");
  }

  return data.choices[0].message.content;
}

// ================= SAFE TYPE =================
async function safeType(selector, value) {
  try {
    await callTool('click', { selector });
    await callTool('wait', { time: 500 });
    await callTool('type', { selector, value });
    console.log(`✅ Typed into ${selector}`);
    return true;
  } catch {
    return false;
  }
}

// ================= LOGIN =================
async function performLogin() {
  console.log("🔐 Smart Login Starting...");

  await callTool('wait', { time: 3000 });

  await safeType("input[type='email']", "vintonagent@gmail.com");
  await safeType("input[type='password']", "123456");

  await callTool('click', { selector: "button" });

  for (let i = 0; i < 5; i++) {
    await callTool('wait', { time: 3000 });

    const dom = await callTool('getDOM');
    const html = JSON.stringify(dom).toLowerCase();

    if (!html.includes("password")) {
      console.log("✅ Dashboard loaded");
      return true;
    }
  }

  console.log("❌ Login failed");
  return false;
}

// ================= 🔥 INTERACTION TEST =================
async function runInteractionTests() {
  console.log("🧪 Running Intelligent Interaction Testing...");

  const results = [];

  // 🔥 IMPORTANT: Using NEW TOOL
  const elements = await callTool('getClickableElements');

  console.log(`🔢 Found ${elements.length} clickable elements`);

  const MAX = 10;

  for (let i = 0; i < Math.min(elements.length, MAX); i++) {
    const el = elements[i];

    console.log(`👉 Clicking: ${el.selector} (${el.text})`);

    try {
      await callTool('click', { selector: el.selector });
      await callTool('wait', { time: 1500 });

      results.push({
        element: el.selector,
        text: el.text,
        type: el.tag,
        status: "Clicked"
      });

    } catch (e) {
      results.push({
        element: el.selector,
        text: el.text,
        type: el.tag,
        status: "Failed"
      });
    }

    // 🔁 Restore dashboard after each click
    await callTool('openPage', { url: BASE_URL });
    await callTool('wait', { time: 3000 });
  }

  return results;
}

// ================= AI ANALYSIS =================
async function analyzeDashboard(dom, interactions) {
  const domString = JSON.stringify(dom);

  const trimmedDOM =
    domString.length > 30000
      ? domString.slice(0, 30000)
      : domString;

  const prompt = `
Analyze dashboard using DOM + interaction results.

STRICT JSON FORMAT:

{
  "dashboardLoaded": boolean,
  "uiIssues": [],
  "functionalIssues": [],
  "dataIssues": [],
  "uxIssues": [],
  "criticalBugs": [],
  "summary": ""
}

IMPORTANT:
- Use interaction results for bugs
- Do NOT assume missing data unless visible
- Avoid fake or generic issues

INTERACTIONS:
${JSON.stringify(interactions)}

DOM:
${trimmedDOM}
`;

  try {
    let output = await generateWithGroq(prompt);

    output = output.replace(/```json/g, '').replace(/```/g, '').trim();

    console.log("\n🧠 AI RAW OUTPUT:\n", output);

    return JSON.parse(output);

  } catch (e) {
    console.log("⚠️ AI parsing failed:", e.message);

    return {
      dashboardLoaded: true,
      uiIssues: ["AI parsing failed"],
      functionalIssues: [],
      dataIssues: [],
      uxIssues: [],
      criticalBugs: [],
      summary: "AI analysis failed"
    };
  }
}

// ================= MAIN =================
async function runAgent(url) {
  console.log("🚀 QA AGENT STARTED\n");

  await callTool('openPage', { url });

  const loginSuccess = await performLogin();

  if (!loginSuccess) {
    console.log("❌ Stop: Login failed");
    return;
  }

  await callTool('wait', { time: 5000 });

  const dashboardDOM = await callTool('getDOM');

  const interactionResults = await runInteractionTests();

  console.log("🔍 Running Smart QA Analysis...");

  const report = await analyzeDashboard(
    dashboardDOM,
    interactionResults
  );

  const finalReport = {
    loginSuccess: true,
    interactionTests: interactionResults,
    ...report
  };

  console.log("\n===== FINAL QA REPORT =====\n");
  console.log(JSON.stringify(finalReport, null, 2));

  fs.writeFileSync(
    `qa-report-${Date.now()}.json`,
    JSON.stringify(finalReport, null, 2)
  );

  console.log("📄 Report saved");
}

// ================= RUN =================
runAgent(BASE_URL);