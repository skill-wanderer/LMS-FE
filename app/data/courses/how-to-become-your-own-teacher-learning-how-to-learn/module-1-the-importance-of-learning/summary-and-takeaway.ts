import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-own-teacher-6',
  slug: 'summary-and-takeaway',
  title: 'Summary and Takeaway',
  type: 'lesson',
  status: 'published',
  durationMinutes: 10,
  order: 7,
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
<!-- SCENE: An aged nautical chart showing a dotted route that passes six distinct marked waypoints before reaching a marked destination. Small icons sit at each waypoint: a desk, a broadcast tower, eroding strata, a lone figure, a toolbox, a ship. Warm and inviting rather than cluttered. -->
<!-- When generated: save as public/images/lessons/own-teacher/summary-hero.png and change the src below to /images/lessons/own-teacher/summary-hero.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/summary-hero.png" alt="A treasure map showing a charted route past six marked waypoints" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">Six lessons, one argument, and a heading of your own.</figcaption>
</figure>
<p><strong>Six lessons, one argument:</strong> the ability to teach yourself is not a supplement to your education. It is the part that keeps working after the education stops.</p>

<h2>1. The Module in Short</h2>
<ol>
<li><strong>Becoming your own teacher means taking the teacher's job, not learning in an empty room.</strong> Deciding what to learn, choosing the material, judging whether you understood it, noticing when you are stuck, and keeping yourself going. Paid courses count. Free help from generous people counts. The only thing outside it is paying an expert to take part of that job back, which includes the teachers and professors of formal education.</li>
<li><strong>Formal education has limits built into it, because it has to serve the mass.</strong> It moves like a broadcast channel, it changes slowly, and it is designed for an average learner who does not exist. It gives you foundations, a credential, structure, and peers. It gives you a floor. It was never designed to give you a ceiling.</li>
<li><strong>The world will not stop changing, so the real skill is re-learning.</strong> Principles last decades, practices last years, tools last months, and most people invest in exactly the wrong proportion. No institution and no platform is exempt from ageing, including this one. A diploma is a snapshot; relearning is what renews it.</li>
<li><strong>Nobody is obliged to teach you, and that turns out to be survivable.</strong> What an expert really sells is compression, correction, and pruning, and each can be rebuilt from cheaper parts: primary sources, real projects, and communities of practitioners. Pay for an expert if you can, because it saves time. If you cannot, ask well, and you will find a surprising number of experienced people help for nothing. Doing the job yourself also builds two things a taught student rarely gets: judgement, from making the calls, and humility, from seeing how much is left.</li>
<li><strong>Doing it yourself is more productive and more enjoyable.</strong> Every method has a characteristic way of lying to you, so combine several and let their blind spots cancel out. Choose something you can stand doing for years, because consistency compounds and intensity does not. And the freedoms are real: start at episode four, fail without an audience, learn in a queue, and abandon a bad book with nobody recording it.</li>
<li><strong>There is no deadline you did not set yourself.</strong> School is a liner on a timetable; you are a small ship sailing under your own flag. What replaces the calendar is navigation: learn, use, take a bearing, adjust. There will be storms, wrong turns, fog, and people on the shore with opinions about your route, and not one of those means the voyage has gone wrong.</li>
</ol>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: A two-panel comparison. Left: one teacher figure facing thirty small identical seated figures, attention visibly spread thin with many faint lines. Right: one teacher figure facing a single student, joined by one thick unbroken line, and the two figures are subtly the same person. -->
<!-- When generated: save as public/images/lessons/own-teacher/summary-one-to-one.png and change the src below to /images/lessons/own-teacher/summary-one-to-one.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/summary-one-to-one.png" alt="One teacher facing thirty students beside one teacher facing a single student who is the same person" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">One teacher for thirty, or one teacher for one, and you are both of them.</figcaption>
</figure>
<h2>2. The Thread Running Through All of It</h2>
<p>If you strip these six lessons down, they are the same observation seen from six angles.</p>
<p><strong>Every limitation of formal education traces back to the cost of serving everyone. Every advantage of teaching yourself traces back to serving exactly one person.</strong></p>
<p>Said more plainly: formal education hires one teacher for thirty people. Becoming your own teacher puts one teacher on one student, and you are both of them.</p>
<p>The broadcast schedule, the slow curriculum updates, the average learner, the deadlines: none of these are mistakes. They are what happens when a system has to work for millions of people at a price a society can pay. And the answers to all of them are the same thing from the other side. You can go at your own pace, follow what has changed this month, use the method that suits your particular brain, and set your own dates, because you only have to work for one learner.</p>
<p>That is the whole trade. Scale buys reach and loses fit. You are not operating at scale, so you can have the fit.</p>

