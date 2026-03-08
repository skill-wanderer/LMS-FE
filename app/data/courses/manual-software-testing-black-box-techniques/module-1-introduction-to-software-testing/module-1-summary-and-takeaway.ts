import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-1-6',
  slug: 'module-1-summary-and-takeaway',
  title: 'Module 1 Summary & Takeaway + Optional Quiz',
  type: 'article',
  durationMinutes: 20,
  order: 6,
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
  <iframe src="https://www.youtube.com/embed/FSJrebw63qw?si=yhXdOop_NSsIMomU" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
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
}

export default lesson
