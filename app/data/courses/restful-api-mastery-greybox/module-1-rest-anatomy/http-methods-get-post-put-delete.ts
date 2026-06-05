// app/data/courses/restful-api-mastery-greybox/module-1-rest-anatomy/http-methods-get-post-put-delete.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-1-2',
  slug: 'http-methods-get-post-put-delete',
  title: 'HTTP Methods (GET, POST, PUT, DELETE)',
  type: 'lesson',
  status: 'published',
  order: 2,
  durationMinutes: 12,
  content: `<div class="lesson-formats">

  <div class="format-notice">
    <span class="format-notice-icon">💡</span>
    <div>
      <strong>Choose Your Learning Material</strong>
      <p>
        This lesson is available in <strong>multiple formats</strong>. The content is the same - 
        choose the one that fits your learning style and current environment. 
        You do not need to complete all formats.
      </p>
    </div>
  </div>

  <div class="format-tabs">
    <button class="format-tab active" data-format="reading" onclick="document.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=>c.style.display='none');document.querySelector('[data-content=reading]').style.display='block';">Reading</button>
    <button class="format-tab" data-format="video" onclick="document.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=>c.style.display='none');document.querySelector('[data-content=video]').style.display='block';">Video</button>
    <button class="format-tab" data-format="audio" onclick="document.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=>c.style.display='none');document.querySelector('[data-content=audio]').style.display='block';">Audio</button>
    <button class="format-tab" data-format="slides" onclick="document.querySelectorAll('.format-tab').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.querySelectorAll('.format-content').forEach(c=>c.style.display='none');document.querySelector('[data-content=slides]').style.display='block';">Slides</button>
  </div>

  <div class="format-content active" data-format="reading" data-content="reading" style="display:block;">
<h3>📖 Reading Version</h3>
<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/restfulapi-resources@main/http-methods.png" alt="HTTP Methods (GET, POST, PUT, DELETE)" />

<h2>HTTP Methods</h2>
<p>HTTP methods are like <strong>actions</strong> you ask a server to do.<br />
Every time you visit a website, submit a form, or use an app, your browser or app sends a request to a server using one of these methods.<br />
They tell the server: &ldquo;Give me this page,&rdquo; &ldquo;Save this data,&rdquo; &ldquo;Update that,&rdquo; or &ldquo;Delete that.&rdquo;</p>

<hr />

<h3>Why Do We Need HTTP Methods?</h3>
<p>Without clear actions, communication between your browser/app and a server would be confusing and unpredictable.<br />
HTTP methods give <strong>a shared set of rules</strong> so everyone knows what&rsquo;s going on.</p>
<p>They handle four main data operations:</p>
<ul>
<li><strong>Getting</strong> information (reading)</li>
<li><strong>Creating</strong> new things</li>
<li><strong>Updating</strong> existing things</li>
<li><strong>Deleting</strong> things</li>
</ul>

<hr />

<h3>The Main Idea: Each Method Has a Meaning</h3>
<p>Every method says <strong>what you want to happen</strong>.</p>
<table>
<thead>
<tr><th>Method</th><th>Simple meaning</th></tr>
</thead>
<tbody>
<tr><td>GET</td><td>&ldquo;Show me this information&rdquo;</td></tr>
<tr><td>POST</td><td>&ldquo;Create something new with this data&rdquo;</td></tr>
<tr><td>PUT</td><td>&ldquo;Replace the whole thing with my new data&rdquo;</td></tr>
<tr><td>PATCH</td><td>&ldquo;Only update the parts I&rsquo;m sending&rdquo;</td></tr>
<tr><td>DELETE</td><td>&ldquo;Remove this&rdquo;</td></tr>
</tbody>
</table>
<p>Using the right method makes your APIs and websites easier to understand and work with.</p>

<hr />

<h3>Safe vs. Unsafe Methods</h3>

<h4>Safe Methods</h4>
<p>Safe methods <strong>don&rsquo;t change anything</strong> on the server. They&rsquo;re like reading a book &ndash; you only look at the information.</p>
<p>Examples: <code>GET</code>, <code>HEAD</code>, <code>OPTIONS</code></p>

<h4>Unsafe Methods</h4>
<p>Unsafe methods <strong>may change data</strong> on the server. They&rsquo;re like writing in a notebook.</p>
<p>Examples: <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code></p>

<hr />

<h3>Quick Overview of All Common Methods</h3>
<table>
<thead>
<tr><th>Method</th><th>Purpose</th><th>Safe?</th></tr>
</thead>
<tbody>
<tr><td>GET</td><td>Retrieve data</td><td>Yes</td></tr>
<tr><td>POST</td><td>Create new resources</td><td>No</td></tr>
<tr><td>PUT</td><td>Replace whole resource</td><td>No</td></tr>
<tr><td>PATCH</td><td>Update parts of a resource</td><td>No</td></tr>
<tr><td>DELETE</td><td>Remove a resource</td><td>No</td></tr>
<tr><td>HEAD</td><td>Get only headers (no body)</td><td>Yes</td></tr>
<tr><td>OPTIONS</td><td>Find out what methods are allowed</td><td>Yes</td></tr>
</tbody>
</table>

<hr />

<h3>Which Method Should I Use?</h3>
<table>
<thead>
<tr><th>What you want to do</th><th>Use this method</th></tr>
</thead>
<tbody>
<tr><td>Fetch data / load a page</td><td>GET</td></tr>
<tr><td>Create a new resource (signup, upload)</td><td>POST</td></tr>
<tr><td>Replace a whole resource</td><td>PUT</td></tr>
<tr><td>Update only some fields</td><td>PATCH</td></tr>
<tr><td>Delete a resource</td><td>DELETE</td></tr>
<tr><td>Check file info without downloading it</td><td>HEAD</td></tr>
<tr><td>Ask what operations a URL supports</td><td>OPTIONS</td></tr>
</tbody>
</table>

<hr />

<h3>GET &ndash; Ask for Information</h3>
<p><code>GET</code> is used whenever you want to <strong>read</strong> data from the server.<br />
It should <strong>never change</strong> anything on the server.</p>
<p>Example:</p>
<pre><code class="language-http">GET /products/10</code></pre>
<p>Response (the product info):</p>
<pre><code class="language-json">{
  "id": 10,
  "name": "Laptop"
}</code></pre>
<p>GET is:</p>
<ul>
<li><strong>Safe</strong> (doesn&rsquo;t change server state)</li>
<li><strong>Cacheable</strong> (browser can save a copy)</li>
<li><strong>Bookmarkable</strong> (you can save the link)</li>
<li><strong>Linkable</strong> (you can share it)</li>
</ul>

<h4>Why GET Is Safe</h4>
<p><code>GET</code> is considered <strong>safe</strong> because it is intended only for retrieving information.<br />
A client can call the same GET request many times without creating, modifying, or deleting data on the server.</p>
<p>Example:</p>
<pre><code class="language-http">GET /users/10</code></pre>
<p>This only reads the user data.<br />
It does not:</p>
<ul>
<li>Create a new user</li>
<li>Update existing data</li>
<li>Remove anything</li>
</ul>
<p>Because of this behavior:</p>
<ul>
<li>Browsers can safely preload GET requests</li>
<li>Search engines can crawl GET URLs</li>
<li>Users can refresh the page without accidental data modification</li>
</ul>

<h4>Common Query Parameters</h4>
<pre><code>GET /products?page=1&amp;limit=20
GET /search?q=laptop</code></pre>
<p>Used for:</p>
<ul>
<li>Pagination</li>
<li>Filtering</li>
<li>Sorting</li>
<li>Searching</li>
</ul>

<hr />

<h3>POST &ndash; Send Data to Create Something</h3>
<p><code>POST</code> is for <strong>submitting data</strong> and usually <strong>creating a new resource</strong>.</p>
<p>Example:</p>
<pre><code class="language-http">POST /users
Content-Type: application/json</code></pre>
<p>Body:</p>
<pre><code class="language-json">{
  "name": "John Doe"
}</code></pre>
<p>POST is typically used for:</p>
<ul>
<li>Form submissions (login, signup)</li>
<li>Creating a new user, order, post</li>
<li>File uploads</li>
<li>Any action where you&rsquo;re adding something new</li>
</ul>

<h4>Why POST Is Not Safe</h4>
<p><code>POST</code> is <strong>not safe</strong> because it changes server data or triggers server-side actions.</p>
<p>Example:</p>
<pre><code class="language-http">POST /orders</code></pre>
<p>This may:</p>
<ul>
<li>Create a new order</li>
<li>Insert data into a database</li>
<li>Trigger payment processing</li>
<li>Send notifications</li>
</ul>
<p>Calling the same POST request repeatedly may create duplicate data or repeated actions.</p>

<hr />

<h3>PUT &ndash; Replace the Whole Thing</h3>
<p><code>PUT</code> <strong>replaces an entire resource</strong> with the data you send.<br />
You must send the <strong>complete</strong> updated version.</p>
<p>Example:</p>
<pre><code class="language-http">PUT /users/10</code></pre>
<p>Body:</p>
<pre><code class="language-json">{
  "name": "John",
  "email": "john@example.com"
}</code></pre>
<p>If you only send the email, the <code>name</code> may be erased because PUT expects the <strong>full resource</strong>.</p>

<h4>Why PUT Is Not Safe</h4>
<p><code>PUT</code> is <strong>not safe</strong> because it modifies existing data on the server.</p>
<p>Example:</p>
<pre><code class="language-http">PUT /users/10</code></pre>
<p>This changes the stored resource by replacing its content with the new version provided by the client.</p>
<p>Even though repeated PUT requests may produce the same final state, the request still performs a modification operation.</p>

<hr />

<h3>PATCH &ndash; Update Only Certain Fields</h3>
<p><code>PATCH</code> makes a <strong>partial update</strong>. You only send the fields you want to change.</p>
<p>Example:</p>
<pre><code class="language-http">PATCH /users/10</code></pre>
<p>Body:</p>
<pre><code class="language-json">{
  "email": "new@example.com"
}</code></pre>
<p>Only the email is changed; the rest of the user data stays as it was.</p>

<h4>Why PATCH Is Not Safe</h4>
<p><code>PATCH</code> is <strong>not safe</strong> because it changes part of an existing resource.</p>
<p>Example:</p>
<pre><code class="language-http">PATCH /users/10</code></pre>
<p>This modifies selected fields in the stored data.</p>
<p>Even small updates still change server state, which makes PATCH unsafe.</p>

<hr />

<h3>DELETE &ndash; Remove Something</h3>
<p><code>DELETE</code> removes a resource permanently.</p>
<p>Example:</p>
<pre><code class="language-http">DELETE /posts/15</code></pre>

<h4>Why DELETE Is Not Safe</h4>
<p><code>DELETE</code> is <strong>not safe</strong> because it removes data from the server.</p>
<p>Example:</p>
<pre><code class="language-http">DELETE /posts/15</code></pre>
<p>This may:</p>
<ul>
<li>Remove database records</li>
<li>Delete files</li>
<li>Remove relationships between resources</li>
</ul>
<p>Because server data changes after the request, DELETE is classified as unsafe.</p>

<hr />

<h3>HEAD &ndash; Get Only the Headers</h3>
<p><code>HEAD</code> works exactly like <code>GET</code> but <strong>does not return the body</strong> (the actual content).<br />
It only sends back the headers (information <em>about</em> the resource).</p>
<p>Useful for:</p>
<ul>
<li>Checking file size before downloading</li>
<li>Verifying if a page has changed (cache validation)</li>
<li>Seeing metadata</li>
</ul>
<p>Example:</p>
<pre><code class="language-http">HEAD /video.mp4</code></pre>

<h4>Why HEAD Is Safe</h4>
<p><code>HEAD</code> is considered <strong>safe</strong> because it only retrieves metadata about a resource and does not modify server data.</p>
<p>Example:</p>
<pre><code class="language-http">HEAD /video.mp4</code></pre>
<p>The server only returns headers such as:</p>
<ul>
<li>Content-Length</li>
<li>Content-Type</li>
<li>Last-Modified</li>
</ul>
<p>No resource is created, updated, or deleted.</p>

<hr />

<h3>OPTIONS &ndash; Ask What&rsquo;s Allowed</h3>
<p><code>OPTIONS</code> asks the server: &ldquo;What methods can I use on this URL?&rdquo;</p>
<p>Example:</p>
<pre><code class="language-http">OPTIONS /users</code></pre>
<p>Response header:</p>
<pre><code class="language-http">Allow: GET, POST, PUT, DELETE</code></pre>
<p>Commonly used for:</p>
<ul>
<li>Discovering what operations an API supports</li>
<li>Browser <strong>preflight</strong> requests (CORS checks)</li>
</ul>

<h4>Why OPTIONS Is Safe</h4>
<p><code>OPTIONS</code> is considered <strong>safe</strong> because it only asks the server about supported communication methods.</p>
<p>Example:</p>
<pre><code class="language-http">OPTIONS /users</code></pre>
<p>The server responds with information such as:</p>
<ul>
<li>Allowed HTTP methods</li>
<li>CORS permissions</li>
<li>Communication capabilities</li>
</ul>
<p>It does not create, update, or remove data on the server.</p>

<hr />

<h3>How Browsers Behave with Each Method</h3>
<table>
<thead>
<tr><th>Method</th><th>Can I bookmark it?</th><th>Does the browser cache it?</th></tr>
</thead>
<tbody>
<tr><td>GET</td><td>✅ Yes</td><td>Usually yes</td></tr>
<tr><td>POST</td><td>❌ No</td><td>Usually no</td></tr>
<tr><td>PUT</td><td>❌ No</td><td>Usually no</td></tr>
<tr><td>PATCH</td><td>❌ No</td><td>Usually no</td></tr>
<tr><td>DELETE</td><td>❌ No</td><td>Usually no</td></tr>
<tr><td>HEAD</td><td>❌ No</td><td>Yes (headers)</td></tr>
<tr><td>OPTIONS</td><td>❌ No</td><td>Usually no</td></tr>
</tbody>
</table>

<hr />

<h3>HTML Forms &ndash; Which Methods Can They Use?</h3>
<p>Standard HTML forms <strong>only support</strong> <code>GET</code> and <code>POST</code>.</p>
<p>Example:</p>
<pre><code class="language-html">&lt;form method="POST" action="/login"&gt;</code></pre>
<p>To use <code>PUT</code>, <code>PATCH</code> or <code>DELETE</code>, you usually need JavaScript or a special API tool.</p>

<hr />

<h3>Do I Need to Send a Request Body?</h3>
<table>
<thead>
<tr><th>Method</th><th>Body included?</th></tr>
</thead>
<tbody>
<tr><td>GET</td><td>Usually no</td></tr>
<tr><td>POST</td><td>Yes</td></tr>
<tr><td>PUT</td><td>Yes</td></tr>
<tr><td>PATCH</td><td>Yes</td></tr>
<tr><td>DELETE</td><td>Sometimes</td></tr>
<tr><td>HEAD</td><td>No</td></tr>
<tr><td>OPTIONS</td><td>Usually no</td></tr>
</tbody>
</table>

<hr />

<h3>Retry Behaviour &ndash; Is It Safe to Try Again?</h3>
<table>
<thead>
<tr><th>Method</th><th>Safe to retry?</th><th>Explanation</th></tr>
</thead>
<tbody>
<tr><td>GET</td><td>Usually safe</td><td>No changes happen</td></tr>
<tr><td>POST</td><td>Risky</td><td>Might create duplicates (e.g., two orders)</td></tr>
<tr><td>PUT</td><td>Usually safe</td><td>Same data &rarr; same final state</td></tr>
<tr><td>PATCH</td><td>Depends</td><td>Some updates are safe, some are not</td></tr>
<tr><td>DELETE</td><td>Usually safe</td><td>Deleting again does nothing extra</td></tr>
<tr><td>HEAD</td><td>Safe</td><td>No body or changes</td></tr>
<tr><td>OPTIONS</td><td>Safe</td><td>Just a question, no changes</td></tr>
</tbody>
</table>

<hr />

<h3>Common Mistakes (and How to Fix Them)</h3>
<p>❌ <strong>Using GET to delete something</strong><br />
<code>GET /delete-user/10</code><br />
<strong>Why it&rsquo;s wrong:</strong> GET should never change server state. A browser might accidentally trigger it again.</p>
<p>✅ <strong>Correct:</strong><br />
<code>DELETE /users/10</code></p>

<p>❌ <strong>Using POST just to fetch data</strong><br />
<code>POST /get-products</code><br />
<strong>Why it&rsquo;s wrong:</strong> POST is for creating/submitting, not for reading. It&rsquo;s not cacheable and breaks expectations.</p>
<p>✅ <strong>Correct:</strong><br />
<code>GET /products</code></p>

<hr />

<h3>Real-Life Browser Examples</h3>
<ul>
<li>Opening a webpage: <code>GET /home</code></li>
<li>Submitting a login form: <code>POST /login</code></li>
<li>Updating your profile (with JavaScript): <code>PATCH /profile</code></li>
<li>Deleting a comment: <code>DELETE /comments/10</code></li>
</ul>

<hr />

<h2>Final Summary</h2>
<p>HTTP methods are the <strong>basic language</strong> that browsers, apps, and servers use to talk to each other.<br />
Each method has a specific job and expected behaviour.</p>
<p>Learning them properly helps you:</p>
<ul>
<li>Build predictable and easy-to-use APIs</li>
<li>Use the right action for the right task</li>
<li>Avoid confusing or broken web applications</li>
</ul>
<p>Think of them as the verbs of the web &ndash; once you know what each one does, writing and understanding web requests becomes much simpler.</p>
  </div>

  <div class="format-content" data-format="video" data-content="video" style="display:none;">
    <h3>🎬 Video Version</h3>
    <div class="video-embed">
      <iframe title="Introduction to REST API lesson video" src="https://www.youtube-nocookie.com/embed/0nhVnFwm-Qk" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  </div>

  <div class="format-content" data-format="audio" data-content="audio" style="display:none;">
    <h3>🎧 Audio Version</h3>
    <div class="audio-embed">
      <iframe title="Introduction to REST API lesson audio" style="border-radius:12px" src="https://open.spotify.com/embed/episode/0TCVno2cIBbbDXC4MtlWiZ?utm_source=generator" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
  </div>

  <div class="format-content" data-format="slides" data-content="slides" style="display:none;">
    <h3>📊 Slide Version</h3>
    <div class="slides-embed">
      <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/restfulapi-resources@main/http-methods.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
    </div>
  </div>

</div>`,
})

export default lesson