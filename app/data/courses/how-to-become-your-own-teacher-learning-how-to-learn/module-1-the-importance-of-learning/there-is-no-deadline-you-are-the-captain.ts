import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-own-teacher-5',
  slug: 'there-is-no-deadline-you-are-the-captain',
  title: 'There Is No Deadline: You Are the Captain',
  type: 'lesson',
  status: 'published',
  durationMinutes: 18,
  order: 6,
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
<!-- SCENE: A vast ocean liner sits on a ruled horizontal line with a clock mounted above it, surrounded by tiny identical passengers. A small single-masted ship flying its own plain flag is cutting away from that line on its own diagonal heading toward open water. The contrast in scale and direction is the subject. -->
<!-- When generated: save as public/images/lessons/own-teacher/captain-hero.png and change the src below to /images/lessons/own-teacher/captain-hero.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/captain-hero.png" alt="A small ship under its own flag sailing away from a large scheduled liner" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">The liner sails to a timetable. Your ship sails when you are ready.</figcaption>
</figure>
<p><strong>Learning has no exam date unless you set one.</strong></p>
<p>That is a hard sentence to believe if you spent years inside a school, because in school there was always a date. Learn this by Tuesday. Master that by June. Be finished with this subject by the time you are nineteen, because after that the door closes and a different set of doors opens instead.</p>
<p>It helps to picture the difference as two ways of crossing an ocean.</p>
<p><strong>School is a scheduled liner.</strong> It sails on a fixed date, follows a route somebody else charted, calls at its ports in a set order, and arrives when the timetable says it arrives. Thousands of passengers, one schedule, and nothing about it bends for any single person aboard.</p>
<p><strong>Teaching yourself is a small ship with you at the wheel.</strong> It sails when you are ready. It goes where you point it. And here is the part that takes some getting used to: nobody has told you when you are supposed to arrive, because nobody is standing at the other end with a stopwatch.</p>
<p>You are also not sailing for the sake of sailing. There is treasure out there, and it is worth naming: the thing you actually want to be able to do, the work you want to be good enough for, the understanding that nobody can take back off you once you have it.</p>
<p>And notice what your ship does not carry. <strong>A commission.</strong> No authority chartered this voyage, no institution approved your route, and nobody signed a paper granting you the right to go after what you are going after. You sail under your own flag. That is the pirate's bargain, and it cuts both ways, which is most of what this lesson is about.</p>

<h2>1. Where the Timetable Came From</h2>
<p>A liner runs to a clock for a reason. A system teaching thousands of people at once needs everybody in roughly the same place at roughly the same time. Otherwise a teacher cannot teach, an exam cannot be set, and a certificate cannot mean anything. Deadlines are the coordination mechanism that makes mass education possible at all.</p>
<p>As in the lesson on formal education, the alternative, letting every learner move at their own pace through their own material, would cost far more than any system could deliver to the mass. The deadlines were never about you. They were about scale.</p>
<p>So this is not a story about a cruel captain or a badly run ship. A vessel carrying thousands of people has to sail to a schedule. It is the same constraint again, surfacing in a different place.</p>

<h2>2. What the Timetable Cost</h2>
<p>Understanding why something happened does not make its effects disappear, and the effects here were significant.</p>
<p>When learning is permanently attached to a date, several things follow. You learn to optimise for the test rather than for understanding, because the test is what is measured. You learn that not knowing something is dangerous rather than normal, because not knowing something on Tuesday has consequences. And you learn to associate the whole voyage with a low background hum of anxiety.</p>
<p>Plenty of people came out of formal education having learned one thing very thoroughly: that learning is stressful, and they would rather not do it again. You can see it in adults who describe themselves as "done with studying", or who flinch slightly at the idea of taking a course.</p>
<p>If that describes you, be precise about what actually happened. <strong>The stress belonged to the timetable, not to the sea.</strong> It came from coordination, measurement, and consequence, none of which are intrinsic to finding something out. You are allowed to put it down.</p>

