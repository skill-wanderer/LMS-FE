import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-1-4',
  slug: 'manual-vs-automation-testing',
  title: 'Manual vs. Automation Testing: Key Differences & Professional Strategy',
  type: 'article',
  durationMinutes: 15,
  order: 4,
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
  <iframe src="https://www.youtube-nocookie.com/embed/0Ye5WWoY2kw?si=jJk_xwvSalt1P_5O" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/6my6XCjUhmjTBfkZDutoT2?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Manual%20vs.%20Automation%20Testing%20Key%20Differences%20%26%20Professional%20Strategy/Testing_Harmony_Automation_Manual_Synergy.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Manual%20vs.%20Automation%20Testing%20Key%20Differences%20%26%20Professional%20Strategy/infographic.png" alt="Manual vs Automation Testing Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. The Biggest Misconception</h2>
<p>Many beginners start their journey believing:</p>
<blockquote><p>"Automation testing replaces manual testing."</p></blockquote>
<p>This is wrong.</p>
<ul>
<li>✅ Automation does not replace manual testing.</li>
<li>✅ Manual and automation testing serve different purposes.</li>
<li>✅ Strong teams use both together.</li>
</ul>

<h2>2. What Is Manual Testing?</h2>
<p>Manual testing is the process where a human tester:</p>
<ul>
<li>Executes test scenarios by hand.</li>
<li>Observes system behavior directly.</li>
<li>Thinks critically and explores the application.</li>
<li>Uses human judgment, intuition, and curiosity.</li>
</ul>
<p>Focus areas for Manual Testing:</p>
<ul>
<li><strong>Exploratory Testing:</strong> "What happens if I try this?"</li>
<li><strong>Usability:</strong> "Is this button too small?" or "Is this flow confusing?"</li>
<li><strong>Edge Cases:</strong> Testing weird inputs and unusual scenarios.</li>
<li><strong>New Features:</strong> Testing code that has just been written.</li>
</ul>
<blockquote><p><strong>Key Concept:</strong> Manual testing is thinking-driven, not tool-driven.</p></blockquote>

<h2>3. What Is Automation Testing?</h2>
<p>Automation testing involves using scripts, tools, and code to:</p>
<ul>
<li>Execute predefined test steps.</li>
<li>Repeat tests quickly and frequently.</li>
<li>Check stable, predictable behavior.</li>
</ul>
<p>Focus areas for Automation:</p>
<ul>
<li><strong>Regression Tests:</strong> Ensuring old features still work after new changes.</li>
<li><strong>Repetitive Checks:</strong> Running the same login check 500 times.</li>
<li><strong>Large Test Suites:</strong> Running thousands of tests in minutes.</li>
<li><strong>CI/CD Pipelines:</strong> Automatic checks whenever a developer saves code.</li>
</ul>
<blockquote><p><strong>Key Concept:</strong> Automation checks — Humans test.</p></blockquote>

<h2>4. Key Differences at a Glance</h2>
<table>
<thead><tr><th></th><th>Manual Testing</th><th>Automation Testing</th></tr></thead>
<tbody>
<tr><td><strong>Who does it?</strong></td><td>Humans (Testers/Users).</td><td>Scripts &amp; Tools.</td></tr>
<tr><td><strong>Nature</strong></td><td>Flexible, Creative, Exploratory.</td><td>Rigid, Predefined, Repetitive.</td></tr>
<tr><td><strong>Goal</strong></td><td>To find new bugs and understand the system.</td><td>To detect regression (known issues).</td></tr>
<tr><td><strong>Speed</strong></td><td>Slower to execute.</td><td>Very fast execution once built.</td></tr>
<tr><td><strong>Cost</strong></td><td>Low setup cost / High long-term labor.</td><td>High initial cost / Low execution cost.</td></tr>
</tbody>
</table>

<h2>5. When Manual Testing Is Better</h2>
<p>You cannot automate everything. Manual testing is superior when:</p>
<ol>
<li><strong>The feature is new:</strong> You can't write a script for something that doesn't exist or isn't stable yet.</li>
<li><strong>Requirements are unclear:</strong> Humans can adapt; scripts cannot.</li>
<li><strong>UI/UX matters:</strong> A script can check if a button exists, but only a human can tell if it's misaligned or ugly.</li>
<li><strong>Complex Business Logic:</strong> Scenarios that require judgment or external knowledge.</li>
<li><strong>Ad-hoc / Exploratory:</strong> When you just want to "break" the app by trying random things.</li>
</ol>
<blockquote><p><strong>Rule of Thumb:</strong> New features should always be manually tested first.</p></blockquote>

<h2>6. When Automation Testing Is Better</h2>
<p>Automation is a force multiplier. It works best when:</p>
<ol>
<li><strong>Features are stable:</strong> The code isn't changing every day.</li>
<li><strong>Repetition is high:</strong> You need to run the same test on every deployment.</li>
<li><strong>Speed is critical:</strong> You need feedback in 5 minutes, not 5 hours.</li>
<li><strong>Data-Driven Testing:</strong> Testing the same form with 1,000 different data sets.</li>
</ol>
<p>Typical Candidates for Automation:</p>
<ul>
<li>Login/Logout functionality.</li>
<li>"Smoke Tests" (Critical path checks).</li>
<li>Regression suites.</li>
</ul>

<h2>7. Why Automation Alone Fails</h2>
<p>Automation is dumb. It does exactly what it is told, and nothing more.</p>
<ul>
<li>It cannot think.</li>
<li>It cannot notice "this feels wrong."</li>
<li>It cannot explore creatively.</li>
<li><strong>Blindness:</strong> If a button turns invisible but is still technically "clickable" in the code, automation might pass the test, while a human would fail it immediately.</li>
</ul>
<blockquote><p>"If a bug was never imagined, it will never be automated."</p></blockquote>
<p>You cannot automate what you don't yet understand.</p>

<h2>8. The Correct Testing Strategy (Industry Reality)</h2>
<p>Professional teams do not choose one over the other. They follow a cycle:</p>
<ol>
<li><strong>Manual Testing:</strong> Explores and understands the system to find bugs in new features.</li>
<li><strong>Identify:</strong> Crucial, stable behaviors are identified as candidates for automation.</li>
<li><strong>Automate:</strong> Scripts are written to "protect" those behaviors from breaking in the future.</li>
<li><strong>Repeat:</strong> Manual testers move on to explore new risks and features.</li>
</ol>
<p><strong>Manual testing never disappears — it just evolves.</strong></p>

<h2>9. Career Reality for Beginners</h2>
<ul>
<li><strong>Automation requires coding:</strong> To be an automation engineer, you essentially need to be a developer.</li>
<li><strong>Manual testing builds foundations:</strong> You cannot write good automation scripts if you don't know how to test.</li>
<li><strong>The Career Path:</strong> Good manual testers often become:
  <ul>
  <li>Senior QA Leads (Strategy focus).</li>
  <li>Test Managers.</li>
  <li>Automation Engineers (Technical focus).</li>
  <li>Product Owners (Business focus).</li>
  </ul>
</li>
</ul>
<p><strong>Manual testing is not a dead-end — it is the entry point to quality engineering.</strong></p>

<h2>10. 📝 Key Takeaways for Learners</h2>
<ol>
<li>Manual ≠ Outdated. It is a thinking skill.</li>
<li>Automation ≠ Superior. It is a checking tool.</li>
<li>Manual Testing finds new problems (Discovery).</li>
<li>Automation Testing prevents old problems (Regression).</li>
<li>Quality comes from strategy, not just tools.</li>
</ol>

</div>`,
}

export default lesson
