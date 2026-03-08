import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-2-2',
  slug: 'software-quality-evolution-transitioning-from-tester-to-qa-engineer',
  title: 'Software Quality Evolution: Transitioning from Tester to QA Engineer',
  type: 'article',
  durationMinutes: 20,
  order: 8,
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
  <iframe src="https://www.youtube-nocookie.com/embed/iv_yy6SJY9o?si=GG2fzvHrUtVhEcOJ" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/5GVDZoaKsWgEHToG99D87I?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Software%20Quality%20Evolution%20Transitioning%20from%20Tester%20to%20QA%20Engineer/Tester_to_QA_Strategist.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Software%20Quality%20Evolution%20Transitioning%20from%20Tester%20to%20QA%20Engineer/infographic.png" alt="Tester to QA Engineer Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. The Industry Confusion</h2>
<p>In the software industry, you will often hear "Tester" and "QA" used interchangeably. Job titles can be messy, and some companies treat QA as "just the people who click buttons at the end."</p>
<p><strong>This confusion leads to:</strong></p>
<ul>
<li>Late discovery of bugs.</li>
<li>"Blame culture" (e.g., "Why didn't QA catch this?").</li>
<li>Burnout and repetitive work.</li>
</ul>
<p><strong>The Truth:</strong> Testing is an <strong>activity</strong>. Quality Assurance is a <strong>responsibility</strong>.</p>
<ul>
<li>A <strong>Tester</strong> executes a check.</li>
<li>A <strong>QA</strong> assures the value of the product.</li>
</ul>

<hr />

<h2>2. The Foundation: What Is a "Tester"?</h2>
<p>A Tester focuses on <strong>verification</strong>. Their primary goal is to execute specific checks to ensure the software behaves as defined in the requirements.</p>
<p><strong>Core Responsibilities:</strong></p>
<ul>
<li>Following written test cases step-by-step.</li>
<li>Executing manual black-box tests.</li>
<li>Reporting defects (bugs) when actual behavior $\\neq$ expected behavior.</li>
<li>Verifying fixes after developers patch them.</li>
</ul>
<p><strong>The Tester Mindset:</strong></p>
<blockquote><p><em>"Does this feature work as the document says it should?"</em></p></blockquote>

<hr />

<h2>3. The Goal: What Is "QA" (Quality Assurance)?</h2>
<p>Quality Assurance focuses on <strong>validation and prevention</strong>. QA is responsible for the overall quality of the product, the process, and the user experience.</p>
<p><strong>Core Responsibilities:</strong></p>
<ul>
<li><strong>Risk Analysis:</strong> Identifying what could go wrong before development starts.</li>
<li><strong>Defect Prevention:</strong> Clarifying requirements to avoid logic errors.</li>
<li><strong>User Advocacy:</strong> Representing the user's interest, not just the code's function.</li>
<li><strong>Process Improvement:</strong> Helping the team work more efficiently.</li>
</ul>
<p><strong>The QA Mindset:</strong></p>
<blockquote><p><em>"What risks are we taking by shipping this? Will the user actually find value in this?"</em></p></blockquote>

<hr />

<h2>4. Side-by-Side Comparison</h2>
<table>
<thead><tr><th>Feature</th><th>The Tester</th><th>The QA Professional</th></tr></thead>
<tbody>
<tr><td><strong>Primary Goal</strong></td><td>Find bugs.</td><td>Prevent defects &amp; ensure quality.</td></tr>
<tr><td><strong>Focus</strong></td><td>Execution of tests.</td><td>Ownership of the product outcome.</td></tr>
<tr><td><strong>Timing</strong></td><td>Mostly <em>after</em> development.</td><td>Involved <em>throughout</em> the lifecycle.</td></tr>
<tr><td><strong>Scope</strong></td><td>Specific features/tickets.</td><td>The whole product &amp; user journey.</td></tr>
<tr><td><strong>The Question</strong></td><td><em>"Is it broken?"</em></td><td><em>"Is it good enough for the user?"</em></td></tr>
</tbody>
</table>

<hr />

