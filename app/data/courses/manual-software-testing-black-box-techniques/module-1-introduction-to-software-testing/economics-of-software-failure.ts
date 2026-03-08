import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-1-3',
  slug: 'economics-of-software-failure',
  title: 'The Economics of Software Failure: Why Testing is Your Best Strategic Insurance',
  type: 'article',
  durationMinutes: 20,
  order: 3,
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
  <iframe src="https://www.youtube.com/embed/HeXPIVTPNqA?si=kr6AC-YQVykMkcTN" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/6sCAy2a56HH2DnGcoXiDGx?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/The%20Economics%20of%20Software%20Failure%20Why%20Testing%20is%20Your%20Best%20Strategic%20Insurance/The_Ripple_Effect_of_a_Single_Bug.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/The%20Economics%20of%20Software%20Failure%20Why%20Testing%20is%20Your%20Best%20Strategic%20Insurance/infographic.png" alt="The Economics of Software Failure Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. What Does "Production" Mean?</h2>
<p>"Production" (or "Live") is the environment where real users interact with the software. It is the final destination of the code.</p>
<p>When a bug reaches production:</p>
<ul>
<li>Real customers see it.</li>
<li>Real money is involved.</li>
<li>Company reputation is at risk.</li>
<li>Fixing it becomes significantly more expensive.</li>
</ul>
<blockquote><p><strong>Key Insight:</strong> A bug in development is a <strong>technical problem</strong>. A bug in production is a <strong>business problem</strong>.</p></blockquote>

<hr />

<h2>2. The Bug Cost Curve (Key Concept)</h2>
<p>One of the most important economic principles in software development is that the later a bug is found, the more expensive it is to fix.</p>
<table>
<thead><tr><th>Stage Found</th><th>Cost Impact</th><th>Why?</th></tr></thead>
<tbody>
<tr><td><strong>Requirements</strong></td><td><strong>Very Low</strong></td><td>Just editing a document.</td></tr>
<tr><td><strong>Development</strong></td><td><strong>Low</strong></td><td>Developer fixes it while coding.</td></tr>
<tr><td><strong>Testing</strong></td><td><strong>Medium</strong></td><td>Requires re-testing and bug reporting.</td></tr>
<tr><td><strong>Production</strong></td><td><strong>Very High</strong></td><td>Requires hotfixes, downtime, support calls, and PR damage control.</td></tr>
</tbody>
</table>
<p><strong>The Multiplier Effect:</strong> A bug that costs <strong>$1</strong> to fix during the design phase can cost <strong>10x to 100x</strong> more if it reaches production.</p>

<hr />

<h2>3. Financial Costs</h2>
<p>Production bugs hit the bottom line directly.</p>
<ul>
<li><strong>Lost Sales:</strong> If the "Checkout" button fails, revenue stops immediately.</li>
<li><strong>Refunds &amp; Compensation:</strong> Paying users back for failed services.</li>
<li><strong>Revenue Leakage:</strong> Incorrect calculations (e.g., undercharging for a subscription) can quietly drain money for weeks before being noticed.</li>
<li><strong>Emergency Fixes:</strong> Paying developers overtime to fix critical issues on weekends.</li>
</ul>

<hr />

<h2>4. User Trust &amp; Reputation Damage</h2>
<p>In the digital age, users are unforgiving.</p>
<ul>
<li><strong>Data Loss:</strong> Losing user work is often a permanent trust-breaker.</li>
<li><strong>Security Leaks:</strong> Exposing private data leads to lawsuits and news headlines.</li>
<li><strong>Broken Core Features:</strong> If a banking app won't transfer money, users switch banks.</li>
</ul>
<p><strong>The Impact:</strong></p>
<ul>
<li>Poor App Store reviews.</li>
<li>Negative social media exposure.</li>
<li><strong>Customer Churn</strong> (Users leaving for a competitor).</li>
</ul>
<blockquote><p><strong>Note:</strong> Users don't care <em>why</em> a bug exists (e.g., "The API was down"). They only care <em>that</em> it exists. Rebuilding trust is much harder than fixing code.</p></blockquote>

<hr />

<h2>5. Operational &amp; Team Costs</h2>
<p>The cost isn't just external; it hurts the internal team, too.</p>
<ul>
<li><strong>Firefighting:</strong> Instead of building new features, the team is stuck investigating logs and patching holes.</li>
<li><strong>Context Switching:</strong> Developers have to stop their current work to fix the production bug, breaking their flow and focus.</li>
<li><strong>Burnout:</strong> Constant emergencies lead to stress and high employee turnover.</li>
</ul>

<hr />

<h2>6. Opportunity Cost (Hidden but Critical)</h2>
<p>This is the cost that does not appear on a balance sheet, but it kills growth.</p>
<p>While the team is busy fixing production bugs:</p>
<ol>
<li>New features are delayed.</li>
<li>The product roadmap stalls.</li>
<li>Competitors move faster and capture the market.</li>
</ol>
<p><strong>Opportunity Cost = The value of the work you <em>could</em> have done if you weren't fixing bugs.</strong></p>

<hr />

<h2>7. Technical Debt Growth</h2>
<p>When fixing a bug in production, teams often rush.</p>
<ul>
<li>They skip refactoring (cleaning up code).</li>
<li>They add "quick fixes" or conditional logic ("If user is X, do Y").</li>
<li>They bypass standard testing procedures to get the fix out fast.</li>
</ul>
<p>This increases <strong>Technical Debt</strong> — making the code messier, harder to read, and more likely to break again in the future. Untested software ages badly.</p>

<hr />

<h2>8. Real-World Examples</h2>
<ul>
<li><strong>Banking:</strong> An app shows a user's balance as $0.00 due to a display error (causes panic).</li>
<li><strong>E-commerce:</strong> A discount code allows 100% off instead of 10% off (direct revenue loss).</li>
<li><strong>Mobile:</strong> An app crashes immediately after an OS update (users uninstall).</li>
<li><strong>Access:</strong> A login system locks out valid users (stops all usage).</li>
</ul>
<p><em>Most of these high-impact issues could be caught with basic manual testing.</em></p>

<hr />

<h2>9. Why Businesses Invest in Testing</h2>
<p>Smart organizations do not view testing as an "expense" — they view it as <strong>insurance</strong>.</p>
<p>They test to:</p>
<ul>
<li>Save money in the long term.</li>
<li>Protect their brand image.</li>
<li>Reduce stress on their engineering teams.</li>
<li>Release with confidence.</li>
</ul>
<blockquote><p><strong>Quality is cheaper than chaos.</strong></p></blockquote>

<hr />

<h2>10. 📝 Key Takeaways for Learners</h2>
<ol>
<li><strong>Production bugs are expensive:</strong> The cost increases exponentially over time.</li>
<li><strong>Testing saves money:</strong> It is a high-ROI (Return on Investment) activity.</li>
<li><strong>Reputation matters:</strong> Trust is hard to gain and easy to lose.</li>
<li><strong>Manual testing prevents business risk:</strong> You are the gatekeeper protecting the business from chaos.</li>
</ol>

</div>`,
}

export default lesson
