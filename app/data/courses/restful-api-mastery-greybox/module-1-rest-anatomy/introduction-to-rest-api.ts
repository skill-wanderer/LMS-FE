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
<li><strong>Path Parameters</strong> — Identify a specific resource inside the path, such as <code>/api/users/42/orders/3</code>.</li>
<li><strong>Query Parameters</strong> — Add filters or options after <code>?</code>, such as <code>/api/users?role=admin&amp;page=2</code>.</li>
<li><strong>Headers</strong> — Carry metadata about the request. Common examples are <code>Content-Type: application/json</code> to describe the body format and <code>Authorization: Bearer &lt;token&gt;</code> to prove identity.</li>
<li><strong>Body</strong> — Sends data to the server, usually with <code>POST</code>, <code>PUT</code>, or <code>PATCH</code>. A body might contain JSON with a user's name, email, and role.</li>
</ul>

<h4>URL</h4>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>The URL is the full request address. It combines the protocol, domain, path, and optional query string into one location that the client calls.</td><td><code>https://api.example.com/api/users/42?include=profile</code></td><td>The URL is the primary routing key in REST architecture.</td></tr>
<tr><td><strong>Why</strong></td><td>It tells the system where the request should go. In <code>https://api.example.com/api/users/42</code>, <code>https</code> is the secure protocol, <code>api.example.com</code> is the domain, <code>/api/users</code> is the resource path, and <code>42</code> is the specific resource ID.</td><td><code>https://api.example.com/api/users/42</code></td><td>Each URL part narrows the request from network location to one concrete resource target.</td></tr>
<tr><td><strong>When</strong></td><td>Every HTTP request uses a URL, whether the client is reading, creating, updating, or deleting data. The same URL can support multiple actions when the HTTP method changes.</td><td><code>GET /api/users/42</code> versus <code>PATCH /api/users/42</code></td><td>The URL keeps identity stable while the method changes intent.</td></tr>
<tr><td><strong>Where</strong></td><td>The URL appears in the request line and is read first by load balancers, gateways, routers, and the application server before business logic runs.</td><td><code>GET /api/users/42 HTTP/1.1</code></td><td>Routing systems inspect the URL early to decide which handler or controller should receive the request.</td></tr>
<tr><td><strong>Who</strong></td><td>The client constructs the URL from API documentation, and the server routing layer binds it to a matching endpoint.</td><td>A frontend calls <code>/api/users/42</code>, and the backend maps it to a user detail controller.</td><td>The URL forms the contract between client navigation, API gateways, and backend routing rules.</td></tr>
<tr><td><strong>How</strong></td><td>A well-designed URL uses a predictable HTTPS scheme, a stable domain, noun-based paths, and clear resource IDs. It then works together with the HTTP method to express both destination and action.</td><td><code>DELETE https://api.example.com/api/users/42</code></td><td>Predictable URLs improve routing, observability, caching, and debugging across the system.</td></tr>
</tbody>
</table>

<h4>Path Parameters</h4>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>Path parameters are variable values placed inside the URL path to identify one specific resource or one nested resource under another.</td><td><code>/api/users/42/orders/3</code></td><td>Path parameters define resource identity, not filtering.</td></tr>
<tr><td><strong>Why</strong></td><td>They let the API point to exact records such as one user, one order, or one child resource inside a hierarchy.</td><td><code>/api/users/42</code> and <code>/api/users/42/orders/3</code></td><td>Path parameters express identity and ownership relationships directly in the route.</td></tr>
<tr><td><strong>When</strong></td><td>Use them when the client needs a specific record or a nested resource, such as one order that belongs to one user.</td><td><code>GET /api/users/42/orders/3</code></td><td>They are used when route matching must bind the request to a concrete resource key.</td></tr>
<tr><td><strong>Where</strong></td><td>They appear inside the path segments of the URL, usually after a collection name such as <code>/users/:id</code> or <code>/orders/:orderId</code>.</td><td><code>/api/users/42/orders/3</code></td><td>Routers extract path parameters from the URL before the controller runs.</td></tr>
<tr><td><strong>Who</strong></td><td>The client sends the parameter values, and the backend router or controller binds them to variables such as <code>userId</code> and <code>orderId</code>.</td><td>A server maps <code>/api/users/42</code> to <code>getUser(userId = 42)</code>.</td><td>Route binding turns path segments into controller inputs for authorization and data lookup.</td></tr>
<tr><td><strong>How</strong></td><td>The routing layer matches the route pattern, extracts the parameter values, and passes them to application code, which then loads or updates the matching resource.</td><td><code>/api/users/:userId/orders/:orderId</code></td><td>Path parameters anchor the request to identity, while query parameters only shape the returned view.</td></tr>
</tbody>
</table>

