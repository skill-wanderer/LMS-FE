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
<img src="https://cdn.jsdelivr.net/gh/reltronersk/media@main/http-methods-get-post-put-delete.png" alt="HTTP Methods (GET, POST, PUT, DELETE)" />

<h2>Why HTTP Methods Matter</h2>
<p>HTTP methods are the action words of the web. They tell the server whether the client wants to read data, create something new, replace an existing resource, update only part of it, delete it, inspect metadata, or ask which operations are allowed.</p>
<p>That shared meaning matters because browsers, caches, gateways, backend services, and engineers all make decisions from the method before they even inspect the body. When the method matches the intent, the API becomes easier to understand, safer to use, and easier to debug.</p>

<h2>Quick Method Map</h2>
<table>
<thead>
<tr><th>Method</th><th>Simple meaning</th><th>Safe?</th><th>Idempotency / retry guidance</th></tr>
</thead>
<tbody>
<tr><td><code>GET</code></td><td>Show me this information</td><td>Yes</td><td>Idempotent; usually safe to retry</td></tr>
<tr><td><code>POST</code></td><td>Create something new with this data</td><td>No</td><td>Not idempotent; retry can create duplicates</td></tr>
<tr><td><code>PUT</code></td><td>Replace the whole thing with my new data</td><td>No</td><td>Idempotent; same full payload should lead to the same final state</td></tr>
<tr><td><code>PATCH</code></td><td>Only update the parts I am sending</td><td>No</td><td>Depends on the patch operation and server implementation</td></tr>
<tr><td><code>DELETE</code></td><td>Remove this resource</td><td>No</td><td>Usually safe to retry because the final state stays deleted</td></tr>
<tr><td><code>HEAD</code></td><td>Give me headers only, not the body</td><td>Yes</td><td>Idempotent; safe to retry</td></tr>
<tr><td><code>OPTIONS</code></td><td>Tell me what this URL supports</td><td>Yes</td><td>Idempotent; safe to retry</td></tr>
</tbody>
</table>

<h2>Which Method Should You Use?</h2>
<table>
<thead>
<tr><th>What you want to do</th><th>Use this method</th></tr>
</thead>
<tbody>
<tr><td>Fetch data or load a page</td><td><code>GET</code></td></tr>
<tr><td>Create a new resource such as a signup, order, or upload</td><td><code>POST</code></td></tr>
<tr><td>Replace an entire existing resource</td><td><code>PUT</code></td></tr>
<tr><td>Update only selected fields</td><td><code>PATCH</code></td></tr>
<tr><td>Delete a resource</td><td><code>DELETE</code></td></tr>
<tr><td>Check metadata without downloading the full body</td><td><code>HEAD</code></td></tr>
<tr><td>Ask what methods and communication options are allowed</td><td><code>OPTIONS</code></td></tr>
</tbody>
</table>

<h2>Safe vs Unsafe Methods</h2>
<p><strong>Safe methods</strong> do not change anything on the server. They are for reading or inspecting information only. The common safe methods are <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>.</p>
<p><strong>Unsafe methods</strong> may change server-side state. That includes <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, and <code>DELETE</code>. Unsafe does not mean wrong. It means the request can create, replace, edit, or remove data.</p>
<p>This distinction matters in real systems. Browsers can preload or refresh safe requests more confidently, while unsafe requests need stronger care because repeating them may create or modify data.</p>

<h2>GET: Ask for Information</h2>
<p><code>GET</code> is used to read data from the server. It should never create, update, or delete anything.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">GET /products/10</pre>
</blockquote>
<p>A typical response body might look like this:</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">{
  "id": 10,
  "name": "Laptop"
}</pre>
</blockquote>
<p><code>GET</code> is <strong>safe</strong>, <strong>cacheable</strong>, <strong>bookmarkable</strong>, and <strong>shareable</strong>. It is also where query parameters are commonly used for filtering, pagination, sorting, and searching.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">GET /products?page=1&amp;limit=20
GET /search?q=laptop</pre>
</blockquote>

<h2>POST: Send Data to Create Something</h2>
<p><code>POST</code> is used to submit data and usually create a new resource. It is common for signups, orders, form submissions, uploads, and other create-like operations.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">POST /users
Content-Type: application/json

{
  "name": "John Doe"
}</pre>
</blockquote>
<p><code>POST</code> is <strong>not safe</strong> and <strong>not idempotent</strong>. Repeating the same request can create duplicate records or trigger the same business action twice, such as placing two orders or sending two notifications.</p>

<h2>PUT: Replace the Whole Resource</h2>
<p><code>PUT</code> replaces an entire resource with the representation you send. The key rule is completeness: the server expects the full updated version, not just one changed field.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">PUT /users/10
Content-Type: application/json

