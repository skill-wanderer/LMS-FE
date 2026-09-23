import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-own-teacher-4',
  slug: 'it-is-more-productive-and-more-fun',
  title: 'It Is More Productive, and It Is More Fun',
  type: 'lesson',
  status: 'published',
  durationMinutes: 17,
  order: 5,
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
<!-- SCENE: An open toolbox viewed from above containing clearly distinct instruments: an open book, a small screen, a wrench, a pair of speech bubbles, a magnifying glass. All rendered at equal visual weight, none dominant, arranged with care. -->
<!-- When generated: save as public/images/lessons/own-teacher/more-fun-hero.png and change the src below to /images/lessons/own-teacher/more-fun-hero.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/more-fun-hero.png" alt="An open toolkit holding several different learning instruments" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">No method wins. The gain is in combining them.</figcaption>
</figure>
<p><strong>Everything up to here has been about necessity.</strong> Formal education has limits. The world keeps changing. Nobody is coming to teach you. All true, and all slightly grim.</p>
<p>This lesson is about something better. Teaching yourself is not only the path that survives, it is the one you are more likely to enjoy, and enjoyment turns out to be a practical advantage rather than a soft one.</p>

<h2>1. You Pick the Method, and That Decides Whether You Continue</h2>
<p>Start with the obvious part. If reading puts you to sleep, you do not have to read. If you learn best by breaking something and then fixing it, go and break something. If you only understand an idea after arguing about it, go and find someone to argue with.</p>
<p>This sounds like a comfort point. It is actually a survival point.</p>
<p>Almost nothing you want to learn can be learned in one sitting. It takes months, sometimes years, and the single largest cause of failure is not difficulty. It is stopping. A method that suits you is a method you will come back to tomorrow, and coming back tomorrow, repeatedly, for a long time, is most of the game.</p>
<p>Put bluntly: a mediocre method you will actually use beats an optimal method you will abandon in three weeks. Consistency compounds. Intensity does not.</p>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: A row of five small balance scales along a horizontal line. Each scale is tipped at a different angle, and each holds visibly different objects in its two pans. No two are balanced the same way. Orderly and rhythmic. -->
<!-- When generated: save as public/images/lessons/own-teacher/more-fun-method-tradeoffs.png and change the src below to /images/lessons/own-teacher/more-fun-method-tradeoffs.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/more-fun-method-tradeoffs.png" alt="A row of balance scales, each tipping a different way" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">Every method buys you something at a price.</figcaption>
</figure>
<h2>2. Every Method Has a Trade-off</h2>
<p>There is no single way to learn. There are many, and every one of them buys you something at a price:</p>
<ul>
<li><strong>Reading</strong> is dense and fast. You can cover in an hour what would take a day to be told. Its price is that it is the easiest way to fool yourself: you finish a chapter, the words all made sense as you read them, and you walk away feeling like you know the material when you have only recognised it.</li>
<li><strong>Watching</strong> is easy to start and hard to retain. Video is excellent for seeing how something is done in practice, especially anything physical or visual. Its price is that motion and a confident voice feel like understanding. You can watch ten hours and be able to do none of it.</li>
<li><strong>Listening</strong> costs you almost nothing, because it fits into commutes, chores, and walks. Its price is shallowness: you cannot go back easily, you cannot skim, and you cannot take notes with your hands full. It is good for exposure and bad for depth.</li>
<li><strong>Building</strong> teaches you what actually works, because the thing either runs or it does not. Its price is that it leaves gaps wherever you got lucky. You solved it, but you may not know why it worked, and you will not find out until it stops working.</li>
<li><strong>Discussing and arguing</strong> exposes your reasoning to someone who does not share your assumptions, which is the fastest way to find a bad assumption. Its price is that it needs another person, and that the loudest voice is not always the most correct one.</li>
<li><strong>Teaching someone else</strong> exposes every hole you have, which is exactly why it is uncomfortable, and exactly why it works. Its price is that you have to know something first, so it cannot be your starting point.</li>
<li><strong>Trial and error</strong> is slow and expensive in time, and almost impossible to forget. Nothing sticks like a mistake that cost you a weekend. Its price is obvious: it costs you weekends.</li>
</ul>
<p>None of them wins. Each one covers something another one misses, and each one has a characteristic way of lying to you.</p>

<h2>3. The Comfort Trap</h2>
<p>Here is the problem almost everyone has, including people who consider themselves good learners.</p>
<p>You already have a default method. You did not choose it deliberately. You drifted into it because it felt comfortable, and comfort is a terrible selection criterion, because the methods that feel most comfortable are usually the ones that demand least of you.</p>
<p>Reading feels productive and asks nothing. Watching feels productive and asks even less. Being tested, building something that fails, or explaining an idea to a sceptical person all feel worse in the moment, and all teach more.</p>
<p>This is worth saying plainly: <strong>the feeling of learning and the fact of learning are only loosely related.</strong> If a session felt smooth and pleasant, that is weak evidence that much happened. If it felt like effort and exposed how much you did not know, that is usually a good sign.</p>

