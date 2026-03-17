import type { Lesson } from '~/types/course'
const lesson: Lesson = {
	id: 'lesson-1-1',
	slug: 'ai-first-vs-traditional-learning',
	title: 'AI-First vs Traditional Learning',
	type: 'article',
	status: 'published',
	durationMinutes: 15,
	order: 1,
	hideCompletion: false,
	createdAt: '2026-03-17',
	updatedAt: '2026-03-17',
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
	<iframe src="https://www.youtube-nocookie.com/embed/CrmdEr5I5Ro?si=J3LXdTgtraJ8MM1C" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
	<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/5U3pOqr0vg0PDESCLETUAm?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slide Version</h2>
<div class="slides-embed">
	<iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/ai-first-learning-for-tech-careers@main/ai-first-vs-traditional-learning/The_AI_First_Mindset.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/ai-first-learning-for-tech-careers@main/ai-first-vs-traditional-learning/infographic.png" alt="AI-First vs Traditional Learning Infographic" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:2rem;" />

<h2>AI-First vs Traditional Learning</h2>
<p>Most people are taught to learn by collecting information first and using it later. They read, watch, highlight, and take notes before trying anything real. This can feel safe because it gives the impression of progress, but it can also train a passive learning mindset where understanding is measured by exposure instead of by clarity, judgment, or action.</p>
<p>This lesson is about mindset before method. Before learners can use AI well, they need a different mental model: learning is not storing as much information as possible, it is building usable understanding around what matters most right now.</p>
<p><strong>Lesson goal:</strong> Shift from a content-first learning mindset to an AI-first learning mindset.</p>
<p><strong>Core idea:</strong> AI-first learning values clarity, relevance, and timely understanding over collecting large amounts of disconnected information.</p>

<h2>1. Traditional Learning Mindset</h2>
<p>Traditional learning usually starts from the belief that learners should gather as much knowledge as possible before they begin. Learning is organized around lectures, chapters, explanations, and step-by-step instruction. Information comes first, and application comes later.</p>
<p>This model can provide structure, broad coverage, and a stable foundation. But it also has a common weakness: it can create the illusion of understanding before anything has been tested against reality.</p>
<ul>
<li>You may recognize terms without being able to use them.</li>
<li>You may feel prepared without being able to make decisions.</li>
<li>You may spend too much time learning things that are not yet relevant.</li>
</ul>

<h2>2. AI-First Learning Mindset</h2>
<p>AI-first learning starts from a different belief. Learners do not need complete coverage before they begin. They need enough clarity to move forward, enough awareness to notice what they do not understand, and enough discipline to keep ownership of the thinking.</p>
<p>In this mindset, AI is not mainly a machine for answers. It is a partner for clarification, comparison, questioning, and surfacing missing understanding. The value is not that it eliminates effort. The value is that it shortens the path between confusion and useful insight.</p>
<p>This is why AI-first learning is linked to just-in-time learning. Instead of trying to know everything in advance, you focus on the knowledge that matters now. A small amount of the right knowledge can unlock meaningful progress; this is often described as the 20/80 effect.</p>

<h2>3. The Tradeoff</h2>
<p>Speed is one of the biggest strengths of AI-first learning, especially when the goal is real progress. But speed comes with tradeoffs.</p>
<p>If learners follow only what is immediately useful, they can develop blind spots: missing supporting concepts, edge cases, deeper principles, or background knowledge that does not appear early.</p>
<p>Traditional learning still matters. It is most useful as a complement: patch blind spots, strengthen weak areas, and widen understanding after you see what is missing.</p>

<table>
<thead><tr><th>Approach</th><th>Strength</th><th>Risk</th></tr></thead>
<tbody>
<tr><td>Traditional learning</td><td>Broad coverage and structured foundation.</td><td>Passive familiarity without usable understanding.</td></tr>
<tr><td>AI-first learning</td><td>Fast movement toward relevant understanding.</td><td>Blind spots from learning only what seems immediately necessary.</td></tr>
</tbody>
</table>

<h2>4. What Mindset Shift Looks Like</h2>
<ul>
<li>From "I must learn everything before I begin" to "I need enough understanding to move intelligently."</li>
<li>From "More information means more progress" to "Better judgment means more progress."</li>
<li>From "AI can tell me the answer" to "AI can help me see what I understand and what I still lack."</li>
<li>From "Traditional learning is old" to "Traditional learning is useful when it patches what action-first learning misses."</li>
</ul>
<p>Strong learners use both approaches intentionally instead of treating one as always right and the other as always wrong.</p>

<h2>5. Micro-Action: Turn Learning into Action</h2>
<p>Take one small step now. The goal is not to master a topic in one sitting. The goal is to experience starting from action and learning with awareness.</p>
<p>Open your AI tool and do this:</p>
<ol>
<li>Think of something you want to learn right now.</li>
<li>Ask: "Give me a small, practical assignment to practice this. It should be doable in under 30 minutes."</li>
<li>Then ask: "What should I pay attention to while doing this so I actually understand it, not just complete it?"</li>
</ol>
<p><strong>Optional, but powerful:</strong> "What mistakes will beginners usually make in this assignment?"</p>
<p>After doing first, return to traditional resources with a sharper eye for what you actually missed.</p>

<h2>6. Reflection</h2>
<ol>
<li>When you start learning something new, do you seek full coverage first or useful clarity first?</li>
<li>How often do you mistake familiarity for real understanding?</li>
<li>What makes a content-first approach feel safe to you?</li>
<li>What makes a faster, AI-supported approach feel risky to you?</li>
<li>Where might just-in-time learning help you move faster?</li>
<li>What blind spots would you need to watch for?</li>
<li>After doing first, what topics would you go back and study more traditionally?</li>
<li>How can traditional learning patch blind spots without becoming your default for everything?</li>
</ol>

<h2>Key Takeaways</h2>
<ul>
<li>This lesson is about mindset before method.</li>
<li>Traditional learning gives structure and breadth, but can create passive familiarity.</li>
<li>AI-first learning prioritizes relevant understanding and just-in-time learning.</li>
<li>The 20/80 idea explains why a smaller amount of useful knowledge can drive early progress.</li>
<li>AI-first learning is fast, but can produce blind spots if missing knowledge is ignored.</li>
<li>Traditional learning remains valuable because it patches blind spots and deepens understanding.</li>
<li>The goal is not to choose one side forever, but to adopt a better learning mindset first.</li>
</ul>

</div>`,
}

export default lesson
