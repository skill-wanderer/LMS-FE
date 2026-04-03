import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-2-1',
  slug: 'the-quality-mindset-fundamentals-of-software-assurance',
  title: 'The Quality Mindset: Fundamentals of Software Assurance',
  type: 'lesson',
  durationMinutes: 20,
  order: 7,
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
  <iframe src="https://www.youtube-nocookie.com/embed/631o9_y6V0o?si=R573G_UcRVAnDukB" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/3lCZTxviQ6npEGvmZBblAc?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/QA%20is%20NOT%20Just%20Finding%20Bugs/The_Quality_Mindset_Fundamentals_of_Software_Assurance.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/QA%20is%20NOT%20Just%20Finding%20Bugs/infographic.png" alt="QA Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. Defining Quality Assurance (QA)</h2>
<p>Quality Assurance is the strategic discipline of ensuring a software product meets user expectations, fulfills business requirements, and maintains high reliability.</p>
<ul>
<li><strong>❌ The Myth:</strong> QA is just "finding bugs" at the end of a project.</li>
<li><strong>✅ The Reality:</strong> QA is about <strong>defect prevention</strong>, risk mitigation, and protecting the end-user experience.</li>
</ul>
<p><strong>QA Focus Areas:</strong></p>
<ul>
<li><strong>Correctness:</strong> Does it do what the business intended?</li>
<li><strong>User Experience (UX):</strong> Is it intuitive and accessible?</li>
<li><strong>Stability:</strong> Does it work consistently under different conditions?</li>
<li><strong>Risk Reduction:</strong> Identifying "what could go wrong" before the code is even written.</li>
</ul>

<hr />

<h2>2. Course Roadmap: Black Box &amp; Manual Testing</h2>
<p>This course focuses on <strong>Black Box Testing</strong>—the art of testing software without looking at the internal code.</p>
<p><strong>Our Learning Objectives:</strong></p>
<ul>
<li>Mastering the "User Perspective."</li>
<li>Identifying real-world edge cases and risks.</li>
<li>Reporting defects with professional clarity and impact analysis.</li>
</ul>
<blockquote><p><strong>Target Outcome:</strong> We aren't just training you to follow instructions; we are training you to <strong>think and act like a QA professional.</strong></p></blockquote>

<hr />

<h2>3. Tester vs. QA: Evolution of the Role</h2>
<p>While the terms are often used interchangeably, there is a significant professional evolution between them:</p>
<table>
<thead><tr><th>Feature</th><th>The Manual Tester (Entry Point)</th><th>The QA Professional (The Goal)</th></tr></thead>
<tbody>
<tr><td><strong>Primary Task</strong></td><td>Executes test cases and follows scenarios.</td><td>Designs strategies and questions requirements.</td></tr>
<tr><td><strong>Focus</strong></td><td>Finds and reports defects (Bugs).</td><td>Analyzes risks and prevents defects.</td></tr>
<tr><td><strong>Mindset</strong></td><td>"Does the button work?"</td><td>"Is this the right solution for the user?"</td></tr>
<tr><td><strong>Ownership</strong></td><td>Owns the execution of the test.</td><td>Owns the <strong>quality</strong> of the product.</td></tr>
</tbody>
</table>
<p><em>Note: We will dive deeper into this distinction in the next lesson.</em></p>

<hr />

<h2>4. Why QA is Critical (The Business Case)</h2>
<p>Without a dedicated QA presence, teams fall into a "firefighting" loop.</p>
<ul>
<li><strong>Cost Efficiency:</strong> Finding a bug during the design phase costs cents; finding it in production costs thousands.</li>
<li><strong>User Trust:</strong> A single major bug can lead to uninstalls and negative reviews.</li>
<li><strong>Velocity:</strong> High-quality code allows for faster releases because there is less "re-work" and fewer emergency patches.</li>
</ul>

<hr />

<h2>5. QA Responsibilities Across the SDLC</h2>
<p>A true QA professional is involved from the first meeting to the final release.</p>

<h3>🧠 Phase 1: Planning &amp; Requirements</h3>
<p>QA acts as the "Devil's Advocate." We ask the hard questions:</p>
<ul>
<li>"What if the user's internet drops during payment?"</li>
<li>"What if they try to upload a 2GB file instead of a 2MB one?"</li>
<li><strong>Goal:</strong> Catch logic flaws before a single line of code is written.</li>
</ul>

<h3>🛠 Phase 2: During Development</h3>
<p>QA collaborates with Developers to clarify <strong>Acceptance Criteria</strong>. By preparing tests early, we ensure that the "Definition of Done" actually means the feature is stable.</p>

<h3>🧪 Phase 3: The Testing Phase (Black Box)</h3>
<p>This is where your core technical skills come to life through:</p>
<ul>
<li><strong>Functional Testing:</strong> Checking specific features.</li>
<li><strong>Exploratory Testing:</strong> Using intuition to find "unplanned" bugs.</li>
<li><strong>Regression Testing:</strong> Ensuring new changes didn't break old features.</li>
</ul>

<h3>🚀 Phase 4: Release &amp; Beyond</h3>
<p>QA provides the <strong>Confidence Score</strong>. We don't just "approve" a release; we provide a report of known risks so the business can make an informed "Go/No-Go" decision.</p>

<hr />

<h2>6. The "Voice of the User"</h2>
<p>Developers often suffer from "Developer Vision"—they know how the app is <em>supposed</em> to work. <strong>QA represents the real world.</strong></p>
<p><strong>QA considers users who:</strong></p>
<ul>
<li>Are non-technical or in a rush.</li>
<li>Use older devices or slow 3G networks.</li>
<li>Make mistakes (double-clicking, hitting "back" during a save).</li>
</ul>
<blockquote><p><strong>The Difference:</strong> A Developer thinks about how it <em>should</em> work. A QA thinks about how it <em>will</em> be used.</p></blockquote>

<hr />

<h2>7. Our Philosophy: Growth Mindset</h2>
<p>You will start by learning the mechanics of manual testing. However, the ultimate goal of this course is to build your <strong>Quality Mindset</strong>.</p>
<ol>
<li><strong>Phase 1:</strong> Learn to observe and report.</li>
<li><strong>Phase 2:</strong> Learn to analyze and investigate.</li>
<li><strong>Phase 3:</strong> Learn to advocate for the user and the product.</li>
</ol>

<hr />

<h2>8. Key Takeaways</h2>
<ul>
<li><strong>Black Box Testing</strong> is our primary tool for this course.</li>
<li><strong>Testing</strong> is a task; <strong>QA</strong> is a mindset of ownership.</li>
<li>Early involvement is the key to preventing expensive mistakes.</li>
<li>A great QA is the strongest bridge between the user and the developer.</li>
</ul>

</div>`,
}

export default lesson