<h4>Query Parameters</h4>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>Query parameters are key-value pairs added after <code>?</code> to change how the server returns a result without changing the core path.</td><td><code>/api/users?role=admin&amp;page=2&amp;sort=name</code></td><td>Query params shape the result set without changing identity.</td></tr>
<tr><td><strong>Why</strong></td><td>They let the client filter, paginate, sort, search, or toggle optional behaviors without creating a new endpoint for each variation.</td><td><code>?role=admin</code> filters, <code>?page=2</code> paginates, <code>?sort=name</code> sorts</td><td>They describe a view of the resource collection rather than a new resource.</td></tr>
<tr><td><strong>When</strong></td><td>Use them when the client needs optional controls or a narrower result set. Some APIs also document specific query parameters as required for a certain report or search operation.</td><td><code>/api/reports?from=2026-01-01&amp;to=2026-01-31</code></td><td>Optional and required query parameters are both part of the endpoint contract.</td></tr>
<tr><td><strong>Where</strong></td><td>They appear after <code>?</code> at the end of the URL, and multiple values are joined with <code>&amp;</code>.</td><td><code>?page=2&amp;limit=20</code></td><td>The backend usually receives them as strings first, then parses and converts them into typed values.</td></tr>
<tr><td><strong>Who</strong></td><td>The client chooses the query parameters, and the backend controller or service validates them before turning them into filters, limits, offsets, or sort rules.</td><td>A frontend sends <code>page=2</code>, and the server turns it into pagination logic.</td><td>Backend parsing decides whether a query value is valid, defaulted, ignored, or rejected.</td></tr>
<tr><td><strong>How</strong></td><td>The server reads each parameter, validates allowed values, applies defaults when needed, then maps the result to filtering, pagination, and sorting behavior.</td><td><code>/api/users?role=admin&amp;page=2&amp;sort=name</code></td><td>Query parameters shape the returned dataset while the path still points to the same resource collection.</td></tr>
</tbody>
</table>

<h4>Headers</h4>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>Headers are key-value lines that describe how the request should be processed. Common ones include <code>Content-Type</code>, <code>Accept</code>, <code>Authorization</code>, and <code>Cache-Control</code>.</td><td><code>Content-Type: application/json</code></td><td>Headers act as the control plane for request and response.</td></tr>
<tr><td><strong>Why</strong></td><td>They keep metadata separate from the body. This tells the server what format was sent, what format is preferred in return, whether a token is present, and how caching should behave.</td><td><code>Accept: application/json</code></td><td>Headers carry negotiation, identity, and caching rules without changing the resource path.</td></tr>
<tr><td><strong>When</strong></td><td>Use headers when the request needs content negotiation, authentication, cache instructions, compression hints, or other transport-level rules.</td><td><code>Authorization: Bearer &lt;token&gt;</code> on a protected endpoint</td><td>The same endpoint can behave differently depending on header values.</td></tr>
<tr><td><strong>Where</strong></td><td>Headers sit between the request line and the body, so proxies, gateways, and the application can inspect them before reading the payload.</td><td><code>Cache-Control: no-cache</code></td><td>Infrastructure layers often enforce auth, caching, and policy checks from headers first.</td></tr>
<tr><td><strong>Who</strong></td><td>Clients send request headers, servers validate them, and responses also send headers back. In token-based flows, the client adds a bearer token and the server verifies it before allowing access.</td><td><code>Authorization: Bearer eyJ...</code></td><td>Headers coordinate client, gateway, cache, and server behavior across the full request path.</td></tr>
<tr><td><strong>How</strong></td><td><code>Content-Type</code> tells the server what the body format is, <code>Accept</code> tells the server what response format the client wants, <code>Authorization</code> carries credentials, and <code>Cache-Control</code> influences reuse rules.</td><td><code>Content-Type: application/json</code><br><code>Accept: application/json</code><br><code>Cache-Control: no-cache</code></td><td>Headers enable negotiation and policy enforcement before the application trusts the payload.</td></tr>
</tbody>
</table>

