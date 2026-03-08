import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-2-5',
  slug: 'shift-left-testing-for-black-box-testers',
  title: 'Shift-Left Testing for Black Box Testers',
  type: 'article',
  durationMinutes: 20,
  order: 11,
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
  <iframe src="https://www.youtube-nocookie.com/embed/zDpFHUwIkpY?si=Od7lcN6lrEwuMnAU" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/episode/1uXAw0PjWeJOP92jeDhnf1?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Shift-Left%20Testing%20for%20Blackbox%20Testers/Shift_Left_Testing_Proactive_Quality.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/Manual-Software-Testing-with-Black-Box-Techniques@main/Shift-Left%20Testing%20for%20Blackbox%20Testers/infographic.png" alt="Shift-Left Testing Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>1. What is Shift-Left Testing?</h2>
<p>Shift-left testing means moving testing activities as early as possible in the software development timeline (shifting them to the "left" on a timeline), instead of waiting until after coding is finished.</p>
<ul>
<li><strong>Traditionally:</strong> Testing happens at the end (the "right" side), just before release.</li>
<li><strong>Shift-Left:</strong> Testing happens at the start (the "left" side), during ideas and requirements.</li>
</ul>
<blockquote><p><strong>Key Concept for Black-Box Testers:</strong> Shift-left is not about reading code or writing unit tests. It is about validating requirements, clarifying behaviors, and identifying risks before the software is even built. You are testing the design, not the code.</p></blockquote>

<hr />

<h2>2. Why Shift-Left Matters for Black-Box Testing</h2>
<p>Even without technical access to the codebase, black-box testers drive massive value by shifting left.</p>
<ul>
<li><strong>Catch Defects Cheaply:</strong> Fixing a logic error in a requirement document costs pennies; fixing it in production costs thousands.</li>
<li><strong>Prevent "Buggy" Features:</strong> You prevent developers from building the wrong thing.</li>
<li><strong>Reduce Rework:</strong> Developers don't have to rewrite code because the rules were clarified before they started.</li>
<li><strong>Faster Testing Later:</strong> By the time you get the software, you already understand it deeply, so your actual testing execution is faster.</li>
</ul>

<hr />

<h2>3. Traditional Testing vs. Shift-Left Testing</h2>
<table>
<thead><tr><th>Aspect</th><th>Traditional Testing</th><th>Shift-Left Testing</th></tr></thead>
<tbody>
<tr><td><strong>When Tester Joins</strong></td><td>Late (After coding is done)</td><td>Early (During requirements/design)</td></tr>
<tr><td><strong>Primary Focus</strong></td><td>Finding bugs in software</td><td>Preventing bugs in logic/requirements</td></tr>
<tr><td><strong>Cost to Fix Defects</strong></td><td>High (Requires code re-writes)</td><td>Low (Requires updating a doc)</td></tr>
<tr><td><strong>Feedback Speed</strong></td><td>Slow (Weeks/Months later)</td><td>Fast (Instant feedback during talks)</td></tr>
<tr><td><strong>Mindset</strong></td><td>"Does the software work?"</td><td>"Is the logic sound?"</td></tr>
</tbody>
</table>

<hr />

<h2>4. When Black-Box Testers Shift Left (A Timeline View)</h2>
<p>Since we are not discussing Agile or Waterfall phases in depth yet, simply think of this as a timeline of events.</p>

<h3>4.1 Phase 1: Before Any Code Is Written</h3>
<p>This is the most critical shift.</p>
<ul>
<li><strong>Action:</strong> Testers read requirements and look for logic gaps.</li>
<li><strong>Mindset:</strong> "If I tried to test this requirement as written, would I know exactly what the result should be?" (If the answer is no, the requirement is buggy).</li>
</ul>

<h3>4.2 Phase 2: While Features Are Being Discussed</h3>
<ul>
<li><strong>Action:</strong> Testers listen to developers and product owners talking.</li>
<li><strong>Mindset:</strong> Raise "What if?" questions.
  <ul>
  <li>"What if the internet cuts out?"</li>
  <li>"What if the user has a zero balance?"</li>
  <li>"What if the file is too large?"</li>
  </ul>
</li>
<li><strong>Result:</strong> You are fixing the logic before a developer writes a single line of code.</li>
</ul>

<h3>4.3 Phase 3: Before Testing the Actual Software</h3>
<ul>
<li><strong>Action:</strong> Writing test cases and scenarios while development is happening.</li>
<li><strong>Mindset:</strong> Preparation. By the time the software is delivered, you aren't figuring out what to test; you are just executing the plan.</li>
</ul>

<hr />

<h2>5. Shift-Left Activities for Black-Box Testers</h2>
<p>These are specific tasks you can do without looking at code.</p>

<h3>5.1 Requirement Review (Static Testing)</h3>
<p>Testing the documentation. You are looking for:</p>
<ul>
<li><strong>Ambiguity:</strong> Words like "fast," "easy," "user-friendly," or "secure." (These cannot be tested objectively).</li>
<li><strong>Contradictions:</strong> Page 1 says "Password max 10 chars" and Page 5 says "Password max 15 chars."</li>
<li><strong>Missing Business Rules:</strong> What happens if the transaction fails?</li>
</ul>