<h2>4. The Gain Is in Combining Them</h2>
<p>The real advantage of choosing your own methods is not picking the best one. It is that you can run several, deliberately, so that their blind spots cancel out.</p>
<p>A worked example. Suppose you want to learn something genuinely new to you:</p>
<ol>
<li><strong>Read</strong> to get the map: the vocabulary, the main ideas, the shape of the territory. Fast and cheap, and it means you now know what the words mean when other people use them.</li>
<li><strong>Build</strong> something small to find out where the map is wrong. This is where you discover that the book skipped three things that matter and spent two chapters on something that does not.</li>
<li><strong>Ask or discuss</strong> when you hit the wall the book did not prepare you for. Now your question is specific, which is the only kind of question that gets a useful answer.</li>
<li><strong>Explain it</strong> to someone else, or write it down as though you were teaching it. Every gap you glossed over becomes visible immediately, because you cannot write a sentence about something you do not understand.</li>
</ol>
<p>Each step tests a different kind of knowing. Reading tests recognition. Building tests application. Explaining tests understanding. You can pass the first and fail the other two, which is exactly the trap most self-teachers fall into.</p>
<p>And notice: that sequence is not an accident that happens to you. You planned it, the way you would plan anything else you cared about getting right.</p>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: Four numbered tiles in a horizontal row. The fourth is brightly highlighted and clearly chosen first. A curved arrow loops from the fourth tile back to the second, then forward again, drawing the real path taken. Playful and clear. -->
<!-- When generated: save as public/images/lessons/own-teacher/more-fun-episode-four.png and change the src below to /images/lessons/own-teacher/more-fun-episode-four.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/more-fun-episode-four.png" alt="Four episode tiles with the fourth selected first and an arrow curving back to the second" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">Start at episode four. Go back for episode two when you need it.</figcaption>
</figure>
<h2>5. Fun Is Not a Luxury</h2>
<p>Which brings us back to enjoyment, and why it matters far more than it sounds.</p>
<p>When you enjoy the method, you do it more often without needing discipline. You think about the problem in the shower. You read one more page because you want to know what happens. You come back after a bad week instead of quietly letting it go.</p>
<p>That is not a pleasant side effect of learning well. It is the mechanism. Over five years, the person who enjoys their method will have put in vastly more hours than the person grinding through a method they hate, and hours are what this is made of.</p>
<p>So it is worth asking where the enjoyment actually comes from. Mostly it comes from a handful of freedoms you simply do not have inside a school.</p>
<p><strong>You can watch episode four first.</strong> Go back to the TV channel from the lesson on formal education. School makes you watch episode one, then two, then three, then four, in that order, at that speed. On your own you can start with episode four, because that is the thing you actually wanted to do. If you get stuck, you go back for episode two, pick up the piece you were missing, and carry on. You are not "behind" while you do that, because there is no schedule to be behind. You are fetching something you now know you need, which is a far better reason to learn it than being told it comes next. It sounds reckless, and sometimes it is, but far more often it is exactly right.</p>
<p><strong>Failing costs you almost nothing.</strong> Fail a test at school and there is a mark, a record, and quite possibly somebody with an opinion about it. Experiment on your own and fail, and nothing happens except that you learned something. You are in Edison's position: you have not failed, you have found one more thing that does not work. Nobody is watching, nobody is scoring it, and the only person who has to hear about it is you.</p>
<p><strong>The deadline moves to where it belongs.</strong> In school, the deadline for a subject is a date on a calendar chosen by someone who has never met you. On your own, the deadline for a piece of knowledge is the moment you actually need it. If you never need it, there was never a deadline at all. The outer limit is the day you die, which is considerably more generous than a Tuesday.</p>
<p><strong>It fits in the gaps.</strong> You can learn standing in a long queue, on a bus, or waiting for something to finish. School learning needs a desk, a room, and an hour. Yours needs a spare five minutes and something to think about. It is a genuinely good way to kill dead time, and unlike most ways of killing dead time, people tend to think better of you for it rather than worse.</p>
<p><strong>And you are allowed to waste a little.</strong> You can buy a book that turns out to be no good. Nothing happens. It becomes decoration, and a shelf of books is perfectly decent decoration. I should admit here that I have not finished every book I have bought, not by a long way, and I am not going to pretend otherwise. Nobody audits your reading list. A course you stopped halfway through is not an incomplete on your record, it is just a course you got what you needed from.</p>
<p>None of those freedoms is dramatic on its own. Together they remove most of the friction and nearly all of the fear, and what is left feels less like studying and more like curiosity with a budget.</p>
<p>That is why a method you enjoy is a method you will still be using in five years. In the long run, that is the only measure of a learning method that counts.</p>

