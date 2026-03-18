import type { Lesson } from '~/types/course'

const lesson: Lesson = {
	id: 'lesson-1-2',
	slug: 'ai-as-a-thinking-partner-not-a-tool',
	title: 'AI as a Thinking Partner (Not a Tool)',
	type: 'article',
	status: 'published',
	durationMinutes: 18,
	order: 2,
	hideCompletion: false,
	createdAt: '2026-03-18',
	updatedAt: '2026-03-18',
	content: `<div class="format-selector">
<div class="format-notice">
	<span class="format-notice-icon">📝</span>
	<div>
		<strong>Reading Version Available</strong>
		<p>This lesson is currently available as <strong>text only</strong>. Additional material formats can be added later without changing the core lesson flow.</p>
	</div>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<h2>AI as a Thinking Partner (Not a Tool)</h2>
<p>Many learners approach AI like a vending machine: type a request, receive an answer, move on. That creates fast output, but weak learning. If AI becomes a shortcut for replacing judgment, the learner may finish tasks without becoming more capable.</p>
<p>This lesson introduces a stronger role for AI: a thinking partner. A thinking partner does not remove responsibility from you. It helps you clarify the problem, notice assumptions, compare options, and test your own reasoning. The goal is not to ask AI to think <em>instead</em> of you. The goal is to use AI to think <em>better</em>.</p>
<p><strong>Lesson goal:</strong> Learn how to use AI to expand your thinking without handing over ownership of the work.</p>
<p><strong>Core idea:</strong> When AI helps you reason, question, and reflect, it becomes a learning accelerator. When AI only gives final answers, it can quietly make you passive.</p>

<h2>1. Assignment (Problem First)</h2>
<p>Choose one small problem you genuinely want to understand better. Do not pick something you only want the answer to. Pick something where your thinking matters.</p>
<p>Good examples:</p>
<ul>
<li>You want to understand why a piece of code behaves unexpectedly.</li>
<li>You want to compare two ways to learn a new skill.</li>
<li>You want to break down a confusing technical topic into practical parts.</li>
<li>You want to understand how to approach a task you have never done before.</li>
</ul>
<p>Before opening AI, write down three things:</p>
<ol>
<li>What problem you are trying to solve.</li>
<li>What you already think is true about it.</li>
<li>What part feels unclear, risky, or confusing.</li>
</ol>
<p><strong>Your assignment:</strong> Use AI to improve your understanding of the problem without asking it to simply complete the work for you.</p>

<h2>2. AI Interaction</h2>
<p>Your first prompt matters because it sets the relationship. If you ask for a finished answer immediately, AI will usually take over. If you ask for help thinking, AI is more likely to support your reasoning.</p>
<p>Start with prompts like these:</p>
<ul>
<li><strong>Clarify:</strong> "I am trying to understand this problem. Before giving solutions, ask me 3 questions that would help clarify what really matters."</li>
<li><strong>Surface assumptions:</strong> "Here is my current understanding. What assumptions might be weak, incomplete, or untested?"</li>
<li><strong>Compare perspectives:</strong> "Give me 2 or 3 ways to look at this problem, with tradeoffs, not just one recommended answer."</li>
<li><strong>Guide next thinking step:</strong> "What should I investigate next if I want to understand this well enough to act on it myself?"</li>
</ul>
<p>Avoid starting with prompts like:</p>
<ul>
<li>"Do this for me."</li>
<li>"Give me the final answer."</li>
<li>"Write the whole thing so I can submit it."</li>
</ul>
<p>Those prompts may save time in the moment, but they reduce the amount of thinking you actually do. That is useful for pure execution, but weak for learning.</p>

<h2>3. Guided Discovery</h2>
<p>Once AI responds, do not treat the response as truth. Treat it as material to work with. A thinking partner is valuable because it gives you something to examine, not because it is automatically correct.</p>
<p>Use this pattern while working:</p>
<ol>
<li><strong>Interrogate the response.</strong> Ask: "Why does this matter?" "What evidence supports this?" "What would make this wrong?"</li>
<li><strong>Connect it to your own context.</strong> Ask: "How does this apply to my exact situation, constraints, or goals?"</li>
<li><strong>Request alternatives.</strong> Ask: "What is another way to think about this?" or "What would someone more experienced notice here?"</li>
<li><strong>Translate insight into action.</strong> Ask: "What is one small step I can take now to test whether this understanding is useful?"</li>
</ol>
<p>This keeps you in an active role. You are not consuming AI output. You are using it to sharpen judgment.</p>

<table>
<thead><tr><th>If AI is acting like a tool only</th><th>If AI is acting like a thinking partner</th></tr></thead>
<tbody>
<tr><td>It gives a finished answer and your role mostly ends.</td><td>It helps you examine the problem and your role becomes more active.</td></tr>
<tr><td>You measure success by getting output fast.</td><td>You measure success by understanding more clearly.</td></tr>
<tr><td>You rely on the answer.</td><td>You test, adapt, and question the answer.</td></tr>
<tr><td>You may complete the task without growing much.</td><td>You build reusable judgment for future problems.</td></tr>
</tbody>
</table>

<h2>4. Knowledge Extraction</h2>
<p>Before you end the session, force the learning to become explicit. If you skip this step, the interaction may feel helpful but leave only vague familiarity.</p>
<p>Write your own answers to these prompts without copying AI:</p>
<ol>
<li>What do I understand now that I did not understand before?</li>
<li>Which assumption of mine changed, weakened, or became more precise?</li>
<li>What is still uncertain?</li>
<li>What next action would test whether my understanding is real?</li>
</ol>
<p>You can also ask AI one final question:</p>
<p><strong>"Based on this conversation, what do you think I now understand, and what might I still be skipping over?"</strong></p>
<p>That prompt is useful because it turns AI into a mirror. But the final summary should still be written in your own words.</p>

<h2>5. Reflection</h2>
<ol>
<li>At what moment in this activity did AI help you think more clearly instead of just move faster?</li>
<li>What kind of prompt made the biggest difference in the quality of the interaction?</li>
<li>Where were you tempted to let AI take over too much?</li>
<li>What signals would tell you that you are becoming dependent on AI output instead of growing your own judgment?</li>
<li>How would you explain the difference between an answer machine and a thinking partner to another learner?</li>
<li>What habit could you build so that future AI sessions strengthen your thinking instead of weakening it?</li>
</ol>

<h2>Practical Prompt Set</h2>
<p>If you want a simple structure to reuse, keep this sequence:</p>
<ol>
<li>"Help me clarify the real problem before we jump to solutions."</li>
<li>"What assumptions am I making that may be weak or incomplete?"</li>
<li>"Show me multiple ways to think about this and the tradeoffs of each."</li>
<li>"What small action can I take to test my current understanding?"</li>
<li>"Help me summarize what I learned in a way I can explain without you."</li>
</ol>

<h2>Key Takeaways</h2>
<ul>
<li>AI becomes dangerous for learning when it replaces your judgment instead of strengthening it.</li>
<li>A strong first prompt frames AI as a collaborator in reasoning, not a machine for finished answers.</li>
<li>Good AI-supported learning includes questioning, comparison, testing, and reflection.</li>
<li>Knowledge extraction matters because helpful conversations do not automatically become retained understanding.</li>
<li>The learner must remain responsible for interpretation, decision-making, and final conclusions.</li>
</ul>

</div>`,
}

export default lesson
