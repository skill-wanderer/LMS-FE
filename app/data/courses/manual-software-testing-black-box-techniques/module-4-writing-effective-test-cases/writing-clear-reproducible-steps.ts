import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-4-2',
  slug: 'writing-clear-reproducible-steps',
  title: 'Writing Clear, Reproducible Steps: So Anyone Can Follow Your Test',
  type: 'lesson',
  durationMinutes: 20,
  order: 14,
  content: `<div class="format-selector">
<div class="format-notice">
  <span class="format-notice-icon">💡</span>
  <div>
    <strong>Choose Your Learning Material</strong>
    <p>This lesson is available in <strong>multiple formats</strong>. The content is the same - feel free to <strong>choose the one</strong> that fits your current learning environment. You do <u>not</u> need to complete all.</p>
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
  <iframe title="Writing Clear, Reproducible Steps lesson video" src="https://www.youtube-nocookie.com/embed/UPR6WTOsLiM" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/4ISlMD3OI0PyAgGWXbb656?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Reproducible_steps/Mastering_Reproducible_Test_Steps_(2).pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<h2>1. Why This Topic Matters</h2>
<p>A test case that only you can execute is a professional liability. In software quality assurance, reproducibility is the cornerstone of trust between QA testers and developers. When reproduction steps are ambiguous, developers waste valuable engineering time guessing what action triggered a failure - or worse, close valid bug reports as <em>"Cannot Reproduce."</em> This lesson explores how to transform loose personal testing notes into clear, rigorous, step-by-step instructions that any teammate, developer, or future auditor can execute independently and arrive at the exact same outcome.</p>

<hr />

<h2>2. The Core Concept: What is Reproducible?</h2>
<p><strong>Definition:</strong> A test step is reproducible when its instructions are specific enough that two different people, acting independently, perform the identical action and arrive at the identical system state.</p>
<p>A step-by-step method allows anyone - whether a local teammate or a remote developer across time zones - to reproduce the behavior reliably.</p>
<blockquote><p><strong>💡 Remember:</strong> A fundamental QA maxim: <em>A bug that cannot be reproduced is a bug that cannot be fixed (most of the time).</em></p></blockquote>

<table>
<thead>
<tr>
<th>Attribute</th>
<th>Personal Testing Note</th>
<th>Professional Reproducible Step</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Clarity</strong></td>
<td>Relies on unspoken context or memory</td>
<td>Explicit, self-contained instruction</td>
</tr>
<tr>
<td><strong>Outcome</strong></td>
<td>Varies depending on who executes it</td>
<td>Identical system state every time</td>
</tr>
<tr>
<td><strong>Developer Impact</strong></td>
<td>Frustration and "Cannot Reproduce" rejections</td>
<td>Rapid diagnosis and reliable verification</td>
</tr>
</tbody>
</table>

<hr />

<h2>3. The Anatomy of a Well-Written Step</h2>
<p>Well-written test steps follow five essential structural rules. Applying these five principles ensures your instructions never leave room for guesswork:</p>

<table>
<thead>
<tr>
<th>Principle</th>
<th>Description</th>
<th>Example / Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Atomic</strong></td>
<td>Communicate one action at a time without making a chained sequence.</td>
<td>Separate "Enter email" and "Click submit" into two distinct numbered steps.</td>
</tr>
<tr>
<td><strong>Imperative</strong></td>
<td>Start each step with a direct action verb.</td>
<td>Use clear verbs like <em>Click</em>, <em>Enter</em>, <em>Navigate</em>, <em>Select</em>, or <em>Tap</em>.</td>
</tr>
<tr>
<td><strong>Specific</strong></td>
<td>Name the exact UI element, button, field, or page name.</td>
<td>Specify label text explicitly (e.g., <em>Click the 'Confirm Order' button</em>).</td>
</tr>
<tr>
<td><strong>Ordered</strong></td>
<td>Number steps sequentially to preserve the exact order of operations.</td>
<td>Never use bullet points for sequential flows; always use numbers (1, 2, 3...).</td>
</tr>
<tr>
<td><strong>Self-Contained</strong></td>
<td>Include required input data directly within the step or step reference.</td>
<td>Provide exact strings (e.g., <em>Enter 'qauser@demo.com' in the Email field</em>).</td>
</tr>
</tbody>
</table>

<blockquote><p><strong>💡 Remember:</strong> Writing vague instructions such as <em>"click on one of these buttons"</em> or <em>"try submitting the form"</em> is never a well-written step.</p></blockquote>

<hr />

<h2>4. Language Conventions That Remove Ambiguity</h2>
<p>Professional QA testers adhere to consistent grammatical and vocabulary standards across all test suites and bug reports:</p>

<ul>
  <li><strong>Use Second-Person Imperative:</strong> Always instruct the reader directly (e.g., <em>"Click the 'Log In' button"</em>). Avoid first-person (<em>"I clicked"</em>) or third-person phrasing (<em>"The user clicks"</em>).</li>
  <li><strong>Keep Present Tense:</strong> Write instructions in the present tense imperative. Avoid future tense constructions like <em>"You will click"</em> or <em>"The system will navigate."</em></li>
  <li><strong>Name the Element Explicitly:</strong> Always quote or capitalize the exact UI label as rendered on screen (e.g., <em>Click 'Log In' button</em> instead of <em>click login button</em>).</li>
  <li><strong>Separate Observed Results from Steps:</strong> Never describe expected system behavior inside a test step. Keep the step focused strictly on the action performed; reserve expected behavior for the Expected Result field.</li>
</ul>

<hr />

<h2>5. Comparison Matrix: Vague vs. Reproducible</h2>
<p>The easiest way to master reproducible writing is by comparing vague examples against professional, production-ready alternatives:</p>

<table>
<thead>
<tr>
<th>Scenario</th>
<th>❌ Vague Example</th>
<th>✅ Reproducible Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Login Verification</strong></td>
<td>"Try logging in with wrong details and see what happens."</td>
<td>
  1. Navigate to /login.<br />
  2. Enter "qauser@demo.com" in Email.<br />
  3. Enter "WrongPass99!" in Password.<br />
  4. Click "Log In".
</td>
</tr>
<tr>
<td><strong>Mobile Date Selection</strong></td>
<td>"Click the date and leave it empty, then submit."</td>
<td>
  1. On the Booking screen, tap 'Date'.<br />
  2. Close the date picker without selecting a value.<br />
  3. Tap 'Confirm Booking'.
</td>
</tr>
<tr>
<td><strong>Modal Interaction</strong></td>
<td>"Click the button if it's there, if not, skip."</td>
<td>
  1. Click the 'Show Details' link.<br />
  2. If the details modal is visible, click 'Close Detail Panel', else proceed to next step.<br />
  <em>(Note: Avoid conditional steps whenever possible, but if necessary, structure them explicitly.)</em>
</td>
</tr>
</tbody>
</table>

<blockquote><p><strong>💡 Pro Tip:</strong> Replace subjective judgment words like <em>"try," "check,"</em> or <em>"see what happens"</em> with concrete, verifiable actions.</p></blockquote>

<hr />

<h2>6. Workflow Diagram: The Lifespan of a Test Step</h2>
<p>A single test step is read, executed, and referenced by multiple stakeholders across the entire software development lifecycle. Understanding this journey underscores why precision matters:</p>

<ol>
  <li><strong>Tester Writes Step:</strong> The QA tester drafts atomic, imperative instructions during test case creation.</li>
  <li><strong>Peer / Lead Review:</strong> A QA lead or teammate reviews the steps for clarity and coverage completeness.</li>
  <li><strong>Execution (Pass / Fail):</strong> A tester runs the steps during sprint execution or regression testing.</li>
  <li><strong>Bug Report Reference:</strong> If a failure occurs, the exact steps are copied into a Defect Report as reproduction evidence.</li>
  <li><strong>Developer Reproduction:</strong> The engineer follows the steps line-by-line to trigger the bug in their local debugging environment.</li>
  <li><strong>Bug Fix & Deployment:</strong> The engineer resolves the underlying issue and pushes a patch to staging.</li>
  <li><strong>Re-test Verification:</strong> The QA tester re-executes the identical steps to confirm the fix and close the ticket.</li>
</ol>

<blockquote><p><strong>💡 Key Principle:</strong> <em>Always write test steps with the reader in mind - not just for yourself on the day you wrote them.</em></p></blockquote>

<hr />

<h2>7. Common Mistakes & Pitfalls to Avoid</h2>
<ul>
  <li><strong>Chaining Actions:</strong> Combining multiple clicks or inputs into a single step (e.g., <em>"Fill out form and submit"</em>), which obscures where a failure occurred.</li>
  <li><strong>Using Placeholder Data:</strong> Writing <em>"Enter valid email"</em> instead of providing an exact test email string.</li>
  <li><strong>Platform Terminology Mismatch:</strong> Using desktop terminology like <em>"Click"</em> on mobile apps instead of <em>"Tap"</em> or <em>"Swipe."</em></li>
  <li><strong>Burying Prerequisites:</strong> Putting setup instructions (like account creation or login state) inside step 1 instead of defining them in Preconditions.</li>
</ul>

<hr />

<h2>8. How I Am Applying This in My Freelance QA Work</h2>
<p>In professional QA engagements and freelance testing platforms, reproducible reporting directly impacts your reputation and acceptance rates:</p>

<ul>
  <li><strong>Test IO Bug Submissions:</strong> Following strict Team Leader guidelines by writing atomic, numbered steps with explicit input data and zero ambiguity, ensuring bug reports are approved without dispute.</li>
  <li><strong>Upwork Client Audits:</strong> Providing clients with structured reproduction steps in audit reports so engineering teams can remediate defects immediately without follow-up calls.</li>
  <li><strong>Professional Documentation:</strong> Demonstrating in portfolio samples that every test case is built to serve as an authoritative, repeatable contract across distributed teams.</li>
</ul>

<hr />

<h2>9. Key Takeaways</h2>
<ol>
  <li><strong>Reproducibility is Trust:</strong> Clear steps allow any teammate or developer to replicate your results independently.</li>
  <li><strong>Five Core Rules:</strong> Make every step Atomic, Imperative, Specific, Ordered, and Self-Contained.</li>
  <li><strong>Strict Grammar:</strong> Use second-person present-tense imperative verbs (<em>"Click," "Enter," "Select"</em>).</li>
  <li><strong>Separate Concerns:</strong> Never describe expected system reactions inside action steps - reserve observations for the Expected Result field.</li>
  <li><strong>Lifecycle Impact:</strong> High-quality reproduction steps accelerate bug triage, debugging, and regression sign-off.</li>
</ol>

<hr />

<h2>10. Closing Reflection</h2>
<p>When you write a test step, you are writing documentation for the entire engineering team. Taking an extra 30 seconds to make a step atomic, specific, and self-contained saves hours of back-and-forth communication down the line. That rigor is what distinguishes a junior tester from a professional QA Engineer.</p>

</div>
`,
}

export default lesson