{
  "name": "John",
  "email": "john@example.com"
}</pre>
</blockquote>
<p>If you send only the email field with <code>PUT</code>, the missing name may be erased because the server reads the request as a full replacement, not a partial edit.</p>
<p><code>PUT</code> is <strong>not safe</strong> because it modifies data, but it is usually <strong>idempotent</strong> because sending the same full replacement multiple times should leave the resource in the same final state.</p>

<h2>PATCH: Update Only Certain Fields</h2>
<p><code>PATCH</code> applies a partial update. You send only the fields that should change, and the rest of the resource stays as it already is.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">PATCH /users/10
Content-Type: application/json

{
  "email": "new@example.com"
}</pre>
</blockquote>
<p><code>PATCH</code> is <strong>not safe</strong> because it still changes server data. Its retry behavior <strong>depends</strong>: some patch operations are effectively idempotent, while others may stack changes or trigger repeat effects.</p>

<h2>DELETE: Remove Something</h2>
<p><code>DELETE</code> removes a resource.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">DELETE /posts/15</pre>
</blockquote>
<p><code>DELETE</code> is <strong>not safe</strong> because it changes server state by removing data or relationships. It is usually safe to retry from a final-state perspective because deleting the same resource again should still leave it deleted, even if the second response is <code>404 Not Found</code>.</p>

<h2>HEAD: Get Only the Headers</h2>
<p><code>HEAD</code> works like <code>GET</code> but does not return the response body. It is useful when you need metadata, not the full content.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">HEAD /video.mp4</pre>
</blockquote>
<p>Typical uses include checking <code>Content-Length</code>, verifying a resource exists, or reading <code>Last-Modified</code> before downloading a large file. Because it only inspects metadata, <code>HEAD</code> is safe.</p>

<h2>OPTIONS: Ask What Is Allowed</h2>
<p><code>OPTIONS</code> asks the server which methods or communication rules are available for a resource.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">OPTIONS /users

Allow: GET, POST, PUT, DELETE</pre>
</blockquote>
<p>Browsers commonly use <code>OPTIONS</code> for CORS preflight checks. It is safe because it only asks about capabilities and does not change data.</p>

<h2>PUT vs PATCH</h2>
<table>
<thead>
<tr><th>Question</th><th><code>PUT</code></th><th><code>PATCH</code></th></tr>
</thead>
<tbody>
<tr><td>What changes?</td><td>Replaces the whole resource</td><td>Updates only selected fields</td></tr>
<tr><td>What should the body contain?</td><td>The complete new version</td><td>Only the fields that should change</td></tr>
<tr><td>Main risk</td><td>Missing fields may be treated as removed</td><td>Patch behavior can vary by operation</td></tr>
<tr><td>Best use case</td><td>Full replacement with a complete payload</td><td>Partial edits such as status, email, or display name</td></tr>
</tbody>
</table>
<p>Use <code>PUT</code> when the client is intentionally replacing the full stored representation. Use <code>PATCH</code> when the client wants to update only part of the resource without resending everything.</p>

<h2>Do You Need a Request Body?</h2>
<table>
<thead>
<tr><th>Method</th><th>Body included?</th></tr>
</thead>
<tbody>
<tr><td><code>GET</code></td><td>Usually no</td></tr>
<tr><td><code>POST</code></td><td>Yes</td></tr>
<tr><td><code>PUT</code></td><td>Yes</td></tr>
<tr><td><code>PATCH</code></td><td>Yes</td></tr>
<tr><td><code>DELETE</code></td><td>Sometimes</td></tr>
<tr><td><code>HEAD</code></td><td>No</td></tr>
<tr><td><code>OPTIONS</code></td><td>Usually no</td></tr>
</tbody>
</table>

<h2>Browser Behavior</h2>
<table>
<thead>
<tr><th>Method</th><th>Can I bookmark it?</th><th>Does the browser usually cache it?</th></tr>
</thead>
<tbody>
<tr><td><code>GET</code></td><td>Yes</td><td>Usually yes</td></tr>
<tr><td><code>POST</code></td><td>No</td><td>Usually no</td></tr>
<tr><td><code>PUT</code></td><td>No</td><td>Usually no</td></tr>
<tr><td><code>PATCH</code></td><td>No</td><td>Usually no</td></tr>
<tr><td><code>DELETE</code></td><td>No</td><td>Usually no</td></tr>
<tr><td><code>HEAD</code></td><td>No</td><td>Yes, for headers and metadata</td></tr>
<tr><td><code>OPTIONS</code></td><td>No</td><td>Usually no</td></tr>
</tbody>
</table>