<h2>3. The Waypoints You Set Yourself Are a Different Thing</h2>
<p>An important distinction, because the point of this lesson is easy to misread.</p>
<p>"There is no deadline" does not mean "sail with no heading". A captain still picks the next port and an estimate of when to reach it. Self-set deadlines are genuinely useful: they force a decision about what matters, they stop a voyage drifting in circles, and arriving somewhere is itself a skill worth practising. A learner with no commitments at all tends to accumulate half-started crossings and complete none of them.</p>
<p>The difference is who owns the chart:</p>
<ul>
<li><strong>An inherited deadline</strong> is set by someone else, applies to every passenger identically, and carries a penalty. Missing it means failure, and you have no standing to change it.</li>
<li><strong>A chosen waypoint</strong> is a tool you picked up because it helps you navigate. When the weather turns, you move it, and moving it is a decision rather than a defeat.</li>
</ul>
<p>Set deadlines if they help you. Just remember who is holding the wheel.</p>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: A compass rose at the centre with four curved arrows chasing each other in a closed loop around its rim, each arrow accompanied by a tiny simple glyph: a book, a hand, a sextant, a turning wheel. Suggests a cycle rather than a straight line. -->
<!-- When generated: save as public/images/lessons/own-teacher/captain-navigation-loop.png and change the src below to /images/lessons/own-teacher/captain-navigation-loop.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/captain-navigation-loop.png" alt="A compass rose with four arrows forming a continuous loop around it" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">Learn, use, take a bearing, adjust. Then again.</figcaption>
</figure>
<h2>4. What Replaces the Timetable Is Navigation</h2>
<p>If the calendar is not driving your learning, something has to. That something is navigation, and navigation is not a single decision made in port. It is a loop you run continuously:</p>
<ol>
<li><strong>You learn something.</strong></li>
<li><strong>You use it</strong> on something real.</li>
<li><strong>You take a bearing</strong> and find out what it was actually worth, which is often not what you expected.</li>
<li><strong>You keep what is useful and discard the rest,</strong> then choose the next heading based on where you now know you are.</li>
</ol>
<p>This loop has a property no syllabus has: it is informed by evidence from your actual position. A timetable has to guess the weather months in advance. A navigator can look out of the window.</p>

<h2>5. Throwing Things Overboard Is the Hard Part</h2>
<p>Step four sounds easy written down. It is not.</p>
<p>Every ship carries cargo that was worth loading at the time and is now simply weight. Discarding something you spent real time and real effort on stings, and your instinct will be to keep hauling it precisely because it cost you something. That is sunk cost, and for once the name is unusually apt. It is the single most common reason people stay on a heading long after it stopped leading anywhere.</p>
<p>The question that helps is not "how much did this cost me?" It is: <strong>"if I were loading the ship today, knowing what I know now, would I take this aboard?"</strong> If the answer is no, the time already spent is gone whatever you decide. The only live question is whether you spend more.</p>

<h2>6. Changing Course Is Seamanship, Not Shipwreck</h2>
<p>Sometimes you discover the destination itself was wrong. The field is not what you thought. The skill you were sailing toward matters less than you believed. Something more interesting appeared over the horizon.</p>
<p>Aboard the liner that is called failing a year, or wasting your degree, and it carries real cost and real stigma. On your own ship it is called steering, and it is one of the main advantages you have. A captain who changes heading because the wind changed is not lost. That is simply what sailing is.</p>
<p>It also helps to know the effort is rarely wasted as completely as it feels. What you learned about handling a hard subject, where you tend to get stuck, and which methods work for you comes with you to any destination. The cargo may go over the side. <strong>The seamanship does not.</strong></p>

<!-- AI IMAGE PLACEHOLDER -->
<!-- STYLE: flat vector editorial illustration, 16:9. Palette: deep navy #1a1a2e background, warm orange #ff6b35 accent, off-white linework. Clean geometric shapes, generous negative space, NO text or lettering anywhere in the image. -->
<!-- SCENE: A small ship holding a steady heading through rough swell and drifting fog banks, sails full. Far away on a thin strip of shore, several small figures stand watching with their arms raised. The ship is clearly unbothered and moving away from them. -->
<!-- When generated: save as public/images/lessons/own-teacher/captain-storms.png and change the src below to /images/lessons/own-teacher/captain-storms.png -->
<figure style="margin:0 0 2rem;text-align:center;">
  <img src="/images/lessons/own-teacher/captain-storms.png" alt="A small ship holding its heading through heavy weather while figures watch from a distant shore" style="max-width:100%;height:auto;border-radius:8px;" loading="lazy" />
  <figcaption style="margin-top:0.5rem;font-size:0.85rem;color:#6b7280;">Storms, fog, and opinions from the shore. None of it means the voyage has gone wrong.</figcaption>