<h3>5.2 User Story &amp; Acceptance Criteria Validation</h3>
<p>Testers help ensure requirements are "testable."</p>
<ul>
<li><strong>❌ Bad Requirement:</strong> "The search bar should work correctly."</li>
<li><strong>✅ Good Requirement:</strong> "When the user types 'Red', the system should display all items tagged 'Red' within 2 seconds."</li>
</ul>

<h3>5.3 Risk-Based Thinking</h3>
<p>Asking the scary questions early.</p>
<ul>
<li>"What is the worst thing that happens if this breaks?"</li>
<li>"Which users will use this feature the most?"</li>
<li>"Does this touch sensitive data (money/passwords)?"</li>
</ul>

<h3>5.4 Collaboration (The "Three Amigos" Concept)</h3>
<ul>
<li><strong>Who:</strong> The Product Owner (Business), The Developer (Technical), The Tester (Quality).</li>
<li><strong>Goal:</strong> Discuss the feature together before starting.</li>
<li><strong>Tester Role:</strong> You are the advocate for the user and the "What if" expert.</li>
</ul>

<hr />

<h2>6. The Shift-Left Mindset: Asking the Right Questions</h2>
<p><em>Note: This section focuses on how to think naturally, before you learn formal techniques like Boundary Value Analysis or Decision Tables.</em></p>

<h3>6.1 Input Thinking (Pre-Equivalence Partitioning)</h3>
<p>Instead of worrying about formal models, just ask:</p>
<ul>
<li>"What data is allowed?" (Valid inputs)</li>
<li>"What data should be blocked?" (Invalid inputs)</li>
<li>"What strange characters might a user type?" (Special characters, emojis, massive text).</li>
</ul>

<h3>6.2 Limit Thinking (Pre-Boundary Value Analysis)</h3>
<p>Requirements often miss the edges. You must ask:</p>
<ul>
<li>"Is there a minimum or maximum?"</li>
<li>"If the limit is 100, does 100 work, or is 99 the max?"</li>
<li>"What happens if the list is empty?"</li>
</ul>

<h3>6.3 Rule Thinking (Pre-Decision Tables)</h3>
<p>Look for "If/Then" logic in conversations.</p>
<ul>
<li>"If the user is a Premium Member AND they order over $50, is shipping free?"</li>
<li>"What if they are a Premium Member but order only $10?"</li>
<li>Testers spot the missing combinations that developers often forget.</li>
</ul>

<hr />

<h2>7. Shift-Left Without Needing "Agile"</h2>
<p><strong>Beginner Tip:</strong> You don't need to know Scrum or Kanban to shift left.</p>
<ol>
<li><strong>Think in Conversations:</strong> If people are talking about the software, be there. Listen. Ask questions. That is shifting left.</li>
<li><strong>Testing Starts at the Idea:</strong> Do not wait for an installable program. Test the idea on the whiteboard.</li>
<li><strong>Prevent, Don't Just Detect:</strong> Traditional testers say "I found a bug." Shift-left testers say "I prevented a bug."</li>
</ol>

<hr />

<h2>8. Common Misunderstandings</h2>
<table>
<thead><tr><th>Myth ❌</th><th>Reality ✅</th></tr></thead>
<tbody>
<tr><td>"Shift-left means testers must code."</td><td>No. It means testers think earlier.</td></tr>
<tr><td>"Only automation is Shift-Left."</td><td>No. Asking a question during a meeting is Shift-Left.</td></tr>
<tr><td>"Testers replace Business Analysts."</td><td>No. Testers help BAs by adding a "failure" perspective.</td></tr>
<tr><td>"It takes more time."</td><td>It takes time upfront, but saves massive time later by preventing bugs.</td></tr>
</tbody>
</table>

<hr />

<h2>9. Sample Workshop: The "Paper Prototype" Review</h2>
<p><strong>Scenario:</strong></p>
<p>The client wants a "Birthday Discount" feature.</p>
<p><strong>Requirement provided:</strong> "Users get a discount on their birthday."</p>
<p><strong>Activity:</strong> "Shift-Left" and critique this requirement before any code is written.</p>
<p><strong>Expected Questions (The Shift-Left Mindset):</strong></p>
<ol>
<li><strong>Ambiguity:</strong> How much is the discount? (10%? $10?)</li>
<li><strong>Logic:</strong> What if the user signs up on their birthday? Do they get it immediately?</li>
<li><strong>Limits:</strong> Does the discount expire? Is it valid for 24 hours or the whole month?</li>
<li><strong>Restrictions:</strong> Can it be combined with other coupons?</li>
<li><strong>Edge Cases:</strong> What about leap year (Feb 29th) birthdays?</li>
</ol>
<blockquote><p><strong>Conclusion:</strong> If we didn't ask these questions, the developer would have guessed. They likely would have guessed wrong. By asking now, we fixed 5 potential bugs before a single line of code was written.</p></blockquote>

<hr />

<h2>10. Key Takeaways</h2>
<ol>
<li><strong>Early Involvement:</strong> Be part of the conversation from day one.</li>
<li><strong>Question Everything:</strong> Ambiguity is the enemy of quality.</li>
<li><strong>Mindset over Tool:</strong> You don't need automation to shift left; you need curiosity.</li>
<li><strong>Cost:</strong> The earlier you find a problem, the cheaper it is to fix.</li>
</ol>

</div>
`,
}

export default lesson
