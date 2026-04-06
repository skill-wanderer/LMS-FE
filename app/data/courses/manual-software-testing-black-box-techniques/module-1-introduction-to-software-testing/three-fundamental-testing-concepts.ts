import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-1-5',
  slug: 'three-fundamental-testing-concepts',
  title: 'Software Testing 101: The Three Fundamental Concepts You Need to Know',
  type: 'lesson',
  durationMinutes: 15,
  order: 5,
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
  <iframe src="https://www.youtube-nocookie.com/embed/Xl67gku8xMs?si=dboHnuFmvX4T1a0y" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/50aNSbM2TxYnfCFjosiTdb?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy" data-testid="embed-iframe"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Software%20Testing%20101%20The%20Three%20Fundamental%20Concepts%20You%20Need%20to%20Know/The_Three_Pillars_of_Software_Testing.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Software%20Testing%20101%20The%20Three%20Fundamental%20Concepts%20You%20Need%20to%20Know/infographic.png" alt="Software Testing 101 Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" loading="lazy" />

<h2>1. Why This Topic Matters</h2>
<p>One of the most confusing topics for beginners is understanding the boundaries of their role.</p>
<blockquote>
  <p><i>"Which type of testing am I actually doing?"</i></p>
</blockquote>
<p>Understanding these three concepts helps you:</p>
<ul>
<li><strong>Know your role:</strong> Stop worrying about code if you don't need to.</li>
<li><strong>Avoid unrealistic expectations:</strong> Don't try to fix the engine if you're just testing the brakes.</li>
<li><strong>Build the right skills first:</strong> Focus on user behavior before system architecture.</li>
<li><strong>Communicate better:</strong> Speak the same language as developers.</li>
</ul>

<hr />

<h2>2. Black Box Testing</h2>
<p><strong>"The User's Perspective"</strong></p>
<h3><strong>What It Is</strong></h3>
<p>In Black Box testing, you treat the software like a sealed box.</p>
<ul>
<li>You <strong>do not</strong> see the internal code or structure.</li>
<li>You test entirely from the <strong>user's perspective</strong>.</li>
<li>You focus only on <strong>Inputs</strong> (what goes in) and <strong>Outputs</strong> (what comes out).</li>
</ul>
<blockquote>
  <p><strong>The Mindset:</strong> <i>"I don't know how it works inside, and I don't care. I only care how it behaves."</i></p>
</blockquote>
<h3><strong>What You Focus On</strong></h3>
<ul>
<li>Functional behavior (Does it do what it says?)</li>
<li>UI and UX (Is it easy to use?)</li>
<li>Business rules.</li>
<li>Error handling (Does it crash gracefully?)</li>
<li>Edge cases and User workflows.</li>
</ul>
<h3><strong>Example</strong></h3>
<p>You enter a valid username and password into a login screen. You check if you are redirected to the Dashboard. You do not check the database query or the encryption algorithm used.</p>
<h3><strong>Skills Needed</strong></h3>
<ul>
<li>Logical thinking.</li>
<li>Curiosity.</li>
<li>Attention to detail.</li>
<li>Understanding requirements.</li>
<li>Exploratory mindset.</li>
</ul>
<p>👉 <strong>Most manual testers start their careers primarily in Black Box testing.</strong></p>

<hr />

<h2>3. White Box Testing</h2>
<p><strong>"The Developer's Perspective"</strong></p>
<h3><strong>What It Is</strong></h3>
<p>In White Box testing (also called "Glass Box" or "Clear Box"), you test the system from the <i>inside</i>.</p>
<ul>
<li>You have <strong>full access</strong> to the source code.</li>
<li>You have deep knowledge of the internal logic.</li>
<li>Your tests are based on the code structure itself.</li>
</ul>
<h3><strong>What You Focus On</strong></h3>
<ul>
<li>Code paths (Did I test every line?).</li>
<li>Branch logic (Did the <code>if</code> and the <code>else</code> both work?).</li>
<li>Loops and conditions.</li>
<li>Internal security and error handling.</li>
</ul>
<h3><strong>Example</strong></h3>
<p>A developer writes a test to ensure that a specific function calculates tax correctly for all 50 states by looking at the <code>switch</code> statement in the code.</p>
<h3><strong>Skills Needed</strong></h3>
<ul>
<li>Programming / Coding.</li>
<li>Understanding algorithms.</li>
<li>Debugging skills.</li>
<li>Unit Testing frameworks.</li>
</ul>
<p>👉 <strong>White Box testing is usually performed by Developers or Automation Engineers.</strong></p>

