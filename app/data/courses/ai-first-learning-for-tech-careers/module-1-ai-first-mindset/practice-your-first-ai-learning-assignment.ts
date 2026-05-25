import type { Lesson } from '~/types/course'

const lesson: Lesson = {
	id: 'lesson-1-6',
	slug: 'practice-your-first-ai-learning-assignment',
	title: 'Practice: Your First AI Learning Assignment',
	type: 'assignment',
	status: 'published',
	durationMinutes: 30,
	order: 6,
	hideCompletion: false,
	createdAt: '2026-05-14',
	updatedAt: '2026-05-25',
	content: `<div class="ai-first-lesson">

<div class="format-selector">
	<div class="format-notice">
		<span class="format-notice-icon">i</span>
		<div>
			<strong>Assignment Resources</strong>
			<p>Start with the assignment brief, then use the companion materials when you want extra guidance.</p>
		</div>
	</div>

	<div class="format-tabs">
		<button class="format-tab active" data-format="assignment" onclick="const root=this.closest('.ai-first-lesson');root.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');root.querySelectorAll('.format-content').forEach(c=>c.style.display='none');root.querySelector('[data-content=assignment]').style.display='block';">Assignment Brief</button>
		<button class="format-tab" data-format="companion" onclick="const root=this.closest('.ai-first-lesson');root.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');root.querySelectorAll('.format-content').forEach(c=>c.style.display='none');root.querySelector('[data-content=companion]').style.display='block';">Companion Materials</button>
	</div>
</div>

<div class="format-content" data-content="companion" style="display:none;">
<h2>Companion Materials</h2>
<p>Use these companion resources to understand the assignment before you build your own workflow. They support the assignment brief; they do not replace your own problem definition, verification, and reflection.</p>

<h3>Video Walkthrough</h3>
<div class="video-embed">
	<iframe title="Building Your Active Learning OS assignment video" src="https://www.youtube-nocookie.com/embed/Xo8i_tuCzuA?si=Y1yZDtI1Dker3aCs" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>

<h3>Audio Companion</h3>
<div class="audio-embed">
	<iframe title="Building Your Active Learning OS assignment audio" style="border-radius:12px" src="https://open.spotify.com/embed/episode/326jV5yoKeMpWPDpVRPlr3?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>

<h3>Infographic Guide</h3>
<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/ai-first-learning-for-tech-careers@main/first%20assignment/AI_Learning_Blueprint_Assignment_Guide.png" alt="AI Learning Blueprint Assignment Guide infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h3>Slide Deck</h3>
<div class="slides-embed">
	<iframe title="AI Learning Operating System assignment slides" src="https://cdn.jsdelivr.net/gh/skill-wanderer/ai-first-learning-for-tech-careers@main/first%20assignment/AI_Learning_Operating_System.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="assignment" style="display:block;">
<h2>Practice: Your First AI Learning Assignment</h2>
<p>This assignment turns Module 1 from ideas into behavior. Instead of choosing any topic you want, everyone will work on the same fixed topic: <strong>how to learn with AI responsibly</strong>.</p>
<p>The goal is not to create a perfect final answer about AI. The goal is to practise the exact mindset from Module 1: define the problem, brief AI clearly, use AI as a thinking partner, ask follow-up questions, verify what matters, and explain the learning in your own words.</p>

<h2>Fixed Learning Topic</h2>
<p>Your topic for this assignment is:</p>
<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>How can I use AI to learn faster without becoming passive, shallow, or blindly dependent on AI?</strong></p>
</div>
<p>This topic is intentionally meta. Before you use AI to learn programming, testing, design, data, or any other tech skill, you need a basic operating system for learning with AI itself.</p>

<h2>Assignment Goal</h2>
<p>Use AI to build a simple personal workflow for learning with AI while staying responsible for your own understanding.</p>
<p>By the end, you should have a short learning artifact that shows:</p>
<ul>
	<li>How you define a learning problem before asking AI.</li>
	<li>How you ask AI for guidance instead of only answers.</li>
	<li>How you question AI's output after the first response.</li>
	<li>How you verify one important point instead of trusting blindly.</li>
	<li>How you extract reusable knowledge in your own words.</li>
</ul>

<h2>Timebox</h2>
<p>Spend 45 to 60 minutes total.</p>
<ul>
	<li>10 minutes to define what "learning with AI responsibly" means to you right now.</li>
	<li>20 to 30 minutes to work with AI and build your learning workflow.</li>
	<li>10 to 20 minutes to verify, extract knowledge, and reflect.</li>
</ul>
<p>If the work becomes too broad, reduce the scope to one question: how should you use AI during the first 30 minutes of learning a new tech topic?</p>

<h2>The Artifact You Will Create</h2>
<p>Create a short document called <strong>My First AI Learning Workflow</strong>.</p>
<p>Your workflow should be practical enough that you could reuse it later when learning a real tech topic. It must include:</p>
<ol>
	<li>A first-prompt template.</li>
	<li>At least five follow-up questions you can ask AI.</li>
	<li>A rule for when to slow down and verify.</li>
	<li>A small knowledge extraction template.</li>
	<li>One warning sign that you are using AI to avoid thinking.</li>
</ol>

<h2>Rules For This Assignment</h2>
<ul>
	<li>You may use AI throughout the assignment.</li>
	<li>You may not ask AI to write the entire workflow and submit it unchanged.</li>
	<li>You must write your own first problem brief before asking AI for help.</li>
	<li>You must ask at least three follow-up questions after the first AI answer.</li>
	<li>You must verify at least one important claim, rule, or recommendation.</li>
	<li>You must finish with your own explanation of how your workflow works.</li>
</ul>

<h2>Step 1: Define The Problem First</h2>
<p>Before using AI, write four short lines:</p>
<ol>
	<li><strong>Problem:</strong> I want to learn with AI, but the risk is...</li>
	<li><strong>Context:</strong> My current experience with AI is...</li>
	<li><strong>Goal:</strong> I want a workflow that helps me...</li>
	<li><strong>Unknown:</strong> The part I am still unsure about is...</li>
</ol>
<p>This step matters because AI should not be asked to guess what you need. You are the one setting the learning direction.</p>

<h2>Step 2: Write A Better First Prompt</h2>
<p>Use the Module 1 structure: problem, context, goal, and unknown.</p>
<p>You can adapt this prompt:</p>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
<p><strong>Prompt template:</strong></p>
<p>I am learning how to learn with AI responsibly. My context is [your current experience with AI and learning]. My goal is to build a simple workflow I can reuse when learning tech topics. The part I am unsure about is [your main confusion or risk]. Do not just give me a polished answer. Guide me like a thinking partner: explain the core principles, ask me questions if needed, and help me design a workflow that keeps me active, accountable, and able to verify what matters.</p>
</div>

<p>After AI responds, do not accept the first answer as final. Treat it as the beginning of the conversation.</p>

<h2>Step 3: Ask Follow-Up Questions</h2>
<p>Ask at least three follow-up questions. Strong follow-up questions expose assumptions, tradeoffs, risks, and practical next steps.</p>
<p>Choose from these or write your own:</p>
<ol>
	<li>What does responsible AI-supported learning look like in practice?</li>
	<li>Where do learners usually become too passive when using AI?</li>
	<li>How can I tell whether I actually understand something or only copied an explanation?</li>
	<li>What should I ask AI before, during, and after a learning task?</li>
	<li>What should I verify instead of trusting immediately?</li>
	<li>When should I stop asking AI and try something myself?</li>
	<li>What would a bad version of this learning workflow look like?</li>
	<li>How can I make this workflow simple enough to use repeatedly?</li>
</ol>
<p>Your follow-up questions are more important than the first prompt. They are what turn AI from an answer machine into a thinking partner.</p>

<h2>Step 4: Build Your Workflow</h2>
<p>Create your <strong>My First AI Learning Workflow</strong> artifact. Keep it short and concrete.</p>
<p>A strong workflow can fit on one page and should include these sections:</p>
<ol>
	<li><strong>Before asking AI:</strong> What will you clarify first?</li>
	<li><strong>First prompt:</strong> What template will you use?</li>
	<li><strong>Follow-up questions:</strong> What questions will help you go deeper?</li>
	<li><strong>Verification:</strong> What kind of claim or output will you check?</li>
	<li><strong>Knowledge extraction:</strong> How will you summarize the learning in your own words?</li>
	<li><strong>Warning sign:</strong> How will you notice when AI is replacing your thinking?</li>
</ol>
<p>If AI gives you something complicated, simplify it. The assignment is about creating a workflow you can actually use, not an impressive document.</p>

<h2>Step 5: Verify One Important Point</h2>
<p>Pick one claim, rule, or recommendation from the AI conversation and check it.</p>
<p>Verification can be simple:</p>
<ul>
	<li>Compare it with one Module 1 lesson.</li>
	<li>Ask AI to argue against its own recommendation, then inspect the weak points.</li>
	<li>Test the rule against a realistic learning scenario.</li>
	<li>Explain the idea without AI and see where your explanation breaks down.</li>
	<li>Ask another source or person whether the rule makes sense.</li>
</ul>
<p>Write down what you checked and what you found. You do not need to verify everything. You do need to practise not trusting polished output blindly.</p>

<h2>Step 6: Extract The Knowledge</h2>
<p>After building the workflow, write a short knowledge extraction note. Use your own words.</p>
<ol>
	<li><strong>Learning with AI means:</strong> Explain the idea simply.</li>
	<li><strong>The useful pattern is:</strong> What workflow step can you reuse?</li>
	<li><strong>The danger is:</strong> Where can AI make you passive or shallow?</li>
	<li><strong>The part I verified was:</strong> What did you check?</li>
	<li><strong>The rule for next time is:</strong> What will you do when using AI to learn a new topic?</li>
</ol>
<p>This is where learning becomes reusable. Without extraction, the AI conversation disappears quickly from memory.</p>

<h2>What To Submit</h2>
<p>Submit one short written document with these sections:</p>
<ol>
	<li><strong>Problem brief:</strong> Problem, context, goal, and unknown from Step 1.</li>
	<li><strong>First prompt:</strong> The prompt you gave AI.</li>
	<li><strong>Follow-up questions:</strong> At least three questions you asked after the first answer.</li>
	<li><strong>My First AI Learning Workflow:</strong> Your one-page workflow artifact.</li>
	<li><strong>Verification note:</strong> One important point you checked and what you found.</li>
	<li><strong>Knowledge extraction:</strong> The five short lines from Step 6.</li>
	<li><strong>Reflection:</strong> Answer the reflection questions below.</li>
</ol>
<p>Do not submit a full raw AI chat transcript. Include only the important parts that show your thinking and learning process.</p>

<h2>Reflection Questions</h2>
<ol>
	<li>Where did AI help you think more clearly?</li>
	<li>Where did you still need to think for yourself?</li>
	<li>What did AI assume that you had to clarify, question, or correct?</li>
	<li>Which part of your workflow will help prevent blind trust?</li>
	<li>What would you do differently the next time you use AI to learn a tech topic?</li>
</ol>

<h2>Completion Checklist</h2>
<ul>
	<li>I worked on the fixed topic: how to learn with AI responsibly.</li>
	<li>I wrote my own problem, context, goal, and unknown before asking AI.</li>
	<li>I used AI to guide learning, not to avoid thinking.</li>
	<li>I asked at least three follow-up questions.</li>
	<li>I created a reusable AI learning workflow.</li>
	<li>I verified at least one important point.</li>
	<li>I extracted the learning in my own words.</li>
	<li>I wrote a reflection on how I used AI responsibly.</li>
</ul>

<h2>Grading Rubric</h2>
<table>
	<thead>
		<tr>
			<th>Criteria</th>
			<th>Points</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Problem brief clearly defines the learner's context, goal, and unknown</td>
			<td>3</td>
		</tr>
		<tr>
			<td>First prompt uses problem, context, goal, and unknown effectively</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Follow-up questions show active thinking instead of passive acceptance</td>
			<td>4</td>
		</tr>
		<tr>
			<td>AI learning workflow is concrete, reusable, and aligned with Module 1</td>
			<td>5</td>
		</tr>
		<tr>
			<td>Verification note checks at least one meaningful point</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Knowledge extraction is written in the learner's own words</td>
			<td>4</td>
		</tr>
		<tr>
			<td>Reflection shows ownership, judgment, and awareness of AI's limits</td>
			<td>2</td>
		</tr>
		<tr>
			<td><strong>Total</strong></td>
			<td><strong>25</strong></td>
		</tr>
	</tbody>
</table>

<h2>Instructor Notes</h2>
<p>A strong submission does not need to be long. It needs to show that the learner stayed active while using AI. Look for clear problem definition, useful follow-up questions, a practical workflow, at least one verification move, and a reflection that proves the learner understands more than they did at the start.</p>
<p>A weak submission usually has the opposite pattern: a vague problem brief, a copied AI workflow, no verification, and reflection that says only "AI helped me." The assignment is complete only when the learner can explain how they will use AI to learn without giving up ownership.</p>

<h2>Key Takeaway</h2>
<p>AI-first learning does not mean AI does the learning for you. It means you start from a real problem, use AI to create momentum, question the output, verify what matters, and turn the experience into a workflow you can reuse.</p>

</div>
</div>`,
}

export default lesson
