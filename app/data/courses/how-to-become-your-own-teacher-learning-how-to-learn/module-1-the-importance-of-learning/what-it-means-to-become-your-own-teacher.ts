import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-own-teacher-0',
  slug: 'what-it-means-to-become-your-own-teacher',
  title: 'What It Means to Become Your Own Teacher',
  type: 'lesson',
  status: 'published',
  durationMinutes: 12,
  order: 1,
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
<!-- SCENE: A single figure duplicated on either side of a simple desk: on one side holding a pointer and a book as the teacher, on the other seated as the student. The two halves mirror each other, connected by one continuous line, suggesting one person holding both roles. -->
<!-- When generated: save as public/images/lessons/own-teacher/own-teacher-hero.png and change the src below to /images/lessons/own-teacher/own-teacher-hero.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/own-teacher-hero.png" alt="One person standing on both sides of a teaching desk, holding the roles of teacher and student at once" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">The same person on both sides of the desk.</figcaption>
</figure>
<p><strong>This course is called How to Become Your Own Teacher. That phrase is the definition, not a slogan.</strong></p>
<p>Before any argument about why this matters, we need to be precise about what it means, because the idea gets misunderstood constantly, and the misunderstanding is not harmless. Most people picture a lone figure in a room with a stack of books, no teacher, no help, and no money spent. That picture is wrong, and if you carry it into the rest of this course you will draw the wrong conclusions from everything that follows.</p>

<h2>1. Two Names for the Same Thing</h2>
<p>You will see several words used for this: self-learning, self-teaching, self-directed learning, and becoming your own teacher. In this course they all mean the same thing, and you can treat them as interchangeable.</p>
<p>But <strong>"becoming your own teacher" is the more accurate one</strong>, and it is worth preferring, because it says what actually changes.</p>
<p>"Self-learning" sounds like a statement about who is in the room: you, by yourself, nobody else. That is not what it means. Becoming your own teacher is a statement about <strong>who is holding the job</strong>, and the job does not stop existing just because no one was hired to do it.</p>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: Seven simple icons evenly spaced around a circle: a signpost, a stack of books, a metronome, a magnifying glass over a page, a warning triangle, a small flame, and a finish flag. A single figure stands at the centre of the ring. Suggests one person absorbing seven separate duties. -->
<!-- When generated: save as public/images/lessons/own-teacher/own-teacher-seven-jobs.png and change the src below to /images/lessons/own-teacher/own-teacher-seven-jobs.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/own-teacher-seven-jobs.png" alt="Seven small icons arranged in a ring representing the seven jobs a teacher does" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">The seven jobs. Becoming your own teacher means taking all of them.</figcaption>
</figure>
<h2>2. What a Teacher Actually Does</h2>
<p>To take a job over, you have to know what the job is. Strip away the classroom and a teacher does seven things:</p>
<ol>
<li><strong>Decides what you learn,</strong> and in what order.</li>
<li><strong>Chooses the materials</strong> you learn it from.</li>
<li><strong>Sets the pace,</strong> and decides when it is time to move on.</li>
<li><strong>Judges whether you actually understood it,</strong> as opposed to feeling like you did.</li>
<li><strong>Notices when you are stuck,</strong> often before you notice it yourself.</li>
<li><strong>Keeps you going</strong> when your motivation runs out, through encouragement, consequences, or both.</li>
<li><strong>Decides when you are done.</strong></li>
</ol>
<p>Becoming your own teacher means taking over all seven. That is the entire transition. Not learning alone, not learning for free, not refusing help. Taking the job.</p>
<p>Some of those are easy to take on. Deciding what to learn is often a relief. Others are genuinely hard, and it is worth saying which ones now: <strong>judging your own understanding, and noticing when you are stuck.</strong> Both require you to grade your own work honestly, and both are things you will be bad at to begin with. Much of the method in this course exists to make them possible.</p>

<h2>3. The Definition, in One Sentence</h2>
<p>Being your own teacher means <strong>you are accountable for your own progress.</strong></p>
<p>Nobody else's job depends on whether you get there. That is the whole thing, and everything below follows from it.</p>

<h2>4. The One Thing That Falls Outside It</h2>
<p>There is exactly one arrangement where you are not your own teacher: <strong>hiring an expert.</strong> That means paying for someone's time so that they take part of the job back off you.</p>
<p>A tutor you book by the hour. A paid coach. A mentor on a retainer. A schoolteacher standing in front of your class. A university professor running the course you enrolled on. You buy their hours, whether directly, through tuition, or through taxes, and along with those hours you hand over a share of the responsibility for your progress. Getting you there becomes part of their job.</p>
<p>This is not a criticism of that arrangement. It works, it is often the fastest route, and a later lesson argues that you should use it whenever you can afford to. It is simply the one thing this course is not about.</p>

