import type { Lesson } from '~/types/course'

const lesson: Lesson = {
	id: 'lesson-1-5',
	slug: 'module-1-summary-and-bridge-to-practice',
	title: 'Module 1 Summary & Bridge to Practice',
	type: 'lesson',
	status: 'published',
	durationMinutes: 16,
	order: 5,
	hideCompletion: false,
	createdAt: '2026-04-03',
	updatedAt: '2026-04-14',
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
	<iframe src="https://www.youtube-nocookie.com/embed/EErn736Y0pE?si=mhYmj8i9byeaols6" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
	<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/episode/6y0f0b4MKjkrqzweZaZQnQ?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
	<iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/ai-first-learning-for-tech-careers@main/Module%201%20Summary%20%26%20Bridge%20to%20Practice/Managing_the_Multiplier.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">
<div class="ai-first-lesson">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/ai-first-learning-for-tech-careers@main/Module%201%20Summary%20%26%20Bridge%20to%20Practice/infographic.png" alt="Module 1 Summary & Bridge to Practice Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" loading="lazy" />

<div class="glass-card" style="padding: 1.25rem; margin-bottom: 1.5rem;">
	<p><strong>Review release.</strong> This summary lesson is published so the text can be reviewed in the same lesson flow as the rest of Module 1.</p>
</div>

<h2>Module 1 Summary & Bridge to Practice</h2>
<p>This summary brings together the first four lessons of Module 1: AI-First Mindset. By this point, the main direction should be much clearer. AI is not mainly valuable because it can give you answers quickly. Its real value is that it can help you learn faster, test ideas faster, and move with more leverage while you still keep ownership of your judgment, your standards, and your decisions.</p>
<p>Across these four lessons, the module keeps pushing the same deeper message from different angles. Do not learn passively. Do not prompt carelessly. Do not treat polished output as understanding. Do not use speed as an excuse to hand over responsibility. Instead, learn from real problems, use AI as a thinking partner, define your questions properly, and apply AI where the leverage is high but the human ownership is still clear.</p>

<h2>What This Module Changed</h2>
<p>Module 1 moves you away from passive learning and passive AI use. Instead of waiting until you know everything before acting, you begin with real problems and use AI to accelerate understanding. Instead of treating AI like a magic answer machine, you learn to treat it like a thinking partner that helps you surface options, clarify mechanisms, and expose what you still do not understand.</p>
<p>It also changes what progress means. In a traditional content-first mindset, progress can look like collecting more notes, more videos, and more explanations before doing anything real. In this module, progress looks different. Progress means reaching enough clarity to act intelligently, noticing what you do not understand, asking stronger follow-up questions, and improving your judgment through action, reflection, and verification.</p>
<p>The result is not an anti-learning mindset. It is a better learning mindset. Traditional study still matters. Deep work still matters. Fundamentals still matter. But they are used more intentionally. Instead of trying to know everything before moving, you move, see where the real gaps are, and then study what matters with much better focus.</p>

<h2>The Four Lessons as One System</h2>
<p>The first four lessons are stronger when you see them as one connected system instead of four separate ideas:</p>
<ol>
	<li><strong>Lesson 1 answers where to start:</strong> start from real problems and useful clarity, not endless content collection.</li>
	<li><strong>Lesson 2 answers how to relate to AI:</strong> use AI as a thinking partner under human accountability, not as a source of final authority.</li>
	<li><strong>Lesson 3 answers how to communicate with AI:</strong> define the problem, context, goal, and unknown so AI is solving the real problem instead of guessing.</li>
	<li><strong>Lesson 4 answers how to use AI responsibly:</strong> use it for speed and leverage, but match your trust, verification, and control to the stakes of the task.</li>
</ol>
<p>If you remove any one of these, the system gets weaker. Starting from action without good questioning creates confusion. Using AI for speed without accountability creates shallow trust. Asking better questions without real ownership can still produce borrowed understanding. And trying to stay accountable without using AI well can leave you slower than you need to be. The module works because each lesson supports the others.</p>

<h2>Lesson-by-Lesson Summary</h2>
<ol>
	<li><strong>AI-First vs Traditional Learning:</strong> The first lesson challenged the idea that learning should begin with full coverage. Instead of starting by trying to collect everything, you start by trying to understand what matters now. AI-first learning is problem-first, action-aware, and just-in-time. It values useful clarity over passive familiarity.
	<p>This lesson also made an important tradeoff visible. Traditional learning still gives structure and breadth, but it can create the illusion of progress without real capability. AI-first learning helps you move faster toward relevance, but it can create blind spots if you only learn what seems immediately useful. The stronger approach is not blind loyalty to one style. It is combining them intentionally.</p></li>
	<li><strong>AI as a Thinking Partner (Not a Tool):</strong> The second lesson reframed the relationship between you and AI. AI can generate, explain, compare, and assist, but it does not own accountability. It cannot carry the human responsibility of understanding what matters, setting direction, and standing behind the result.
	<p>The key shift was from answer-machine thinking to thinking-partner thinking. Instead of asking, "Did AI give me something usable?" you ask, "Do I understand this well enough to explain it, manage it, and defend it if needed?" That is why the lesson pushed habits like dissect then validate, questioning the mechanism, exposing assumptions, and matching your level of inspection to the stakes.</p></li>
	<li><strong>Asking Better Questions:</strong> The third lesson showed that better AI output usually starts before the prompt. Most weak results begin with weak problem definition. If the prompt is vague, AI often answers the wrong version of the problem with confidence.
	<p>The module introduced a simple but powerful structure: problem, context, goal, and unknown. That framework matters because it forces you to think before you ask. It also makes assumptions visible. When you treat AI like a consultant, coach, or teacher and brief it properly, the conversation becomes far more useful. When you do not, you leave AI room to guess.</p></li>
	<li><strong>Benefits, Tradeoffs, and When to Use AI:</strong> The fourth lesson brought the previous ideas into a decision rule. AI's biggest benefit is speed and leverage. Its biggest tradeoff is that it can hallucinate, overreach, and create shallow trust if you stop thinking. AI is strongest when it helps you move faster inside a process you still own.
	<p>This lesson also clarified that not every task needs the same level of trust or control. Some tasks are good places for drafting, brainstorming, comparing options, or automating repetition. Other tasks still require much tighter human ownership because they affect learning, money, safety, trust, technical quality, or long-term direction. The point is not to fear AI. The point is to manage it well.</p></li>
</ol>

<h2>How The Ideas Build On Each Other</h2>
<p>Lesson 1 tells you not to wait forever before acting. Lesson 2 tells you that acting with AI does not remove your responsibility. Lesson 3 tells you that responsible AI use requires clearer questions than most people naturally ask. Lesson 4 tells you that even when you ask well, you still need judgment about when to accelerate, when to verify, and when to keep tighter human control.</p>
<p>Taken together, the module teaches a practical operating model:</p>
<ol>
	<li>Start with a real problem.</li>
	<li>Use AI to increase clarity, not replace ownership.</li>
	<li>Define the problem well enough that AI is helping with the right thing.</li>
	<li>Move fast where speed helps, and slow down where risk, accountability, or learning depth matter more.</li>
</ol>
<p>That operating model is the real core of Module 1. It is not just about liking AI or knowing prompt tricks. It is about learning how to think, ask, move, and decide better in a world where AI is becoming part of normal work.</p>

<h2>The Module Mindset in One Sentence</h2>
<p>AI should help you learn faster, think better, experiment more, and move with more leverage, but it should never replace your ownership of your work, your judgment, or your life.</p>

<h2>What You Should Carry Forward</h2>
<ul>
	<li>You do not need complete knowledge before taking action, but you do need enough clarity to move intelligently.</li>
	<li>You should start with real problems because real problems expose what you actually need to understand.</li>
	<li>You should treat AI as a thinking partner that works under your direction, not as a source of authority that removes your responsibility.</li>
	<li>You should define problem, context, goal, and unknown before asking AI for help, because better prompting begins with better thinking.</li>
	<li>You should question mechanisms, assumptions, and weak points instead of accepting polished answers too quickly.</li>
	<li>You should use AI aggressively for speed, iteration, and leverage where that helps, but tighten human control when stakes are high.</li>
	<li>Judgment, accountability, and ownership still stay with you, even when AI contributes heavily to the result.</li>
</ul>

<h2>Common Mistakes This Module Tries To Prevent</h2>
<ul>
	<li>Waiting until you feel fully prepared before you begin.</li>
	<li>Confusing exposure to information with usable understanding.</li>
	<li>Treating AI output as trustworthy just because it sounds polished.</li>
	<li>Prompting vaguely and then blaming AI for guessing badly.</li>
	<li>Using AI mainly to avoid thinking instead of to improve thinking.</li>
	<li>Letting speed hide the fact that you no longer understand what you are doing.</li>
	<li>Giving AI too much control in places where the consequences still belong to you.</li>
</ul>

<h2>Quick Check</h2>
<ul>
	<li>Am I using AI to learn and move faster, or mainly to avoid thinking?</li>
	<li>Am I starting from a real problem, or just collecting more content because it feels safer?</li>
	<li>Do I understand the output well enough to explain, defend, or improve it?</li>
	<li>Did I define the problem, context, goal, and unknown clearly enough before asking for help?</li>
	<li>Am I using AI as a helper inside my process, or letting it quietly run the process for me?</li>
	<li>For this task, am I moving at the right speed for the level of risk and responsibility involved?</li>
</ul>

<h2>Bridge to Practice</h2>
<p>In the next lesson, you will stop treating these ideas as theory only. You will practise using AI deliberately on a real learning task, move faster through action, and test whether you can stay in control while AI supports the work.</p>
<p>That matters because Module 1 is not complete when the ideas sound reasonable. It is only complete when you can actually use them. The next step is to see whether you can begin with a real task, ask better questions, use AI for leverage, and still remain the person who owns the direction and the judgment. That is the bridge from mindset into practice.</p>

</div>
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