import type { Lesson } from '~/types/course'

const lesson: Lesson = {
  id: 'lesson-git-14',
  slug: 'the-forge-environment-setup',
  title: 'The Forge (Environment Setup)',
  type: 'lesson',
  status: 'published',
  durationMinutes: 16,
  order: 2,
  hideCompletion: false,
  createdAt: '2026-06-15',
  updatedAt: '2026-06-15',
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
  <iframe title="The Forge (Environment Setup) lesson video" src="https://www.youtube-nocookie.com/embed/dcErE0qNZSU" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
</div>
</div>

<div class="format-content" data-content="audio" style="display:none;">
<h2>🎧 Audio Version</h2>
<div class="audio-embed">
  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/3cEGbJjTfrTt11hamzNGrS?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>
<p><em>Prefer the Spotify app? <a href="https://open.spotify.com/episode/3cEGbJjTfrTt11hamzNGrS?si=jUvrC3oNTjWotkRLy3voVw" target="_blank" rel="noopener noreferrer">Open this episode on Spotify</a>.</em></p>
</div>

<div class="format-content" data-content="reading" style="display:block;">

<div style="text-align:center;margin-bottom:1.5rem;">
  <img src="https://cdn.jsdelivr.net/gh/skill-wanderer/git-version-control-material-learning@main/module-1/the-forge/The_Forge.png" alt="The Forge Slide Preview" style="max-width:100%;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.15);" loading="lazy" />
  <p style="margin-top:0.5rem;font-size:0.8rem;color:#6b7280;">📊 Prefer slides? Switch to the <strong>Slides</strong> tab above.</p>
</div>

<p><strong>Preparing your local laboratory for professional development.</strong></p>

<h2>1. The Mission</h2>
<p>Before we can write code or manage "Parallel Universes," your computer needs to speak the language of Git. In this lesson, you will install the core engine and the professional interface that power the rest of the course.</p>

<h2>2. Installing Git (The Core Engine)</h2>
<p>Git is the version control system that runs locally on your machine.</p>

<h3>Windows</h3>
<ol>
<li><strong>Download:</strong> Go to <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">git-scm.com</a>.</li>
<li><strong>Install:</strong> Run the <code>.exe</code> file.</li>
<li><strong>The "Next" Rule:</strong> Keep clicking <strong>Next</strong> for all default options. They are perfectly optimized for beginners.</li>
<li><strong>Tool:</strong> This installs Git Bash, the terminal you will use for all future lessons.</li>
</ol>

<h3>macOS</h3>
<ol>
<li><strong>The Easy Way:</strong> Open your Terminal.</li>
<li><strong>Command:</strong> Type <code>git --version</code> and press Enter.</li>
<li><strong>Prompt:</strong> If Git is not installed, a popup will ask whether you want to install command line developer tools. Click <strong>Install</strong>.</li>
</ol>

<h3>Linux (Ubuntu/Debian)</h3>
<p>Open your terminal and run:</p>
<pre><code>sudo apt update
sudo apt install git-all</code></pre>

<h2>3. Installing GitHub CLI (The Pro Interface)</h2>
<p>The GitHub CLI (<code>gh</code>) allows you to manage online repositories without leaving your terminal.</p>

<table>
<thead><tr><th>Platform</th><th>Command / Action</th></tr></thead>
<tbody>
<tr><td>Windows</td><td>Open CMD or PowerShell and run <code>winget install --id GitHub.cli</code></td></tr>
<tr><td>macOS</td><td>Use Homebrew: <code>brew install gh</code></td></tr>
<tr><td>Linux</td><td>Follow the official Linux install guide for your specific distro.</td></tr>
</tbody>
</table>

<h2>4. The Moment of Truth (Verification)</h2>
<p>Close your current terminal and open a new one. On Windows, use Git Bash. Then run:</p>
<pre><code>git --version
gh --version</code></pre>
<p><strong>Success looks like this:</strong> You should see version numbers such as <code>git version 2.x.x</code> and <code>gh version 2.x.x</code>. If you see <code>command not found</code>, go back to the installation steps.</p>

<h2>5. Connecting to the Mothership (Authentication)</h2>
<p>Now link your computer to your GitHub account by running:</p>
<pre><code>gh auth login</code></pre>
<ul>
<li><strong>What account?</strong> <code>GitHub.com</code></li>
<li><strong>Protocol?</strong> <code>HTTPS</code></li>
<li><strong>Authenticate?</strong> <code>Login with your browser</code></li>
<li><strong>Action:</strong> A browser window will open. Click <strong>Authorize</strong> and enter your GitHub password if asked.</li>
</ul>

<h2>6. Final Configuration</h2>
<p>Tell Git who you are so your commits have your name on them:</p>
<pre><code>git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"</code></pre>

<h2>7. The Final Test Flight (Verification Drill)</h2>
<p>Do not stop at version numbers. Perform a small Hello World drill to confirm your machine can talk to GitHub end to end.</p>

<h3>A. Create a Test Folder</h3>
<pre><code>mkdir skill-wanderer-test
cd skill-wanderer-test</code></pre>

<h3>B. Initialize and Create a File</h3>
<pre><code>git init
echo "Hello Skill-Wanderer" &gt; test.txt</code></pre>

<h3>C. The First Snapshot (The Git Test)</h3>
<pre><code>git add .
git commit -m "Testing my setup"</code></pre>

<h3>D. Push to the Cloud (The GitHub CLI Test)</h3>
<p>This is where we confirm <code>gh auth login</code> actually worked:</p>
<pre><code>gh repo create skill-wanderer-test --public --source=. --remote=origin --push</code></pre>

<h3>E. The Result</h3>
<p>If everything is successful, you will see a link like <code>https://github.com/your-username/skill-wanderer-test</code>.</p>
<p>Open that link in your browser. If you see your <code>test.txt</code> file there, your laboratory is fully operational.</p>
<ul>
<li>If you get an <strong>authentication error</strong>, re-run <code>gh auth login</code>.</li>
<li>If the repo appears successfully, you are ready for the rest of the Git course.</li>
</ul>

<h2>8. Troubleshooting Blank-Slate Issues</h2>
<table>
<thead><tr><th>Error Message</th><th>Meaning</th><th>Fix</th></tr></thead>
<tbody>
<tr><td><code>'git' is not recognized...</code></td><td>Git is not in your computer's PATH.</td><td>Restart your terminal or Git Bash. If that fails, re-install Git and ensure PATH integration is enabled.</td></tr>
<tr><td><code>Permission denied (publickey)</code></td><td>SSH or authentication issue.</td><td>Use HTTPS during <code>gh auth login</code> for the easiest beginner setup.</td></tr>
<tr><td><code>Author identity unknown</code></td><td>Git does not know who is saving the code.</td><td>Go back to Step 6 and run the two <code>git config --global</code> commands.</td></tr>
</tbody>
</table>

<h2>Key Takeaways</h2>
<ul>
<li>Git is the local engine; GitHub CLI is the professional bridge to GitHub.</li>
<li>Installation is not complete until both <code>git --version</code> and <code>gh --version</code> work.</li>
<li><code>gh auth login</code> is the critical step that connects your machine to GitHub.</li>
<li>The final repo-creation drill proves your environment works in a real workflow, not just in theory.</li>
</ul>
</div>

<div class="format-content" data-content="slides" style="display:none;">
<h2>📊 Slides Version</h2>
<div class="slides-embed" style="width:100%;border-radius:8px;overflow:hidden;">
  <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/git-version-control-material-learning@main/module-1/the-forge/The_Forge.pdf" width="100%" height="600" style="border:none;" title="The Forge Slide"></iframe>
</div>
<p style="margin-top:0.75rem;font-size:0.875rem;color:#6b7280;">Can't see the slides? <a href="https://cdn.jsdelivr.net/gh/skill-wanderer/git-version-control-material-learning@main/module-1/the-forge/The_Forge.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a></p>
</div>`,
}

export default lesson