<h4>Body</h4>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>The body is the optional payload that carries the request data itself. In REST APIs, it often contains the fields used to create or update a resource.</td><td><code>{ "name": "Ava", "email": "ava@example.com", "role": "student" }</code></td><td>The body carries state mutation data.</td></tr>
<tr><td><strong>Why</strong></td><td>It keeps business data out of the URL and lets the client send structured input such as objects, arrays, or files.</td><td><code>POST /api/users</code> with user details in JSON</td><td>The body is the payload, while the HTTP request is the transport envelope around it.</td></tr>
<tr><td><strong>When</strong></td><td>It is common with <code>POST</code>, <code>PUT</code>, and <code>PATCH</code>, because those methods usually create or change server-side state. Many <code>GET</code> requests do not use a body at all.</td><td><code>PATCH /api/users/42</code> with <code>{ "role": "admin" }</code></td><td>Body usage follows method semantics more than URL shape.</td></tr>
<tr><td><strong>Where</strong></td><td>The body comes after the headers, and the server reads it based on the declared <code>Content-Type</code>. The transport layer moves raw bytes, then the application layer parses them into usable data.</td><td><code>Content-Type: application/json</code> followed by JSON content</td><td>Parsing turns network bytes into application objects that business logic can validate.</td></tr>
<tr><td><strong>Who</strong></td><td>The client sends the body, and the server is responsible for validating it against schema expectations, required fields, types, and business rules before saving or applying changes.</td><td>A server rejects a request if <code>email</code> is missing or badly formatted.</td><td>Validation layers convert untrusted input into trusted application data.</td></tr>
<tr><td><strong>How</strong></td><td>The body should follow the API schema, stay focused on the requested change, and remain reasonably sized. Large uploads often use <code>multipart/form-data</code> or streaming instead of one large JSON payload.</td><td><code>multipart/form-data</code> for an image upload</td><td>Payload size affects latency, parsing cost, memory use, request limits, and overall system performance.</td></tr>
</tbody>
</table>
<p>Not every request uses every part. A simple <code>GET /api/users</code> may use only the URL, while an authenticated <code>PATCH /api/users/42?notify=true</code> request may combine the URL, path parameters, query parameters, headers, and body together.</p>

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

<h2>Path vs Query</h2>
<p>There are two ways to pass data in a URL, each with a clear purpose:</p>
<ul>
<li><strong>Path parameter</strong> — identifies a specific resource. It is part of the URL path: <code>/api/users/42</code> (42 is the path parameter).</li>
<li><strong>Query parameter</strong> — filters or modifies the result. It is appended after <code>?</code>: <code>/api/users?role=admin&amp;page=2</code>.</li>
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

