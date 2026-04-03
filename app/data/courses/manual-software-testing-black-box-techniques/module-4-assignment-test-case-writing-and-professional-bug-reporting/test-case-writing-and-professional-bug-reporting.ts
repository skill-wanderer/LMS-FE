import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-4-1',
  slug: 'test-case-writing-and-professional-bug-reporting',
  title: 'Assignment: Test Case Writing & Professional Bug Reporting',
  type: 'assignment',
  durationMinutes: 600,
  order: 13,
  hideCompletion: true,
  content: `
<div class="assignment-notice" style="background:linear-gradient(135deg,rgba(234,179,8,0.15),rgba(234,179,8,0.05));border:1px solid rgba(234,179,8,0.3);border-radius:12px;padding:1.5rem;margin-bottom:2rem;">
  <span style="font-size:1.5rem;">📝</span>
  <div>
    <strong style="color:#eab308;font-size:1.1rem;">Assignment Submission</strong>
    <p style="margin-top:0.5rem;">The grading feature for this assignment is currently <strong>in development</strong>. To submit your work and receive grading, please visit the legacy dojo:</p>
    <p style="margin-top:0.75rem;"><a href="https://dojo.skill-wanderer.com/mod/assign/view.php?id=557" target="_blank" rel="noopener" style="color:#eab308;font-weight:bold;text-decoration:underline;">➡️ Submit at Legacy Dojo</a></p>
  </div>
</div>

<h2>🌐 Test Target (UNCHANGED — MANDATORY)</h2>

<p><a href="https://buggy.justtestit.org" target="_blank" rel="noopener" style="font-weight:bold;">https://buggy.justtestit.org</a></p>

<p>⚠️ This site is <strong>intentionally buggy</strong> and designed for learning software testing.<br />Unexpected and inconsistent behavior is normal.</p>

<hr />

<h2>🎓 Module Purpose</h2>

<p>This module simulates what happens <strong>after</strong> exploratory testing in a real QA team.</p>

<p>You are transitioning from:</p>
<blockquote><p>"I explored and found issues"</p></blockquote>

<p>to:</p>
<blockquote><p>"I can design structured tests and communicate failures professionally."</p></blockquote>

<p>This module focuses on <strong>discipline, clarity, and repeatability</strong> — not discovery.</p>

<hr />

<h2>🎯 Learning Objectives</h2>

<p>By completing this module, you will be able to:</p>
<ul>
  <li>Translate exploratory knowledge into <strong>formal test cases</strong></li>
  <li>Design <strong>clear, repeatable, reviewable</strong> tests</li>
  <li>Execute only what is designed (no exploration)</li>
  <li>Report bugs in a <strong>professional, developer-friendly way</strong></li>
  <li>Demonstrate scope discipline and QA judgment</li>
  <li>Reflect honestly on test quality and coverage</li>
</ul>

<hr />

<h2>🔁 CRITICAL: Scope Continuity Rule (NON-NEGOTIABLE)</h2>

<h3>🚫 No New Areas Allowed</h3>

<p>You MUST use <strong>the same TWO functional areas</strong> that you selected in:</p>
<blockquote><p><strong>Module 3 — Phase 2: Charter-Based Exploratory Testing</strong></p></blockquote>

<p>❌ You may NOT choose new features<br />
❌ You may NOT expand coverage<br />
❌ You may NOT switch areas<br />
❌ You may NOT test outside previous charters</p>

<p>This simulates real projects:</p>
<blockquote><p>Once scope is agreed, QA does not redefine it independently.</p></blockquote>

<p>📌 <strong>Failure to follow this rule = assignment failure</strong></p>

<hr />

<h2>⏱️ Timebox Policy (STRICT &amp; HONEST)</h2>

<p>⏳ <strong>Total Effort: ~10 Hours (Hard Cap)</strong></p>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
      <th style="text-align:left;padding:0.5rem;">Phase</th>
      <th style="text-align:left;padding:0.5rem;">Focus</th>
      <th style="text-align:left;padding:0.5rem;">Timebox</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 1</td>
      <td style="padding:0.5rem;">Test Case Design</td>
      <td style="padding:0.5rem;">5 hours</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 2</td>
      <td style="padding:0.5rem;">Test Execution &amp; Bug Reporting</td>
      <td style="padding:0.5rem;">3 hours</td>
    </tr>
    <tr>
      <td style="padding:0.5rem;">Phase 3</td>
      <td style="padding:0.5rem;">QA Reflection &amp; Judgment</td>
      <td style="padding:0.5rem;">2 hours</td>
    </tr>
  </tbody>
</table>

<p>⚠️ Same honesty rules as Module 3 apply<br />
⚠️ No work outside assigned time<br />
⚠️ No "just checking something quickly"</p>

<hr />

<h2>🧠 Scenario</h2>

<p>After your exploratory testing, your QA lead says:</p>
<blockquote><p>"Good findings.<br />Now we need <strong>structured coverage</strong> that we can reuse, review, and regress."</p></blockquote>

<p>Your job is <strong>not</strong> to explore more —<br />
Your job is to <strong>formalize what matters</strong>.</p>

<hr />

<h1>🧪 Phase 1: Test Case Writing (NO EXECUTION)</h1>

<p>⏳ <strong>Timebox: 5 Hours</strong></p>

<hr />

<h2>🎯 Goal</h2>

<p>Design <strong>professional test cases</strong> based ONLY on:</p>
<ul>
  <li>Your previous exploratory findings</li>
  <li>Your charter focus areas</li>
  <li>Observed system behavior</li>
</ul>

<hr />

<h2>🔐 Rules (IMPORTANT)</h2>

<p>You MUST:</p>
<ul>
  <li>Design test cases <strong>only</strong></li>
  <li>Stick strictly to your <strong>2 previous charter areas</strong></li>
  <li>Write test cases as if someone else will execute them</li>
</ul>

<p>You MUST NOT:</p>
<ul>
  <li>Execute tests</li>
  <li>Explore the system</li>
  <li>Add new scopes or flows</li>
  <li>Validate assumptions during this phase</li>
</ul>

<hr />

<h2>📌 Scope Reminder (Example)</h2>

<p>If in Module 3 you selected:</p>
<ul>
  <li>Charter A: Search &amp; Filtering</li>
  <li>Charter B: User Registration &amp; Login</li>
</ul>

<p>Then in THIS module:<br />
✅ Only Search &amp; Filtering<br />
✅ Only User Registration &amp; Login<br />
❌ No ratings<br />
❌ No car detail pages<br />
❌ No navigation testing</p>

<hr />

<h2>📝 Test Case Requirements</h2>

<h3>📊 Quantity</h3>
<ul>
  <li><strong>10–15 test cases per area</strong></li>
  <li><strong>Total: 20–30 test cases</strong></li>
</ul>

<hr />

<h3>📋 Mandatory Test Case Format</h3>

<p>Each test case MUST include:</p>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
      <th style="text-align:left;padding:0.5rem;">Field</th>
      <th style="text-align:left;padding:0.5rem;">Required</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Test Case ID</td>
      <td style="padding:0.5rem;">✅</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Title</td>
      <td style="padding:0.5rem;">✅</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Preconditions</td>
      <td style="padding:0.5rem;">✅</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Test Steps</td>
      <td style="padding:0.5rem;">✅</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Test Data</td>
      <td style="padding:0.5rem;">✅ (if applicable)</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Expected Result</td>
      <td style="padding:0.5rem;">✅</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Priority (High / Medium / Low)</td>
      <td style="padding:0.5rem;">✅</td>
    </tr>
    <tr>
      <td style="padding:0.5rem;">Type (Positive / Negative / Boundary)</td>
      <td style="padding:0.5rem;">✅</td>
    </tr>
  </tbody>
</table>

<p>⚠️ Expected Results must describe <strong>system behavior</strong><br />
❌ "Works fine" / "As expected" are INVALID</p>

<hr />

<h2>▶️ Phase 2: Test Execution &amp; Bug Reporting</h2>

<p>⏳ <strong>Timebox: 3 Hours</strong></p>

<hr />

<h2>🎯 Goal</h2>

<p>Execute <strong>only</strong> the test cases you designed and report <strong>only genuine failures</strong>.</p>

<hr />

<h2>🔐 Rules (STRICT)</h2>

<p>You MUST:</p>
<ul>
  <li>Execute tests exactly as written</li>
  <li>Log bugs only when Expected ≠ Actual</li>
  <li>Reference the related <strong>Test Case ID</strong></li>
</ul>

<p>You MUST NOT:</p>
<ul>
  <li>Perform exploratory testing</li>
  <li>Add or modify test cases</li>
  <li>Extend scope</li>
  <li>Test "just to see"</li>
</ul>

<p>Finishing early does NOT mean you test more.</p>

<hr />

<h2>🐞 Bug Reporting Requirements</h2>

<h3>📝 Mandatory Bug Report Format</h3>

<p>Each bug MUST include:</p>
<ul>
  <li>Title</li>
  <li>Preconditions</li>
  <li>Steps to Reproduce</li>
  <li>Expected Result</li>
  <li>Actual Result</li>
  <li>Severity (Low / Medium / High)</li>
  <li>Evidence (screenshot / recording)</li>
  <li>Related Test Case ID</li>
</ul>

<p>📌 <strong>No minimum bug count</strong><br />
📌 Bug quality matters more than quantity</p>

<hr />

<h1>🧠 Phase 3: QA Reflection &amp; Judgment</h1>

<p>⏳ <strong>Timebox: 2 Hours</strong></p>

<hr />

<h2>📄 Required Written Analysis (1–2 Pages)</h2>

<p>You MUST answer ALL sections:</p>

<hr />

<h3>1️⃣ Test Case Quality Review</h3>
<ul>
  <li>Which test cases were effective?</li>
  <li>Which were unclear or redundant?</li>
  <li>What would you redesign?</li>
</ul>

<hr />

<h3>2️⃣ Bug Quality Review</h3>
<ul>
  <li>Were the failures easy to reproduce?</li>
  <li>Did Expected Results help or confuse?</li>
  <li>Any bug reports you would rewrite?</li>
</ul>

<hr />

<h3>3️⃣ Coverage &amp; Remaining Risk</h3>
<ul>
  <li>What important behavior remains untested?</li>
  <li>What risks still worry you?</li>
  <li>Which area should be automated first — and why?</li>
</ul>

<hr />

<h3>⭐ Honest Self-Critique (BONUS SCORE)</h3>

<p>Answer honestly:</p>
<ul>
  <li>Where you over-designed</li>
  <li>Where you under-thought</li>
  <li>Where test cases added little value</li>
</ul>

<p>There is <strong>no penalty</strong> for honesty.<br />
There <strong>is</strong> a penalty for pretending everything was perfect.</p>

<hr />

<h2>🕒 REQUIRED: Time Usage Report</h2>

<p>Provide an honest breakdown.</p>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
      <th style="text-align:left;padding:0.5rem;">Phase</th>
      <th style="text-align:left;padding:0.5rem;">Activity</th>
      <th style="text-align:left;padding:0.5rem;">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 1</td>
      <td style="padding:0.5rem;">Test case design</td>
      <td style="padding:0.5rem;">Xh</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 2</td>
      <td style="padding:0.5rem;">Execution</td>
      <td style="padding:0.5rem;">Xh</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 2</td>
      <td style="padding:0.5rem;">Bug writing</td>
      <td style="padding:0.5rem;">Xh</td>
    </tr>
    <tr>
      <td style="padding:0.5rem;">Phase 3</td>
      <td style="padding:0.5rem;">Reflection</td>
      <td style="padding:0.5rem;">Xh</td>
    </tr>
  </tbody>
</table>

<h3>Reflection Questions</h3>
<ul>
  <li>Where did I waste time?</li>
  <li>Where did I under-invest?</li>
  <li>What would I change next time?</li>
</ul>

<hr />

<h2>📊 Evaluation Criteria</h2>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
      <th style="text-align:left;padding:0.5rem;">Area</th>
      <th style="text-align:left;padding:0.5rem;">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Test Case Design</td>
      <td style="padding:0.5rem;">Clarity &amp; correctness</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Scope Discipline</td>
      <td style="padding:0.5rem;">Respecting boundaries</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Bug Reporting</td>
      <td style="padding:0.5rem;">Precision &amp; usefulness</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">QA Judgment</td>
      <td style="padding:0.5rem;">Risk awareness</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Time Honesty</td>
      <td style="padding:0.5rem;">Professional integrity</td>
    </tr>
    <tr>
      <td style="padding:0.5rem;">Reflection</td>
      <td style="padding:0.5rem;">Maturity &amp; self-awareness</td>
    </tr>
  </tbody>
</table>

<hr />

<h2>🌱 Core Lesson of This Module</h2>

<blockquote><p>Exploratory testing discovers problems.<br />Test cases <strong>prevent them from returning</strong>.</p></blockquote>

<p>Strong QA is not about finding more.<br />
It is about <strong>thinking clearly under constraint</strong>.</p>
`,
}

export default lesson
