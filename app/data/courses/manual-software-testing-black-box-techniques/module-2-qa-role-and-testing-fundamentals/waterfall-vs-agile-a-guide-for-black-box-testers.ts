import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-2-4',
  slug: 'waterfall-vs-agile-a-guide-for-black-box-testers',
  title: 'Waterfall vs. Agile: A Guide for Black Box Testers',
  type: 'lesson',
  durationMinutes: 20,
  order: 10,
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
  <iframe src="https://www.youtube-nocookie.com/embed/wPU89O8U4vQ?si=r2A50l6KogNC6WKy" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/2Yaj1ajrbt9pGsF5vaZ3rv?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Waterfall%20vs.%20Agile%20A%20Guide%20for%20Black%20Box%20Testers/Structure_Speed_Testing.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Waterfall%20vs.%20Agile%20A%20Guide%20for%20Black%20Box%20Testers/infographic.jpg" alt="Waterfall vs Agile Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. Introduction: Why the Development Model Matters</h2>
<p>Black box testing focuses on what the system does (inputs → outputs), ignoring internal code structure. However, the software development lifecycle (SDLC) model dictates when you test, how you communicate, and what artifacts you create.</p>
<p><strong>👉 Why this matters to you:</strong></p>
<ul>
<li><strong>Timing:</strong> In Waterfall, you might wait months to test. In Agile, you test on Day 2 of a sprint.</li>
<li><strong>Documentation:</strong> Waterfall requires detailed proof (Step-by-step Test Cases). Agile prizes speed and intuition (Checklists/Exploratory).</li>
<li><strong>Job Role:</strong> A Waterfall tester is often a "gatekeeper." An Agile tester is a "collaborator."</li>
</ul>

<hr />

<h2>2. The Waterfall Model</h2>

<h3>What is it?</h3>
<p>Waterfall is a linear, sequential approach. Imagine a real waterfall; water flows down and cannot easily flow back up. A phase must be 100% complete and "signed off" before the next one starts.</p>

<h3>Typical Phases &amp; The Tester's Role</h3>
<ol>
<li><strong>Requirements:</strong> Tester reviews requirements for testability.</li>
<li><strong>Design:</strong> Tester plans the strategy.</li>
<li><strong>Implementation/Coding:</strong> Tester writes detailed scripts.</li>
<li><strong>Testing:</strong> The "Testing Phase" officially begins here.</li>
<li><strong>Deployment &amp; Maintenance.</strong></li>
</ol>

<h3>Waterfall from a Black Box Tester's View</h3>
<ul>
<li><strong>Source of Truth:</strong> The Requirements Document (BRD/SRS). If the software behaves differently than the document, it is a bug—even if the software is "better."</li>
<li><strong>Artifacts:</strong> Heavy emphasis on formal Test Plans, Traceability Matrices (RTM), and detailed Test Cases with pre-conditions and post-conditions.</li>
<li><strong>Bug Fixing:</strong> Bugs found here are expensive because the code was written weeks or months ago.</li>
</ul>

<h4>💡 Real-World Scenario: The Banking System</h4>
<p>You are testing a core banking mainframe update.</p>
<ul>
<li><strong>Why Waterfall?</strong> Regulations require a paper trail for every change. Errors can cost millions or result in lawsuits.</li>
<li><strong>Your Job:</strong> You spend 4 weeks writing test cases based on a 200-page specification document before you ever see the software.</li>
</ul>

<h3>Pros &amp; Cons for Testers</h3>
<table>
<thead><tr><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>Clear expectations (Expected Results are documented).</td><td>Boring "waiting periods" during coding.</td></tr>
<tr><td>Easy to track progress (RTM).</td><td>"Crunch time" pressure: Development delays eat into Testing time.</td></tr>
<tr><td>Stable requirements (scope creep is managed).</td><td>If a requirement was misunderstood early on, you won't catch it until the very end.</td></tr>
</tbody>
</table>

<hr />

<h2>3. The Agile Model</h2>

<h3>What is it?</h3>
<p>Agile is iterative and incremental. Instead of building the whole car at once, you build a skateboard, then a scooter, then a bike, then a car. Development happens in short cycles called Sprints (usually 2 weeks).</p>

<h3>Key Concepts for Testers</h3>
<ul>
<li><strong>User Stories:</strong> Requirements are small, user-focused sentences (e.g., "As a user, I want to reset my password so I can regain access").</li>
<li><strong>Acceptance Criteria (AC):</strong> The specific conditions the Black Box tester must verify to pass the story.</li>
<li><strong>Definition of Done (DoD):</strong> The checklist that proves a task is truly finished (e.g., "Code written, Tested, No critical bugs").</li>
</ul>

<h3>Agile from a Black Box Tester's View</h3>
<ul>
<li><strong>Source of Truth:</strong> The User Story and conversations with the Product Owner.</li>
<li><strong>Artifacts:</strong> Lightweight. Mind maps, checklists, one-page test strategies, and automated regression scripts.</li>
<li><strong>Timing:</strong> Testing happens concurrently with coding. You might test a feature on Tuesday that was coded on Monday.</li>
</ul>

