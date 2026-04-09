import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-git-0',
  slug: 'the-repository-the-repo',
  title: 'The Repository (The Repo)',
  type: 'lesson',
  status: 'published',
  durationMinutes: 18,
  order: 1,
  hideCompletion: false,
  createdAt: '2026-04-07',
  updatedAt: '2026-04-07',
  content: `<div class="format-selector">
<div class="format-notice">
  <span class="format-notice-icon">💡</span>
  <div>
    <strong>Choose Your Learning Material</strong>
    <p>This lesson is available in <strong>multiple formats</strong>. The core lesson is the same, so choose the format that fits your context right now.</p>
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
  <iframe src="https://www.youtube-nocookie.com/embed/FNZIT8EYVAc" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
<p><em>Note: You can replace this video with your final lesson recording later.</em></p>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/2NywhDrlYpSrgG8OC8Bgu3?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
<p><em>Note: Replace Spotify episode link when your audio cut is ready.</em></p>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<div style="text-align:center;margin-bottom:1.5rem;">
  <img src="https://cdn.jsdelivr.net/gh/Thanh-Nguyen-Valerie/git-version-control-material-learning@main/module-1/the-repo/The_Repository.png" alt="The Repository Slide Preview" style="max-width:100%;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.15);" loading="lazy" />
  <p style="margin-top:0.5rem;font-size:0.8rem;color:#6b7280;">📊 Prefer slides? Switch to the <strong>Slides</strong> tab above.</p>
</div>

<p><strong>Your Project's Smart Vault and Time Machine</strong></p>
<p><strong>Prerequisites:</strong> A GitHub.com account. If you do not have one yet, click Sign up. It is free and takes only a few minutes.</p>
<p><strong>Why does a beginner need Git?</strong> Without Git, you are only writing code. With Git, you are managing a professional project.</p>

<h2>1. What Is a Repository (Repo)?</h2>
<p>Imagine a normal folder on your computer. If you delete a file and save, it is gone. If you overwrite good code with bad code, you can lose the good version forever.</p>
<p>A Repository (Repo) is a smart folder with memory:</p>
<ul>
<li><strong>Records Everything:</strong> It is like having a CCTV camera inside your folder. It remembers every version of every file.</li>
<li><strong>The Undo Power:</strong> Because it remembers everything, you can rewind your project back to any point in time when it was working.</li>
<li><strong>Safety Net:</strong> You can work with confidence because you can recover from mistakes instead of panicking.</li>
</ul>

<h2>2. Why Should You Use Git?</h2>
<p>If you are still wondering if Git is worth the effort, this is why it is non-negotiable:</p>
<ul>
<li><strong>Professional Standard:</strong> In the industry, Git is core infrastructure for teams.</li>
<li><strong>Zero Fear of Experimenting:</strong> Try risky ideas, then roll back cleanly if they fail.</li>
<li><strong>The Ultimate Portfolio:</strong> Your GitHub profile shows growth, consistency, and problem-solving over time.</li>
<li><strong>Teamwork Ready:</strong> Git prevents people from overwriting each other's work and enables real collaboration.</li>
</ul>

<h2>3. How to Create Your First Repo (The Easiest Way)</h2>
<p>There are many ways to start, but cloud-first on GitHub is visual and beginner-friendly.</p>

<h3>Create Your Cloud Home</h3>
<ol>
<li>Go to GitHub.com and sign in (or create an account first).</li>
<li>Click the <strong>New</strong> button.</li>
<li><strong>Repository Name:</strong> choose a clear name, for example <code>my-first-app</code>.</li>
<li><strong>Public or Private:</strong> choose Public to showcase, or Private for personal practice.</li>
<li><strong>Initialize:</strong> check <strong>Add a README file</strong>.</li>
<li>Click <strong>Create repository</strong>.</li>
</ol>

<h3>Bring It to Your Computer</h3>
<ol>
<li>On your new repo page, click the green <strong>&lt;&gt; Code</strong> button.</li>
<li>Copy the URL.</li>
<li>Open GitHub Desktop or VS Code and choose <strong>Clone Repository</strong>, then paste the URL.</li>
<li>Result: you now have a smart folder on your laptop synced with the cloud.</li>
</ol>

<h2>4. Local vs. Remote</h2>
<p>To work like a pro, always think in two locations:</p>
<ul>
<li><strong>Local Repo:</strong> lives on your laptop. Fast, offline-friendly, and where daily coding happens.</li>
<li><strong>Remote Repo:</strong> lives on GitHub. It is your backup and the source of truth for sharing and collaboration.</li>
</ul>

<h2>5. The 3 Steps of Professional Saving</h2>
<p>Saving in Git is not just Ctrl + S. It is a three-step workflow:</p>
<ol>
<li><strong>Working Directory (The Scene):</strong> You are editing files.</li>
<li><strong>Staging Area (The Line-up):</strong> You choose exactly which changes are ready to save.</li>
<li><strong>The Commit (The Snapshot):</strong> Git captures that version forever with a message such as <code>Fix login button alignment</code>.</li>
</ol>

<h2>6. Conclusion: Your Source of Truth</h2>
<p>A repository is more than storage. It is your source of truth, and it records every meaningful change in your project journey.</p>
<ul>
<li><strong>Traceability:</strong> Understand why a change was made, even months later.</li>
<li><strong>Stability:</strong> Your live code stays safer because rollback is always possible.</li>
<li><strong>Scalability:</strong> This is the foundation for branching, collaboration, reviews, and automation.</li>
</ul>

<blockquote>
<p><strong>Mindset Shift:</strong> The moment you start treating your project as a repository, you move from hobby coding into professional software practice.</p>
</blockquote>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slides Version</h2>
<div class="slides-embed" style="width:100%;border-radius:8px;overflow:hidden;">
  <iframe src="https://cdn.jsdelivr.net/gh/Thanh-Nguyen-Valerie/git-version-control-material-learning@main/module-1/the-repo/The_Repository_Slide.pdf" width="100%" height="600" style="border:none;" title="The Repository Slide"></iframe>
</div>
<p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Can't see the slides? <a href="https://cdn.jsdelivr.net/gh/Thanh-Nguyen-Valerie/git-version-control-material-learning@main/module-1/the-repo/The_Repository_Slide.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a></p>
</div>`,
}

export default lesson