<blockquote>
<p><strong>Takeaway:</strong> There is no best method, only the mix that fits you. Choose it deliberately instead of drifting into it, combine several so their blind spots cancel out, and pick ones you can stand doing for years. Effectiveness and enjoyment are the same decision.</p>
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
    title: 'Lesson Check: Methods, Trade-offs, and Enjoyment',
    passPercentage: 70,
    questions: [
      {
        question: 'What does the lesson name as the single largest cause of failure in long-term learning?',
        options: {
          A: 'Stopping',
          B: 'Choosing the wrong subject',
          C: 'Lack of natural talent',
          D: 'The difficulty of the material',
        },
        answer: 'A',
        correctExplanation: 'Correct. Almost nothing worth learning fits in one sitting, so coming back tomorrow, repeatedly, is most of the game.',
        incorrectExplanation: 'Difficulty is rarely what defeats people. Abandonment is, which is why a method you will actually return to matters so much.',
      },
      {
        question: 'Which statement best captures the lesson’s view of consistency versus intensity?',
        options: {
          A: 'Consistency and intensity matter about equally',
          B: 'A mediocre method you will actually use beats an optimal method you abandon in three weeks',
          C: 'Short bursts of intense study are the most efficient approach',
          D: 'The best method is always worth the discomfort of sticking with it',
        },
        answer: 'B',
        correctExplanation: 'Correct. Consistency compounds. Intensity does not.',
        incorrectExplanation: 'The lesson states this directly: the method you keep using wins over the theoretically better one you quit.',
      },
      {
        question: 'What is the characteristic way that reading lies to you?',
        options: {
          A: 'It requires another person to be useful',
          B: 'It is too slow to cover much material',
          C: 'You finish a chapter feeling like you know the material when you have only recognised it',
          D: 'It leaves gaps wherever you got lucky',
        },
        answer: 'C',
        correctExplanation: 'Correct. Reading is dense and fast, and it is the easiest method to fool yourself with.',
        incorrectExplanation: 'Leaving gaps where you got lucky is the price of building. Needing another person is the price of discussion. Reading’s specific trap is false recognition.',
      },
      {
        question: 'What is the comfort trap?',
        options: {
          A: 'Learning only subjects you already find easy',
          B: 'Relying on one teacher for too long',
          C: 'Studying somewhere too relaxing to concentrate',
          D: 'Drifting into a default method chosen by comfort, when comfortable methods are usually the ones that demand least of you',
        },
        answer: 'D',
        correctExplanation: 'Correct. Reading and watching feel productive and ask little. Being tested, building something that fails, or explaining to a sceptic all feel worse and teach more.',
        incorrectExplanation: 'The trap is about the method you drifted into rather than the subject or the setting. Comfort is a poor criterion for choosing how to learn.',
      },
      {
        question: 'What does the lesson say about the relationship between the feeling of learning and the fact of learning?',
        options: {
          A: 'They are only loosely related, and a smooth pleasant session is weak evidence that much happened',
          B: 'Learning should always feel unpleasant to be effective',
          C: 'The feeling is the only measure available, so trust it',
          D: 'They are reliably connected: if it feels productive, it was',
        },
        answer: 'A',
        correctExplanation: 'Correct. If it felt like effort and exposed how much you did not know, that is usually a good sign.',
        incorrectExplanation: 'The lesson does not claim discomfort is required, only that the pleasant feeling is not evidence of progress.',
      },
      {
        question: 'In the four-step worked example, which kind of knowing does explaining something to someone else test?',
        options: {
          A: 'Application',
          B: 'Understanding',
          C: 'Memorisation',
          D: 'Recognition',
        },
        answer: 'B',
        correctExplanation: 'Correct. Reading tests recognition, building tests application, and explaining tests understanding. You can pass the first and fail the other two.',
        incorrectExplanation: 'Recognition is what reading tests and application is what building tests. Explaining is the one that exposes whether you actually understand it.',
      },
      {
        question: 'In the TV analogy, what can you do on your own that school does not allow?',
        options: {
          A: 'Watch every episode twice as fast',
          B: 'Change the ending of the series',
          C: 'Watch episode four first, then go back for episode two when you get stuck',
          D: 'Skip the series entirely and still get the benefit',
        },
        answer: 'C',
        correctExplanation: 'Correct. You start with what you actually want to do, and fetch the missing piece when you discover you need it, which is a better reason to learn it.',
        incorrectExplanation: 'The freedom is in the order, not in skipping the material. You still learn episode two, just when it becomes relevant rather than when the schedule says.',
      },
      {
        question: 'How does the lesson reframe failing at something you tried on your own?',
        options: {
          A: 'As a reason to seek formal instruction instead',
          B: 'As a sign the method was wrong for you',
          C: 'As unavoidable but not worth dwelling on',
          D: 'As Edison’s position: you have not failed, you have found one more thing that does not work',
        },
        answer: 'D',
        correctExplanation: 'Correct. Fail a test at school and there is a mark and a record. Experiment on your own and fail, and nothing happens except that you learned something.',
        incorrectExplanation: 'The point is that failure on your own carries almost no cost. Nobody is watching, nobody is scoring it, and it counts as information.',
      },
    ],
  },
}

export default lesson
