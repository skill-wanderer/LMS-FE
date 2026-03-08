import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-2-3',
  slug: 'testing-throughout-the-sdlc',
  title: 'Testing Throughout the SDLC',
  type: 'article',
  durationMinutes: 20,
  order: 9,
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
  <iframe src="https://www.youtube-nocookie.com/embed/1ss8UyIsc-M?si=hnqPS7GFvTEe43yE" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/2vi9Dr0B29pdxMlcPvAn70?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Testing%20Throughout%20the%20SDLC/Shift-Left_Testing_A_Strategic_Guide.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Testing%20Throughout%20the%20SDLC/infographic.png" alt="SDLC Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. The "Golden Rule": Early Testing</h2>
<p><strong>Key Concept:</strong> Testing is an activity, not just a phase. If you wait until the code is finished to start testing, you are too late.</p>

<h3>📉 The Cost of Fixing Defects</h3>
<p>The later a bug is found, the more expensive it is to fix. This is known as the <strong>Cost of Change Curve</strong>.</p>

<div style="display:flex;flex-wrap:wrap;gap:15px;margin-bottom:20px;">
<div style="flex:1;min-width:200px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:15px;border-radius:8px;text-align:center;">
  <strong style="display:block;color:#28a745;font-size:1.2em;">Requirements</strong>
  <span style="font-size:2em;">$1</span><br><small>Cheap to fix text on paper</small>
</div>
<div style="flex:1;min-width:200px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:15px;border-radius:8px;text-align:center;">
  <strong style="display:block;color:#ffc107;font-size:1.2em;">Development</strong>
  <span style="font-size:2em;">$10</span><br><small>Rewriting functions takes time</small>
</div>
<div style="flex:1;min-width:200px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:15px;border-radius:8px;text-align:center;">
  <strong style="display:block;color:#dc3545;font-size:1.2em;">Production</strong>
  <span style="font-size:2em;">$100+</span><br><small>Hotfixes, lost trust, corruption</small>
</div>
</div>

<blockquote><p><strong>💡 Pro Tip:</strong> Your job as a tester isn't just to find bugs in the software; it's to find bugs in the <em>ideas</em> before they become software.</p></blockquote>

<hr />

<h2>2. The Big Picture: SDLC &amp; Testing Alignment</h2>

<table>
<thead><tr><th>SDLC Phase</th><th>Development Goal</th><th>Tester's Role (Validation)</th></tr></thead>
<tbody>
<tr><td><strong>Requirements</strong></td><td>What are we building?</td><td><strong>Static Testing:</strong> Do these requirements make sense?</td></tr>
<tr><td><strong>Design</strong></td><td>How will we build it?</td><td><strong>Logical Review:</strong> Does this flow handle errors?</td></tr>
<tr><td><strong>Development</strong></td><td>Build the solution.</td><td><strong>Preparation:</strong> Writing test cases &amp; data.</td></tr>
<tr><td><strong>Testing</strong></td><td>Verify the solution.</td><td><strong>Execution:</strong> Running tests &amp; reporting defects.</td></tr>
<tr><td><strong>Deployment</strong></td><td>Release to users.</td><td><strong>Sanity Check:</strong> Is the release safe?</td></tr>
<tr><td><strong>Maintenance</strong></td><td>Keep it running.</td><td><strong>Regression:</strong> Did we break anything old?</td></tr>
</tbody>
</table>

<hr />

<h2>3. Phase 1: Requirements Analysis</h2>
<p><strong>The Goal:</strong> Ensure requirements are clear, complete, and testable.</p>

<h4>🕵️‍♀️ Your Job (Static Testing)</h4>
<p>You are reviewing documentation, not code. You are looking for <strong>Ambiguity</strong>.</p>
<ul>
<li><strong>Review &amp; Walkthrough:</strong> Read the <em>Business Requirement Document (BRD)</em>.</li>
<li><strong>Identify Gaps:</strong> Ask "What happens if the user loses internet here?"</li>
<li><strong>Define Acceptance Criteria:</strong> What exactly determines "Success"?</li>
</ul>

<h4>📌 Real World Example</h4>
<table>
<thead><tr><th>❌ Bad Requirement</th><th>✅ Testable Requirement</th></tr></thead>
<tbody>
<tr><td>"The page should load fast."</td><td>"The page must load in under <strong>2 seconds</strong> with <strong>4G connection</strong>."</td></tr>
<tr><td>"The password should be strong."</td><td>"The password must have <strong>8+ characters</strong>, <strong>1 number</strong>, and <strong>1 symbol</strong>."</td></tr>
</tbody>
</table>

