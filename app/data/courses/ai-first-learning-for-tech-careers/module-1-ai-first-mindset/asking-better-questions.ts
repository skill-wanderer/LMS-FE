import type { Lesson } from '~/types/course'

const lesson: Lesson = {
	id: 'lesson-1-3',
	slug: 'asking-better-questions',
	title: 'Asking Better Questions',
	type: 'article',
	status: 'published',
	durationMinutes: 17,
	order: 3,
	hideCompletion: false,
	createdAt: '2026-04-03',
	updatedAt: '2026-04-03',
	content: `<div class="ai-first-lesson">
<div class="glass-card" style="padding: 1.25rem; margin-bottom: 1.5rem;">
	<p><strong>Review release.</strong> This lesson is published so the content can be checked in the app before any final media or follow-up edits are added.</p>
</div>

<h2>Asking Better Questions</h2>
<p>Most people think AI is inaccurate. Very often the real problem is simpler: they ask incomplete questions and get confident guesses back.</p>

<h2>Bad Question vs Better Question</h2>
<p><strong>Bad question:</strong> "Why is my website slow?"</p>
<p><strong>Better version:</strong> "My Nuxt SSR site deployed on Cloudflare Pages loads slowly for US users, with TTFB around 2.5 seconds. My backend is in Vietnam, but SSR runs on the edge. I want a diagnosis and next steps. I am not sure whether the issue is cold start, network distance, or slow data fetching."</p>
<p>That second version is better because it gives the situation, the technical context, the goal, and the unknown. It gives AI something real to work with.</p>

<table>
<thead><tr><th>Before</th><th>After</th></tr></thead>
<tbody>
<tr><td>Vague prompt</td><td>Clear brief</td></tr>
<tr><td>Generic answer</td><td>Targeted diagnosis</td></tr>
<tr><td>Hidden assumptions</td><td>Visible unknowns</td></tr>
<tr><td>More confusion</td><td>Better next decision</td></tr>
</tbody>
</table>

<h2>Core Idea</h2>
<p>Better questions start before the prompt. They start when you clarify the problem for yourself first.</p>
<p><strong>Lesson goal:</strong> Learn to brief AI the way you would brief a capable human consultant, coach, or teacher: define the problem, provide the context, state the outcome you want, and then question the answer until understanding becomes real.</p>

<h2>Framework: Problem, Context, Goal, Unknown</h2>
<p>Before asking AI, write four short lines:</p>
<ol>
	<li><strong>Problem:</strong> What is happening?</li>
	<li><strong>Context:</strong> What does AI need to know first to understand your situation?</li>
	<li><strong>Goal:</strong> What kind of answer do you want: explanation, diagnosis, comparison, plan, or next step?</li>
	<li><strong>Unknown:</strong> What part is still unclear to you?</li>
</ol>
<p>This is not prompt decoration. This is problem definition.</p>

<h2>Practice: Do It Now</h2>
<p>Pick one real problem. Keep it small.</p>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>Checkpoint 1:</strong> Pause and write your problem in one sentence.</p>
</div>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>Checkpoint 2:</strong> Rewrite it with the context a real human would need in order to understand your situation properly.</p>
</div>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>Checkpoint 3:</strong> Add the exact result you want from AI. Do you want diagnosis, explanation, options, prioritization, or a next step?</p>
</div>

<div class="glass-card" style="padding: 1rem; margin: 1rem 0;">
	<p><strong>Checkpoint 4:</strong> Ask AI. If needed, add: "Before answering, tell me what you are assuming and ask me about anything that is unclear."</p>
</div>

<p>That is enough to practise. The goal is not to sound impressive. The goal is to stop making AI guess what you mean.</p>

<h2>AI Communication Overlaps with Human Communication</h2>
<p>People who communicate well with humans often go a long way with AI too. They know how to explain context, define the real issue, separate facts from guesses, and ask follow-up questions that expose the truth instead of accepting the first polished answer.</p>
<p>This is one of the biggest mindset shifts in AI-first learning: AI prompting is not only a technical skill. It is also a communication skill.</p>

<h2>Treat AI Like a Consultant, Coach, or Teacher</h2>
<p>AI is powerful, but it is not a mind reader. If you want a good answer, treat it like a consultant, coach, or teacher. Think first: what would that person need to know before they could help me properly?</p>
<p>A consultant needs the business situation. A coach needs your current state and your goal. A teacher needs to know what part you do not understand. AI needs the same kind of briefing. Then it needs a clear request: what do you want out of the answer?</p>
<p>If you skip that step and expect AI to fill in the blanks, you are not really giving it clarity. You are giving it room to guess.</p>

<h2>Why Hallucination Often Starts with Missing Context</h2>
<p>When people say AI hallucinates, they often imagine the problem starts inside the model. Sometimes it does. But many bad answers start earlier: with incomplete questions. AI is built to continue, infer, and produce plausible output. If the prompt is missing important context, AI may confidently answer the wrong version of the problem.</p>
<p>In other words: when you let AI "read your mind," you are often asking it to hallucinate.</p>
<p>That is why context matters so much. Missing context leads to hidden assumptions. Hidden assumptions lead to confident but misaligned answers.</p>

<h2>Control Assumptions Explicitly</h2>
<p>This is one of the most important habits in AI work. Human experts also make assumptions, but strong human experts usually slow down and confirm what they think they heard. AI often does not. It tends to answer first and clarify later, if at all.</p>
<p>So you need to manage assumptions directly. Useful instructions include:</p>
<ul>
	<li>"List the assumptions you are making before you answer."</li>
	<li>"If anything is unclear, ask me first instead of filling in the gaps."</li>
	<li>"Tell me which part of your answer is most uncertain."</li>
	<li>"What information is missing that would change your answer?"</li>
</ul>
<p>This does not remove all hallucination, but it makes the guessing visible. That alone improves the quality of the conversation a lot.</p>

<h2>The Loop: Ask, Get an Answer, Then Drill Deeper</h2>
<p>The five-question technique should not sit beside the lesson as a separate trick. It belongs inside the normal flow.</p>
<ol>
	<li><strong>Ask a better first question.</strong></li>
	<li><strong>Get the initial answer.</strong></li>
	<li><strong>Run the five-question drill from Lesson 2.</strong></li>
	<li><strong>Refine your understanding and decide the next action.</strong></li>
</ol>

<p>Use these five follow-up questions after the first answer:</p>
<ol>
	<li>What is happening here in plain language?</li>
	<li>Why does it work this way?</li>
	<li>How does the mechanism produce this result in my situation?</li>
	<li>What assumptions is this answer making?</li>
	<li>When would this fail, or when would a different answer be better?</li>
</ol>
<p>This turns AI from an answer machine into a thinking partner. The first answer gives direction. The five-question loop creates understanding.</p>

<h2>Knowledge Extraction</h2>
<p>After the conversation, write four short lines:</p>
<ol>
	<li><strong>The real problem was:</strong> What was I actually trying to solve?</li>
	<li><strong>The context that mattered was:</strong> What changed the quality of the answer most?</li>
	<li><strong>The key assumption was:</strong> What needed checking?</li>
	<li><strong>The next move is:</strong> What will I test, ask, or verify now?</li>
</ol>
<p>This is how you turn one useful answer into a repeatable learning habit.</p>

<h2>Reflection</h2>
<ol>
	<li>What kind of missing context do you most often leave out when asking AI for help?</li>
	<li>Would a real human expert understand your situation from the way you currently prompt AI?</li>
	<li>Do you clearly know what answer you want before you start the conversation?</li>
	<li>How often do you ask AI to reveal its assumptions?</li>
	<li>Which of the five follow-up questions improves your understanding the most?</li>
</ol>

<h2>Key Takeaways</h2>
<ul>
	<li>Most bad AI answers are not just model problems. They are often incomplete-question problems.</li>
	<li>Better questions start before the prompt, when you define problem, context, goal, and unknown.</li>
	<li>Good AI communication overlaps heavily with good human communication.</li>
	<li>AI is powerful, but it is not a mind reader. Missing context invites guessing, and guessing invites hallucination.</li>
	<li>Treat AI like a consultant, coach, or teacher: brief it properly before asking for help.</li>
	<li>Make assumptions visible instead of letting them stay hidden inside confident answers.</li>
	<li>The real loop is: ask better, get an answer, question deeper, then extract the learning.</li>
</ul>

</div>`,
}

export default lesson