<h2>3. What This Module Deliberately Did Not Give You</h2>
<p>No technique. No study system. No method. No app, no schedule template, no rules about how long to study before taking a break.</p>
<p>That was on purpose. Techniques are easy to find and easy to abandon, and people abandon them constantly. The reason is almost never that the technique was bad. It is that they never settled the question underneath it: whether this is actually theirs to do, or whether they are still waiting for the real teaching to arrive from somewhere else.</p>
<p>A method applied by someone who has not settled that question is a New Year resolution. The same method applied by someone who has is a habit.</p>

<h2>4. Two Ways to Get This Wrong</h2>
<p>Before the takeaway, two failure modes worth naming, because both are common and this module could push you into either one.</p>
<p><strong>Over-correcting.</strong> Reading six lessons about the limits of formal education and concluding that school is worthless, credentials are a scam, and you will figure it all out alone. That is not what any of this said. Formal education is the cornerstone, it does things self-teaching cannot, and rejecting it wholesale costs you a floor you would then have to build from nothing. The argument was about limits, not about worth.</p>
<p><strong>Never starting.</strong> Agreeing with all of it, feeling genuinely inspired, and changing nothing, because the first real step is uncomfortable and there is always more preparation available. Reading about learning is itself one of the most comfortable methods there is, and it can absorb years.</p>

<h2>5. Your Takeaway</h2>
<p>One question, not a checklist.</p>
<p><strong>What is one thing you have wanted to learn, and have been waiting for a course, a school, or a person to hand to you?</strong></p>
<p>Sit with that honestly for a minute. Most people have an answer ready, often something they have been carrying for years, and often something they have quietly decided is no longer realistic for them.</p>
<p>You do not need permission to start it. You do not need a syllabus. You do not need to be selected, enrolled, qualified, or young. You do not need to be sure you will finish, and you do not need to know yet how you will do it.</p>
<p>You need a heading and a first day. That is all any voyage has ever required to begin.</p>

