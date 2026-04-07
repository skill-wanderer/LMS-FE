import type { Lesson } from '~/types/course'

const lesson: Lesson = {
	id: 'lesson-1-4',
	slug: 'benefits-tradeoffs-and-when-to-use-ai',
	title: 'Benefits, Tradeoffs, and When to Use AI',
	type: 'lesson',
	status: 'published',
	durationMinutes: 18,
	order: 4,
	hideCompletion: false,
	createdAt: '2026-04-03',
	updatedAt: '2026-04-07',
	content: `<div class="format-selector">
<div class="format-notice">
	<span class="format-notice-icon">💡</span>
	<div>
		<strong>Choose Your Learning Material</strong>
		<p>This lesson is available in <strong>multiple formats</strong>. The content is the same - choose the one that fits your learning style and current environment. You do <u>not</u> need to complete all formats.</p>
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
	<iframe src="https://www.youtube-nocookie.com/embed/EmeplH3i-Uw?si=Sqe6WyeJU4OPtHir" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
	<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/320j5DnaszC6iVrM60Mh0R?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
	<iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/ai-first-learning-for-tech-careers@main/benefits-tradeoffs-and-when-to-use-ai/Managing_the_Multiplier.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">
<div class="ai-first-lesson">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/ai-first-learning-for-tech-careers@main/benefits-tradeoffs-and-when-to-use-ai/infographic.png" alt="Benefits, Tradeoffs, and When to Use AI Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" loading="lazy" />

<h2>Benefits, Tradeoffs, and When to Use AI</h2>
<p>AI is one of the biggest speed multipliers in tech right now. Used well, it can help you learn faster, test ideas faster, automate repetitive work, and expand what you can do in a day. Used badly, it can make you faster in the wrong direction.</p>
<p>The biggest benefit of AI is speed. The biggest tradeoff is that AI can hallucinate, overreach, and sound more certain than it should. AI will not ruin your career. Misusing it might.</p>

<h2>The Core Mindset</h2>
<p>You are the manager. You are the one in charge of your life, your work, your learning, and your decisions. AI can be your coach, teacher, consultant, assistant, or even something like an employee. But it is still your job to direct it, understand enough to manage it, and take responsibility for what happens next.</p>
<p><strong>Lesson goal:</strong> Learn the real benefit of AI, the real tradeoffs of AI, and when AI should advise, accelerate, automate, or stay under tighter human control.</p>

<h2>The Main Benefit and the Main Tradeoff</h2>
<table>
<thead><tr><th>What AI Gives You</th><th>What You Must Watch</th></tr></thead>
<tbody>
<tr><td>Speed</td><td>Wrong speed is still wrong.</td></tr>
<tr><td>Fast access to ideas and explanations</td><td>Some explanations may be confident guesses.</td></tr>
<tr><td>More experiments in less time</td><td>You can experiment without really understanding.</td></tr>
<tr><td>Automation of repetitive tasks</td><td>You can become detached from the work you still own.</td></tr>
<tr><td>More leverage per person</td><td>Leverage without judgment creates bigger mistakes.</td></tr>
</tbody>
</table>

<p>AI is not simply good or bad. It is powerful. That means the upside is bigger, but the downside is bigger too if you stop thinking.</p>

<h2>Two Real-World Scenarios</h2>
<table>
<thead><tr><th>Situation</th><th>Good Use</th><th>Risky Use</th></tr></thead>
<tbody>
<tr><td>Writing code with AI</td><td>Use AI to generate options, explain patterns, and speed up implementation.</td><td>Let AI make architecture decisions you do not understand, then ship them blindly.</td></tr>
<tr><td>Drafting an email with AI</td><td>Use AI to improve tone, structure, or clarity.</td><td>Send the draft without review, even though the message represents your judgment and intent.</td></tr>
</tbody>
</table>
<p>These examples show the same principle: AI is strongest when it helps you move faster inside a process you still own.</p>

<h2>When To Use AI</h2>
<p>Use AI when speed, options, iteration, or structured help will move you forward. Good use cases include:</p>
<ul>
	<li>Gathering information before you make a decision.</li>
	<li>Comparing options, tradeoffs, or possible approaches.</li>
	<li>Learning a topic faster through examples, analogies, or guided explanation.</li>
	<li>Experimenting quickly with different drafts, code approaches, or strategies.</li>
	<li>Automating repetitive and lower-stakes work that still gets reviewed.</li>
	<li>Getting feedback on a draft, plan, or idea before you finalize it.</li>
</ul>

<h2>AI Role Selector</h2>
<p>One useful way to decide how to use AI is to choose the role it should play before you start.</p>
<table>
<thead><tr><th>Task Type</th><th>Best AI Role</th><th>Your Responsibility</th></tr></thead>
<tbody>
<tr><td>Learning</td><td>Teacher</td><td>Check whether you truly understand the idea in your own words.</td></tr>
<tr><td>Decision-making</td><td>Consultant</td><td>Review options, challenge advice, and make the final call yourself.</td></tr>
<tr><td>Execution</td><td>Assistant</td><td>Define the goal, inspect the quality, and stay accountable for the output.</td></tr>
<tr><td>Repetition</td><td>Automation helper</td><td>Set the rules, monitor results, and verify important exceptions.</td></tr>
</tbody>
</table>

<h2>When Not To Hand Over Full Control</h2>
<p>AI should not silently become the owner of things that still require human judgment. Be careful when the task involves:</p>
<ul>
	<li>Final decisions that affect money, career, safety, trust, or long-term direction.</li>
	<li>Assignments where the real goal is your learning, not just a finished output.</li>
	<li>Work you will later need to explain, defend, or manage yourself.</li>
	<li>Claims that need real evidence, documentation, or source verification.</li>
	<li>Situations where a polished answer could hide a dangerous assumption.</li>
</ul>

<h2>Mindset Reframes: Bad Use vs Better Use</h2>
<table>
<thead><tr><th>Weak Mindset</th><th>Stronger Mindset</th></tr></thead>
<tbody>
<tr><td>AI should make decisions for me.</td><td>AI should gather information, surface options, and advise. I still make the decision.</td></tr>
<tr><td>AI should do the assignment for me.</td><td>AI should help me learn much faster by letting me experiment more quickly.</td></tr>
<tr><td>AI can do it, so I do not need to care.</td><td>AI can do it, but I still need enough understanding to manage it properly.</td></tr>
<tr><td>AI can do the work for me.</td><td>AI can automate parts of the work, but I must stay in control of the goal, quality, and final judgment.</td></tr>
<tr><td>AI will replace me, so learning is pointless.</td><td>I should master the parts AI cannot replace anytime soon: judgment, ownership, trust, communication, and responsibility.</td></tr>
<tr><td>I do not need AI because I can already do the work well.</td><td>Because I already have ability, I can leverage AI to multiply that ability and sometimes increase my output dramatically.</td></tr>
</tbody>
</table>

<p>These reframes matter because AI is not only a tool choice. It is a mindset choice. The same technology can make one person weaker and another person stronger, depending on how they frame the relationship.</p>

<h2>You Are Still the Manager</h2>
<p>The most useful frame is simple: you are the manager, not the passenger.</p>
<p>If AI acts like a consultant, you still choose what advice to follow. If AI acts like a teacher, you still need to understand what you are being taught. If AI acts like an employee, you still need to set direction, inspect quality, and stay accountable for the output. If AI acts like a coach, you still have to do the real work of changing your behavior.</p>
<p>The risk is not AI. The risk is giving up thinking.</p>

<h2>Healthy Doubt, Not Paralysis</h2>
<p>You should have some healthy doubt when working with AI, just as you would with a human expert. People can be wrong. AI can be wrong. Advice can be incomplete. Recommendations can contain assumptions. That is normal.</p>
<p>But there is another failure mode too: too much doubt. If you become so suspicious that you barely use AI, you lose one of the biggest moving forces in tech right now: speed. The goal is not blind trust, and it is not total rejection. The goal is controlled use.</p>
<p>A balanced pattern looks like this:</p>
<ul>
	<li>Use AI to move faster.</li>
	<li>Question what matters.</li>
	<li>Verify high-stakes parts.</li>
	<li>Keep learning both with AI and sometimes without AI.</li>
</ul>

<h2>Why Learning Without AI Still Matters</h2>
<p>If AI helps you every second, you can lose track of what you actually know on your own. That is why self-education without AI still matters. From time to time, you should explain ideas in your own words, solve some problems without assistance, and test whether your understanding is real or borrowed.</p>
<p>AI can accelerate your growth. It should not become a permanent substitute for your own thinking.</p>

<h2>Practice: Choose the Right Role for AI</h2>
<p>Take one real task from your current life or work.</p>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>Checkpoint 1:</strong> Write the task in one sentence.</p>
</div>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>Checkpoint 2:</strong> Decide which role AI should play for this task: teacher, coach, consultant, assistant, or employee-like helper.</p>
</div>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>Checkpoint 3:</strong> Write what AI can do in this task and what you must keep under your own control.</p>
</div>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>Checkpoint 4:</strong> Write one part you will still verify or think through without AI.</p>
</div>

<p>This exercise helps you avoid the two extremes: giving AI too much power or refusing to use it at all.</p>

<h2>A Simple Decision Rule</h2>
<p>If the task mainly needs speed, brainstorming, comparison, drafting, or repetition, AI is often a strong helper.</p>
<p>If the task mainly needs accountability, final judgment, real-world responsibility, or verified truth, AI should support you, not replace you.</p>

<h2>Knowledge Extraction</h2>
<p>After using AI on one task, write four short lines:</p>
<ol>
	<li><strong>The benefit was:</strong> What did AI help me do faster or better?</li>
	<li><strong>The tradeoff was:</strong> What risk appeared with that benefit?</li>
	<li><strong>The control point was:</strong> What did I keep under human judgment?</li>
	<li><strong>The rule for next time is:</strong> When should I use AI more, and when should I tighten control?</li>
</ol>

<h2>Quick Self-Check</h2>
<ul>
	<li>Am I using AI for speed, or am I using it to avoid thinking?</li>
	<li>Do I actually understand the output I am about to use?</li>
	<li>Would I defend this decision or result without hiding behind AI?</li>
</ul>

<h2>Reflection</h2>
<ol>
	<li>Which bad mindset in the table do you fall into most often?</li>
	<li>Do you tend to trust AI too fast, reject it too fast, or use it in a balanced way?</li>
	<li>Where does AI genuinely make you faster right now?</li>
	<li>Where do you still need more independent understanding without AI?</li>
	<li>What kind of task should AI advise on, but never fully own, in your life?</li>
</ol>

<h2>Key Takeaways</h2>
<ul>
	<li>The biggest benefit of AI is speed and leverage.</li>
	<li>The biggest tradeoff is that AI can hallucinate, overreach, and encourage shallow trust.</li>
	<li>Good use means AI advises, accelerates, and automates while you keep judgment and responsibility.</li>
	<li>Choose the role first: teacher, consultant, assistant, or automation helper.</li>
	<li>Concrete review matters: code suggestions and email drafts both still need human inspection.</li>
	<li>You are still the manager of your work, your learning, and your life.</li>
	<li>Healthy doubt protects you from bad answers. Excessive doubt can make you miss the speed advantage.</li>
	<li>The right move is to use AI aggressively for leverage without giving up thinking.</li>
</ul>

</div>
</div>`,
}

export default lesson