<h2>Error Example</h2>
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
<table>
<thead>
<tr><th>Format</th><th>What</th><th>When to Use</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><code>JSON</code></td><td>Structured key-value data using objects and arrays.</td><td>Default for most REST request and response bodies.</td><td><code>{ "name": "Ava", "role": "student" }</code></td><td>JSON is the reference data model for modern API payloads.</td></tr>
<tr><td><code>form-data</code></td><td>Multipart payload made of separate named parts.</td><td>File uploads with text fields such as profile forms.</td><td><code>avatar=[file], name=Ava</code></td><td><code>multipart/form-data</code> separates binary files from metadata.</td></tr>
<tr><td><code>x-www-form-urlencoded</code></td><td>Compact key-value body encoded like a query string.</td><td>Simple HTML forms and legacy endpoints.</td><td><code>name=Ava&amp;role=student</code></td><td>Highly compatible, but weak for nested data and files.</td></tr>
<tr><td><code>raw</code></td><td>Plain text or custom payload sent exactly as written.</td><td>Webhooks, signatures, or simple text bodies.</td><td><code>Hello from client</code></td><td>The application must interpret the payload itself.</td></tr>
<tr><td><code>binary</code></td><td>Raw file bytes without text encoding.</td><td>Streaming images, videos, archives, or documents.</td><td><code>application/octet-stream</code></td><td>Efficient for files, but not human-readable.</td></tr>
<tr><td><code>GraphQL</code></td><td>Query-driven request payload, usually sent as JSON.</td><td>Flexible data fetching when clients choose fields.</td><td><code>{ "query": "{ user(id: 42) { name } }" }</code></td><td>GraphQL shifts responsibility from many endpoints to schema and query structure.</td></tr>
<tr><td><code>JavaScript</code></td><td>Executable script or runtime configuration snippet.</td><td>Rare browser-specific integrations or legacy script delivery.</td><td><code>window.appConfig = { apiBase: "/api" }</code></td><td>Powerful in browsers, but carries stronger security constraints.</td></tr>
<tr><td><code>HTML</code></td><td>Rendered markup for pages or fragments.</td><td>Server-rendered content, widgets, or partial page updates.</td><td><code>&lt;div&gt;Profile&lt;/div&gt;</code></td><td>HTML returns presentation, not only data.</td></tr>
<tr><td><code>XML</code></td><td>Hierarchical tag-based structured format.</td><td>Legacy systems, enterprise integrations, and feeds.</td><td><code>&lt;user id="42"&gt;&lt;name&gt;Ava&lt;/name&gt;&lt;/user&gt;</code></td><td>Verbose, but strong for schema-driven compatibility.</td></tr>
</tbody>
</table>
<p>The format is usually declared with the <code>Content-Type</code> header so both client and server know how to handle the data correctly.</p>

<h3>JSON</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>JSON is a text-based structured format that represents data as key-value objects and arrays.</td><td><code>{ "id": 42, "name": "Alice" }</code></td><td>JSON is the default representation model for most REST APIs.</td></tr>
<tr><td><strong>Why</strong></td><td>It is readable, language-agnostic, and easy for clients and servers to exchange.</td><td><code>{ "role": "student", "active": true }</code></td><td>Its cross-language compatibility lowers integration cost.</td></tr>
<tr><td><strong>When</strong></td><td>Use it for most structured business data in request and response bodies.</td><td><code>POST /api/users</code> with JSON payload</td><td>JSON works best for records, collections, and configuration-like data.</td></tr>
<tr><td><strong>Where</strong></td><td>It appears in the message body with <code>Content-Type: application/json</code>.</td><td><code>Content-Type: application/json</code></td><td>Middleware often parses JSON before controllers run.</td></tr>
<tr><td><strong>Who</strong></td><td>Clients serialize native objects into JSON, and servers parse and validate them against expected schemas.</td><td>A frontend sends a user object, and the backend validates its fields.</td><td>Schema validation sits between raw JSON parsing and business logic.</td></tr>
<tr><td><strong>How</strong></td><td>The payload is sent as text, parsed into native objects, and then processed. The trade-off is that JSON is not efficient for raw binary files.</td><td><code>[{ "id": 1 }, { "id": 2 }]</code></td><td>JSON is portable and debuggable, but files usually need another format.</td></tr>
</tbody>
</table>