<h2>5. What Still Counts (And Surprises People)</h2>
<p>Here are five beliefs that make people think they are not their own teacher when they clearly are. The quickest way to see through each one is to notice that a real teacher does exactly the same thing.</p>
<p><strong>"It has to be free."</strong> No. A paid online course is you teaching yourself. So is a book you bought, or a subscription to a library of video lessons. Every schoolteacher in the world works from textbooks that somebody paid for, and nobody says they stopped being the teacher. Your money bought material. It did not buy the job.</p>
<p><strong>"It has to be alone."</strong> No, and this is the most damaging version. Teachers ask colleagues for advice, attend training, and consult specialists when they hit something outside their depth. None of that makes them not the teacher. You can ask questions, join communities, get your work reviewed, and accept mentorship freely offered. Help you went and found, framed a question for, and decided what to do with is you doing the job well.</p>
<p><strong>"It has to be unstructured."</strong> No. Teachers follow a syllabus. If a course has a good one, follow it start to finish. The difference is not the absence of structure, it is that you chose this structure, you can judge whether it is working, and you can walk away from it.</p>
<p><strong>"It means rejecting school."</strong> No. You can be enrolled full time and be your own teacher in the same week, and most of the strongest learners are both. School gives you a foundation and a credential. Teaching yourself gives you everything the syllabus had no room for.</p>
<p><strong>"It means having no teachers."</strong> No. You will have many teachers: the author of a book, the person who made the video, the stranger who answers your question in a forum at midnight. What you do not have is a teacher who is accountable <em>for you specifically</em>. You are that one. Everyone else is a resource you are using to do the job.</p>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: A three-armed signpost on an open plain. Each arm curves back to point at the lone figure standing beneath it, rather than off into the distance. Quietly humorous, clean and uncluttered. -->
<!-- When generated: save as public/images/lessons/own-teacher/own-teacher-the-test.png and change the src below to /images/lessons/own-teacher/own-teacher-the-test.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/own-teacher-the-test.png" alt="A signpost with three arms, each pointing back toward the same figure" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">Three questions. If the answer to all three is you, the job is yours.</figcaption>
</figure>
<h2>6. The Test</h2>
<p>When you are unsure which side of the line something falls on, ask who is doing the three hardest parts of the job:</p>
<ol>
<li><strong>Who decided what you would learn next?</strong></li>
<li><strong>Who decides when it is good enough?</strong></li>
<li><strong>Who notices, and who minds, if you stop?</strong></li>
</ol>
<p>If the answer to all three is "me", you are your own teacher, no matter how much you paid or how many people helped you get there.</p>
<p>The third question is the sharpest. In school, someone notices if you stop: there is a register, a grade, a parent, a consequence. Paying a tutor, someone notices, because they are sitting there waiting for you. Teaching yourself, nobody notices but you.</p>
<p>That is simultaneously the freedom and the difficulty, and a large part of this course exists to deal with the second half of it.</p>

<h2>7. Why Getting This Right Matters</h2>
<p>Because each wrong picture causes a specific and avoidable failure.</p>
<p>If you believe it means <strong>alone</strong>, you will refuse help that was freely available, ignore communities full of people who would have answered you, and make the whole thing several times harder than it needed to be. Plenty of people spend a year stuck on something a two-minute question would have solved.</p>
<p>If you believe it means <strong>free</strong>, you will refuse to spend a small amount on a book or course that would have saved you forty hours, out of a principle nobody asked you to hold.</p>
<p>Neither of those is self-reliance. Both are just inefficiency wearing a costume. A good teacher uses every resource available to them. Be a good teacher.</p>

<h2>8. You Have Already Done This</h2>
<p>One last thing, because "become your own teacher" can sound like a discipline you have to adopt from scratch.</p>
<p>Have you ever looked something up because you needed it for a task? Watched a video to work out how to fix something? Read the manual, searched an error message, or asked someone who knew more than you? In each of those moments you decided what to learn, chose the material, judged when you had enough, and stopped. That is the job. You have been doing it, in small amounts, for years.</p>
<p>The rest of this course is not about starting something new. It is about doing deliberately, and at a far larger scale, what you already do by accident.</p>

