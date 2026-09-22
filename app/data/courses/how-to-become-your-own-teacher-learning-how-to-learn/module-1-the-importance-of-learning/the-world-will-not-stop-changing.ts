import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-own-teacher-2',
  slug: 'the-world-will-not-stop-changing',
  title: 'The World Will Not Stop Changing',
  type: 'lesson',
  status: 'published',
  durationMinutes: 13,
  order: 3,
  hideCompletion: false,
  createdAt: '2026-09-22',
  updatedAt: '2026-09-22',
  content: `<div class="format-selector">
<div class="format-notice">
  <span class="format-notice-icon">&#128161;</span>
  <div>
    <strong>Choose Your Learning Material</strong>
    <p>This lesson is being produced in <strong>multiple formats</strong>. The lesson itself is the same in each one, so pick whichever suits your context right now. Formats still in production are marked below.</p>
  </div>
</div>

<div class="format-tabs">
  <button class="format-tab active" data-format="reading" onclick="document.querySelectorAll('.format-tab').forEach(t=&gt;t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=&gt;c.style.display='none');document.querySelector('[data-content=reading]').style.display='block';">&#128214; Reading</button>
  <button class="format-tab" data-format="video" onclick="document.querySelectorAll('.format-tab').forEach(t=&gt;t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=&gt;c.style.display='none');document.querySelector('[data-content=video]').style.display='block';">&#127916; Video</button>
  <button class="format-tab" data-format="audio" onclick="document.querySelectorAll('.format-tab').forEach(t=&gt;t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=&gt;c.style.display='none');document.querySelector('[data-content=audio]').style.display='block';">&#127911; Audio</button>
  <button class="format-tab" data-format="slides" onclick="document.querySelectorAll('.format-tab').forEach(t=&gt;t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=&gt;c.style.display='none');document.querySelector('[data-content=slides]').style.display='block';">&#128202; Slides</button>
  <button class="format-tab" data-format="infographic" onclick="document.querySelectorAll('.format-tab').forEach(t=&gt;t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=&gt;c.style.display='none');document.querySelector('[data-content=infographic]').style.display='block';">&#128444;&#65039; Infographic</button>
</div>
</div>

<div class="format-content" data-content="reading" style="display:block;">
<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: A lone figure standing upright and calm while the terrain beneath and behind them visibly shifts: layers sliding past one another, shapes mid-transformation, older forms dissolving into new ones at the edges. Motion in the ground, stillness in the person. -->
<!-- When generated: save as public/images/lessons/own-teacher/changing-world-hero.png and change the src below to /images/lessons/own-teacher/changing-world-hero.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/changing-world-hero.png" alt="A figure standing steady while the landscape beneath shifts into new shapes" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">The ground does not hold still.</figcaption>
</figure>
<p><strong>The only thing that will not change is that the world will change.</strong> You do not get a vote on this, and neither does anyone teaching you.</p>
<p>The previous lesson was about a system that cannot move fast enough. This one is about why that matters so much: because the ground it is describing will not hold still.</p>

<h2>1. Everything You Learn Has a Shelf Life</h2>
<p>Whatever you learn today comes with an expiry date. Not all knowledge expires at the same speed, though, and understanding the difference is one of the most useful things in this module.</p>
<p>Roughly, what you learn falls into three tiers:</p>
<ul>
<li><strong>Principles last decades.</strong> How to break a large problem into smaller ones. How to tell a real cause from a coincidence. How people behave under pressure. What makes an explanation good. These barely move in a lifetime.</li>
<li><strong>Practices last years.</strong> How work is organised, what a professional workflow looks like, which trade-offs the industry currently accepts. These shift on the scale of a career, slowly enough to feel permanent and fast enough to catch you out.</li>
<li><strong>Tools last months.</strong> The specific product, the specific version, the specific button. This layer is the most visible, the easiest to learn, and the fastest to die.</li>
</ul>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: A cross-section of three stacked horizontal strata. The deep bottom layer is thick, solid and intact. The middle layer is thinner with some cracking. The top layer is thinnest and visibly eroding into fragments that drift away. Clean geological diagram feel. -->
<!-- When generated: save as public/images/lessons/own-teacher/changing-world-three-tiers.png and change the src below to /images/lessons/own-teacher/changing-world-three-tiers.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/changing-world-three-tiers.png" alt="Three horizontal geological strata of decreasing thickness and increasing erosion" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">Principles last decades, practices last years, tools last months.</figcaption>
</figure>

<p>Most people invest their learning time in exact reverse order to that list. Tools feel urgent and concrete, so they get the attention. Principles feel abstract and unprofitable, so they get skipped. Then the tool is replaced and the effort goes with it.</p>
<p>This is not an argument to ignore tools. You get paid for tools. It is an argument about proportion: learn the tool to do today's work, and learn the principle underneath it so that the next tool costs you a week instead of a year.</p>

<h2>2. Nobody Is Exempt, Including This Platform</h2>
<p>Here is the uncomfortable part, and I would rather say it now than let you discover it later.</p>
<p>No school, no institution, and no platform can protect you from this. That includes this one.</p>
<p>Every course on this site is a snapshot of what was true when it was written. Some of it will age well, because it was about principles. Some of it will be wrong in three years, because it was about tools. I do not know in advance which parts fall into which category, and neither does anyone else writing educational material.</p>
<p>Any platform that tells you otherwise is selling you something. The honest promise is not "this will always be true". It is "this is our best understanding today, and here is how to think so you can update it yourself later".</p>

<h2>3. The Real Skill Is Re-learning</h2>
<p>So the skill you actually need is not learning. It is re-learning.</p>
<p>These sound like the same thing. They are not, and re-learning is significantly harder, for three reasons.</p>
<p><strong>It requires letting go.</strong> You have to set down something you learned correctly, something that worked, something you were good at, because the ground underneath it moved. That is uncomfortable in a way a blank page never is. A beginner has nothing to lose. You do.</p>
<p><strong>It runs into sunk cost.</strong> The more time you spent mastering something, the more it costs to admit it is now the slow way. Your brain will offer you a hundred reasons why the old approach is still fine. Some of them will even be good reasons, which is what makes this hard rather than obvious.</p>
<p><strong>It touches identity.</strong> After enough years, what you know stops feeling like something you have and starts feeling like something you are. "I am the person who is good at X" is a comfortable thing to be, right up until X stops mattering. Then the change is not just professional, it is personal, and people resist it accordingly.</p>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: A hand holds up a framed photograph of a landscape. Behind and around the frame, the real landscape has clearly changed shape, so the photo no longer lines up with the view it was taken of. The mismatch is the whole subject. -->
<!-- When generated: save as public/images/lessons/own-teacher/changing-world-diploma-snapshot.png and change the src below to /images/lessons/own-teacher/changing-world-diploma-snapshot.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/changing-world-diploma-snapshot.png" alt="A framed photograph of a landscape held up against that same landscape, now changed" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">A diploma is a snapshot. The view has moved on.</figcaption>
</figure>
<h2>4. When Expertise Becomes a Liability</h2>
<p>There is a pattern worth watching for, because it catches good people rather than lazy ones.</p>
<p>Deep expertise in an old way of doing things can actively slow you down when the way changes. The expert has strong instincts, and those instincts were trained on rules that no longer apply. They will be confident, and confidently wrong, in situations where a beginner would simply ask a question.</p>
<p>You see this whenever a field shifts: the people who adapt fastest are often not the most senior. They are the ones who held their knowledge loosely enough to put it down.</p>
<p>The defence is not to avoid becoming expert. It is to stay aware of which tier your expertise sits in. Deep knowledge of a principle ages well. Deep knowledge of a tool is a rental, not a possession.</p>

<h2>5. The AI Era Makes This Impossible to Ignore</h2>
<p>The AI era is the clearest example anyone has seen in a long time.</p>
<p>Tools that define how work gets done are being replaced in months rather than decades. Techniques that were considered specialist expertise become a default feature of something else. Whole job descriptions are being rewritten while people are still doing those jobs, which is a strange experience if you are one of those people.</p>
<p>No curriculum can keep pace with that. By the time a course on a specific tool is written, reviewed, and published, the tool has shipped several versions. And no diploma covers it, because the diploma was issued before any of it existed.</p>
<p>What survives this is not a body of knowledge. It is a habit: noticing when the ground has moved, and being willing to go back to being a beginner on purpose.</p>

<h2>6. What to Do About It</h2>
<p>Three things follow from all of this, and they are practical rather than philosophical:</p>
<ul>
<li><strong>Invest in proportion to shelf life.</strong> Spend the most on principles, enough on practices, and only what today's work demands on tools.</li>
<li><strong>Hold tools loosely and principles tightly.</strong> When a tool changes, that should cost you a mild inconvenience, not an identity crisis.</li>
<li><strong>Re-examine on purpose, before you are forced to.</strong> Every so often, pick something you are confident about and ask honestly whether it is still true. Doing this voluntarily is far cheaper than having it done to you.</li>
</ul>

<blockquote>
<p><strong>Takeaway:</strong> A diploma is a snapshot of what you knew once. It was accurate on the day it was printed. The ability to relearn is the thing that keeps renewing it.</p>
</blockquote>
</div>

<div class="format-content" data-content="video" style="display:none;">
<h2>&#127916; Video Version</h2>
<p><em>The video version of this lesson is still in production. The Reading tab has the full lesson.</em></p>
<!-- TODO: replace the paragraph above with the embed below once the asset exists.
<div class="video-embed">
  <iframe title="LESSON TITLE lesson video" src="https://www.youtube-nocookie.com/embed/VIDEO_ID" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
-->
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>&#127911; Audio Version</h2>
<p><em>The audio version of this lesson is still in production. The Reading tab has the full lesson.</em></p>
<!-- TODO: replace the paragraph above with the embed below once the asset exists.
<div class="audio-embed">
  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/EPISODE_ID?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
<p><em>Prefer the Spotify app? <a href="https://open.spotify.com/episode/EPISODE_ID" target="_blank" rel="noopener noreferrer">Open this episode on Spotify</a>.</em></p>
-->
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>&#128202; Slides Version</h2>
<p><em>The slide deck for this lesson is still in production. The Reading tab has the full lesson.</em></p>
<!-- TODO: replace the paragraph above with the embed below once the asset exists.
<div class="slides-embed" style="width:100%;border-radius:8px;overflow:hidden;">
  <iframe src="SLIDE_PDF_URL" width="100%" height="600" style="border:none;" title="LESSON TITLE slides"></iframe>
</div>
<p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Cannot see the slides? <a href="SLIDE_PDF_URL" target="_blank" rel="noopener noreferrer">Open PDF</a></p>
-->
</div>

<div class="format-content" data-content="infographic" style="display:none;">
<h2>&#128444;&#65039; Infographic</h2>
<p><em>The one-page infographic for this lesson is still in production. The Reading tab has the full lesson, including its diagrams.</em></p>
<!-- TODO: replace the paragraph above with the embed below once the asset exists.
<figure style="margin:0;text-align:center;">
  <img src="/images/lessons/own-teacher/INFOGRAPHIC_FILE.png" alt="Single-page infographic summarising this lesson" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">The whole lesson on one page.</figcaption>
</figure>
-->
</div>
`,
  quiz: {
    title: 'Lesson Check: A World That Keeps Changing',
    passPercentage: 70,
    questions: [
      {
        question: 'Match the three tiers of knowledge to how long they last.',
        options: {
          A: 'Principles last decades, practices last years, tools last months',
          B: 'All three last roughly the same length of time',
          C: 'Tools last longest, because they are the most concrete',
          D: 'Principles last months, practices last years, tools last decades',
        },
        answer: 'A',
        correctExplanation: 'Correct. Principles barely move in a lifetime, practices shift across a career, and tools are replaced constantly.',
        incorrectExplanation: 'The order runs from most durable to least: principles measured in decades, practices in years, tools in months.',
      },
      {
        question: 'How do most people allocate their learning time across those three tiers?',
        options: {
          A: 'Mostly on principles, because they last longest',
          B: 'In exact reverse order, spending most on tools because they feel urgent and concrete',
          C: 'Mostly on practices, because that is what employers ask about',
          D: 'Evenly across all three',
        },
        answer: 'B',
        correctExplanation: 'Correct. Tools feel urgent so they get the attention, principles feel abstract so they get skipped, and then the tool is replaced.',
        incorrectExplanation: 'The lesson says most people invest in exact reverse proportion to shelf life, loading up on the layer that dies fastest.',
      },
      {
        question: 'Does the lesson argue that you should ignore tools and study only principles?',
        options: {
          A: 'No, because principles are actually less useful in practice',
          B: 'Yes, tools are a waste of time',
          C: 'No. You get paid for tools. It is an argument about proportion, not exclusion',
          D: 'Yes, unless your employer requires a specific tool',
        },
        answer: 'C',
        correctExplanation: 'Correct. Learn the tool to do today’s work, and the principle underneath it so the next tool costs you a week instead of a year.',
        incorrectExplanation: 'The lesson explicitly says you get paid for tools. The point is the ratio between the layers, not abandoning one of them.',
      },
      {
        question: 'Why is re-learning harder than learning something for the first time?',
        options: {
          A: 'Because the new material is always more technically difficult',
          B: 'Because there is less material available for advanced topics',
          C: 'Because older learners have worse memory',
          D: 'Because it requires letting go, runs into sunk cost, and touches your identity',
        },
        answer: 'D',
        correctExplanation: 'Correct. A beginner has nothing to lose. Someone re-learning has to set down something that worked and that they were good at.',
        incorrectExplanation: 'The difficulty is not cognitive capacity or material difficulty. It is the extra step of putting down something you already own.',
      },
      {
        question: 'How can deep expertise become a liability when a field shifts?',
        options: {
          A: 'Experts have strong instincts trained on rules that no longer apply, so they can be confidently wrong where a beginner would just ask',
          B: 'Experts lose interest in their field over time',
          C: 'Employers stop trusting experienced people',
          D: 'Experts are usually too busy to keep up',
        },
        answer: 'A',
        correctExplanation: 'Correct. This is why the fastest adapters are often not the most senior people, but the ones holding their knowledge loosely.',
        incorrectExplanation: 'It is not about time or motivation. It is that well-trained instincts keep firing after the rules that trained them have changed.',
      },
      {
        question: 'What does this lesson say about the courses on this platform specifically?',
        options: {
          A: 'They are exempt because they focus only on principles',
          B: 'They are a snapshot of what was true when written, and some of it will be wrong in three years',
          C: 'They are updated automatically whenever a field changes',
          D: 'They are designed to stay accurate indefinitely',
        },
        answer: 'B',
        correctExplanation: 'Correct. The lesson says any platform claiming otherwise is selling you something, including this one if it ever did.',
        incorrectExplanation: 'The lesson makes a point of not exempting itself. Some of what is here will age well and some of it will be wrong.',
      },
      {
        question: 'Which is the practical response the lesson recommends?',
        options: {
          A: 'Wait for a field to settle before investing time in it',
          B: 'Avoid becoming an expert in anything',
          C: 'Hold tools loosely and principles tightly, and re-examine your confident beliefs before you are forced to',
          D: 'Learn each new tool the moment it is released',
        },
        answer: 'C',
        correctExplanation: 'Correct. Doing this voluntarily is far cheaper than having it done to you by circumstances.',
        incorrectExplanation: 'The defence is not avoiding expertise or chasing every release. It is staying aware of which tier your knowledge sits in.',
      },
    ],
  },
}

export default lesson
