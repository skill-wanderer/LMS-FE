import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-1-2',
  slug: 'root-causes-of-software-bugs',
  title: 'The Inevitability of Error: Understanding the Root Causes of Software Bugs',
  type: 'article',
  durationMinutes: 18,
  order: 2,
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
  <iframe src="https://www.youtube-nocookie.com/embed/3gfW97EzbHU?si=PCqUQI3oWNWZYRiM" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/2RSy9yy4pWRY2LbZOT1qQL?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/The%20Inevitability%20of%20Error%20Understanding%20the%20Root%20Causes%20of%20Software%20Bugs/The_Anatomy_of_a_Bug.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/The%20Inevitability%20of%20Error%20Understanding%20the%20Root%20Causes%20of%20Software%20Bugs/infographic.png" alt="Infographic: The Anatomy of a Bug" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. The Honest Truth About Bugs</h2>
<p>Bugs are normal. They exist in every software system — from small websites to banking apps, from early-stage startups to global tech giants.</p>
<blockquote><p><strong>Key Principle:</strong> If software has users, it has bugs.</p></blockquote>
<p>The goal of testing is <strong>not to blame individuals</strong>, but to understand <em>why</em> bugs happen. By understanding the root causes, we can find them earlier and reduce their negative impact on the business.</p>

<hr />

<h2>2. Software Is Built by Humans</h2>
<p>At its core, software is written by people, and people are fallible.</p>
<p><strong>Humans naturally:</strong></p>
<ul>
<li>Misunderstand complex requirements.</li>
<li>Make assumptions based on their own experiences.</li>
<li>Miss "edge cases" (uncommon scenarios).</li>
<li>Get tired, stressed, or rushed.</li>
</ul>
<blockquote><p><strong>Note:</strong> Even highly skilled senior developers create bugs. Skill reduces the <em>frequency</em> of bugs, but it does not eliminate them.</p></blockquote>

<hr />

<h2>3. Unclear or Changing Requirements</h2>
<p>One of the biggest sources of bugs is the documentation (or lack thereof) before a single line of code is written.</p>
<p><strong>Common Problems:</strong></p>
<ul>
<li><strong>Incomplete:</strong> Vital details are missing.</li>
<li><strong>Ambiguous:</strong> The text can be interpreted in two different ways.</li>
<li><strong>Volatile:</strong> Requirements change halfway through development.</li>
<li><strong>Misalignment:</strong> The business stakeholders expect something different than what was written down.</li>
</ul>
<p>Example Scenario:</p>
<p>Requirement: "The system should send a notification."</p>
<p><strong>Questions a Tester must ask:</strong></p>
<ul>
<li><em>When? (Immediately? Daily digest?)</em></li>
<li><em>To whom? (Admin? User? Both?)</em></li>
<li><em>By what channel? (Email, SMS, In-app?)</em></li>
<li><em>What if delivery fails? (Retry? Log error?)</em></li>
</ul>
<p><strong>Every unanswered question is a potential bug waiting to happen.</strong></p>

<hr />

<h2>4. Complexity Grows Very Fast</h2>
<p>Modern software is rarely simple. It involves:</p>
<ul>
<li>Many interconnected features.</li>
<li>Multiple integrations.</li>
<li>Various devices and browsers.</li>
<li>Diverse user behaviors.</li>
</ul>
<p>Even simple logic can break when combined with other features. Complexity increases faster than our ability to mentally predict behavior.</p>
<blockquote><p><strong>Testing exists because no one can mentally simulate the entire system at once.</strong></p></blockquote>

<hr />

<h2>5. Assumptions vs. Reality</h2>
<p>Developers often build software based on "Happy Path" assumptions. Testers must challenge these against reality.</p>
<table>
<thead><tr><th>Developer Assumption</th><th>The Reality</th></tr></thead>
<tbody>
<tr><td>Users follow instructions.</td><td>Users do unexpected, illogical things.</td></tr>
<tr><td>Inputs are reasonable.</td><td>Inputs are messy, blank, or formatted wrong.</td></tr>
<tr><td>Systems behave consistently.</td><td>Networks fail; databases lock up.</td></tr>
<tr><td>Data is clean.</td><td>Data is often corrupted or old.</td></tr>
</tbody>
</table>
<p><strong>The Tester's Mindset:</strong> <em>"What happens if this assumption is wrong?"</em></p>

<hr />

<h2>6. Time Pressure and Business Constraints</h2>
<p>Software is built under pressure:</p>
<ul>
<li>Tight deadlines.</li>
<li>Limited budgets.</li>
<li>Marketing promises.</li>
<li>Competitive necessity.</li>
</ul>
<p><strong>The Result:</strong> Shortcuts are taken, testing time is reduced, and "Technical Debt" accumulates. Often, bugs are known but accepted as a calculated risk to meet a deadline.</p>

<hr />

<h2>7. Environment &amp; Integration Challenges</h2>
<p>Software rarely runs in a vacuum. It must survive in a messy world.</p>
<h3>A. Environment Differences</h3>
<p>A feature working on a developer's high-end laptop might fail on:</p>
<ul>
<li><strong>Browsers:</strong> Chrome vs. Safari vs. Firefox.</li>
<li><strong>Devices:</strong> High-end iPhone vs. budget Android.</li>
<li><strong>OS:</strong> Windows vs. macOS vs. Linux.</li>
<li><strong>Network:</strong> Fast Wi-Fi vs. spotty 4G.</li>
</ul>
<h3>B. Integrations</h3>
<p>Modern systems connect to Payment Gateways, Email Services, Maps, and Third-party APIs. Each connection point adds latency and potential failure.</p>
<blockquote><p><strong>Insight:</strong> Many bugs appear <em>between</em> systems, not inside them.</p></blockquote>

<hr />

<h2>8. Why Testers Are Essential</h2>
<p>Because bugs exist due to human error, ambiguity, complexity, pressure, and assumptions, testers are the necessary counterbalance.</p>
<p><strong>Testers exist to:</strong></p>
<ol>
<li>Challenge assumptions.</li>
<li>Ask uncomfortable questions.</li>
<li>Explore risky behavior.</li>
<li>Represent the real user.</li>
</ol>
<p><strong>Testing is not about distrusting developers — it is about protecting users.</strong></p>

<hr />

<h2>9. 📝 Key Takeaways for Learners</h2>
<ol>
<li><strong>Bugs are inevitable;</strong> they are not a sign of failure.</li>
<li>Most bugs come from <strong>process and communication issues</strong>, not "bad coding."</li>
<li><strong>Good testing reduces risk</strong>, not ego.</li>
<li>Testers look for <strong>causes</strong>, not blame.</li>
</ol>

</div>`,
}

export default lesson
