import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-3-1',
  slug: 'exploratory-testing-in-real-conditions',
  title: 'Assignment: Exploratory Testing in Real Conditions',
  type: 'assignment',
  durationMinutes: 840,
  order: 12,
  hideCompletion: true,
  content: `
<div class="assignment-notice" style="background:linear-gradient(135deg,rgba(234,179,8,0.15),rgba(234,179,8,0.05));border:1px solid rgba(234,179,8,0.3);border-radius:12px;padding:1.5rem;margin-bottom:2rem;">
  <span style="font-size:1.5rem;">📝</span>
  <div>
    <strong style="color:#eab308;font-size:1.1rem;">Assignment Submission</strong>
    <p style="margin-top:0.5rem;">The grading feature for this assignment is currently <strong>in development</strong>. To submit your work and receive grading, please visit the legacy dojo:</p>
    <p style="margin-top:0.75rem;"><a href="https://legacy-dojo.skill-wanderer.com/mod/assign/view.php?id=552" target="_blank" rel="noopener" style="color:#eab308;font-weight:bold;text-decoration:underline;">➡️ Submit at Legacy Dojo</a></p>
  </div>
</div>

<h2>Case Study: Buggy Car Marketplace Website</h2>

<hr />

<h2>🌐 Test Target (IMPORTANT)</h2>

<p>You will test the following public website:</p>
<p><a href="https://buggy.justtestit.org" target="_blank" rel="noopener" style="font-weight:bold;">https://buggy.justtestit.org</a></p>

<p>This site is <strong>deliberately buggy</strong>, created for learning and practicing software testing.<br />Unexpected behavior is expected.</p>

<hr />

<h2>🎓 Module Overview</h2>

<p>This module simulates <strong>real-world exploratory testing under professional constraints</strong>.</p>

<p>You are evaluated on:</p>
<ul>
  <li>How you <strong>think</strong></li>
  <li>How you <strong>prioritize risk</strong></li>
  <li>How you <strong>use limited time</strong></li>
  <li>How you <strong>communicate findings</strong></li>
  <li>How honestly you <strong>reflect on your own work</strong></li>
</ul>

<p>You are <strong>not evaluated</strong> on:</p>
<ul>
  <li>Total hours worked</li>
  <li>Bug volume</li>
  <li>"Hero" behavior</li>
</ul>

<hr />

<h2>🎯 Learning Objectives</h2>

<p>By completing this module, you will be able to:</p>
<ul>
  <li>Perform exploratory testing without test cases</li>
  <li>Apply charter-based exploratory testing</li>
  <li>Execute assigned testing with excellence</li>
  <li>Communicate bugs clearly and professionally</li>
  <li>Reflect on coverage, gaps, and risk</li>
  <li>Think like a <strong>QA</strong>, not just a bug finder</li>
</ul>

<hr />

<h2>🧠 Scenario</h2>

<p>You are assigned as a <strong>black-box tester</strong> to a product near release.</p>

<p>The product is an <strong>online car marketplace</strong>, including:</p>
<ul>
  <li>Car listings and browsing</li>
  <li>Search and filtering</li>
  <li>Car detail pages</li>
  <li>User registration &amp; login</li>
  <li>Rating / booking flows</li>
</ul>

<p>You receive:</p>
<ul>
  <li>❌ No requirements</li>
  <li>❌ No test cases</li>
  <li>❌ No documentation</li>
</ul>

<p>Your mission:</p>
<blockquote><p>Deliver the <strong>maximum testing value within your assigned scope and time</strong>.</p></blockquote>

<hr />

<h2>⏱️ Timebox Policy (CRITICAL)</h2>

<h3>⏳ Total Effort: <strong>~14 Hours (Hard Limits)</strong></h3>

<p>This module consists of <strong>three required phases</strong>, each with a <strong>hard timebox</strong>.</p>

<p>⚠️ <strong>Timeboxes must not be exceeded.</strong></p>

<hr />

<h3>❌ No Time-Cheating Rule</h3>
<ul>
  <li>Do not test outside assigned timeboxes</li>
  <li>Do not "continue later" without counting time</li>
  <li>Do not hide or fragment testing time</li>
</ul>

<blockquote><p>In professional QA work, honesty about time spent is non-negotiable.</p></blockquote>

<hr />

<h2>🎯 Bug Volume &amp; Scope Clarification</h2>

<p>In real-world QA work:</p>
<ul>
  <li>It is <strong>ideal</strong> to log many valid bugs</li>
  <li>It is <strong>ideal</strong> to increase coverage when time allows</li>
  <li>No tester can ever find <strong>all bugs</strong></li>
</ul>

<p>However, in reality:</p>
<blockquote><p>Testing is always performed within <strong>assigned scope, responsibility, and time</strong>.</p></blockquote>

<h3>How This Assignment Is Evaluated</h3>
<ul>
  <li>You are evaluated on how well you execute the <strong>assigned work</strong></li>
  <li>You are <strong>not penalized</strong> for finding more bugs</li>
  <li>You are <strong>not rewarded</strong> for testing beyond the assigned scope</li>
</ul>

<p>This reflects real projects, where:</p>
<ul>
  <li>Excellence within your responsibility matters more than uncontrolled breadth</li>
  <li>Testing beyond scope without alignment rarely increases value</li>
  <li>Clear communication of <strong>what was not tested</strong> is critical</li>
</ul>

<blockquote><p><strong>Better testing means finding the right bugs in the right areas — not trying to test everything.</strong></p></blockquote>

<hr />

<h2>🤖 AI Usage Policy (IMPORTANT)</h2>

<p>AI is a <strong>support tool</strong>, not a testing assistant.</p>

<h3>✅ AI is <strong>ENCOURAGED</strong> for:</h3>
<ul>
  <li>Improving wording and clarity of bug reports</li>
  <li>Structuring and polishing QA reflections</li>
  <li>Organizing time-usage reports</li>
  <li>Improving readability and professionalism</li>
</ul>

<h3>❌ AI is <strong>NOT ALLOWED</strong> for:</h3>
<ul>
  <li>Suggesting what to test</li>
  <li>Generating test ideas or charters</li>
  <li>Designing test steps</li>
  <li>Analyzing system behavior</li>
  <li>Assisting during <strong>any testing activity</strong></li>
</ul>

<blockquote><p>All testing decisions must come <strong>from you</strong>.</p></blockquote>

<hr />

<h2>🔎 Phase 1: Free Exploratory Testing</h2>
<p>⏳ <strong>Timebox: 8 Hours</strong></p>

<h3>Goal</h3>
<ul>
  <li>Understand the system</li>
  <li>Explore broadly</li>
  <li>Discover obvious and unexpected issues</li>
</ul>

<h3>Deliverables</h3>
<ul>
  <li><strong>Minimum 5 bug reports</strong></li>
</ul>

<hr />

<h2>🎯 Phase 2: Charter-Based Exploratory Testing</h2>
<p>⏳ <strong>Timebox: 4 Hours</strong></p>

<h3>What Is Charter-Based Testing?</h3>
<p><strong>Charter-based exploratory testing</strong> means:</p>
<blockquote><p>Exploratory testing guided by a <strong>clear mission (charter)</strong>.</p></blockquote>

<p>A charter answers:</p>
<ul>
  <li>What am I focusing on?</li>
  <li>Why is this area risky?</li>
  <li>Is my time well spent here?</li>
</ul>

<p>You still explore freely — but <strong>with intention</strong>.</p>

<hr />

<h3>How Phase 2 Works</h3>
<ol>
  <li>Choose <strong>2 charters</strong></li>
  <li>Spend <strong>2 hours per charter</strong></li>
  <li>Tag each bug with its charter</li>
</ol>

<h3>Available Charters (Choose Any 2)</h3>
<ul>
  <li>Search &amp; filtering behavior</li>
  <li>Car detail page logic</li>
  <li>Rating / voting functionality</li>
  <li>User registration &amp; login</li>
  <li>Error handling &amp; validations</li>
  <li>Navigation &amp; data consistency</li>
  <li>Browser compatibility</li>
</ul>

<h3>Deliverables</h3>
<ul>
  <li><strong>3–6 additional bug reports</strong></li>
</ul>

<hr />

<h2>🧠 Phase 3: Thinking Like QA (REQUIRED)</h2>
<p>⏳ <strong>Timebox: 2 Hours</strong></p>

<h3>Goal</h3>
<p>Evaluate <strong>risk, coverage, and confidence</strong> — not just bugs.</p>

<hr />

<h3>Required Written Analysis (1–2 Pages)</h3>
<p>You must answer <strong>all</strong> sections:</p>

<h4>1️⃣ Top 5 Highest-Risk Bugs</h4>
<ul>
  <li>Why each bug is risky</li>
  <li>User impact</li>
  <li>Business or trust impact</li>
</ul>

<h4>2️⃣ Coverage Gaps</h4>
<ul>
  <li>What you did <strong>not</strong> test</li>
  <li>Why those areas were not covered</li>
</ul>

<h4>3️⃣ QA Judgment</h4>
<ul>
  <li>If the product launches tomorrow:
    <ul>
      <li>What worries you most?</li>
      <li>What must be tested next?</li>
    </ul>
  </li>
</ul>

<hr />

<h3>⭐ Honest Self-Critique (BONUS SCORE)</h3>

<blockquote><p><strong>Honest feedback about what you did NOT do well will result in PLUS SCORE.</strong></p></blockquote>

<p>You are encouraged to:</p>
<ul>
  <li>Admit weak areas</li>
  <li>Acknowledge poor time allocation</li>
  <li>Identify shallow coverage or wrong assumptions</li>
</ul>

<p>There is <strong>no penalty</strong> for admitting flaws.<br />There <strong>is</strong> a penalty for pretending everything was perfect.</p>

<hr />

<h2>📝 Bug Reporting Format (MANDATORY)</h2>

<p>Each bug must include:</p>
<ol>
  <li>Title</li>
  <li>Steps to Reproduce</li>
  <li>Expected Result</li>
  <li>Actual Result</li>
  <li>Severity (Low / Medium / High)</li>
  <li>Evidence</li>
  <li>Phase</li>
  <li>Charter (if Phase 2)</li>
</ol>

<hr />

<h2>🕒 REQUIRED: Time Usage Overview &amp; Reflection</h2>

<p>Provide an <strong>honest estimate</strong> of how you spent your time.</p>

<h3>Example Time Usage Table</h3>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead>
    <tr style="border-bottom:2px solid rgba(255,255,255,0.2);">
      <th style="text-align:left;padding:0.5rem;">Phase</th>
      <th style="text-align:left;padding:0.5rem;">Activity</th>
      <th style="text-align:left;padding:0.5rem;">Estimated Time</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 1</td>
      <td style="padding:0.5rem;">Broad exploration</td>
      <td style="padding:0.5rem;">3h</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 1</td>
      <td style="padding:0.5rem;">Edge cases &amp; misuse</td>
      <td style="padding:0.5rem;">2h</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 1</td>
      <td style="padding:0.5rem;">Bug documentation</td>
      <td style="padding:0.5rem;">3h</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 2</td>
      <td style="padding:0.5rem;">Charter: Search</td>
      <td style="padding:0.5rem;">2h</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Phase 2</td>
      <td style="padding:0.5rem;">Charter: Login</td>
      <td style="padding:0.5rem;">2h</td>
    </tr>
    <tr>
      <td style="padding:0.5rem;">Phase 3</td>
      <td style="padding:0.5rem;">QA reflection</td>
      <td style="padding:0.5rem;">2h</td>
    </tr>
  </tbody>
</table>

<hr />

<h3>Reflection Questions</h3>
<ul>
  <li>Where did you waste time?</li>
  <li>Where did you under-invest time?</li>
  <li>What would you change next time?</li>
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
      <td style="padding:0.5rem;">Exploration</td>
      <td style="padding:0.5rem;">Coverage &amp; curiosity</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Bug Quality</td>
      <td style="padding:0.5rem;">Clarity &amp; impact</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Focus</td>
      <td style="padding:0.5rem;">Charter effectiveness</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">QA Thinking</td>
      <td style="padding:0.5rem;">Risk awareness</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Time Management</td>
      <td style="padding:0.5rem;">Honesty &amp; reflection</td>
    </tr>
    <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
      <td style="padding:0.5rem;">Self-Critique</td>
      <td style="padding:0.5rem;">Transparency &amp; maturity</td>
    </tr>
    <tr>
      <td style="padding:0.5rem;">Communication</td>
      <td style="padding:0.5rem;">Professional writing</td>
    </tr>
  </tbody>
</table>

<hr />

<h2>🌱 Core Lesson of This Module</h2>

<blockquote><p><strong>QA is not about finding everything.<br />QA is about understanding risk and communicating confidence.</strong></p></blockquote>

<p>This module rewards:</p>
<ul>
  <li>Judgment over grind</li>
  <li>Integrity over ego</li>
  <li>Reflection over volume</li>
</ul>
`,
}

export default lesson
