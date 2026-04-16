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
</tbody>
</table>
<p>The combination of a <strong>method + URI</strong> tells the server exactly what you want to do and with which resource.</p>

<h3>Stateless</h3>
<p>REST APIs are <strong>stateless</strong>: each request from the client must contain all the information the server needs to fulfill it. The server does not store any session state between requests. Every request stands on its own.</p>
<p>This makes REST APIs easier to scale — any server in a cluster can handle any request because there is no shared session memory to maintain.</p>

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

<h2>JSON Response Example</h2>
<p>The server processes the request and responds with data in <strong>JSON (JavaScript Object Notation)</strong> format — the standard data format for REST APIs:</p>
<blockquote>
<pre style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;font-size:0.88rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,0.08);">[
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob",   "email": "bob@example.com"   }
]</pre>
</blockquote>
<p>Along with the data, the server also returns an <strong>HTTP status code</strong>. A status of <code>200 OK</code> means the request succeeded and the data was found. You will learn more about status codes in a later lesson.</p>

<h2>Summary</h2>
<ul>
<li>An <strong>API</strong> is a contract that lets two applications communicate.</li>
<li><strong>REST</strong> is an architectural style for HTTP APIs built around resources and standard methods.</li>
<li>A <strong>resource</strong> is any named piece of data, identified by a URI such as <code>/api/users</code>.</li>
<li>The four core HTTP methods are <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code>.</li>
<li>REST APIs are <strong>stateless</strong>: every request carries all the information the server needs.</li>
<li>Responses are typically delivered as <strong>JSON</strong> with an HTTP status code.</li>
</ul>`,
})

export default lesson