<hr />

<h2>4. Phase 2: Design</h2>
<p><strong>The Goal:</strong> Ensure the technical design supports the business needs.</p>

<h4>🕵️‍♀️ Your Job</h4>
<p>You are the voice of the user during architectural discussions.</p>
<ul>
<li><strong>Design Review:</strong> Look at the wireframes or UI designs.</li>
<li><strong>Data Flow Analysis:</strong> If a user saves data here, does it show up there?</li>
<li><strong>Risk Analysis:</strong> Where is this feature most likely to break?</li>
</ul>

<blockquote><p><strong>🧠 Critical Thinking:</strong> If the design shows a "Upload Photo" button, ask: <em>"What is the maximum file size? What format? What happens if the file is corrupt?"</em></p></blockquote>

<hr />

<h2>5. Phase 3: Development (Coding)</h2>
<p><strong>The Goal:</strong> Build the software.</p>

<h4>🕵️‍♀️ Your Job (Preparation)</h4>
<p>While developers are writing code, <strong>you are NOT idle.</strong> This is your busiest preparation time.</p>
<ol>
<li><strong>Write Test Cases:</strong> Create the step-by-step instructions you will run later.</li>
<li><strong>Prepare Test Data:</strong> Create dummy users, fake credit card numbers, or sample files.</li>
<li><strong>Review Unit Tests:</strong> (Advanced) Check if developers have covered the basics.</li>
</ol>

<hr />

<h2>6. Phase 4: The Testing Phase</h2>
<p><strong>The Goal:</strong> Validate the system end-to-end.</p>

<h4>🕵️‍♀️ Your Job (Execution)</h4>
<p>This is "Dynamic Testing"—running the software.</p>
<ul>
<li><strong>Smoke Testing:</strong> The "Health Check." Does the app launch? If no, reject the build.</li>
<li><strong>Functional Testing:</strong> Testing specific features against requirements.</li>
<li><strong>Regression Testing:</strong> Re-testing unchanged parts to ensure new code didn't break old code.</li>
<li><strong>Bug Reporting:</strong> Logging clear, reproducible defects.</li>
</ul>

<hr />

<h2>7. Phase 5: Deployment</h2>
<p><strong>Goal:</strong> Release safely.</p>
<ul>
<li><strong>Sanity Testing:</strong> A quick check in Staging/Production.</li>
<li><strong>Release Verification:</strong> Confirm versioning.</li>
</ul>
<p><strong>⚠️ Warning:</strong> Never do "Destructive Testing" (like deleting data) in Production!</p>

<hr />

<h2>8. Phase 6: Maintenance</h2>
<p><strong>Goal:</strong> Stability &amp; Evolution.</p>
<ul>
<li><strong>Regression Testing:</strong> Check patches.</li>
<li><strong>Incident Analysis:</strong> Reproduce user bugs.</li>
</ul>

<hr />

<h2>🔁 Summary Concept: Shift-Left Testing</h2>
<p><strong>Shift-Left</strong> simply means moving testing activities to the <em>left</em> side of the timeline (earlier in the SDLC).</p>
<p style="text-align:center;font-weight:bold;font-size:1.1em;margin:20px 0;">
Requirements ➔ Design ➔ Code ➔ <span style="text-decoration:line-through;opacity:0.5;">TEST</span> <span style="color:#dc3545;">(Too Late!)</span><br>
<span style="color:#198754;">✅ TEST Req</span> ➔ <span style="color:#198754;">✅ TEST Design</span> ➔ <span style="color:#198754;">✅ TEST Code</span> ➔ Verify
</p>

<p><strong>Benefits:</strong></p>
<ol>
<li><strong>Faster Feedback:</strong> Devs know about bugs immediately.</li>
<li><strong>Lower Cost:</strong> Preventing a bug is cheaper than fixing it.</li>
<li><strong>Better Quality:</strong> Quality is built in, not inspected in.</li>
</ol>

<hr />

<h3>📝 Quick Quiz</h3>
<p><em>(Self-reflection: Try to answer these before moving to the next module)</em></p>
<ol>
<li>Which phase is the <strong>most expensive</strong> to fix a bug in?</li>
<li>What is the manual tester doing during the <strong>Development Phase</strong>?</li>
<li>What is the difference between <strong>Smoke Testing</strong> and <strong>Regression Testing</strong>?</li>
</ol>

</div>`,
}

export default lesson
