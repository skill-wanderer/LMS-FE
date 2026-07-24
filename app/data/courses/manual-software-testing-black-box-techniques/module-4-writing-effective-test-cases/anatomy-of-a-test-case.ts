import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-4-1',
  slug: 'anatomy-of-a-test-case',
  title: 'Anatomy of a Test Case: The Building Blocks of Repeatable Testing',
  type: 'lesson',
  durationMinutes: 20,
  order: 13,
  content: `<div class="format-selector">
<div class="format-notice">
  <span class="format-notice-icon">💡</span>
  <div>
    <strong>Choose Your Learning Material</strong>
    <p>This lesson is available in <strong>multiple formats</strong>. The content is the same — feel free to <strong>choose the one</strong> that fits your current learning environment. You do <u>not</u> need to complete all.</p>
  </div>
</div>

<div class="format-tabs">
  <button class="format-tab active" data-format="reading" onclick="document.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=>c.style.display='none');document.querySelector('[data-content=reading]').style.display='block';">📖 Reading</button>
  <button class="format-tab" data-format="video" onclick="document.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=>c.style.display='none');document.querySelector('[data-content=video]').style.display='block';">🎬 Video</button>
  <button class="format-tab" data-format="audio" onclick="document.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=>c.style.display='none');document.querySelector('[data-content=audio]').style.display='block';">🎧 Audio</button>
  <button class="format-tab" data-format="slides" onclick="document.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=>c.style.display='none');document.querySelector('[data-content=slides]').style.display='block';">📊 Slides</button>
</div>
</div>

<div class="format-content" data-content="video" style="display:none;">
<h2>🎬 Video Version</h2>
<div class="video-embed">
  <iframe title="Anatomy of a Test Case lesson video" src="https://www.youtube-nocookie.com/embed/VOtwgUSvNJg" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/0QoL26nOUG9BHCmyuSun0I?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="/slides/Anatomy_of_a_Test_Case.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<h2>1. Why This Topic Matters</h2>
<p>A test case is the single most reusable artifact a QA tester produces. A bug report describes a moment in time; a test case describes a repeatable check that anyone — a teammate, a new hire, or a future version of me six months from now — can execute and trust to get the same result. Without a consistent anatomy, test cases become personal notes instead of professional deliverables. This document breaks down what a test case is actually made of, why each part earns its place, and how I am already applying this structure in real client-facing work.</p>

<hr />

<h2>2. What Is a Test Case?</h2>
<p><strong>Definition:</strong> A test case is a documented set of conditions, inputs, and steps written in advance, used to determine whether a specific feature or requirement of an application behaves as expected.</p>
<p>It is not the same as a test scenario (a one-line idea of what to test, e.g. "verify login works") and it is not the same as a bug report (a record of something that already went wrong). A test case sits between the two: it operationalises a scenario into something executable, and if it fails, it becomes the evidence base for a bug report.</p>

<table>
<thead>
<tr>
<th>Test Scenario</th>
<th>Test Case</th>
<th>Bug Report</th>
</tr>
</thead>
<tbody>
<tr>
<td>High-level idea of what to verify</td>
<td>Step-by-step, repeatable execution plan</td>
<td>Evidence that a test case failed</td>
</tr>
<tr>
<td>"Check the booking form validation"</td>
<td>Steps + data + expected result for one specific validation rule</td>
<td>"Submitting with an empty date field allows checkout"</td>
</tr>
</tbody>
</table>

<hr />

<h2>3. The Core Components of a Test Case</h2>
<p>Every well-formed test case is built from the same twelve building blocks, regardless of the tool used to record it (spreadsheet, TestRail, Test IO, or Zephyr). Below is the anatomy, followed by a breakdown of why each part matters.</p>

<table>
<thead>
<tr>
<th>Component</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Test Case ID</strong></td>
<td>A unique, sortable identifier (e.g. TC-LOGIN-004) so the case can be referenced from bug reports, traceability matrices, and regression suites.</td>
</tr>
<tr>
<td><strong>Title / Summary</strong></td>
<td>A precise, single-sentence description of what is being verified — specific enough that two testers reading only the title would test the same thing.</td>
</tr>
<tr>
<td><strong>Module / Feature</strong></td>
<td>The area of the application under test (e.g. Booking Flow, Authentication, Checkout) — used for grouping and coverage mapping.</td>
</tr>
<tr>
<td><strong>Preconditions</strong></td>
<td>The state the system and data must be in before Step 1 can run (e.g. "User is logged out", "Account has zero items in cart"). Without this, the same steps can produce different results for different testers.</td>
</tr>
<tr>
<td><strong>Test Steps</strong></td>
<td>Numbered, atomic actions written in the imperative ("Tap Submit", not "Observe the button"). Each step should do exactly one thing.</td>
</tr>
<tr>
<td><strong>Test Data</strong></td>
<td>The exact inputs used (e.g. email: test@demo.com, password: 12 characters incl. 1 symbol) — kept separate from the steps so the same steps can be re-run with different data sets.</td>
</tr>
<tr>
<td><strong>Expected Result</strong></td>
<td>What should happen if the software is working correctly — written before execution, never adjusted after seeing the actual behaviour.</td>
</tr>
<tr>
<td><strong>Actual Result</strong></td>
<td>What actually happened during execution — the objective, observed outcome, recorded even when it matches expectations.</td>
</tr>
<tr>
<td><strong>Pass / Fail Status</strong></td>
<td>The verdict, derived strictly from comparing Expected vs. Actual — this is what feeds dashboards and release sign-off decisions.</td>
</tr>
<tr>
<td><strong>Priority / Severity</strong></td>
<td>How important this case is to run (priority) and, if it fails, how serious the impact is (severity) — these two are often confused but answer different questions.</td>
</tr>
<tr>
<td><strong>Test Environment</strong></td>
<td>Browser, OS, device, and build/version number — critical for reproducibility, especially across my own matrix of Windows (Chrome/Firefox/Edge/Safari), Android Chrome, and iPhone 11 Safari.</td>
</tr>
<tr>
<td><strong>Traceability Link</strong></td>
<td>The requirement, user story, or acceptance criterion this case verifies — this is what turns a pile of test cases into a coverage map, not just a to-do list.</td>
</tr>
</tbody>
</table>

<hr />

<h2>4. Deep Dive: The Details That Separate Good From Great</h2>

<h3>4.1 Preconditions are not optional</h3>
<p>A step like "Click the delete button" is meaningless without stating what existed to be deleted. I now treat preconditions as part of the contract of the test case — if they are missing, the case is not finished, it is a draft.</p>

<h3>4.2 One action per step</h3>
<p>Steps should never bundle actions ("Enter email and password and click login"). If the case fails, a bundled step hides exactly which action broke it. Atomic steps also make automation hand-off far easier later, since each step maps cleanly to one automated action.</p>

<h3>4.3 Expected results must be observable, not vague</h3>
<p>"It should work" is not an expected result. "User is redirected to /dashboard and a welcome toast reading 'Welcome back' is displayed within 2 seconds" is. Vague expected results are the single biggest reason two testers disagree on whether something passed.</p>

<h3>4.4 Priority vs. Severity — a distinction I had to unlearn confusing</h3>
<p>Priority is a business decision (how soon should this be fixed / how important is it to test), set by product owners or leads. Severity is a technical/impact measurement (how badly does this break the system), and is something I as a tester am well placed to assess directly from what I observe.</p>

<h3>4.5 Language conventions I now apply consistently</h3>
<ul>
  <li>Use <strong>"Tap"</strong> for mobile actions and <strong>"Click"</strong> for desktop/mouse actions — never mix them for the same platform.</li>
  <li>Never use <strong>"Observe"</strong> as a step action — observation is the outcome of a step, not an action in itself; the action is what triggers something observable.</li>
  <li>Write steps in the <strong>present-tense imperative</strong>: "Enter", "Select", "Scroll" — not "The user enters" or past tense.</li>
  <li>Screenshots supporting a case should be captured directly in the browser being tested, not through an embedded viewer, so evidence reflects the real rendering environment.</li>
</ul>

<hr />

<h2>5. Worked Example: A Complete Test Case</h2>
<p>To make the anatomy concrete, here is a fully-specified test case for a login form, written the way I would submit it professionally:</p>

<table>
<tbody>
<tr>
  <td><strong>Test Case ID</strong></td>
  <td>TC-AUTH-002</td>
</tr>
<tr>
  <td><strong>Title</strong></td>
  <td>Verify user cannot log in with a correct email and an incorrect password</td>
</tr>
<tr>
  <td><strong>Module</strong></td>
  <td>Authentication</td>
</tr>
<tr>
  <td><strong>Preconditions</strong></td>
  <td>1) User has an existing, active account. 2) User is on the Login page, logged out.</td>
</tr>
<tr>
  <td><strong>Test Steps</strong></td>
  <td>
    1. Enter a valid, registered email address into the Email field.<br />
    2. Enter an incorrect password (any string not matching the account password) into the Password field.<br />
    3. Click the "Log In" button.
  </td>
</tr>
<tr>
  <td><strong>Test Data</strong></td>
  <td>Email: qauser@demo.com | Password: WrongPass99!</td>
</tr>
<tr>
  <td><strong>Expected Result</strong></td>
  <td>Login is rejected. An inline error message reading "Incorrect email or password" appears below the form. User remains on the Login page. No session token is created.</td>
</tr>
<tr>
  <td><strong>Actual Result</strong></td>
  <td>(Recorded at execution time — e.g. "As expected; error shown, no redirect.")</td>
</tr>
<tr>
  <td><strong>Status</strong></td>
  <td>Pass / Fail (set only after comparing Expected vs. Actual)</td>
</tr>
<tr>
  <td><strong>Priority</strong></td>
  <td>High — authentication gating is core functionality</td>
</tr>
<tr>
  <td><strong>Severity (if failed)</strong></td>
  <td>Critical — a failure here is a security issue, not just a UX bug</td>
</tr>
<tr>
  <td><strong>Environment</strong></td>
  <td>Windows 11, Chrome (latest) | Build 2.4.1</td>
</tr>
<tr>
  <td><strong>Traceability</strong></td>
  <td>Linked to User Story: "As a user, I cannot access my account without correct credentials"</td>
</tr>
</tbody>
</table>

<hr />

<h2>6. Why Repeatability Is the Whole Point</h2>
<p>The anatomy above exists to serve one goal: repeatability. A test case is only valuable if running it twice, by two different people, on two different days, produces the same verdict. Repeatability is what enables:</p>

<ul>
  <li><strong>Regression testing</strong> — re-running the exact same case after a new build to confirm nothing broke.</li>
  <li><strong>Onboarding</strong> — a new tester (or Test IO Team Leader) can pick up my case and execute it without asking me clarifying questions.</li>
  <li><strong>Audit trails</strong> — when a client or team lead asks "was this actually tested before release?", a well-formed test case is the proof.</li>
  <li><strong>Fair bug triage</strong> — if a step, precondition, or data value is missing, a developer cannot reproduce the bug, and a valid finding gets dismissed as "could not reproduce."</li>
</ul>

<p>This is the exact lesson underlined by my Team Leader feedback on the Greenhorn exercise on kleinwalsertal.com: bugs are only as credible as the reproduction steps behind them, and reproduction steps are only reliable when they follow this anatomy consistently.</p>

<hr />

<h2>7. Common Mistakes I Am Actively Correcting</h2>
<ul>
  <li>Writing expected results after seeing the actual behaviour, which quietly biases the "expected" result to match what happened.</li>
  <li>Merging multiple root-caused issues into one test case instead of reporting the first occurrence and noting duplicates separately.</li>
  <li>Treating a broken link to non-essential content as a Functional bug rather than correctly classifying it as a Content bug.</li>
  <li>Using "Click" on mobile test cases instead of "Tap", which misrepresents the platform being tested.</li>
  <li>Skipping the test environment field, which makes a "failed on my machine" report impossible to action.</li>
</ul>

<hr />

<h2>8. How I Am Applying This in My Freelance QA Work</h2>
<p>This anatomy is not just theory for me — it is the structure behind the deliverables I am building my freelance QA career on:</p>

<ul>
  <li><strong>Test IO:</strong> writing bug submissions and test notes with explicit preconditions, atomic steps, and separate date/time evidence screenshots, in line with Team Leader feedback.</li>
  <li><strong>Upwork proposals:</strong> attaching portfolio documents (Skill-Wanderer Dojo and other client audits) that demonstrate this exact level of structured, reproducible reporting.</li>
  <li><strong>LinkedIn cold outreach:</strong> using one specific, well-documented bug as the hook in each message, because a vague bug claim doesn't land the way a reproducible one does.</li>
</ul>

<p>In short, the anatomy of a test case is the anatomy of my professional credibility as a QA tester — it is the difference between "I think something is broken" and "Here is exactly how to see it break, every time."</p>

<hr />

<h2>9. Key Takeaways</h2>
<ol>
  <li>A test case is a repeatable execution plan, distinct from both a test scenario and a bug report.</li>
  <li>Its twelve building blocks — ID, title, module, preconditions, steps, data, expected result, actual result, status, priority, severity, environment, and traceability — each protect a different failure mode.</li>
  <li>Preconditions and test data separate the steps from the specifics, so the same steps can be reused with different inputs.</li>
  <li>Expected results must be observable and written before execution; actual results are recorded objectively.</li>
  <li>Repeatability is the entire purpose of this structure — it is what makes testing a professional discipline rather than a set of personal notes.</li>
</ol>

<hr />

<h2>10. Closing Reflection</h2>
<p>Before this lesson, I thought of a test case as "a list of steps." I now understand it as a contract — between me and whoever reads it next — that guarantees the same conditions will produce the same verdict. That distinction is what I will carry into every test suite, bug report, and client deliverable going forward.</p>

</div>
`,
}

export default lesson

