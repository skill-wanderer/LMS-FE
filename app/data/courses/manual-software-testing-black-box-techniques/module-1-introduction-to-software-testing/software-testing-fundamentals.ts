import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-1-1',
  slug: 'software-testing-fundamentals',
  title: 'Software Testing Fundamentals: It\'s More Than Just Finding Bugs!',
  type: 'article',
  durationMinutes: 15,
  order: 1,
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
  <iframe src="https://www.youtube-nocookie.com/embed/jKcm4gWiUOM?si=S1Y8z1epJbxxZQ2s" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
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
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Software%20Testing%20Fundamentals%20It%E2%80%99s%20More%20Than%20Just%20Finding%20Bugs/Software_Testing_Philosophy.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Software%20Testing%20Fundamentals%20It%E2%80%99s%20More%20Than%20Just%20Finding%20Bugs/infographic.png" alt="Software Testing Philosophy Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. What Is Software Testing?</h2>
<p>Software testing is the process of evaluating a software product to determine whether it meets specified requirements, works as users expect, and reveals defects, risks, or gaps in behavior.</p>
<blockquote>
<p>👉 <strong>In Simple Words:</strong></p>
<p>Testing is about checking software behavior, not proving it is perfect.</p>
</blockquote>

<h3>Core Goals of Software Testing</h3>
<ul>
<li><strong>Find defects early:</strong> Catch issues before they reach the user.</li>
<li><strong>Reduce risk:</strong> Ensure the product is safe to release.</li>
<li><strong>Increase confidence:</strong> Give stakeholders trust in the product's quality.</li>
<li><strong>Protect users &amp; business:</strong> Prevent data loss, financial errors, or bad user experiences.</li>
</ul>
<p><strong>Testing answers critical questions like:</strong></p>
<ul>
<li><em>"Does this feature work as intended?"</em></li>
<li><em>"What happens if the user does something unexpected?"</em></li>
<li><em>"Where can the system break?"</em></li>
</ul>

<hr />

<h2>2. What Software Testing Is NOT</h2>
<p>Many beginners misunderstand testing. It is crucial to set the right expectations.</p>
<h3>❌ Testing Is NOT:</h3>
<ul>
<li>Just clicking around randomly.</li>
<li>Only checking "happy paths" (scenarios where everything goes right).</li>
<li>Verifying that developers are always wrong.</li>
<li>Guaranteeing bug-free software.</li>
<li>Only done after coding is finished.</li>
<li>Only about finding bugs.</li>
</ul>
<blockquote><p><strong>Key Insight:</strong> If you only check that things work, you are <strong>validating</strong>, not testing. Testing is about <strong>thinking critically</strong>, not blindly confirming success.</p></blockquote>

<hr />

<h2>3. Testing vs. Checking (Critical Concept)</h2>
<p>Understanding the difference between these two activities is what separates a novice from a professional.</p>
<table>
<thead><tr><th>Feature</th><th>Checking</th><th>Testing</th></tr></thead>
<tbody>
<tr><td><strong>Goal</strong></td><td>Confirming expected behavior.</td><td>Exploring unexpected behavior.</td></tr>
<tr><td><strong>Question</strong></td><td><em>"Does this work?"</em></td><td><em>"How could this fail?"</em></td></tr>
<tr><td><strong>Nature</strong></td><td>Repetitive.</td><td>Analytical &amp; Creative.</td></tr>
<tr><td><strong>Automation</strong></td><td>Easy to automate.</td><td>Best for human testers.</td></tr>
</tbody>
</table>
<p><strong>Takeaway:</strong> Manual testers add the most value through <strong>Testing</strong> (exploration and analysis), not just <strong>Checking</strong> (verification).</p>

<hr />

<h2>4. Why Testing Is Necessary</h2>
<p>Even simple apps can fail. Testing bridges the gap between <strong>intent</strong> (what we wanted) and <strong>reality</strong> (what we built).</p>
<p><strong>Common reasons for failure:</strong></p>
<ol>
<li><strong>Misunderstood requirements:</strong> The developer built the wrong thing.</li>
<li><strong>Edge cases:</strong> Scenarios developers didn't consider (e.g., negative numbers, empty fields).</li>
<li><strong>User behavior:</strong> Users rarely follow the "happy path."</li>
<li><strong>Environment differences:</strong> Browsers, devices, and operating systems behave differently.</li>
<li><strong>Human assumptions:</strong> "I thought the API would handle that..."</li>
</ol>
<blockquote><p><strong>"Code works exactly as written — not as intended."</strong></p></blockquote>

<hr />

<h2>5. Testing Is About Risk Reduction</h2>
<p>Testing does <strong>not</strong> eliminate all bugs. It reduces the risk of release to an acceptable level.</p>
<p><strong>Examples of risks testers look for:</strong></p>
<ul>
<li><strong>Data loss:</strong> A user saves a file, and it disappears.</li>
<li><strong>Security flaws:</strong> Sensitive data is exposed.</li>
<li><strong>Financial miscalculations:</strong> A shopping cart totals the wrong amount.</li>
<li><strong>System crashes:</strong> The app closes unexpectedly.</li>
<li><strong>Bad user experience:</strong> The app is confusing or slow.</li>
</ul>
<p><strong>The Goal:</strong> Not perfection, but a <strong>safe release</strong>.</p>

<hr />

<h2>6. Testing Is a Thinking Skill</h2>
<p>A common beginner misconception is: <em>"I need to learn automation tools to be a tester."</em></p>
<p><strong>The Reality:</strong></p>
<ul>
<li>Tools help you later.</li>
<li><strong>Thinking matters first.</strong></li>
</ul>
<p><strong>A good tester focuses on:</strong></p>
<ul>
<li>Asking the right questions.</li>
<li>Understanding the user's perspective.</li>
<li>Predicting where failures might happen.</li>
<li>Observing behavior carefully.</li>
</ul>

<hr />

<h2>7. Real-Life Analogy: The Bridge</h2>
<p>Imagine you are testing a newly built bridge.</p>
<ul>
<li><strong>Checking:</strong> Walking across it once on a sunny day to see if it holds you.</li>
<li><strong>Testing:</strong>
  <ul>
  <li>Driving a heavy truck over it.</li>
  <li>Checking how it sways in a storm (bad weather).</li>
  <li>Seeing what happens if traffic stops in the middle (unusual usage).</li>
  </ul>
</li>
</ul>
<p>Software testing works the same way — we stress the system to ensure it holds up under pressure.</p>

<hr />

<h2>8. 📝 Key Takeaways for Learners</h2>
<ol>
<li><strong>Testing ≠ Proving</strong> software works.</li>
<li><strong>Testing = Finding</strong> risks and weaknesses.</li>
<li><strong>Humans</strong> are best at exploratory thinking; machines are best at checking.</li>
<li><strong>Manual testing</strong> is a professional skill requiring creativity, not a fallback job.</li>
</ol>

</div>`,
}

export default lesson