<blockquote>
<p><strong>Takeaway:</strong> The shift this module is asking for happens in your head, not in anybody's curriculum: the job is yours, and nobody else was ever going to do it. Everything after this is craft, and craft is learnable once that is settled. Weigh anchor.</p>
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
    title: 'Module 1 Checkpoint Quiz',
    passPercentage: 70,
    questions: [
      {
        question: 'What is the single thread running through all six lessons of this module?',
        options: {
          A: 'Every limitation of formal education traces back to the cost of serving everyone, and every advantage of teaching yourself traces back to serving exactly one person',
          B: 'Technology has made traditional learning obsolete',
          C: 'Motivation is the main thing that separates successful learners from unsuccessful ones',
          D: 'Formal education is failing and should be replaced',
        },
        answer: 'A',
        correctExplanation: 'Correct. Formal education hires one teacher for thirty people. Becoming your own teacher puts one teacher on one student, and you are both of them.',
        incorrectExplanation: 'The module never argues that formal education is failing or obsolete. Scale buys reach and loses fit, and you are not operating at scale.',
      },
      {
        question: 'Which of these would mean you are NOT your own teacher?',
        options: {
          A: 'Getting free advice from an experienced mentor you approached',
          B: 'Paying a tutor by the hour to direct your learning',
          C: 'Following a syllabus you chose from a book',
          D: 'Buying and working through a paid online course',
        },
        answer: 'B',
        correctExplanation: 'Correct. Paying someone to take part of the job back is the one arrangement outside the definition, and it includes schoolteachers and professors.',
        incorrectExplanation: 'Paid material and free help both leave the accountability with you. Only paying someone to direct your progress moves the job.',
      },
      {
        question: 'Which learning investment ages best over a career?',
        options: {
          A: 'Certifications in specific products',
          B: 'Deep knowledge of the current market-leading tool',
          C: 'Principles, such as how to break a problem down or tell a cause from a coincidence',
          D: 'Memorising the current best practices of your industry',
        },
        answer: 'C',
        correctExplanation: 'Correct. Principles last decades, practices last years, tools last months. Deep knowledge of a tool is a rental, not a possession.',
        incorrectExplanation: 'Tools and certifications sit in the fastest-expiring tier. Learn them for today’s work, and the principle underneath so the next one is cheap.',
      },
      {
        question: 'You are stuck and cannot afford a tutor. What does the module recommend?',
        options: {
          A: 'Enrol in a formal course instead',
          B: 'Struggle through alone, since working it out yourself teaches more',
          C: 'Wait until you can afford professional help',
          D: 'Ask well: do the work first, ask something specific, and make it easy to say no',
        },
        answer: 'D',
        correctExplanation: 'Correct. Free help from experienced people is one of the most underused resources available, and it stays underused because most people never ask, or ask badly.',
        incorrectExplanation: 'Refusing help you could have had is one of the failure modes the module warns against. Asking well is a learnable skill.',
      },
      {
        question: 'Why does the module recommend combining several learning methods?',
        options: {
          A: 'Each method has a characteristic way of lying to you, so combining them lets their blind spots cancel out',
          B: 'It is the fastest way to cover more material',
          C: 'Employers expect evidence of varied study',
          D: 'Variety keeps you from getting bored',
        },
        answer: 'A',
        correctExplanation: 'Correct. Reading tests recognition, building tests application, explaining tests understanding. You can pass the first and fail the other two.',
        incorrectExplanation: 'The reason is coverage of blind spots, not variety or speed. Each method is strong exactly where another one is weak.',
      },
      {
        question: 'What replaces the school timetable once you are steering yourself?',
        options: {
          A: 'A fixed personal schedule written at the outset',
          B: 'Navigation: learn, use, take a bearing, then adjust',
          C: 'Deadlines set by whoever you are learning for',
          D: 'Nothing, which is why self-learners often drift',
        },
        answer: 'B',
        correctExplanation: 'Correct. A timetable has to guess the weather months in advance. A navigator can look out of the window.',
        incorrectExplanation: 'Removing the calendar does not remove direction. It replaces a fixed guess with a loop informed by evidence from your actual position.',
      },
      {
        question: 'What is the "over-correcting" failure mode this module warns about?',
        options: {
          A: 'Setting deadlines that are too ambitious',
          B: 'Studying too many subjects at once',
          C: 'Concluding that school is worthless and credentials are a scam, and trying to figure everything out alone',
          D: 'Changing your learning method too frequently',
        },
        answer: 'C',
        correctExplanation: 'Correct. The argument was about limits, not worth. Rejecting formal education wholesale costs you a floor you would then have to build from nothing.',
        incorrectExplanation: 'Over-correcting means taking the critique too far. Formal education is described throughout as the cornerstone, with constraints rather than failures.',
      },
      {
        question: 'What is the "never starting" failure mode?',
        options: {
          A: 'Choosing a subject that is too difficult for your level',
          B: 'Starting several things and finishing none',
          C: 'Waiting for a mentor to become available',
          D: 'Agreeing with everything, feeling inspired, and changing nothing',
        },
        answer: 'D',
        correctExplanation: 'Correct. Reading about learning is itself one of the most comfortable methods there is, and it can absorb years.',
        incorrectExplanation: 'The specific trap named is inspiration without action, kept alive by the fact that there is always more preparation available.',
      },
      {
        question: 'Why did this module deliberately give you no study technique or method?',
        options: {
          A: 'Because techniques are easy to find, and people abandon them when they have not settled whether the job is theirs to do',
          B: 'Because methods differ too much between subjects to generalise',
          C: 'Because techniques are covered by paid courses only',
          D: 'Because techniques do not actually work',
        },
        answer: 'A',
        correctExplanation: 'Correct. A method applied by someone who has not settled that question is a New Year resolution. The same method applied by someone who has is a habit.',
        incorrectExplanation: 'The module is not sceptical of technique. It argues the question underneath has to be settled first, or the technique gets abandoned.',
      },
      {
        question: 'What is the takeaway question the module leaves you with?',
        options: {
          A: 'How many hours per week can you realistically commit?',
          B: 'What is one thing you have wanted to learn, and have been waiting for a course, a school, or a person to hand to you?',
          C: 'Which learning method suits you best?',
          D: 'What is the most valuable skill in your industry right now?',
        },
        answer: 'B',
        correctExplanation: 'Correct. You do not need permission, a syllabus, or to be selected. You need a heading and a first day.',
        incorrectExplanation: 'The module ends on one question rather than a checklist, and it is about what you have been waiting for someone else to give you.',
      },
    ],
  },
}

export default lesson