</figure>
<h2>7. Storms, Setbacks, and Voices from the Shore</h2>
<p>An honest chart marks the hazards, so here they are. Every one of these will happen to you, and not one of them means the voyage has gone wrong.</p>
<p><strong>Storms.</strong> There will be weeks where nothing works. Life gets in the way, the thing you were building collapses, you lose a month and have nothing to show for it. You do not get through a storm by being clever. You get through it by still being afloat afterwards.</p>
<p><strong>Setbacks.</strong> You will learn something thoroughly and then discover it was wrong, or outdated, or built on a misunderstanding you picked up six months earlier. So you go back and do it again. Nobody gets a clean run, and anybody who tells you they did has edited the story.</p>
<p><strong>Fog.</strong> This is the worst of the three, because there is nothing to fight. Long stretches where you genuinely cannot tell whether you are making progress or going in circles, and no grade arrives to settle it for you. You hold the heading, you keep taking bearings, and one day the fog lifts and you find you moved a long way.</p>
<p><strong>Voices from the shore.</strong> Some people will question why you are doing this at all. Why not take a proper course. Why not get the qualification first. What makes you think you can learn that on your own. Some of it is genuine concern and some of it is just discomfort at watching somebody leave the harbour without permission. Either way, notice where they are standing. They are on the shore. You are not.</p>
<p>Here is the part worth holding on to. Those hazards are not the price you pay for the adventure. <strong>They are the adventure.</strong> A crossing with no storm, no wrong turn, and no doubt in it is not a voyage, it is a ferry ride, and nobody has ever told a story about a ferry ride.</p>
<p>And the day-to-day of it is genuinely enjoyable, which is the part people do not expect. Not every day is a discovery. But most days you know a little more than you did yesterday, and you can feel the ship moving under you. Keep sailing every day and the treasure stops being the only good part of the trip.</p>

<h2>8. On Pace and Weather</h2>
<p>One more thing, because it is the most common worry among people starting late or starting slowly.</p>
<p>Your pace is not evidence of your ability. It is evidence of your conditions. Some people are sailing with a following wind. Some are rowing. Some are carrying passengers, working a job, raising a family, and getting an hour on a good evening. Someone learning in those gaps is not worse at this than someone with free afternoons and a fair breeze. They are differently situated, and the sea does not grade on effort.</p>
<p>A ship making two knots in the right direction will arrive. A fast ship at anchor will not. Slow and continuous beats quick and abandoned over any horizon that matters.</p>
<p>The only real failure available to you here is stopping entirely, and even that one is reversible. You can always weigh anchor again, which is more than can be said for missing an exam.</p>