<h3>form-data</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td><code>form-data</code> is a multipart body made of separate named parts, where each part can contain text or a file.</td><td><code>avatar=[file], name=Ava</code></td><td><code>multipart/form-data</code> enables file transfer with metadata separation.</td></tr>
<tr><td><strong>Why</strong></td><td>It lets the client upload files and normal fields together in one request.</td><td>Profile image plus <code>displayName</code></td><td>Files and form fields can travel in one transport envelope.</td></tr>
<tr><td><strong>When</strong></td><td>Use it for image uploads, document submissions, and other file-oriented forms.</td><td><code>POST /api/profile/avatar</code></td><td>It is the standard choice when binary content and text must be combined.</td></tr>
<tr><td><strong>Where</strong></td><td>It appears in the request body with a boundary-aware header such as <code>Content-Type: multipart/form-data</code>.</td><td><code>Content-Type: multipart/form-data; boundary=---</code></td><td>The boundary tells the server where each part begins and ends.</td></tr>
<tr><td><strong>Who</strong></td><td>Browsers and clients build the multipart body, and backend parsers split it into files and text fields.</td><td>A backend extracts <code>req.file</code> and <code>req.body.name</code>.</td><td>Specialized upload middleware usually handles multipart parsing.</td></tr>
<tr><td><strong>How</strong></td><td>Each part carries its own headers and content. The trade-off is more parsing complexity than JSON, but broader support for uploads.</td><td>One part for a JPEG, one part for a user ID</td><td>Multipart uploads are flexible, but heavier than plain JSON requests.</td></tr>
</tbody>
</table>

<h3>x-www-form-urlencoded</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>This format encodes the body as simple key-value pairs joined by <code>&amp;</code>.</td><td><code>email=ava%40example.com&amp;role=student</code></td><td>It reuses the same encoding style seen in query strings.</td></tr>
<tr><td><strong>Why</strong></td><td>It is compact and widely supported by browsers, forms, and older servers.</td><td>Login or token exchange forms</td><td>Compatibility is its main strength.</td></tr>
<tr><td><strong>When</strong></td><td>Use it for small form submissions, search forms, or legacy endpoints that expect simple fields.</td><td><code>POST /oauth/token</code></td><td>It works well when the payload is flat and text-only.</td></tr>
<tr><td><strong>Where</strong></td><td>It appears in the request body with <code>Content-Type: application/x-www-form-urlencoded</code>.</td><td><code>Content-Type: application/x-www-form-urlencoded</code></td><td>Servers decode it into field dictionaries before validation.</td></tr>
<tr><td><strong>Who</strong></td><td>Browsers and HTTP clients encode the data, and server parsers decode it back into field values.</td><td>A backend reads <code>email</code> and <code>password</code> from the body.</td><td>The server still validates types and required fields after decoding.</td></tr>
<tr><td><strong>How</strong></td><td>Values are percent-encoded as text. The trade-off is weak support for nested objects and no native support for file uploads.</td><td><code>grant_type=client_credentials&amp;scope=read</code></td><td>It is simple and portable, but not ideal for complex payloads.</td></tr>
</tbody>
</table>

<h3>raw</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td><code>raw</code> means the body is sent as plain text or custom bytes without being wrapped in a higher-level data structure.</td><td><code>Hello from client</code></td><td>The application, not the format, defines the meaning of the payload.</td></tr>
<tr><td><strong>Why</strong></td><td>It preserves the exact payload, which is useful for plain text, signed messages, or custom protocols.</td><td>Webhook signature verification</td><td>Exact byte preservation matters in security-sensitive integrations.</td></tr>
<tr><td><strong>When</strong></td><td>Use it when a service expects plain text, exact raw bytes, or a custom media type instead of JSON.</td><td><code>text/plain</code> note submission</td><td>It fits special cases more than mainstream API payloads.</td></tr>
<tr><td><strong>Where</strong></td><td>It appears in the body with a media type such as <code>text/plain</code> or another custom <code>Content-Type</code>.</td><td><code>Content-Type: text/plain</code></td><td>The media type becomes the main hint for backend interpretation.</td></tr>
<tr><td><strong>Who</strong></td><td>The client sends the raw bytes, and the backend reads them without automatic JSON or form parsing.</td><td>A server reads the request body as one text blob.</td><td>Manual parsing gives flexibility, but increases application responsibility.</td></tr>
<tr><td><strong>How</strong></td><td>The server processes the body exactly as received. The trade-off is flexibility versus the loss of shared structure and automatic validation helpers.</td><td>Custom signed payload body</td><td>Raw bodies are powerful, but they push parsing and validation logic into the application layer.</td></tr>
</tbody>
</table>

