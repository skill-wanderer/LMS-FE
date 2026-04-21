// app/data/courses/restful-api-mastery-greybox/module-1-rest-anatomy/introduction-to-rest-api.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-1-0',
  slug: 'introduction-to-rest-api',
  title: 'Introduction to REST API',
  type: 'lesson',
  status: 'published',
  order: 0,
  durationMinutes: 10,
  createdAt: '2026-04-16',
  updatedAt: '2026-04-16',
  content: `<h2>What is an API?</h2>
<p>An <strong>API (Application Programming Interface)</strong> is a set of rules that allows two software applications to communicate with each other. Think of it as a waiter in a restaurant: you (the client) place an order, the waiter (the API) carries your request to the kitchen (the server), and brings back your food (the response).</p>
<p>APIs are everywhere in modern software:</p>
<ul>
<li>A weather app on your phone fetches data from a weather service API.</li>
<li>A payment button on a website calls a payment provider's API.</li>
<li>A mobile app displays your feed by calling a social platform's API.</li>
</ul>
<p>In every case the pattern is the same: the <strong>client</strong> sends a request, the <strong>server</strong> processes it, and the server sends back a response. REST is the set of rules that makes this exchange predictable.</p>

<h2>What is REST?</h2>
<p><strong>REST (Representational State Transfer)</strong> is an architectural style for designing networked APIs. It was introduced by Roy Fielding in his 2000 doctoral dissertation. REST defines a set of constraints that, when followed, produce a consistent, scalable, and easy-to-understand API.</p>
<p>A REST API communicates over HTTP — the same protocol your browser uses to load web pages. This makes REST APIs accessible from any platform or language that can send HTTP requests.</p>

<h2>Core Concepts</h2>

<h3>Resource</h3>
<p>In REST, everything is a <strong>resource</strong>. A resource is any piece of data or object you want to expose: a user, a product, an order, a blog post. Each resource is identified by a unique URL called a <strong>URI (Uniform Resource Identifier)</strong>.</p>
<ul>
<li><code>/api/users</code> — the collection of all users</li>
<li><code>/api/users/42</code> — a specific user with ID 42</li>
<li><code>/api/products/99</code> — a specific product with ID 99</li>
</ul>

<h3>HTTP Methods</h3>
<p>REST uses standard <strong>HTTP methods</strong> to define what action to perform on a resource:</p>
<table>
<thead>
<tr><th>Method</th><th>Action</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><code>GET</code></td><td>Read / retrieve a resource</td><td><code>GET /api/users</code></td></tr>
<tr><td><code>POST</code></td><td>Create a new resource</td><td><code>POST /api/users</code></td></tr>
<tr><td><code>PUT</code></td><td>Replace / update a resource fully</td><td><code>PUT /api/users/42</code></td></tr>
<tr><td><code>DELETE</code></td><td>Remove a resource</td><td><code>DELETE /api/users/42</code></td></tr>
<tr><td><code>PATCH</code></td><td>Partially update a resource</td><td><code>PATCH /api/users/42</code></td></tr>
<tr><td><code>HEAD</code></td><td>Same as GET but returns headers only (no body)</td><td><code>HEAD /api/users</code></td></tr>
<tr><td><code>OPTIONS</code></td><td>Describe communication options for a resource</td><td><code>OPTIONS /api/users</code></td></tr>
</tbody>
</table>
<p>The combination of a <strong>method + URI</strong> tells the server exactly what you want to do and with which resource.</p>
<p><strong>PATCH vs PUT:</strong> Use <code>PUT</code> when replacing the entire resource; use <code>PATCH</code> when updating only specific fields. <strong>HEAD</strong> is useful to check if a resource exists or to read metadata without downloading the body. <strong>OPTIONS</strong> is used by browsers for CORS preflight checks.</p>
<p>In practice, the HTTP method should match your intent before anyone reads the request body. A well-designed API becomes easier to understand because the method already signals whether the client is reading, creating, replacing, editing, deleting, or inspecting a resource.</p>
<ul>
<li><code>GET</code> is commonly used to list collections or fetch one existing record.</li>
<li><code>POST</code> is commonly used to create something new or trigger a server-side action.</li>
<li><code>PUT</code> fits cases where the client sends a complete new version of a resource.</li>
<li><code>PATCH</code> fits partial edits such as changing only a status, email, or display name.</li>
<li><code>DELETE</code> removes a resource or marks it as deleted.</li>
<li><code>HEAD</code> lets clients check existence or metadata without downloading the response body.</li>
<li><code>OPTIONS</code> tells the client which methods and cross-origin rules are available for that endpoint.</li>
</ul>

<h3>Idempotency</h3>
<p><strong>Idempotency</strong> means that making the same request multiple times produces the same result as making it once. This matters when retrying failed requests.</p>
<ul>
<li><code>GET</code> — <strong>safe and idempotent</strong>: reads data, never changes server state.</li>
<li><code>PUT</code> — <strong>idempotent</strong>: replacing a resource with the same data twice yields the same outcome.</li>
<li><code>POST</code> — <strong>not idempotent</strong>: each call creates a new resource, so repeating it creates duplicates.</li>
</ul>
<p><strong>Safe methods</strong> (<code>GET</code>, <code>HEAD</code>) never change server state. <strong>Unsafe methods</strong> (<code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>) may modify data.</p>

<h3>Stateless</h3>
<p>REST APIs are <strong>stateless</strong>: each request from the client must contain all the information the server needs to fulfill it. The server does not store any session state between requests. Every request stands on its own.</p>
<p>This makes REST APIs easier to scale — any server in a cluster can handle any request because there is no shared session memory to maintain.</p>

<h2>Request and Response Anatomy</h2>
<p>Before looking at more endpoints, it helps to understand the full shape of an HTTP exchange. The client sends a <strong>request</strong> to a server, and the server answers with a <strong>response</strong>. If you can read those two messages clearly, you can debug most API problems much faster.</p>

<h3>Request Structure</h3>
<p>A request tells the server what resource the client wants and what action to perform. For example, <code>POST https://api.example.com/api/users?role=student</code> means the client is sending data to create a user, and the query string adds extra instruction to the request.</p>
<ul>
<li><strong>URL</strong> — Identifies the target resource, such as <code>https://api.example.com/api/users/42</code>.</li>
<li><strong>Headers</strong> — Carry metadata about the request. Common examples are <code>Content-Type: application/json</code> to describe the body format and <code>Authorization: Bearer &lt;token&gt;</code> to prove identity.</li>
<li><strong>Body</strong> — Sends data to the server, usually with <code>POST</code>, <code>PUT</code>, or <code>PATCH</code>. A body might contain JSON with a user's name, email, and role.</li>
<li><strong>Query Parameters</strong> — Add filters or options after <code>?</code>, such as <code>/api/users?role=admin&amp;page=2</code>.</li>
</ul>
<p>Not every request uses every part. A simple <code>GET /api/users</code> may have no body at all, while an authenticated <code>PATCH</code> request may use the URL, headers, body, and query parameters together.</p>

<h3>Response Structure</h3>
<p>A response tells the client what happened after the server processed the request. It usually contains a status code, headers, and sometimes a body.</p>
<ul>
<li><strong>Status Code</strong> — Shows the outcome, such as <code>200 OK</code> for success or <code>404 Not Found</code> if the resource does not exist.</li>
<li><strong>Headers</strong> — Describe the response, for example <code>Content-Type: application/json</code> so the client knows how to parse the returned data.</li>
<li><strong>Body</strong> — Contains the returned data or an error message. Successful responses often include resource data, while failed responses often include details about what went wrong.</li>
</ul>
<p>Reading the request and response together gives you the full story: what the client asked for, how the server interpreted it, and what came back.</p>

<h2>Example Endpoint</h2>
<p>Let's look at a real-world example. To retrieve a list of users, a client sends:</p>
<blockquote>
<strong>GET</strong> /api/users
</blockquote>
<p>Breaking this down:</p>
<ul>
<li><code>GET</code> — the HTTP method: we want to <em>read</em> data, not modify it.</li>
<li><code>/api/users</code> — the resource URI: the collection of all users.</li>
</ul>

<h2>URL Design Patterns</h2>
<p>Well-designed REST URLs are predictable and consistent. Follow these conventions:</p>
<ul>
<li>Use <strong>nouns</strong>, not verbs — <code>/api/users</code>, not <code>/api/getUsers</code>.</li>
<li>Use <strong>plural names</strong> for collections — <code>/api/orders</code>, not <code>/api/order</code>.</li>
<li>Nest resources to show relationships — <code>/api/users/42/orders</code> for orders belonging to user 42.</li>
</ul>

<h2>Path vs Query Parameters</h2>
<p>There are two ways to pass data in a URL, each with a clear purpose:</p>
<ul>
<li><strong>Path parameter</strong> — identifies a specific resource. It is part of the URL path: <code>/api/users/42</code> (42 is the path parameter).</li>
<li><strong>Query parameter</strong> — filters or modifies the result. It is appended after <code>?</code>: <code>/api/users?role=admin&amp;page=2</code>.</li>
</ul>

<h2>Anatomy of a Request</h2>
<p>Every HTTP request is composed of the following parts:</p>
<ul>
<li><strong>Method</strong> — The action to perform (<code>GET</code>, <code>POST</code>, <code>PATCH</code>, etc.).</li>
<li><strong>URL</strong> — The address of the resource, e.g. <code>https://api.example.com/api/users/42</code>.</li>
<li><strong>Headers</strong> — Key-value pairs that carry metadata about the request, such as <code>Content-Type: application/json</code> or <code>Authorization: Bearer &lt;token&gt;</code>.</li>
<li><strong>Body</strong> — Optional data sent with the request, typically used with <code>POST</code>, <code>PUT</code>, and <code>PATCH</code>. Usually formatted as JSON.</li>
<li><strong>Query Parameters</strong> — Key-value pairs appended to the URL after <code>?</code>, used to filter or modify results, e.g. <code>/api/users?role=admin&amp;page=2</code>.</li>
</ul>

<h2>Important Headers</h2>
<p>Some headers appear in almost every real-world API interaction:</p>
<ul>
<li><code>Authorization</code> — Proves your identity to the server, e.g. <code>Authorization: Bearer &lt;token&gt;</code>.</li>
<li><code>Content-Type</code> — Tells the server the format of the request body, e.g. <code>Content-Type: application/json</code>.</li>
<li><code>Accept</code> — Tells the server what format the client expects in the response, e.g. <code>Accept: application/json</code>.</li>
</ul>

<h2>Anatomy of a Response</h2>
<p>When the server processes a request, it returns a response containing:</p>
<ul>
<li><strong>Status Code</strong> — A three-digit number indicating the outcome of the request (e.g. <code>200</code>, <code>404</code>).</li>
<li><strong>Headers</strong> — Metadata about the response, such as <code>Content-Type: application/json</code> or <code>Cache-Control</code> directives. For example: <code>Content-Type: application/json</code>, <code>Cache-Control: no-cache</code>.</li>
<li><strong>Body</strong> — The actual payload returned by the server. For REST APIs this is almost always <strong>JSON</strong>.</li>
</ul>

<h2>HTTP Status Codes</h2>
<p>Status codes tell you whether a request succeeded or failed, and why. They are grouped by their first digit:</p>
<table>
<thead>
<tr><th>Code</th><th>Name</th><th>Meaning</th></tr>
</thead>
<tbody>
<tr><td><code>200</code></td><td>OK</td><td>Request succeeded. Data is returned in the response body.</td></tr>
<tr><td><code>201</code></td><td>Created</td><td>A new resource was successfully created (common after <code>POST</code>).</td></tr>
<tr><td><code>400</code></td><td>Bad Request</td><td>The request was malformed or missing required data.</td></tr>
<tr><td><code>404</code></td><td>Not Found</td><td>The requested resource does not exist.</td></tr>
<tr><td><code>500</code></td><td>Internal Server Error</td><td>The server encountered an unexpected error.</td></tr>
</tbody>
</table>
<p>You will study the full range of status codes — including <code>401 Unauthorized</code>, <code>403 Forbidden</code>, and <code>429 Too Many Requests</code> — in a dedicated lesson later in this course.</p>

<h2>Error Response Example</h2>
<p>When a request fails, the server returns an appropriate status code <em>and</em> a JSON body explaining what went wrong:</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">HTTP/1.1 404 Not Found

{
  "error": "User not found",
  "code": 404
}</pre>
</blockquote>
<p>Always read both the status code and the response body — the body often contains the specific reason for failure.</p>

<h2>Representation Formats</h2>
<p>The body of a request or response is called a <strong>representation</strong>. JSON is the most common format in modern REST APIs, but it is not the only one you will encounter.</p>
<ul>
<li><strong>JSON</strong> — The default format for most modern APIs because it is lightweight and easy to read.</li>
<li><strong>form-data</strong> — Used when submitting form fields that may include file uploads such as images or PDFs.</li>
<li><strong>x-www-form-urlencoded</strong> — A simple key-value format often used by HTML forms and older APIs.</li>
<li><strong>raw</strong> — Sends plain text or another unstructured payload exactly as written.</li>
<li><strong>binary</strong> — Sends file data such as images, videos, or documents without converting it into readable text first.</li>
<li><strong>GraphQL</strong> — A query-based way to ask for exactly the data fields you need, usually sent over HTTP.</li>
<li><strong>JavaScript</strong> — Sometimes used when a server returns executable script or configuration snippets, though this is less common in modern public APIs.</li>
<li><strong>HTML</strong> — Useful when the server returns rendered markup, such as an embedded page or server-rendered fragment.</li>
<li><strong>XML</strong> — An older but still important structured format used in enterprise systems, feeds, and some legacy integrations.</li>
</ul>
<p>The format is usually declared with the <code>Content-Type</code> header so both client and server know how to handle the data correctly.</p>

<h2>Representation Format: JSON</h2>
<p>Among all representation formats, JSON is the one you will see most often in beginner-friendly REST APIs.</p>
<p><strong>JSON (JavaScript Object Notation)</strong> is the standard data format used in REST API responses. It is lightweight, human-readable, and supported by every major programming language. A JSON object uses key-value pairs enclosed in curly braces:</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">{ "id": 42, "name": "Alice", "email": "alice@example.com" }</pre>
</blockquote>
<p>Arrays of objects are wrapped in square brackets:</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">[
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob",   "email": "bob@example.com"   }
]</pre>
</blockquote>
<p>The server signals the format via the <code>Content-Type: application/json</code> response header so clients know how to parse the body.</p>

<h2>Summary</h2>
<ul>
<li>An <strong>API</strong> is a contract that lets two applications communicate.</li>
<li><strong>REST</strong> is an architectural style for HTTP APIs built around resources and standard methods.</li>
<li>A <strong>resource</strong> is any named piece of data, identified by a URI such as <code>/api/users</code>.</li>
<li>The seven HTTP methods are <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>, <code>PATCH</code>, <code>HEAD</code>, and <code>OPTIONS</code>.</li>
<li>A request carries a <strong>method</strong>, <strong>URL</strong>, optional <strong>headers</strong>, optional <strong>body</strong>, and optional <strong>query parameters</strong>.</li>
<li>A response carries a <strong>status code</strong>, <strong>headers</strong>, and a <strong>body</strong> (usually JSON).</li>
<li>REST APIs are <strong>stateless</strong>: every request carries all the information the server needs.</li>
<li><strong>Idempotent</strong> methods (<code>GET</code>, <code>PUT</code>) are safe to repeat; <code>POST</code> is not — each call creates a new resource.</li>
<li>REST URLs use <strong>nouns and plural names</strong>; path segments identify resources, query parameters filter them.</li>
<li>Key headers: <code>Authorization</code> (identity), <code>Content-Type</code> (request body format), <code>Accept</code> (expected response format).</li>
<li>Error responses combine a status code with a JSON body describing the specific failure.</li>
<li>Responses are delivered as <strong>JSON</strong> with an HTTP status code indicating success or failure.</li>
<li><strong>Representation formats</strong> describe how the body is encoded: JSON is the most common, but APIs may also use form-data, URL-encoded data, raw text, binary files, HTML, XML, or GraphQL-style payloads.</li>
</ul>`,
})

export default lesson