<h2>HTML Forms and Tooling</h2>
<p>Standard HTML forms support only <code>GET</code> and <code>POST</code>.</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">&lt;form method="POST" action="/login"&gt;</pre>
</blockquote>
<p>To use <code>PUT</code>, <code>PATCH</code>, or <code>DELETE</code>, you usually need JavaScript, a fetch client, or framework-level method override support.</p>

<h2>Common Beginner Mistakes</h2>
<table>
<thead>
<tr><th>Mistake</th><th>Why it is wrong</th><th>Better approach</th></tr>
</thead>
<tbody>
<tr>
<td><code>GET /delete-user/10</code></td>
<td><code>GET</code> should never change server state. Browsers, crawlers, or refresh actions may trigger it again.</td>
<td><code>DELETE /users/10</code></td>
</tr>
<tr>
<td><code>POST /get-products</code></td>
<td><code>POST</code> is for creation or submission, not normal reading. It breaks expectations around caching and semantics.</td>
<td><code>GET /products</code></td>
</tr>
<tr>
<td>Using <code>PUT</code> for a one-field update</td>
<td><code>PUT</code> expects a full replacement, so omitted fields may be lost.</td>
<td>Use <code>PATCH</code> when changing only part of a resource.</td>
</tr>
</tbody>
</table>

<h2>Real Browser and App Examples</h2>
<ul>
<li>Opening a webpage: <code>GET /home</code></li>
<li>Submitting a login form: <code>POST /login</code></li>
<li>Updating your profile with JavaScript: <code>PATCH /profile</code></li>
<li>Deleting a comment: <code>DELETE /comments/10</code></li>
</ul>

<h2>Summary</h2>
<ul>
<li>HTTP methods are the basic language clients and servers use to express intent.</li>
<li><code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> are safe because they should not change server state.</li>
<li><code>POST</code>, <code>PUT</code>, <code>PATCH</code>, and <code>DELETE</code> are unsafe because they may modify data.</li>
<li><code>PUT</code> replaces the full resource, while <code>PATCH</code> updates only part of it.</li>
<li>Idempotency matters for retries: <code>POST</code> is risky to repeat, <code>PUT</code> is usually safe to repeat, and <code>PATCH</code> depends on the operation.</li>
<li>Using the right method makes APIs more predictable, easier to debug, and less likely to surprise both humans and systems.</li>
</ul>
  </div>

  <div class="format-content" data-format="video" data-content="video" style="display:none;">
    <h3>🎬 Video Version</h3>
    <div class="video-embed">
      <div style="padding:24px;border:1px solid rgba(255,255,255,0.1);border-radius:12px;background:rgba(255,255,255,0.03);">
        <p><strong>Video outline:</strong> This lesson's technical source of truth is the reading version. The video tab provides a teaching outline for the same concepts until a dedicated media embed is attached.</p>
        <ul>
          <li>Methods are the verbs of HTTP: read, create, replace, partially update, delete, inspect, or ask what is allowed.</li>
          <li>Safe methods do not change state; unsafe methods may change state.</li>
          <li><code>PUT</code> replaces a full resource, while <code>PATCH</code> changes only selected fields.</li>
          <li>Retry behavior depends on idempotency: <code>POST</code> is risky, <code>PUT</code> is usually safe, <code>PATCH</code> depends.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="format-content" data-format="audio" data-content="audio" style="display:none;">
    <h3>🎧 Audio Version</h3>
    <div class="audio-embed">
      <div style="padding:24px;border:1px solid rgba(255,255,255,0.1);border-radius:12px;background:rgba(255,255,255,0.03);">
        <p><strong>Audio outline:</strong> Explain that HTTP methods are action words with behavioral rules, not just labels. Emphasize the difference between safe and unsafe methods, then walk through <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>, <code>HEAD</code>, and <code>OPTIONS</code>.</p>
        <p>Close by reinforcing the main beginner traps: do not use <code>GET</code> to delete, do not use <code>POST</code> just to fetch, and do not use <code>PUT</code> when you only mean a partial update.</p>
      </div>
    </div>
  </div>

  <div class="format-content" data-format="slides" data-content="slides" style="display:none;">
    <h3>📊 Slide Version</h3>
    <div class="slides-embed">
      <div style="padding:24px;border:1px solid rgba(255,255,255,0.1);border-radius:12px;background:rgba(255,255,255,0.03);">
        <h4>Slide Outline</h4>
        <ol>
          <li>Why HTTP methods exist</li>
          <li>Quick map of GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS</li>
          <li>Safe vs unsafe methods</li>
          <li>PUT vs PATCH</li>
          <li>Idempotency and retry behavior</li>
          <li>Common beginner mistakes and corrections</li>
        </ol>
      </div>
    </div>
  </div>

</div>`,
})

export default lesson