<blockquote>
<p><strong>Takeaway:</strong> Becoming your own teacher does not mean learning in an empty room with no money and no help. It means holding the teacher's job yourself: deciding, choosing, judging, noticing, and keeping going. Materials, help, structure, and other people's teaching are all tools, and a good teacher uses every one of them.</p>
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
    title: 'Lesson Check: Becoming Your Own Teacher',
    passPercentage: 70,
    questions: [
      {
        question: 'According to this lesson, what actually defines becoming your own teacher?',
        options: {
          A: 'Being accountable for your own progress',
          B: 'Learning without following a structure or syllabus',
          C: 'Learning without spending any money',
          D: 'Learning without any other people involved',
        },
        answer: 'A',
        correctExplanation: 'Correct. The definition is about who holds the job, not who is in the room or how much was spent.',
        incorrectExplanation: 'The lesson rejects all three of the other options as common misunderstandings. What matters is who is accountable for your progress.',
      },
      {
        question: 'You buy a paid online course, set your own pace through it, and decide when each section has landed. Are you your own teacher?',
        options: {
          A: 'Only if you finish every module',
          B: 'Yes, because you chose it, paced it, and judged it yourself',
          C: 'No, because you paid money for it',
          D: 'No, because the course has a fixed syllabus',
        },
        answer: 'B',
        correctExplanation: 'Correct. Your money bought material, not accountability. Every schoolteacher works from textbooks somebody paid for.',
        incorrectExplanation: 'Paying for material does not transfer the job. You still decided what to learn, at what pace, and to what standard.',
      },
      {
        question: 'Which of these is the one arrangement that falls OUTSIDE becoming your own teacher?',
        options: {
          A: 'Joining a community of practitioners to see what they argue about',
          B: 'Asking an experienced person a question in a forum',
          C: 'Enrolling in a university course taught by a professor',
          D: 'Following a syllabus you chose from a book you bought',
        },
        answer: 'C',
        correctExplanation: 'Correct. Paying for someone to direct your learning, through fees, tuition, or taxes, hands part of the job to them.',
        incorrectExplanation: 'Only hiring an expert falls outside the definition. Asking questions, using bought material, and joining communities all keep the job in your hands.',
      },
      {
        question: 'A senior person reviews your work for free and tells you what is wrong with it. What does this make you?',
        options: {
          A: 'Their student, in the formal sense',
          B: 'Someone who has effectively hired an expert without paying',
          C: 'No longer your own teacher, because someone else corrected you',
          D: 'Still your own teacher, because you found them and chose what to do with the answer',
        },
        answer: 'D',
        correctExplanation: 'Correct. A real teacher consults colleagues and specialists too, and nobody says they stopped being the teacher.',
        incorrectExplanation: 'Help you sought out, framed a question for, and decided what to do with is you doing the job well, not handing it over.',
      },
      {
        question: 'Of the seven jobs a teacher does, which two does the lesson say are genuinely hard to take on yourself?',
        options: {
          A: 'Judging your own understanding and noticing when you are stuck',
          B: 'Keeping yourself going and choosing the order of topics',
          C: 'Choosing the materials and setting the pace',
          D: 'Deciding what to learn and deciding when you are done',
        },
        answer: 'A',
        correctExplanation: 'Correct. Both require grading your own work honestly, which is why much of the method in this course exists.',
        incorrectExplanation: 'Deciding what to learn is usually a relief. The hard two are judging your own understanding and noticing when you are stuck.',
      },
      {
        question: 'Which of the three test questions does the lesson call the sharpest?',
        options: {
          A: 'Who decides when it is good enough?',
          B: 'Who notices, and who minds, if you stop?',
          C: 'Who paid for the material?',
          D: 'Who decided what you would learn next?',
        },
        answer: 'B',
        correctExplanation: 'Correct. In school there is a register and a consequence. Teaching yourself, nobody notices but you, which is both the freedom and the difficulty.',
        incorrectExplanation: 'The third question is the sharpest, because it is the one with no external backstop. Note that who paid is not one of the test questions at all.',
      },
      {
        question: 'What specific failure does believing that self-teaching means learning "for free" cause?',
        options: {
          A: 'Refusing to use any structure or syllabus',
          B: 'Refusing to ask anyone for help',
          C: 'Refusing to spend a small amount on a book or course that would save you many hours',
          D: 'Refusing to enrol in formal education at all',
        },
        answer: 'C',
        correctExplanation: 'Correct. The lesson calls this inefficiency wearing a costume. A good teacher uses every resource available to them.',
        incorrectExplanation: 'Refusing help is the failure caused by believing it means learning alone. The "free" belief specifically stops you buying useful material.',
      },
    ],
  },
}

export default lesson