<h3>binary</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td><code>binary</code> sends raw file bytes instead of a text-based structure.</td><td><code>application/octet-stream</code></td><td>Binary prioritizes transport efficiency over readability.</td></tr>
<tr><td><strong>Why</strong></td><td>It avoids converting files into text, which is more efficient for large media or archive content.</td><td>Uploading a ZIP archive</td><td>Streaming bytes reduces unnecessary encoding overhead.</td></tr>
<tr><td><strong>When</strong></td><td>Use it for file uploads, downloads, media streaming, and storage pipelines.</td><td><code>PUT /api/files/report.pdf</code></td><td>Binary is best when the payload itself is the file.</td></tr>
<tr><td><strong>Where</strong></td><td>It appears directly in the body with a binary media type such as <code>application/octet-stream</code> or a specific file type.</td><td><code>Content-Type: application/pdf</code></td><td>Metadata often moves to headers or path parameters when the body is pure bytes.</td></tr>
<tr><td><strong>Who</strong></td><td>Upload clients stream the bytes, and storage or media services receive them through stream-aware handlers.</td><td>A server streams the upload into object storage.</td><td>Binary handling often depends on streaming rather than full in-memory parsing.</td></tr>
<tr><td><strong>How</strong></td><td>The transport sends bytes exactly as they are. The trade-off is strong performance for files, but weak human readability and less self-describing structure.</td><td>Video upload stream</td><td>Binary formats usually need external metadata to describe the content safely.</td></tr>
</tbody>
</table>

<h3>GraphQL</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>GraphQL requests carry a query and optional variables, usually inside a JSON payload over HTTP.</td><td><code>{ "query": "{ user(id: 42) { name } }" }</code></td><td>GraphQL changes the payload contract from endpoint-driven to query-driven.</td></tr>
<tr><td><strong>Why</strong></td><td>It lets the client request only the fields it needs instead of accepting a fixed response shape from many separate endpoints.</td><td>Ask only for <code>name</code> and <code>email</code></td><td>Field selection moves more control to the client.</td></tr>
<tr><td><strong>When</strong></td><td>Use it when clients need flexible data fetching across related resources and want to avoid over-fetching.</td><td>Mobile app dashboards with custom field needs</td><td>GraphQL is useful for rich clients, but adds schema and resolver complexity.</td></tr>
<tr><td><strong>Where</strong></td><td>It often appears in a JSON body sent to a single endpoint such as <code>/graphql</code>.</td><td><code>POST /graphql</code></td><td>The query structure matters more than the path itself.</td></tr>
<tr><td><strong>Who</strong></td><td>The client builds the query, and the GraphQL server parses it against a schema before resolvers fetch the data.</td><td>A GraphQL resolver loads a user by ID.</td><td>Schema validation replaces much of the route-by-route contract style of REST.</td></tr>
<tr><td><strong>How</strong></td><td>The server parses the query, validates it, resolves fields, and returns a shaped response. The trade-off is flexibility versus harder caching and operational control.</td><td>Query plus <code>variables</code> in JSON</td><td>GraphQL shifts responsibility from many endpoints to schema design, query cost, and resolver performance.</td></tr>
</tbody>
</table>

<h3>JavaScript</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>JavaScript format means the response body contains executable script or a runtime configuration snippet.</td><td><code>window.appConfig = { apiBase: "/api" }</code></td><td>JavaScript is executable content, not just passive data.</td></tr>
<tr><td><strong>Why</strong></td><td>It can configure browser behavior or deliver script-based integrations, especially in older or specialized setups.</td><td>Legacy widget bootstrap script</td><td>The server can shape client behavior directly through code delivery.</td></tr>
<tr><td><strong>When</strong></td><td>Use it only when a browser truly needs script output. It is rare in modern public API design.</td><td><code>application/javascript</code> response</td><td>Modern APIs prefer JSON because script delivery raises security and coupling concerns.</td></tr>
<tr><td><strong>Where</strong></td><td>It appears in the body with a JavaScript media type such as <code>application/javascript</code>.</td><td><code>Content-Type: application/javascript</code></td><td>Browsers treat it as code, not as plain data.</td></tr>
<tr><td><strong>Who</strong></td><td>The server emits the script, and the browser or client runtime executes or loads it.</td><td>A page loads a remote config script</td><td>The execution environment becomes part of the compatibility contract.</td></tr>
<tr><td><strong>How</strong></td><td>The client fetches the script and evaluates it in a JavaScript runtime. The trade-off is strong browser integration versus higher security, caching, and maintenance risk.</td><td>Dynamic script tag response</td><td>JavaScript payloads are powerful, but they require stricter trust and CSP policies.</td></tr>
</tbody>
</table>

