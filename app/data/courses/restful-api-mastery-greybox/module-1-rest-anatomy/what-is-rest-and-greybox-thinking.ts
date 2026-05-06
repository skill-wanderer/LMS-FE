// app/data/courses/restful-api-mastery-greybox/module-1-rest-anatomy/what-is-rest-and-greybox-thinking.ts

import { createLesson } from '~/data/core/lesson'

const lesson = createLesson({
  id: 'lesson-rest-1-1',
  slug: 'what-is-rest-and-greybox-thinking',
  title: 'What is REST & Greybox Thinking',
  type: 'lesson',
  status: 'published',
  order: 1,
  durationMinutes: 10,
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
<img src="https://cdn.jsdelivr.net/gh/reltronersk/media@main/what-is-rest-and-greybox-thinking.png" alt="What is REST &amp; Greybox Thinking" />

    <h2>What</h2>
    <h3>What is REST?</h3>
    <p><strong>REST (Representational State Transfer)</strong> is an architectural style for APIs built on top of HTTP. It exists to make distributed systems easier to understand because clients and servers are often developed, deployed, and maintained separately. Without a predictable contract, every endpoint becomes a custom negotiation. With REST, the method, URL, headers, and status code already communicate a large part of the system's intent.</p>
    <p>In REST, the system is organized around <strong>resources</strong> such as users, lessons, orders, or products. Those resources are exposed through URLs, and the client uses standard HTTP methods to express what should happen next.</p>
    <ul>
      <li><strong>GET</strong> asks to read data.</li>
      <li><strong>POST</strong> asks to create or trigger something.</li>
      <li><strong>PUT</strong> asks to replace an existing resource.</li>
      <li><strong>DELETE</strong> asks to remove a resource.</li>
      <li><strong>PATCH</strong> updates part of a resource without replacing the entire object.</li>
      <li><strong>HEAD</strong> retrieves headers only, useful for checking existence or metadata.</li>
      <li><strong>OPTIONS</strong> describes available communication methods for a resource.</li>
    </ul>
    <p>The cause-and-effect relationship is important: because the contract is standardized, engineers can infer expected behavior before they ever inspect backend code. That predictability reduces integration mistakes and makes failures easier to classify.</p>

    <h3>What is Greybox Thinking?</h3>
    <p><strong>Greybox thinking</strong> means reasoning with <strong>partial internal understanding</strong>. You do not treat the system as a total mystery, and you do not require full source-code access either. Instead, you use visible system signals such as routes, headers, response codes, validation errors, latency, and payload shape to infer what is likely happening inside.</p>
    <ul>
      <li><strong>Blackbox thinking</strong> observes only input and output. It sees what happened, but often cannot explain why.</li>
      <li><strong>Whitebox thinking</strong> has full internal visibility. It can inspect code paths, queries, and implementation details directly.</li>
      <li><strong>Greybox thinking</strong> sits between them. It uses enough internal model awareness to form disciplined explanations without pretending to know every hidden detail.</li>
    </ul>
    <p>This matters because most API consumers live in the grey zone. They can see the request and the response, they may know the endpoint contract, and they may understand the probable layers inside, but they do not control every service behind the call.</p>

    <h2>Blackbox vs Whitebox vs Greybox Thinking</h2>
    <p>
      Understanding these three perspectives is critical because they define how deeply you can reason about a system.
    </p>
    <table>
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Blackbox</th>
          <th>Whitebox</th>
          <th>Greybox</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>What</strong></td>
          <td>You only see inputs and outputs.</td>
          <td>You see and understand the full internal implementation.</td>
          <td>You see inputs/outputs and partially infer internal behavior.</td>
        </tr>
        <tr>
          <td><strong>Visibility</strong></td>
          <td>No access to internal logic.</td>
          <td>Full access to code, database, and system design.</td>
          <td>Limited visibility but strong inference ability.</td>
        </tr>
        <tr>
          <td><strong>Reasoning Depth</strong></td>
          <td>Shallow reasoning based on observation.</td>
          <td>Deep reasoning based on actual implementation.</td>
          <td>Deep reasoning based on patterns and mental models.</td>
        </tr>
        <tr>
          <td><strong>Dependency</strong></td>
          <td>Depends heavily on documentation.</td>
          <td>Depends on direct system access.</td>
          <td>Depends on experience and system thinking.</td>
        </tr>
        <tr>
          <td><strong>Use Case</strong></td>
          <td>API consumers, beginners.</td>
          <td>Backend engineers with full access.</td>
          <td>Frontend engineers, integrators, debugging without full access.</td>
        </tr>
        <tr>
          <td><strong>Strength</strong></td>
          <td>Simple and fast.</td>
          <td>Accurate and complete.</td>
          <td>Flexible and powerful in real-world scenarios.</td>
        </tr>
        <tr>
          <td><strong>Limitation</strong></td>
          <td>Hard to debug deeper issues.</td>
          <td>Not always accessible in real systems.</td>
          <td>Requires strong mental models and experience.</td>
        </tr>
        <tr>
          <td><strong>Real API Scenario</strong></td>
          <td>"I send a request, I get a response."</td>
          <td>"I know exactly how the server processes this request."</td>
          <td>"I can infer why the server behaves this way even without seeing the code."</td>
        </tr>
      </tbody>
    </table>

    <p>
      In real-world engineering, you rarely operate in a pure blackbox or pure whitebox environment.
      Most of the time, you are in a <strong>greybox situation</strong>:
      you do not see the entire system, but you must still reason about it effectively.
    </p>

    <p>
      For example, when an API returns a <code>500 Internal Server Error</code>,
      a blackbox approach stops at "the server failed".
      A whitebox approach would inspect logs and code.
      But a greybox approach allows you to infer:
    </p>
    <ul>
      <li>Which part of the system likely failed</li>
      <li>Whether the issue is validation, database, or business logic</li>
      <li>How to adjust the request or debug further without direct access</li>
    </ul>

    <p>
      This is why greybox thinking is one of the most important skills in modern software engineering.
    </p>

    <h2>Why</h2>
    <h3>Why REST Exists</h3>
    <p>REST exists because networked systems need a shared grammar. A frontend team, a mobile app, and a backend service must coordinate across a network boundary, and that boundary introduces delay, failure, and ambiguity. REST reduces that ambiguity by giving both sides a stable set of expectations: the URL identifies the resource, the method identifies intent, headers carry metadata, and the response code communicates outcome.</p>
    <p>The effect is practical, not theoretical. Because the contract is predictable, teams can build independently, tools can automate requests, documentation becomes clearer, and debugging becomes faster. REST is valuable not because it is fashionable, but because predictable contracts reduce system friction.</p>

    <h3>Why Greybox Thinking Is Important</h3>
    <p>Greybox thinking is important because real engineering work rarely happens with perfect visibility. Frontend developers consume APIs they did not build. QA engineers test flows without owning the backend. Integration engineers depend on third-party services they cannot inspect. If they stay purely blackbox, many failures look random. If they think in greybox terms, those same failures become explainable patterns.</p>
    <p>Cause leads directly to effect here: when you understand how a request is <strong>likely</strong> routed, authenticated, validated, processed, and returned, you stop reacting to symptoms and start reasoning about mechanisms.</p>

    <h2>When</h2>
    <h3>When Developers Need Greybox Thinking</h3>
    <p>Developers need greybox thinking when the output alone is not enough to guide the next step. That usually happens during debugging, API integration, automation, security checks, and production issue investigation.</p>
    <ul>
      <li>When a request returns <strong>401</strong>, you need to reason about the authentication layer, not just note that access failed.</li>
      <li>When a request returns <strong>400</strong>, you need to think about validation, payload shape, and required fields.</li>
      <li>When a request returns <strong>404</strong>, you need to distinguish between a missing route and a missing resource.</li>
      <li>When a request is slow, you need to consider caching, upstream dependencies, or expensive server-side work.</li>
    </ul>
    <p>This is also when blackbox thinking starts to fail. Blackbox observation can tell you <strong>that</strong> a failure happened, but not enough about the hidden system path that produced it. Greybox reasoning fills that gap without claiming certainty it does not have.</p>

    <h2>Where</h2>
    <h3>Where REST Is Used</h3>
    <p>REST is used wherever systems need to exchange data across boundaries. That includes browser-to-backend communication, mobile apps calling application servers, internal microservices exchanging data, third-party integrations, and automation tools interacting with public or private APIs.</p>
    <ul>
      <li><strong>Frontend to backend</strong> so pages can load user data, products, or content.</li>
      <li><strong>Mobile apps to backend</strong> so native clients can authenticate and sync data.</li>
      <li><strong>Service to service</strong> so one internal component can request data from another.</li>
      <li><strong>External integrations</strong> so payment, email, analytics, or identity providers can be called through a standard interface.</li>
    </ul>
    <p>Greybox thinking matters in all of these places because each one creates partial visibility. You can see the exchange boundary, but not always every step behind it.</p>

    <h2>Who</h2>
    <h3>Who Uses REST?</h3>
    <p>REST is used by anyone building or consuming software systems that communicate over HTTP.</p>
    <ul>
      <li><strong>Frontend developers</strong> use REST to fetch and submit application data.</li>
      <li><strong>Backend developers</strong> design and maintain REST endpoints as system contracts.</li>
      <li><strong>Mobile developers</strong> depend on REST to connect apps to remote services.</li>
      <li><strong>QA and automation engineers</strong> use REST to test workflows, edge cases, and failures directly.</li>
      <li><strong>API consumers and integrators</strong> rely on REST to connect external systems together.</li>
    </ul>

    <h3>Who Benefits from Greybox Thinking?</h3>
    <p>Anyone who must explain system behavior benefits from greybox thinking, but it is especially useful for people who do not own the full stack. They need enough internal model awareness to ask better questions, isolate failures faster, and communicate clearly with teams that do control the missing layers.</p>

    <h2>How</h2>
    <h3>How REST Works at a High Level</h3>
    <p>A useful analogy is a restaurant with a visible dining room and an invisible kitchen. The <strong>menu</strong> is like the API contract because it tells you what can be requested. The <strong>order slip</strong> is the HTTP request because it carries your exact instruction. The <strong>kitchen workflow</strong> is the backend logic because it decides how the request is processed. The <strong>meal returned to the table</strong> is the response because it shows the result of that internal work. You do not stand in the kitchen, but you can still reason about what happened by looking at what you ordered, how long it took, and what arrived.</p>
    <p>That same pattern appears in a real API flow:</p>
    <ul>
      <li>The client builds a request with a method, URL, headers, and sometimes a body.</li>
      <li>The request reaches a server, gateway, or router that decides which endpoint should handle it.</li>
      <li>Authentication and validation rules may run before business logic does anything useful.</li>
      <li>The application code may call a database, cache, or another service.</li>
      <li>The server returns a response with a status code, headers, and a body.</li>
    </ul>
    <p>Because each stage adds rules, the final response is not random. It is evidence. A success code suggests the request survived all required checks. A failure code suggests it was rejected at some specific layer.</p>

    <h3>How Greybox Thinking Is Applied</h3>
    <p>Greybox thinking is applied by reading the response as a trace of hidden system behavior. You do not see every internal branch, but you infer likely branches from the clues the system exposes.</p>
    <ul>
      <li><strong>Method + URL</strong> helps you reason about routing and resource identity.</li>
      <li><strong>Headers</strong> help you reason about authentication, content negotiation, and caching.</li>
      <li><strong>Body shape</strong> helps you reason about validation and server expectations.</li>
      <li><strong>Status code</strong> helps you reason about which class of failure or success occurred.</li>
      <li><strong>Timing and consistency</strong> help you reason about hidden dependencies, caching, or slow downstream services.</li>
    </ul>
    <p>For example, if a request returns <strong>401 Unauthorized</strong>, a greybox thinker infers that the request likely failed before business logic reached the data layer. If a request returns <strong>200 OK</strong> but the data is stale, the engineer may infer caching behavior or delayed propagation. If a request returns <strong>400 Bad Request</strong> only after a field was added, the likely cause is schema or validation rejection.</p>
    <p>That is the practical value of this mindset: you move from “something broke” to “this request likely failed at authentication, validation, routing, or data lookup.” The explanation becomes sharper, and the next action becomes more precise.</p>

    <h2>Summary</h2>
    <ul>
      <li><strong>REST</strong> gives distributed systems a predictable communication contract.</li>
      <li><strong>Greybox thinking</strong> gives engineers a practical way to reason about hidden behavior without full internal access.</li>
      <li>Together, they make API work more explainable because the contract is visible even when the full implementation is not.</li>
      <li>The more clearly you can connect request signals to likely internal behavior, the better you can debug, communicate, and design API interactions.</li>
    </ul>
  </div>

  <div class="format-content" data-format="video" data-content="video" style="display:none;">
    <h3>🎬 Video Version</h3>
    <div class="video-embed">
      <iframe title="What is REST &amp; Greybox Thinking lesson video" src="https://www.youtube-nocookie.com/embed/TZDal_GF89E" width="100%" height="500" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  </div>

  <div class="format-content" data-format="audio" data-content="audio" style="display:none;">
    <h3>🎧 Audio Version</h3>
    <div class="audio-embed">
      <iframe title="What is REST &amp; Greybox Thinking lesson audio" style="border-radius:12px" src="https://open.spotify.com/embed/episode/0EuxWd9RprqBC58V79pYjq" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
  </div>

  <div class="format-content" data-format="slides" data-content="slides" style="display:none;">
    <h3>📊 Slide Version</h3>
    <div class="slides-embed">
      <iframe src="https://cdn.jsdelivr.net/gh/reltronersk/media@main/what-is-rest-and-greybox-thinking.pdf" width="100%" height="600" style="border:1px solid rgba(255,255,255,0.1);border-radius:8px;" allowfullscreen></iframe>
    </div>
  </div>

</div>`,
})

export default lesson