<hr />

<h2>4. Grey Box Testing</h2>
<p><strong>"The Hybrid Approach"</strong></p>
<h3><strong>What It Is</strong></h3>
<p>Grey Box testing sits in the middle. You don't have full access to the code, but you aren't flying blind either.</p>
<ul>
<li>You have <strong>partial knowledge</strong> of the system internals.</li>
<li>You have access to <strong>Logs, APIs, or Databases</strong>.</li>
<li>You know enough to test smarter, but you aren't rewriting the application.</li>
</ul>
<h3><strong>What You Focus On</strong></h3>
<ul>
<li>API behavior (Request/Response).</li>
<li>Database effects (Did the data actually save?).</li>
<li>System integrations.</li>
<li>Security and data flow.</li>
</ul>
<h3><strong>Example</strong></h3>
<p>You submit a "Contact Us" form (Black Box action), but then you query the Database to make sure the user's email was actually recorded in the <code>users</code> table (Grey Box verification).</p>
<h3><strong>Skills Needed</strong></h3>
<ul>
<li>System understanding (Architecture).</li>
<li>Reading server logs.</li>
<li>Using tools like <strong>Postman</strong> (API testing) or <strong>SQL</strong> (Database).</li>
</ul>
<p>👉 <strong>Many experienced manual testers naturally evolve into Grey Box testers as they learn the system.</strong></p>

<hr />

<h2>5. Side-by-Side Comparison</h2>
<table>
<thead><tr><th><strong>Aspect</strong></th><th><strong>Black Box</strong></th><th><strong>Grey Box</strong></th><th><strong>White Box</strong></th></tr></thead>
<tbody>
<tr><td><strong>Code Access</strong></td><td>❌ None</td><td>⚠ Partial (Logs/DB)</td><td>✅ Full</td></tr>
<tr><td><strong>Perspective</strong></td><td><strong>User</strong> Behavior</td><td><strong>System</strong> Behavior</td><td><strong>Code</strong> Logic</td></tr>
<tr><td><strong>Requires Coding?</strong></td><td>❌ No</td><td>⚠ Helpful (SQL/API)</td><td>✅ Yes</td></tr>
<tr><td><strong>Best For</strong></td><td>UX, Workflows, Functions</td><td>Integrations, Data, APIs</td><td>Logic, Paths, Security</td></tr>
<tr><td><strong>Typical Role</strong></td><td>Manual Tester / UA</td><td>Senior QA / Analyst</td><td>Developer / SDET</td></tr>
</tbody>
</table>

<hr />

<h2>6. Common Beginner Mistakes</h2>
<ul>
<li>❌ <strong>Myth:</strong> "Manual testers must do white box testing."
  <ul>
    <li><strong>Reality:</strong> No, that is mostly the developer's job (Unit Testing).</li>
  </ul>
</li>
<li>❌ <strong>Myth:</strong> "Black box testing is simple and low value."
  <ul>
    <li><strong>Reality:</strong> Black box testing finds the bugs that actually annoy users. It is high value.</li>
  </ul>
</li>
<li>❌ <strong>Myth:</strong> "If I don't code, I'm not a real tester."
  <ul>
    <li><strong>Reality:</strong> Critical thinking is your primary tool; code is secondary.</li>
  </ul>
</li>
</ul>

<hr />

<h2>7. Real Industry Flow</h2>
<p>In a healthy team, all three exist together:</p>
<ol>
<li><strong>White Box:</strong> Developers test the logic as they write it.</li>
<li><strong>Grey Box:</strong> Testers verify that the API and Database talk to each other correctly.</li>
<li><strong>Black Box:</strong> Testers verify the final experience works for the user.</li>
</ol>

<hr />

<h2>8. 📝 Key Takeaways for Learners</h2>
<ol>
<li><strong>Black Box</strong> = User-focused testing (Start here).</li>
<li><strong>White Box</strong> = Code-focused testing (Leave this to devs for now).</li>
<li><strong>Grey Box</strong> = System-aware testing (Grow into this).</li>
<li>Most user-impacting bugs are found via Black Box testing.</li>
<li>Your career path is likely: <strong>Black Box</strong> ➝ <strong>Grey Box</strong>.</li>
</ol>

</div>`,
}

export default lesson