<h2>5. Where This Course Fits (The Evolution)</h2>
<p>This course is designed to take you on a journey from <strong>Skill</strong> to <strong>Mindset</strong>.</p>

<h3>🚪 The Entry Point: Manual / Black Box Tester</h3>
<p>We start here because you cannot be a good QA without being a good Tester first. You will learn:</p>
<ul>
<li>How to test without seeing code.</li>
<li>How to break software systematically.</li>
<li>How to write professional reports.</li>
</ul>

<h3>🎯 The Destination: Real QA Professional</h3>
<p>By the end of this path, you will evolve to:</p>
<ul>
<li>Question unclear requirements.</li>
<li>Identify high-risk areas naturally.</li>
<li>Care about business impact, not just pass/fail steps.</li>
</ul>
<blockquote><p><strong>Reality Check:</strong> Your job title might still be "Tester," but your contribution will be "QA."</p></blockquote>

<hr />

<h2>6. Why You Must Master Testing First</h2>
<p>Skipping the "Testing" phase creates weak QAs.</p>
<p>You cannot manage quality if you don't understand how software breaks. Testing teaches you:</p>
<ul>
<li><strong>Attention to detail:</strong> Noticing pixel-perfect issues.</li>
<li><strong>Failure patterns:</strong> Learning where developers usually make mistakes.</li>
<li><strong>System behavior:</strong> Understanding how data flows through an app.</li>
</ul>
<p><strong>Formula for Success:</strong></p>
<p>$$Strong \\ Testing \\ Skills + Ownership \\ Mindset = QA \\ Professional$$</p>

<hr />

<h2>7. The Mindset Shift: From Execution to Strategy</h2>
<p>Here is how a QA thinks differently than a standard Tester in daily scenarios:</p>
<table>
<thead><tr><th>Scenario</th><th>Tester Approach (Execution)</th><th>QA Approach (Strategy)</th></tr></thead>
<tbody>
<tr><td><strong>Following Instructions</strong></td><td>Executes exactly what is written in the test case.</td><td>Asks: <em>"What is missing from this test case? What if the user deviates?"</em></td></tr>
<tr><td><strong>Reporting Bugs</strong></td><td>Reports: <em>"The button doesn't work."</em></td><td>Reports: <em>"The button failure blocks the checkout process; this is a Critical Severity issue."</em></td></tr>
<tr><td><strong>Timing</strong></td><td>Waits for the build to be ready to test.</td><td>Reviews the design <em>before</em> the build is ready to spot logic gaps.</td></tr>
</tbody>
</table>

<hr />

<h2>8. Black Box Testing Through a QA Lens</h2>
<p>Even though this course focuses on <strong>Black Box Testing</strong> (no code visibility), a QA mindset allows you to see the system clearly.</p>
<ul>
<li><strong>Testers</strong> see screens and buttons.</li>
<li><strong>QAs</strong> see user journeys and data flows.</li>
</ul>
<p>You don't need to see the code to understand that if a user loses internet connection during a transaction, the data might get corrupted. That is <strong>QA thinking</strong> applied to <strong>Black Box testing</strong>.</p>

<hr />

<h2>9. Your Career Trajectory</h2>
<p>This is the realistic path for most professionals in this field:</p>
<ol>
<li><strong>Entry Level:</strong> <strong>Manual Tester</strong> (Executes checks, finds bugs).</li>
<li><strong>Growth:</strong> <strong>Strong Black-Box Tester</strong> (Understands systems, writes great reports).</li>
<li><strong>Transition:</strong> <strong>Tester with QA Mindset</strong> (Starts preventing bugs, questions requirements).</li>
<li><strong>Mature:</strong> <strong>QA Engineer</strong> (Owns quality, improves process, mitigates risk).</li>
</ol>

<hr />

<h2>10. Key Takeaways</h2>
<ul>
<li><strong>Testing</strong> is an action; <strong>QA</strong> is a mindset.</li>
<li>A Tester asks "Does it work?"; a QA asks "Is it valuable and safe?"</li>
<li>This course builds the <strong>Testing Skills</strong> you need to get hired, but trains the <strong>QA Mindset</strong> you need to get promoted.</li>
</ul>

</div>`,
}

export default lesson
