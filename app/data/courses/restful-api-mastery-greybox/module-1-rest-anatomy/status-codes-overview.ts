// app/data/courses/restful-api-mastery-greybox/module-1-rest-anatomy/status-codes-overview.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-1-4',
  slug: 'status-codes-overview',
  title: 'HTTP Status Codes Overview',
  type: 'lesson',
  status: 'published',
  order: 4,
  durationMinutes: 15,
  createdAt: '2026-04-16',
  updatedAt: '2026-04-16',
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
<img src="https://cdn.jsdelivr.net/gh/skill-wanderer/restfulapi-resources@main/status-codes-overview.png" alt="HTTP Status Codes Overview" />
<h2>HTTP Status Codes Overview</h2>
<p>HTTP status codes are standardized messages used by servers to explain the result of a request.</p>
<p>Whenever a browser, mobile application, desktop application, or API sends a request to a server, the server responds with a status code.</p>
<p>This status code acts as a quick summary of what happened.</p>
<p>Think of it as the server&#39;s immediate answer:</p>
<ul>
<li>&quot;Everything worked.&quot;</li>
<li>&quot;I created the data successfully.&quot;</li>
<li>&quot;You need to log in first.&quot;</li>
<li>&quot;I can&#39;t find what you&#39;re looking for.&quot;</li>
<li>&quot;Something went wrong on my side.&quot;</li>
</ul>
<p>Instead of reading an entire response body, applications can look at the status code and instantly understand the outcome of a request.</p>
<hr />
<h2>The Problem Before Standardized Status Codes</h2>
<p>In the early days of computer networking, systems often communicated using custom formats.</p>
<p>One server might return:</p>
<pre><code class="language-text">Success
</code></pre>
<p>while another might return:</p>
<pre><code class="language-text">Completed
</code></pre>
<p>and another:</p>
<pre><code class="language-text">Everything OK
</code></pre>
<p>Humans could understand these messages, but computers could not reliably interpret them.</p>
<p>Imagine building a browser that must communicate with millions of websites.</p>
<p>How would the browser know whether:</p>
<ul>
<li>The page exists</li>
<li>The user needs to log in</li>
<li>The request failed</li>
<li>The server crashed</li>
</ul>
<p>if every website used different words?</p>
<p>There needed to be a universal language that every browser, server, and application could understand.</p>
<hr />
<h2>The Birth of HTTP Status Codes</h2>
<p>As the World Wide Web grew in the early 1990s, developers needed a standardized communication protocol.</p>
<p>This protocol became HTTP (HyperText Transfer Protocol).</p>
<p>One of the key ideas behind HTTP was:</p>
<blockquote>
<p>Every request should receive a clear and predictable result.</p>
</blockquote>
<p>Instead of returning arbitrary text messages, servers would return standardized numeric codes.</p>
<p>These numbers could be understood by any software regardless of programming language, operating system, or country.</p>
<p>A browser written in C, a mobile app written in Kotlin, and a backend written in Java could all understand:</p>
<pre><code class="language-text">200
</code></pre>
<p>means success.</p>
<p>Likewise, they could all understand:</p>
<pre><code class="language-text">404
</code></pre>
<p>means the resource was not found.</p>
<p>This simple system became one of the foundations of the modern internet.</p>
<hr />
<h2>Why Numbers Instead of Words?</h2>
<p>You might wonder:</p>
<blockquote>
<p>Why use numbers instead of plain English messages?</p>
</blockquote>
<p>There are several reasons.</p>
<h4>Numbers Are Universal</h4>
<p>Words differ between languages.</p>
<p>For example:</p>
<p>English:</p>
<pre><code class="language-text">Not Found
</code></pre>
<p>Spanish:</p>
<pre><code class="language-text">No Encontrado
</code></pre>
<p>Japanese:</p>
<pre><code class="language-text">見つかりません
</code></pre>
<p>But:</p>
<pre><code class="language-text">404
</code></pre>
<p>means exactly the same thing everywhere.</p>
<hr />
<h4>Numbers Are Easy for Computers</h4>
<p>Software can quickly evaluate:</p>
<pre><code class="language-text">if status == 200
</code></pre>
<p>or</p>
<pre><code class="language-text">if status &gt;= 400
</code></pre>
<p>without having to interpret text.</p>
<p>This makes communication faster and more reliable.</p>
<hr />
<h4>Numbers Create Consistency</h4>
<p>Whether you visit:</p>
<ul>
<li>Google</li>
<li>Amazon</li>
<li>GitHub</li>
<li>Netflix</li>
<li>A small personal blog</li>
</ul>
<p>the meaning of:</p>
<pre><code class="language-text">200
</code></pre>
<p>remains the same.</p>
<p>This consistency is one of the reasons the web can scale globally.</p>
<hr />
<h2>Why Status Codes Matter</h2>
<p>Without status codes, applications would have no standard way to determine whether a request succeeded or failed.</p>
<p>Every browser, mobile app, API client, and server would need to invent its own communication rules.</p>
<p>Status codes solve this problem by creating a shared language.</p>
<p>They allow applications to immediately understand:</p>
<ul>
<li>Was the request successful?</li>
<li>Was new data created?</li>
<li>Does the user need to authenticate?</li>
<li>Does the requested resource exist?</li>
<li>Does the user have permission?</li>
<li>Is the server currently unavailable?</li>
<li>Should the request be retried?</li>
</ul>
<p>Instead of reading large amounts of data, applications can often make decisions using only the status code.</p>
<hr />
<h2>How Developers Actually Use Status Codes</h2>
<p>In real-world applications, status codes are usually the first thing developers check when debugging.</p>
<p>For example:</p>
<p>If a request returns:</p>
<pre><code class="language-text">200
</code></pre>
<p>the developer knows the request succeeded.</p>
<p>If a request returns:</p>
<pre><code class="language-text">404
</code></pre>
<p>the developer immediately checks:</p>
<ul>
<li>URL</li>
<li>Route</li>
<li>Resource ID</li>
</ul>
<p>If a request returns:</p>
<pre><code class="language-text">401
</code></pre>
<p>the developer investigates:</p>
<ul>
<li>Login state</li>
<li>Access token</li>
<li>Authentication configuration</li>
</ul>
<p>If a request returns:</p>
<pre><code class="language-text">500
</code></pre>
<p>the developer looks at:</p>
<ul>
<li>Server logs</li>
<li>Database connections</li>
<li>Backend code</li>
</ul>
<p>The status code often provides enough information to know where to start troubleshooting.</p>
<hr />
<h2>Status Codes Are Like Traffic Signals</h2>
<p>A useful way to think about status codes is as traffic signals for the web.</p>
<p>Green light:</p>
<pre><code class="language-text">2xx
</code></pre>
<p>The request succeeded.</p>
<p>Yellow light:</p>
<pre><code class="language-text">3xx
</code></pre>
<p>The client needs to take another action.</p>
<p>Red light:</p>
<pre><code class="language-text">4xx
</code></pre>
<p>The request has a problem.</p>
<p>Emergency signal:</p>
<pre><code class="language-text">5xx
</code></pre>
<p>The server has a problem.</p>
<p>This simple system allows billions of devices around the world to communicate predictably every day.</p>
<hr />
<h2>In Simple Terms</h2>
<p>HTTP status codes are the internet&#39;s universal response language.</p>
<p>They were created so that browsers, servers, mobile apps, APIs, and other software could communicate using a standardized system instead of custom text messages.</p>
<p>More than thirty years later, the same status code system is still used by virtually every website, web application, and API on the internet.</p>
<p>Whenever you see:</p>
<ul>
<li>200 OK</li>
<li>404 Not Found</li>
<li>401 Unauthorized</li>
<li>500 Internal Server Error</li>
</ul>
<p>you are seeing part of one of the oldest and most important communication systems that powers the modern web.</p>
<hr />
<h2>The Five Status Code Categories</h2>
<p>Every HTTP status code belongs to one of five groups.</p>
<table>
<thead>
<tr>
<th>Range</th>
<th>Category</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td>1xx</td>
<td>Informational</td>
<td>Processing continues</td>
</tr>
<tr>
<td>2xx</td>
<td>Success</td>
<td>Request succeeded</td>
</tr>
<tr>
<td>3xx</td>
<td>Redirection</td>
<td>Additional action required</td>
</tr>
<tr>
<td>4xx</td>
<td>Client Error</td>
<td>Problem with the request</td>
</tr>
<tr>
<td>5xx</td>
<td>Server Error</td>
<td>Problem on the server</td>
</tr>
</tbody></table>
<p>The first digit immediately tells you the category.</p>
<p>Examples:</p>
<ul>
<li>200 → Success</li>
<li>404 → Client Error</li>
<li>500 → Server Error</li>
</ul>
<hr />
<h2>Common Status Codes (Know These First)</h2>
<p>These are the status codes developers encounter most often.</p>
<hr />
<h3>200 OK</h3>
<p>Everything worked successfully.</p>
<p>Common situations:</p>
<ul>
<li>Loading user data</li>
<li>Fetching products</li>
<li>Viewing a page</li>
<li>Running a search</li>
</ul>
<hr />
<h3>201 Created</h3>
<p>A new resource was successfully created.</p>
<p>Common situations:</p>
<ul>
<li>Creating a user account</li>
<li>Creating a blog post</li>
<li>Creating an order</li>
</ul>
<hr />
<h3>204 No Content</h3>
<p>The request succeeded, but there is nothing to return.</p>
<p>Common situations:</p>
<ul>
<li>Deleting a record</li>
<li>Completing an action without returning data</li>
</ul>
<hr />
<h3>400 Bad Request</h3>
<p>The request is invalid.</p>
<p>Common situations:</p>
<ul>
<li>Missing required fields</li>
<li>Invalid input format</li>
<li>Invalid JSON data</li>
</ul>
<hr />
<h3>401 Unauthorized</h3>
<p>Authentication is required.</p>
<p>Common situations:</p>
<ul>
<li>Missing access token</li>
<li>Expired login session</li>
<li>Invalid token</li>
</ul>
<p>Think:</p>
<blockquote>
<p>&quot;Who are you?&quot;</p>
</blockquote>
<hr />
<h3>403 Forbidden</h3>
<p>The user is authenticated but does not have permission.</p>
<p>Common situations:</p>
<ul>
<li>Admin-only pages</li>
<li>Restricted resources</li>
<li>Access control rules</li>
</ul>
<p>Think:</p>
<blockquote>
<p>&quot;I know who you are, but you can&#39;t do this.&quot;</p>
</blockquote>
<hr />
<h3>404 Not Found</h3>
<p>The requested resource does not exist.</p>
<p>Common situations:</p>
<ul>
<li>Wrong URL</li>
<li>Deleted record</li>
<li>Invalid ID</li>
</ul>
<p>This is one of the most common status codes on the web.</p>
<hr />
<h3>409 Conflict</h3>
<p>The request conflicts with existing data.</p>
<p>Common situations:</p>
<ul>
<li>Duplicate email</li>
<li>Duplicate username</li>
<li>Duplicate unique value</li>
</ul>
<hr />
<h3>422 Unprocessable Entity</h3>
<p>The request format is valid, but the data fails validation.</p>
<p>Common situations:</p>
<ul>
<li>Invalid email format</li>
<li>Password too short</li>
<li>Business rule validation failures</li>
</ul>
<hr />
<h3>429 Too Many Requests</h3>
<p>The client is sending too many requests.</p>
<p>Common situations:</p>
<ul>
<li>API rate limits</li>
<li>Spam protection</li>
<li>Excessive automated requests</li>
</ul>
<hr />
<h2>Rare Status Codes (Good to Know)</h2>
<p>These status codes exist in HTTP standards but are encountered less frequently than common codes such as 200, 404, or 500.</p>
<p>Most beginners can build entire applications without seeing some of these codes. However, understanding them helps when working with larger systems, APIs, proxies, caching, WebSockets, and enterprise applications.</p>
<hr />
<h3>100 Continue</h3>
<p>The server has received the beginning of a request and is ready to receive the rest.</p>
<p>This status code exists to avoid wasting bandwidth.</p>
<p>Imagine a client wants to upload a 5 GB file.</p>
<p>Instead of immediately sending the entire file, the client can first ask:</p>
<blockquote>
<p>&quot;Are you ready to receive this upload?&quot;</p>
</blockquote>
<p>If the server responds with <code>100 Continue</code>, the upload proceeds.</p>
<p>Usually seen during:</p>
<ul>
<li>Large file uploads</li>
<li>Video uploads</li>
<li>Streaming operations</li>
<li>Enterprise systems handling huge requests</li>
</ul>
<p>Most developers never manually work with this status code because browsers and HTTP libraries handle it automatically.</p>
<hr />
<h3>101 Switching Protocols</h3>
<p>The server agrees to switch from one communication protocol to another.</p>
<p>HTTP is normally request-response based.</p>
<p>However, some applications require a persistent connection.</p>
<p>Examples:</p>
<ul>
<li>Real-time chat applications</li>
<li>Multiplayer games</li>
<li>Live dashboards</li>
<li>Stock market updates</li>
</ul>
<p>In these situations, the connection may switch from HTTP to WebSocket.</p>
<p>Usually seen during:</p>
<ul>
<li>WebSocket connections</li>
<li>Real-time communication systems</li>
<li>Live notification systems</li>
</ul>
<p>Most frontend developers using libraries such as Socket.IO rarely see this directly.</p>
<hr />
<h3>202 Accepted</h3>
<p>The server received the request successfully but has not completed the work yet.</p>
<p>Think of it like placing an order at a restaurant.</p>
<p>The waiter accepts your order immediately, but the food is not ready yet.</p>
<p>The server is essentially saying:</p>
<blockquote>
<p>&quot;I got your request. I&#39;ll process it later.&quot;</p>
</blockquote>
<p>Usually seen during:</p>
<ul>
<li>Background jobs</li>
<li>Queue processing</li>
<li>Report generation</li>
<li>Video rendering</li>
<li>Email delivery systems</li>
<li>AI processing tasks</li>
</ul>
<p>Example situations:</p>
<ul>
<li>Generating a PDF</li>
<li>Processing a large CSV import</li>
<li>Training an AI model</li>
<li>Sending thousands of emails</li>
</ul>
<hr />
<h3>301 Moved Permanently</h3>
<p>The resource has permanently moved to a new URL.</p>
<p>The server tells the client:</p>
<blockquote>
<p>&quot;This page has a new permanent home.&quot;</p>
</blockquote>
<p>Browsers and search engines remember this redirect.</p>
<p>Usually seen during:</p>
<ul>
<li>Website migrations</li>
<li>Domain changes</li>
<li>SEO optimization</li>
<li>URL restructuring</li>
</ul>
<p>Example:</p>
<pre><code class="language-text">old-company.com → new-company.com
</code></pre>
<p>Search engines treat 301 as a permanent move.</p>
<hr />
<h3>302 Found</h3>
<p>The resource temporarily exists at another location.</p>
<p>Unlike 301, this move is not permanent.</p>
<p>The server is saying:</p>
<blockquote>
<p>&quot;Use this other URL for now.&quot;</p>
</blockquote>
<p>Usually seen during:</p>
<ul>
<li>Temporary redirects</li>
<li>Login workflows</li>
<li>Maintenance pages</li>
<li>Seasonal campaigns</li>
</ul>
<p>Example:</p>
<p>A user attempts to access a protected page but is temporarily redirected to the login page.</p>
<hr />
<h3>304 Not Modified</h3>
<p>The requested resource has not changed since the client&#39;s last request.</p>
<p>This status code is mainly about performance.</p>
<p>Instead of downloading the same file repeatedly, the browser asks:</p>
<blockquote>
<p>&quot;Has this file changed?&quot;</p>
</blockquote>
<p>If the answer is no, the server returns <code>304 Not Modified</code>.</p>
<p>The browser then reuses its cached copy.</p>
<p>Usually seen during:</p>
<ul>
<li>Browser caching</li>
<li>CSS files</li>
<li>JavaScript files</li>
<li>Images</li>
<li>Performance optimization</li>
</ul>
<p>Benefits:</p>
<ul>
<li>Faster page loads</li>
<li>Lower bandwidth usage</li>
<li>Reduced server workload</li>
</ul>
<p>Many developers see this frequently inside browser Developer Tools.</p>
<hr />
<h3>405 Method Not Allowed</h3>
<p>The endpoint exists, but the requested HTTP method is not allowed.</p>
<p>The URL is valid.</p>
<p>The problem is the action being performed.</p>
<p>Usually seen when:</p>
<ul>
<li>Using POST instead of GET</li>
<li>Using DELETE on a read-only endpoint</li>
<li>Using PUT where only PATCH is allowed</li>
</ul>
<p>Think:</p>
<blockquote>
<p>&quot;The destination exists, but you&#39;re using the wrong action.&quot;</p>
</blockquote>
<p>Example:</p>
<p>A login endpoint may allow:</p>
<ul>
<li>GET</li>
<li>POST</li>
</ul>
<p>but reject:</p>
<ul>
<li>DELETE</li>
</ul>
<hr />
<h3>406 Not Acceptable</h3>
<p>The server cannot generate a response in a format requested by the client.</p>
<p>The client is asking for a specific format that the server does not support.</p>
<p>Usually seen when:</p>
<ul>
<li>Requesting XML from a JSON-only API</li>
<li>Requesting unsupported content types</li>
</ul>
<p>Most modern APIs return JSON, so this status code is relatively uncommon.</p>
<hr />
<h3>410 Gone</h3>
<p>The resource existed in the past but has been permanently removed.</p>
<p>Unlike 404:</p>
<ul>
<li>404 = &quot;I can&#39;t find it.&quot;</li>
<li>410 = &quot;It definitely used to exist, but it&#39;s gone.&quot;</li>
</ul>
<p>Usually seen during:</p>
<ul>
<li>API deprecations</li>
<li>Permanently removed pages</li>
<li>Deleted resources</li>
</ul>
<p>Useful when developers want clients to stop requesting an old resource.</p>
<hr />
<h3>413 Payload Too Large</h3>
<p>The client sent more data than the server allows.</p>
<p>Usually seen during:</p>
<ul>
<li>Large file uploads</li>
<li>Oversized request bodies</li>
<li>Video uploads exceeding limits</li>
</ul>
<p>Example situations:</p>
<ul>
<li>Uploading a 500 MB file when the limit is 50 MB</li>
<li>Sending massive JSON payloads</li>
</ul>
<hr />
<h3>415 Unsupported Media Type</h3>
<p>The server does not support the format of data being sent.</p>
<p>Usually seen when:</p>
<ul>
<li>Sending XML to a JSON-only API</li>
<li>Uploading unsupported file formats</li>
<li>Using the wrong Content-Type header</li>
</ul>
<p>Think:</p>
<blockquote>
<p>&quot;I received the request, but I don&#39;t understand this format.&quot;</p>
</blockquote>
<hr />
<h2>Final Summary</h2>
<p>HTTP status codes are the standard language servers use to explain what happened after a request.</p>
<p>For beginners, the most important thing is not memorizing every status code, but understanding what category the code belongs to and what action should be taken next.</p>
<p>When debugging APIs, always check the status code first before looking at anything else.</p>
  </div>

  <div class="format-content" data-format="video" data-content="video" style="display:none;">
    <h3>🎬 Video Version</h3>
    <div class="video-embed">
      <iframe title="HTTP Status Codes Overview lesson video" src="https://www.youtube-nocookie.com/embed/870FMKfKX2k" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  </div>

  <div class="format-content" data-format="audio" data-content="audio" style="display:none;">
    <h3>🎧 Audio Version</h3>
    <div class="audio-embed">
      <iframe title="HTTP Status Codes Overview lesson audio" style="border-radius:12px" src="https://open.spotify.com/embed/episode/79gO6bxfiHyoghd0t6W3n0" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
  </div>

  <div class="format-content" data-format="slides" data-content="slides" style="display:none;">
    <h3>📊 Slide Version</h3>
    <div class="slides-embed">
      <iframe src="https://cdn.jsdelivr.net/gh/skill-wanderer/restfulapi-resources@main/status-codes-overview.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
    </div>
  </div>

</div>`,
})

export default lesson