<h4>💡 Real-World Scenario: The Social Media App</h4>
<p>You are testing a new "Stories" feature for a startup.</p>
<ul>
<li><strong>Why Agile?</strong> Market trends change fast. They need to release something next week to beat a competitor.</li>
<li><strong>Your Job:</strong> You don't have a heavy spec document. You talk to the designer and developer, agree on how it should work, and run exploratory tests immediately.</li>
</ul>

<h3>Pros &amp; Cons for Testers</h3>
<table>
<thead><tr><th>Pros</th><th>Cons</th></tr></thead>
<tbody>
<tr><td>You find bugs immediately (cheaper to fix).</td><td>Documentation is often scarce or outdated.</td></tr>
<tr><td>You influence the design early.</td><td>Regression testing burden is high (re-testing old features every 2 weeks).</td></tr>
<tr><td>Constant collaboration (less loneliness).</td><td>Requirements can change mid-sprint.</td></tr>
</tbody>
</table>

<hr />

<h2>4. High-Level Comparison Cheat Sheet</h2>
<table>
<thead><tr><th>Feature</th><th>Waterfall</th><th>Agile</th></tr></thead>
<tbody>
<tr><td><strong>Requirement Stability</strong></td><td>Fixed (Changes require Change Requests)</td><td>Flexible (Changes welcomed)</td></tr>
<tr><td><strong>Testing Timing</strong></td><td>A distinct phase after coding</td><td>Continuous, during coding</td></tr>
<tr><td><strong>Tester's Mindset</strong></td><td>"Verification" (Does it match the spec?)</td><td>"Validation" (Is it useful to the user?)</td></tr>
<tr><td><strong>Documentation</strong></td><td>Heavy, formal, approved</td><td>Lightweight, "Just enough"</td></tr>
<tr><td><strong>Team Structure</strong></td><td>Silos (Testers sit with Testers)</td><td>Cross-functional (Testers sit with Devs)</td></tr>
<tr><td><strong>Feedback Loop</strong></td><td>Long (Months)</td><td>Short (Daily/Weekly)</td></tr>
</tbody>
</table>

<hr />

<h2>5. Impact on Black Box Techniques</h2>
<p>The actual techniques (Equivalence Partitioning, Boundary Value, etc.) don't change, but <strong>how you apply them</strong> does.</p>

<h3>In Waterfall: "The Formal Approach"</h3>
<ul>
<li><strong>Technique:</strong> Decision Table Testing.
  <ul><li><em>Application:</em> You create a complex table mapping every possible input combination from the Specification Document.</li></ul>
</li>
<li><strong>Technique:</strong> Boundary Value Analysis.
  <ul><li><em>Application:</em> You formally document test cases for min, min-1, max, max+1 based on the Requirements Spec.</li></ul>
</li>
<li><strong>Traceability:</strong> You must link every Test Case ID to a Requirement ID.</li>
</ul>

<h3>In Agile: "The Rapid Approach"</h3>
<ul>
<li><strong>Technique:</strong> Exploratory Testing.
  <ul><li><em>Application:</em> You use your domain knowledge to "hunt" for bugs without a script, focusing on new features.</li></ul>
</li>
<li><strong>Technique:</strong> Acceptance Test-Driven Development (ATDD).
  <ul><li><em>Application:</em> You write the test cases (often in Gherkin syntax: Given/When/Then) before the code is written to guide the developer.</li></ul>
</li>
<li><strong>Regression:</strong> Heavy reliance on Automation because manual testers cannot re-test the whole system every 2 weeks.</li>
</ul>

<hr />

<h2>6. Summary for Learners</h2>
<ul>
<li><strong>Waterfall</strong> is about predictability and control. It is document-driven. Testers act as quality gatekeepers at the end.</li>
<li><strong>Agile</strong> is about adaptability and speed. It is conversation-driven. Testers act as quality coaches throughout the process.</li>
</ul>

<blockquote><p><strong>🧠 Critical Thinking Note:</strong> Most modern companies claim to be "Agile," but many practice "Water-Scrum-Fall" (Agile meetings, but Waterfall requirements and deadlines). A good Black Box tester learns to adapt to the reality of their specific team, regardless of the label.</p></blockquote>

<hr />

<h2>7. Exam &amp; Interview Prep</h2>
<p>Be ready to answer these common questions:</p>

<ol>
<li><strong>"How does your test strategy change if we switch from Waterfall to Agile?"</strong>
  <ul><li><em>Answer:</em> "I would shift from writing heavy documentation upfront to focusing on exploratory testing and automation. I would collaborate with developers earlier rather than waiting for a build."</li></ul>
</li>
<li><strong>"Can you use Boundary Value Analysis in Agile?"</strong>
  <ul><li><em>Answer:</em> "Absolutely. The technique is the same, but instead of documenting it in a 50-step test case, I might just add it to the Acceptance Criteria or a quick test checklist."</li></ul>
</li>
<li><strong>"Which model is better?"</strong>
  <ul><li><em>Answer:</em> "Neither is strictly better; it depends on the project. Waterfall is better for safety-critical, stable projects (like medical devices). Agile is better for consumer-facing apps where requirements change often."</li></ul>
</li>
</ol>

</div>`,
}

export default lesson