<h3>HTML</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>HTML is markup that represents rendered content such as pages, fragments, or embedded widgets.</td><td><code>&lt;div class="profile"&gt;Alice&lt;/div&gt;</code></td><td>HTML returns presentation-ready output, not only raw data.</td></tr>
<tr><td><strong>Why</strong></td><td>It lets the server send content that the browser can display immediately without client-side templating.</td><td>Server-rendered profile card</td><td>Presentation logic stays closer to the server response.</td></tr>
<tr><td><strong>When</strong></td><td>Use it for server-rendered pages, SSR fragments, emails, or embedded content blocks.</td><td><code>GET /profile/42</code> returning markup</td><td>HTML is useful when display, not data reuse, is the main goal.</td></tr>
<tr><td><strong>Where</strong></td><td>It appears in the body with <code>Content-Type: text/html</code>.</td><td><code>Content-Type: text/html</code></td><td>The browser can render it directly without converting it into objects first.</td></tr>
<tr><td><strong>Who</strong></td><td>Template engines or SSR frameworks generate the HTML, and browsers render it.</td><td>A server returns a rendered dashboard fragment</td><td>Compatibility is strongest in browsers, weaker in pure machine-to-machine clients.</td></tr>
<tr><td><strong>How</strong></td><td>The server builds markup from templates and data. The trade-off is fast rendering for users versus less reuse for API consumers that want raw structured data.</td><td>Rendered card component HTML</td><td>HTML mixes data and presentation, which is useful for UI delivery but less neutral than JSON.</td></tr>
</tbody>
</table>

<h3>XML</h3>
<table>
<thead>
<tr><th>Aspect</th><th>Explanation</th><th>Example</th><th>System Insight</th></tr>
</thead>
<tbody>
<tr><td><strong>What</strong></td><td>XML is a hierarchical structured format built from tags, attributes, and nested elements.</td><td><code>&lt;user id="42"&gt;&lt;name&gt;Ava&lt;/name&gt;&lt;/user&gt;</code></td><td>XML emphasizes explicit structure and schema-driven contracts.</td></tr>
<tr><td><strong>Why</strong></td><td>It supports rich structure, namespaces, and formal schemas used by many enterprise and legacy systems.</td><td>SOAP or feed payload</td><td>XML remains important where strict interoperability rules already exist.</td></tr>
<tr><td><strong>When</strong></td><td>Use it for legacy integrations, enterprise messaging, industry standards, and older service ecosystems.</td><td>Payment gateway or ERP integration</td><td>XML is often chosen for compatibility, not simplicity.</td></tr>
<tr><td><strong>Where</strong></td><td>It appears in the body with media types such as <code>application/xml</code> or <code>text/xml</code>.</td><td><code>Content-Type: application/xml</code></td><td>XML parsers and schemas usually sit in front of application logic.</td></tr>
<tr><td><strong>Who</strong></td><td>Clients and servers with XML parsers exchange it, often under contract-driven integration rules.</td><td>A backend validates the XML against an XSD.</td><td>Schema validation is a common part of XML-based compatibility guarantees.</td></tr>
<tr><td><strong>How</strong></td><td>The payload is parsed as tagged text and may be validated against a schema. The trade-off is strong structure and compatibility versus more verbosity than JSON.</td><td>Nested XML document</td><td>XML is expressive and contract-friendly, but usually heavier to read and maintain.</td></tr>
</tbody>
</table>

<p>Among these formats, JSON is the one you will see most often in beginner-friendly REST APIs. The next section keeps the original JSON explanation and examples intact.</p>

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
