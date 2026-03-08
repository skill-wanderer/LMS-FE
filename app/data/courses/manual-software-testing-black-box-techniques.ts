import type { Course } from '~/types/course'

const course: Course = {
    id: 'course-1',
    slug: 'manual-software-testing-black-box-techniques',
    title: 'Manual Software Testing with Black Box Techniques',
    excerpt: 'Learn how to test software without writing code, using practical black box testing techniques applied in real-world software teams.',
    description: 'This course teaches you how to test software without writing code, using practical black box testing techniques applied in real-world software teams.\n\nYou will learn how to:\n• Understand software requirements from a user\'s perspective\n• Design effective manual test cases using black box techniques\n• Perform exploratory testing to uncover hidden defects\n• Test web and mobile applications systematically\n• Write clear, professional bug reports that developers can act on\n• Collaborate effectively with developers and product managers in Agile teams\n\nThe course focuses on hands-on practice, not theory. You will work with real application scenarios and complete a final manual testing project that can be used as part of your QA portfolio.\n\nThis course is ideal for:\n• Beginners with no programming background\n• Career switchers entering the QA / testing field\n• Junior developers who want to strengthen their testing mindset\n\nBy the end of the course, you will have the skills and confidence required to perform the role of a Junior Manual QA / Software Tester in a professional environment.',
    thumbnail: '/images/courses/manual-software-testing.png',
    difficulty: 'beginner',
    lessonCount: 7,
    lessons: [
      {
        id: 'lesson-1-1',
        slug: 'software-testing-fundamentals',
        title: 'Software Testing Fundamentals: It\'s More Than Just Finding Bugs!',
        type: 'article',
        durationMinutes: 15,
        order: 1,
        module: 'Module 1: Introduction to Software Testing',
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
      },
      {
        id: 'lesson-1-2',
        slug: 'root-causes-of-software-bugs',
        title: 'The Inevitability of Error: Understanding the Root Causes of Software Bugs',
        type: 'article',
        durationMinutes: 18,
        order: 2,
        module: 'Module 1: Introduction to Software Testing',
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
      },
      {
        id: 'lesson-1-3',
        slug: 'economics-of-software-failure',
        title: 'The Economics of Software Failure: Why Testing is Your Best Strategic Insurance',
        type: 'article',
        durationMinutes: 20,
        order: 3,
        module: 'Module 1: Introduction to Software Testing',
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
  <iframe src="https://www.youtube-nocookie.com/embed/HeXPIVTPNqA?si=kr6AC-YQVykMkcTN" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
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
      },
      {
        id: 'lesson-1-4',
        slug: 'manual-vs-automation-testing',
        title: 'Manual vs. Automation Testing: Key Differences & Professional Strategy',
        type: 'article',
        durationMinutes: 15,
        order: 4,
        module: 'Module 1: Introduction to Software Testing',
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
      },
      {
        id: 'lesson-1-5',
        slug: 'three-fundamental-testing-concepts',
        title: 'Software Testing 101: The Three Fundamental Concepts You Need to Know',
        type: 'article',
        durationMinutes: 15,
        order: 5,
        module: 'Module 1: Introduction to Software Testing',
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
      },
      {
        id: 'lesson-1-6',
        slug: 'module-1-summary-and-takeaway',
        title: 'Module 1 Summary & Takeaway + Optional Quiz',
        type: 'article',
        durationMinutes: 20,
        order: 6,
        module: 'Module 1: Introduction to Software Testing',
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
  <iframe src="https://www.youtube-nocookie.com/embed/FSJrebw63qw?si=yhXdOop_NSsIMomU" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/1YMYoKiZISb1XjY591yMqz?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Module%201%20summarry%20and%20take%20away/The_Professional_Testers_Mindset.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Module%201%20summarry%20and%20take%20away/infographic.png" alt="Module 1 Summary Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>Introduction to Software Testing</h2>
<p>Software testing is an analytical process of evaluating a product to determine if it meets requirements, satisfies user expectations, and reveals defects or risks.</p>
<p>Contrary to common misconceptions, testing is not merely about "finding bugs" or "clicking around"; it is a <strong>professional thinking skill</strong> that serves as a bridge between developer intent and user reality.</p>

<hr />

<h3>1. The Core Philosophy of Software Testing</h3>
<p>The primary objective of testing is to <strong>reduce risk</strong> to an acceptable level, not to prove that a system is perfect or bug-free. Testing provides stakeholders with confidence in a product's quality and protects the business from financial and reputational damage.</p>

<h4>The Distinction Between Testing and Checking</h4>
<p>A critical concept for professional testers is the difference between "checking" a system and "testing" it.</p>
<table>
<thead><tr><th>Feature</th><th>Checking</th><th>Testing</th></tr></thead>
<tbody>
<tr><td><strong>Goal</strong></td><td>Confirming expected behavior.</td><td>Exploring unexpected behavior.</td></tr>
<tr><td><strong>Question</strong></td><td><em>"Does this work?"</em></td><td><em>"How could this fail?"</em></td></tr>
<tr><td><strong>Nature</strong></td><td>Repetitive and mechanical.</td><td>Analytical and creative.</td></tr>
<tr><td><strong>Automation</strong></td><td>Highly suitable for automation.</td><td>Best performed by human testers.</td></tr>
</tbody>
</table>
<blockquote><p><strong>Key Insight:</strong> Manual testers provide value through <strong>Testing</strong>—exploration and analysis—rather than just "Checking" or simple verification.</p></blockquote>

<hr />

<h3>2. The Root Causes of Software Bugs</h3>
<p>Bugs are an inevitable byproduct of software development because software is built by humans. Understanding why bugs occur is essential for finding them early:</p>
<ul>
<li><strong>Incomplete or Changing Requirements:</strong> Every unanswered question in a requirement document is a potential bug.</li>
<li><strong>Rapidly Growing Complexity:</strong> Modern systems involve interconnected features too complex for one person to mentally simulate.</li>
<li><strong>Assumptions vs. Reality:</strong> Developers often focus on "Happy Path" scenarios; testers must challenge these assumptions.</li>
<li><strong>Environment and Integration Challenges:</strong> Software may work on a high-end laptop but fail on budget devices or spotty networks.</li>
<li><strong>Business Constraints:</strong> Tight deadlines lead to "Technical Debt," where bugs are known but accepted as risks.</li>
</ul>

<hr />

<h3>3. The Economics of Software Failure</h3>
<p>Organizations view testing as <strong>strategic insurance</strong>. The economic impact of a defect increases exponentially depending on when it is discovered.</p>

<h4>The Bug Cost Curve</h4>
<p>The later a bug is found, the more expensive it is to fix. A defect that costs \$1 during design can cost <strong>10x to 100x</strong> more in production.</p>
<ul>
<li><strong>Requirements Stage:</strong> Very low cost (editing a document).</li>
<li><strong>Development Stage:</strong> Low cost (fixed while coding).</li>
<li><strong>Testing Stage:</strong> Medium cost (requires re-testing and reporting).</li>
<li><strong>Production Stage:</strong> Very high cost (requires hotfixes and damage control).</li>
</ul>

<h4>The Business Impact of Production Bugs</h4>
<p>A bug in production is a <strong>business problem</strong>, not just a technical one.</p>
<ul>
<li><strong>Direct Financial Loss:</strong> Lost sales and revenue leakage.</li>
<li><strong>Reputation Damage:</strong> Rebuilding trust is harder than fixing code.</li>
<li><strong>Opportunity Cost:</strong> Teams "firefighting" bugs cannot build new features.</li>
</ul>

<hr />

<h3>4. Testing Methodologies: Black, Grey, and White Box</h3>
<p>Testing is categorized by the level of access a tester has to the internal code.</p>
<table>
<thead><tr><th>Aspect</th><th>Black Box</th><th>Grey Box</th><th>White Box</th></tr></thead>
<tbody>
<tr><td><strong>Perspective</strong></td><td>User (Behavior)</td><td>System (Integration)</td><td>Developer (Logic)</td></tr>
<tr><td><strong>Code Access</strong></td><td>None</td><td>Partial (Logs/APIs)</td><td>Full</td></tr>
<tr><td><strong>Focus</strong></td><td>UI, UX, Workflows</td><td>Data flow, APIs, SQL</td><td>Code paths, Loops</td></tr>
<tr><td><strong>Requirement</strong></td><td>Critical Thinking</td><td>System Architecture</td><td>Programming Skills</td></tr>
</tbody>
</table>

<hr />

<h3>5. Manual vs. Automation Testing Strategy</h3>
<p>Automation is a "force multiplier" that acts as a checking tool, while manual testing is a discovery tool.</p>

<h4>Manual Testing (Discovery)</h4>
<ul>
<li>Best for new features, UI/UX assessments, and exploratory testing.</li>
</ul>

<h4>Automation Testing (Regression)</h4>
<ul>
<li>Best for regression testing, repetitive tasks, and checking stable features.</li>
</ul>

<blockquote><p><strong>Industry Reality:</strong> "Automation is dumb"—it only does what it is told. If a bug was never imagined by the human creator, it will never be automated.</p></blockquote>

<hr />

<h3>6. Professional Takeaways</h3>
<ul>
<li><strong>Testing is a Thinking Skill:</strong> Success requires curiosity and attention to detail.</li>
<li><strong>Quality is Cheaper than Chaos:</strong> Early testing saves money and reduces burnout.</li>
<li><strong>Manual Testing is a Foundation:</strong> Essential before moving to automation.</li>
<li><strong>The Goal is a Safe Release:</strong> Testing aims for risk reduction, not perfection.</li>
</ul>

</div>`,
        quiz: {
          title: 'Module 1 Quiz — Introduction to Software Testing',
          passPercentage: 70,
          questions: [
            {
              question: 'Which testing method focuses entirely on Inputs and Outputs from the user\'s perspective without seeing the internal code?',
              options: { A: 'White Box Testing', B: 'Grey Box Testing', C: 'Black Box Testing', D: 'Unit Testing' },
              answer: 'C',
            },
            {
              question: 'According to the "Bug Cost Curve," in which phase is it most expensive to fix a software bug?',
              options: { A: 'Requirements phase', B: 'Development phase', C: 'Testing phase', D: 'Production phase' },
              answer: 'D',
            },
            {
              question: 'What is the key difference between "Checking" and "Testing"?',
              options: { A: 'Checking is creative; Testing is repetitive', B: 'Checking confirms expected behavior; Testing explores unexpected behavior', C: 'Checking is done by humans; Testing is done by machines', D: 'Checking guarantees quality; Testing only finds bugs' },
              answer: 'B',
            },
            {
              question: 'Which type of testing is described as a "hybrid approach" where the tester has partial knowledge of the system, such as access to logs or databases?',
              options: { A: 'Black Box Testing', B: 'Grey Box Testing', C: 'White Box Testing', D: 'Scripted Testing' },
              answer: 'B',
            },
            {
              question: 'Why must testers challenge "Happy Path" assumptions made by developers?',
              options: { A: 'Because developers never test their own code', B: 'Because users often behave in unexpected or illogical ways', C: 'Because automation tools cannot run happy path scenarios', D: 'Because happy paths never contain bugs' },
              answer: 'B',
            },
            {
              question: 'In which scenario is Manual Testing considered superior to Automation Testing?',
              options: { A: 'When testing stable features that rarely change', B: 'When running smoke tests on every deployment', C: 'When requirements are unclear or the feature is brand new', D: 'When testing the same form with 1,000 different data sets' },
              answer: 'C',
            },
            {
              question: 'What is the primary goal of Manual Testing compared to Automation Testing?',
              options: { A: 'To execute repetitive checks quickly', B: 'To find new bugs and understand the system', C: 'To run large test suites in minutes', D: 'To detect known issues exclusively' },
              answer: 'B',
            },
            {
              question: 'What is meant by "Opportunity Cost" when a team is forced to fix bugs in production?',
              options: { A: 'The financial cost of refunding customers', B: 'The value of new features and work the team could have done instead', C: 'The overtime pay required for developers', D: 'The cost of hiring external consultants' },
              answer: 'B',
            },
            {
              question: 'What is identified as one of the biggest sources of bugs before a single line of code is even written?',
              options: { A: 'Incomplete or ambiguous requirements', B: 'Slow server hardware', C: 'Complex programming languages', D: 'Using the wrong web browser' },
              answer: 'A',
            },
            {
              question: 'Which of the following is NOT a true statement about the capabilities of software testing?',
              options: { A: 'Testing aims to reduce risk', B: 'Testing is about finding defects early', C: 'Testing guarantees that the software is bug-free', D: 'Testing helps increase confidence in the product' },
              answer: 'C',
            },
          ],
        },
      },
      {
        id: 'lesson-2-1',
        slug: 'the-quality-mindset-fundamentals-of-software-assurance',
        title: 'The Quality Mindset: Fundamentals of Software Assurance',
        type: 'article',
        durationMinutes: 20,
        order: 7,
        module: 'Module 2: QA Role & Testing Fundamentals',
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
      },
    ],
    tags: ['testing', 'qa', 'black-box', 'manual-testing', 'beginner'],
    instructor: 'Skill-Wanderer',
    createdAt: '2026-01-07',
    updatedAt: '2026-01-08',
  }

export default course