<blockquote>
<p><strong>Takeaway:</strong> You are the captain of your own journey. You chose the ship, you set the heading, and you decide which ports are worth the stop. There will be storms, wrong turns, fog, and people on the shore with opinions about your route. Sail anyway, sail daily, and the treasure is yours to keep.</p>
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
    title: 'Lesson Check: Deadlines, Navigation, and the Voyage',
    passPercentage: 70,
    questions: [
      {
        question: 'Why did formal education need deadlines in the first place?',
        options: {
          A: 'Because teaching thousands of people at once requires everybody in roughly the same place at the same time',
          B: 'Because exams are the only fair way to measure learning',
          C: 'Because employers demanded fixed graduation dates',
          D: 'Because learners will not work without pressure',
        },
        answer: 'A',
        correctExplanation: 'Correct. Deadlines are the coordination mechanism that makes mass education possible. They were never about you, they were about scale.',
        incorrectExplanation: 'The lesson is careful not to blame motivation or bad intent. A vessel carrying thousands of passengers has to sail to a schedule.',
      },
      {
        question: 'Does "there is no deadline" mean you should never commit to anything?',
        options: {
          A: 'Yes, any deadline recreates the stress of school',
          B: 'No. A captain still picks the next port. Self-set waypoints stop a voyage drifting in circles',
          C: 'Yes, unless someone else is depending on you',
          D: 'No, but only professionals should set their own deadlines',
        },
        answer: 'B',
        correctExplanation: 'Correct. A learner with no commitments at all tends to accumulate half-started crossings and complete none of them.',
        incorrectExplanation: 'The lesson explicitly guards against this misreading. Set deadlines if they help you, and remember who is holding the wheel.',
      },
      {
        question: 'What is the real difference between an inherited deadline and a chosen waypoint?',
        options: {
          A: 'How far away the date is',
          B: 'Whether the subject is difficult',
          C: 'Who owns the chart: a chosen waypoint can be moved when the weather turns, and moving it is a decision rather than a defeat',
          D: 'Whether anyone else knows about it',
        },
        answer: 'C',
        correctExplanation: 'Correct. An inherited deadline applies to every passenger identically, carries a penalty, and you have no standing to change it.',
        incorrectExplanation: 'The distinction is ownership and revisability, not timing, difficulty, or visibility.',
      },
      {
        question: 'What replaces the timetable once you are steering your own ship?',
        options: {
          A: 'A longer but still fixed schedule you write at the start',
          B: 'Regular examinations you set for yourself',
          C: 'Nothing, you simply learn whatever appeals on the day',
          D: 'Navigation: learn, use, take a bearing, then adjust the heading based on where you now know you are',
        },
        answer: 'D',
        correctExplanation: 'Correct. A timetable has to guess the weather months in advance. A navigator can look out of the window.',
        incorrectExplanation: 'Removing the calendar does not mean removing direction. It means replacing a fixed plan with a loop informed by your actual position.',
      },
      {
        question: 'Which question does the lesson recommend when deciding whether to abandon something you have invested in?',
        options: {
          A: 'If I were loading the ship today, knowing what I know now, would I take this aboard?',
          B: 'Is there anything else I would rather be doing?',
          C: 'How much time and effort have I already put into this?',
          D: 'Would anyone judge me for stopping now?',
        },
        answer: 'A',
        correctExplanation: 'Correct. The time already spent is gone whatever you decide. The only live question is whether you spend more.',
        incorrectExplanation: 'Asking what it already cost you is the sunk cost trap itself, and the lesson notes the name is unusually apt for a ship.',
      },
      {
        question: 'What does the lesson say survives when you change course entirely?',
        options: {
          A: 'Nothing, which is why changing course is expensive',
          B: 'The cargo may go over the side, but the seamanship does not',
          C: 'Only the credentials you already earned',
          D: 'Only the time, if you change course quickly enough',
        },
        answer: 'B',
        correctExplanation: 'Correct. What you learned about handling a hard subject, where you get stuck, and which methods work for you comes with you to any destination.',
        incorrectExplanation: 'The specific content may be discarded. The capability you built while learning it transfers completely.',
      },
      {
        question: 'How does the lesson frame storms, setbacks, fog, and criticism from other people?',
        options: {
          A: 'As signs that the voyage has gone wrong and needs rethinking',
          B: 'As problems to be eliminated through better planning',
          C: 'As the adventure itself, not the price paid for it',
          D: 'As reasons to consider returning to formal education',
        },
        answer: 'C',
        correctExplanation: 'Correct. A crossing with no storm, no wrong turn, and no doubt in it is not a voyage, it is a ferry ride, and nobody tells stories about a ferry ride.',
        incorrectExplanation: 'Every one of those hazards will happen, and the lesson says not one of them means the voyage has gone wrong.',
      },
      {
        question: 'What does the lesson say your pace is evidence of?',
        options: {
          A: 'How well you chose your learning method',
          B: 'How committed you really are',
          C: 'Your natural ability at the subject',
          D: 'Your conditions: time available, what else you are carrying, how far you are from familiar ground',
        },
        answer: 'D',
        correctExplanation: 'Correct. A ship making two knots in the right direction will arrive. A fast ship at anchor will not.',
        incorrectExplanation: 'Someone learning in the gaps around a job and a family is not worse at this than someone with free afternoons. They are differently situated.',
      },
    ],
  },
}

export default lesson
