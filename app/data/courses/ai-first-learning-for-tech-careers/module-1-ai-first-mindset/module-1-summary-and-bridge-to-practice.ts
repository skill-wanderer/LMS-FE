import type { Lesson } from '~/types/course'

const lesson: Lesson = {
	id: 'lesson-1-5',
	slug: 'module-1-summary-and-bridge-to-practice',
	title: 'Module 1 Summary & Bridge to Practice',
	type: 'lesson',
	status: 'published',
	durationMinutes: 12,
	order: 5,
	hideCompletion: false,
	createdAt: '2026-04-03',
	updatedAt: '2026-04-03',
	content: `<div class="ai-first-lesson">
<div class="glass-card" style="padding: 1.25rem; margin-bottom: 1.5rem;">
	<p><strong>Review release.</strong> This summary lesson is published so the text can be reviewed in the same lesson flow as the rest of Module 1.</p>
</div>

<h2>Module 1 Summary & Bridge to Practice</h2>
<p>This summary brings together the first four lessons of Module 1: AI-First Mindset. By this point, the direction should be clear: AI is not mainly about getting answers faster. It is about learning faster, thinking more clearly, and moving with more leverage while still keeping ownership of your judgment.</p>

<h2>What This Module Changed</h2>
<p>Module 1 moves you away from passive learning and passive AI use. Instead of waiting until you know everything before acting, you begin with real problems and use AI to accelerate understanding. Instead of treating AI like a magic answer machine, you learn to treat it like a thinking partner, ask better questions, and use it under control rather than giving it control.</p>

<h2>Lesson-by-Lesson Summary</h2>
<ol>
	<li><strong>AI-First vs Traditional Learning:</strong> You learned that AI-first learning starts with useful problems, not endless content collection. The goal is not to know everything before starting. The goal is to gain the right understanding at the right time and move forward intelligently.</li>
	<li><strong>AI as a Thinking Partner (Not a Tool):</strong> You learned that AI can execute, explain, and assist, but it does not own accountability. You still need enough understanding to explain the work, verify the quality, and manage the direction.</li>
	<li><strong>Asking Better Questions:</strong> You learned that better AI outputs begin before the prompt. Good results depend on how clearly you define the problem, the context, the goal, and the unknowns before asking for help.</li>
	<li><strong>Benefits, Tradeoffs, and When to Use AI:</strong> You learned that AI's biggest benefit is speed and leverage, while its biggest tradeoff is hallucination, overreach, and shallow trust. The right move is not blind trust and not total rejection. It is controlled use.</li>
</ol>

<h2>The Module Mindset in One Sentence</h2>
<p>AI should help you learn faster, think better, experiment more, and move with more leverage, but it should never replace your ownership of your work, your judgment, or your life.</p>

<h2>What You Should Carry Forward</h2>
<ul>
	<li>You do not need complete knowledge before taking action.</li>
	<li>You do need enough understanding to manage AI responsibly.</li>
	<li>Better results usually begin with better questions.</li>
	<li>AI is most useful when it speeds up a process you still control.</li>
	<li>Judgment, accountability, and responsibility still stay with you.</li>
</ul>

<h2>Quick Check</h2>
<ul>
	<li>Am I using AI to learn and move faster, or mainly to avoid thinking?</li>
	<li>Do I understand the output well enough to explain or defend it?</li>
	<li>Am I using AI as a helper inside my process, or letting it quietly run the process for me?</li>
</ul>

<h2>Bridge to Practice</h2>
<p>In the next lesson, you will stop treating these ideas as theory only. You will practise using AI deliberately on a real learning task, move faster through action, and test whether you can stay in control while AI supports the work.</p>

</div>`,
	quiz: {
		title: 'Module 1 Quiz - AI-First Mindset',
		passPercentage: 60,
		questions: [
			{
				question: 'What is the main shift from traditional learning to AI-first learning in Module 1?',
				options: {
					A: 'Wait until you fully understand everything before starting',
					B: 'Start with real problems and use AI to accelerate understanding',
					C: 'Use AI to replace learning completely',
					D: 'Avoid action until you have collected enough theory',
				},
				answer: 'B',
				correctExplanation: 'Correct. Module 1 argues that AI-first learning begins with real problems and uses AI to speed up understanding instead of delaying action until you feel fully prepared.',
				incorrectExplanation: 'This module does not teach waiting for complete certainty. Its core shift is moving from passive, content-first learning toward problem-first learning with AI support.',
			},
			{
				question: 'In this module, AI is best treated as what?',
				options: {
					A: 'A magic answer machine',
					B: 'A thinking partner working under human judgment',
					C: 'A replacement for accountability',
					D: 'A system that should make final decisions alone',
				},
				answer: 'B',
				correctExplanation: 'Correct. The module repeatedly frames AI as a thinking partner that works under human judgment, not as something that replaces responsibility.',
				incorrectExplanation: 'The lesson rejects the idea that AI should own accountability or act as a magic answer source. It should support your thinking while you stay responsible.',
			},
			{
				question: 'Before asking AI for help, what should you clarify first?',
				options: {
					A: 'Only the final answer you hope to hear',
					B: 'The tool version and model name',
					C: 'The problem, context, goal, and unknown',
					D: 'Whether AI already knows your situation',
				},
				answer: 'C',
				correctExplanation: 'Correct. Lesson 3 centers on defining the problem, context, goal, and unknown before prompting, because better results start before the prompt itself.',
				incorrectExplanation: 'The module teaches that AI does not automatically know your situation. Clear results come from clarifying the problem, context, goal, and unknowns first.',
			},
			{
				question: 'What is the biggest benefit of AI emphasized in Module 1?',
				options: {
					A: 'Guaranteed correctness',
					B: 'Speed and leverage',
					C: 'Freedom from responsibility',
					D: 'No longer needing to learn fundamentals',
				},
				answer: 'B',
				correctExplanation: 'Correct. The lesson on benefits and tradeoffs identifies speed and leverage as AI\'s biggest advantage when used under human control.',
				incorrectExplanation: 'Module 1 never says AI guarantees truth or removes the need to learn. Its main advantage is speed, but that advantage still needs judgment.',
			},
			{
				question: 'What is the main tradeoff or risk of AI highlighted in the module?',
				options: {
					A: 'It is too slow for real work',
					B: 'It can hallucinate and encourage shallow trust',
					C: 'It never gives useful options',
					D: 'It cannot assist with repetition',
				},
				answer: 'B',
				correctExplanation: 'Correct. The lesson highlights hallucination, overreach, and shallow trust as the main tradeoff that comes with AI\'s speed and usefulness.',
				incorrectExplanation: 'The module does not frame AI as unusable or too slow. The real warning is that it can sound useful while still being wrong or overconfident.',
			},
			{
				question: 'Which is the strongest use of AI in decision-making according to the lesson?',
				options: {
					A: 'Let AI decide so you can move faster',
					B: 'Use AI to gather information, compare options, and advise before you decide',
					C: 'Avoid AI because decisions must always be human-only',
					D: 'Use AI only after the decision is already final',
				},
				answer: 'B',
				correctExplanation: 'Correct. The stronger mindset is to use AI to gather information, compare options, and advise, while keeping the final decision under human ownership.',
				incorrectExplanation: 'This module warns against handing AI final decision power. The goal is not zero AI in decisions, but using AI as an advisor rather than the decider.',
			},
			{
				question: 'What still remains the human\'s responsibility even when AI helps a lot?',
				options: {
					A: 'Judgment, accountability, and ownership',
					B: 'Nothing once the prompt is written well',
					C: 'Only formatting the final output',
					D: 'Only choosing between AI tools',
				},
				answer: 'A',
				correctExplanation: 'Correct. A central idea across the module is that AI can assist heavily, but the human still owns the judgment, accountability, and final responsibility.',
				incorrectExplanation: 'Good prompts do not remove ownership. Even with strong AI support, the human still has to understand enough to manage, explain, and stand behind the result.',
			},
			{
				question: 'What does the module mean by saying "you are the manager"?',
				options: {
					A: 'AI should quietly run the process for you',
					B: 'You must direct the work, inspect quality, and stay responsible for outcomes',
					C: 'Management matters only when working with teams',
					D: 'You should stop using AI until you become an expert',
				},
				answer: 'B',
				correctExplanation: 'Correct. "You are the manager" means you direct the work, inspect the quality, and remain accountable for what AI helps produce.',
				incorrectExplanation: 'The manager metaphor exists to prevent passive AI use. It means AI can help, but it should not quietly take over direction, quality control, or responsibility.',
			},
			{
				question: 'What does healthy AI use look like in Module 1?',
				options: {
					A: 'Blind trust because speed matters most',
					B: 'Total rejection because AI can be wrong',
					C: 'Use AI for speed while questioning and verifying what matters',
					D: 'Use AI only for tasks you already fully mastered',
				},
				answer: 'C',
				correctExplanation: 'Correct. The module argues for balanced use: move faster with AI, but question and verify the parts that actually carry risk or responsibility.',
				incorrectExplanation: 'Healthy AI use is not blind trust or total rejection. The module pushes for a middle path: use AI for leverage while still checking what matters.',
			},
			{
				question: 'Which self-check question best matches the module summary?',
				options: {
					A: 'Can AI do this so I do not have to think?',
					B: 'Am I using AI to learn and move faster, or mainly to avoid thinking?',
					C: 'How quickly can I copy the result into my work?',
					D: 'If AI sounds confident, can I skip review?',
				},
				answer: 'B',
				correctExplanation: 'Correct. This self-check captures the heart of Module 1: use AI to accelerate learning and movement, not to escape thinking or responsibility.',
				incorrectExplanation: 'The summary lesson does not encourage copying faster or thinking less. Its self-check is about whether AI is helping you learn and move, or helping you avoid ownership.',
			},
		],
	},
}

export default lesson