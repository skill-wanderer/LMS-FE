<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'

// Active Assignment Index (0 = Simple Welcome, 1 = Welcome Props, 2 = Product Card, 3 = Notification Banner)
const selectedAssignment = ref(0)

// Explorer Sidebar collapsed state
const sidebarOpen = ref(true)
const activeSidebarTab = ref('explorer') // 'explorer' | 'search' | 'info'

// Resizable workspace pane widths in %
const leftWidth = ref(25)
const centerWidth = ref(43)
const playgroundContainerRef = ref<HTMLElement | null>(null)
const isResizingLeft = ref(false)
const isResizingRight = ref(false)

// Fullscreen toggle state
const isFullscreen = ref(false)

// Auto-Save State
const isSaving = ref(false)
const lastSavedTime = ref('')
const hasUnsavedChanges = ref(false)

// Editor configuration settings
const settingsOpen = ref(false)
const settings = ref({
  autoSave: true,
  lineWrap: true,
  fontSize: 13,
  theme: 'dark',
  lineNumbers: true,
  activeLine: true
})

// Current theme: 'dark' | 'light' (default to dark)
const theme = ref('dark')

// Window Width tracker for responsive layouts
const windowWidth = ref(1200)

const updateWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

const deviceType = computed(() => {
  if (windowWidth.value >= 1440) return 'desktop'
  if (windowWidth.value >= 1024) return 'laptop'
  if (windowWidth.value >= 768) return 'tablet'
  return 'mobile'
})

// Tablet collapsible state
const tabletInstructionsOpen = ref(false)
const tabletConsoleOpen = ref(true)

// Assignments Definition based on Module 1 Lesson 1 curriculum
const assignments = [
  {
    title: '1. Simple Welcome Badge',
    objective: 'Create a basic functional component to understand component structure.',
    outcome: 'Learn how to declare a functional component in React and render JSX elements.',
    instructions: 'Create a component called `WelcomeBadge`. It should return a `div` containing an `h1` with "Welcome, User!" and a `p` tag with a greeting. Render it at the bottom: `<WelcomeBadge />`.',
    expectedOutput: 'Welcome, User!\nHello, glad you are here.',
    template: `// 1. Simple Welcome Badge
function WelcomeBadge() {
  return (
    <div className="badge">
      <h1>Welcome, User!</h1>
      <p>Hello, glad you are here.</p>
    </div>
  );
}

// Render your component below
<WelcomeBadge />`,
    checklist: [
      { text: 'Declare WelcomeBadge component', check: (c: string) => c.includes('function WelcomeBadge') },
      { text: 'Render Welcome, User! inside h1', check: (c: string) => c.toLowerCase().includes('welcome, user!') },
      { text: 'Call the component <WelcomeBadge />', check: (c: string) => !!c.match(/<WelcomeBadge\s*\/?>/) }
    ],
    hint: 'A component is a normal JavaScript function that returns JSX. Example: function MyComponent() { return <div>Hello</div> }'
  },
  {
    title: '2. Welcome Badge with Props',
    objective: 'Modify WelcomeBadge to receive name and role props.',
    outcome: 'Understand how to pass read-only arguments (props) to a component and render them dynamically.',
    instructions: 'Modify `WelcomeBadge` to accept `name` and `role` props. Render three different `WelcomeBadge` components passing different names and roles to each.',
    expectedOutput: '3 badges showing different names and roles (e.g. Alice, Bob, Charlie).',
    template: `// 2. Welcome Badge with Props
function WelcomeBadge({ name, role }) {
  return (
    <div className="badge">
      <h1>Welcome, {name}!</h1>
      <p>Role: {role}</p>
    </div>
  );
}

// Render three WelcomeBadge instances with different props below
<div>
  <WelcomeBadge name="Alice" role="Developer" />
  <WelcomeBadge name="Bob" role="Designer" />
  <WelcomeBadge name="Charlie" role="Product Lead" />
</div>`,
    checklist: [
      { text: 'Accept destructuring arguments { name, role }', check: (c: string) => c.includes('{ name, role }') || c.includes('props') },
      { text: 'Render at least 3 WelcomeBadge components', check: (c: string) => {
          const matches = [...c.matchAll(/<WelcomeBadge\s+[^>]*\/>/g)]
          return matches.length >= 3
        }
      }
    ],
    hint: 'Props are passed like HTML attributes: name="Alice" role="Developer". In the component definition: function MyComponent({ name }) { ... }'
  },
  {
    title: '3. Product Card Grid',
    objective: 'Build a reusable ProductCard component with multiple props.',
    outcome: 'Learn how to render complex layouts and style component grids using props.',
    instructions: 'Build a `ProductCard` component that accepts `imageUrl`, `title`, `price`, and `description` props. Use styles to make it look nice, and render a grid of four products.',
    expectedOutput: 'A grid of 4 styled ProductCards.',
    template: `// 3. Product Card Grid
function ProductCard({ imageUrl, title, price, description }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-img" />
      <h3>{title}</h3>
      <span className="price">\${price}</span>
      <p className="desc">{description}</p>
    </div>
  );
}

// Render a grid container with 4 ProductCard elements below
<div className="product-grid">
  <ProductCard 
    imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150" 
    title="Speed Runners" 
    price={99} 
    description="Engineered for high performance." 
  />
  <ProductCard 
    imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150" 
    title="Minimalist Watch" 
    price={149} 
    description="Clean, sophisticated details." 
  />
  <ProductCard 
    imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150" 
    title="Wireless Over-Ear" 
    price={199} 
    description="Studio-grade noise cancellation." 
  />
  <ProductCard 
    imageUrl="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=150" 
    title="Leather Bag" 
    price={89} 
    description="Genuine crafted leather." 
  />
</div>`,
    checklist: [
      { text: 'Declare ProductCard component function', check: (c: string) => c.includes('function ProductCard') },
      { text: 'Accept imageUrl, title, price, and description props', check: (c: string) => c.includes('imageUrl') && c.includes('title') && c.includes('price') && c.includes('description') },
      { text: 'Render a grid of 4 product cards', check: (c: string) => {
          const matches = [...c.matchAll(/<ProductCard\s+[^>]*\/>/g)]
          return matches.length >= 4
        }
      }
    ],
    hint: 'Numbers are passed in JSX using curly braces: price={99}. Double check that you invoke <ProductCard /> four times.'
  },
  {
    title: '4. Notification Banner',
    objective: 'Implement conditional rendering and class names based on props.',
    outcome: 'Learn how to apply conditional styling and conditional rendering logic in JSX.',
    instructions: 'Build a `NotificationBanner` component. It should accept `message`, `type` ("success" | "warning" | "error"), and `isDismissible` (boolean). Toggle styling based on `type`. If `isDismissible` is true, display an "X" dismiss button.',
    expectedOutput: 'A colored notification banner with conditional dismiss button.',
    template: `// 4. Notification Banner
function NotificationBanner({ message, type, isDismissible }) {
  return (
    <div className={\`banner banner-\${type}\`}>
      <span className="message">{message}</span>
      {isDismissible && <button className="close-btn">&times;</button>}
    </div>
  );
}

// Render two banners below: success and warning with close button
<div>
  <NotificationBanner message="Payment completed!" type="success" isDismissible={false} />
  <NotificationBanner message="Storage space is almost full." type="warning" isDismissible={true} />
</div>`,
    checklist: [
      { text: 'Declare NotificationBanner with message, type, and isDismissible', check: (c: string) => c.includes('message') && c.includes('type') && c.includes('isDismissible') },
      { text: 'Apply type prop to div classes', check: (c: string) => c.includes('banner-') || c.includes('style') },
      { text: 'Render close button conditionally: isDismissible && <button>', check: (c: string) => c.includes('isDismissible &&') || c.includes('isDismissible ?') }
    ],
    hint: 'In JSX, you can use the short-circuit `&&` operator to conditionally render elements: `{condition && <button>X</button>}`.'
  }
]

// Workspace File dictionary state
const activeFile = ref('App.jsx')
const files = ref<Record<string, { content: string; readOnly: boolean; language: string }>>({
  'App.jsx': { content: '', readOnly: false, language: 'javascript' },
  'index.css': {
    content: `/* CSS definitions for lesson components */
.badge {
  background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 1.25rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  margin-bottom: 1rem;
}
.badge h1 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.25rem;
}
.badge p {
  font-size: 0.85rem;
  color: #a1a1aa;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
}
.product-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1rem;
  padding: 1rem;
  text-align: left;
}
.product-img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
.product-card h3 {
  font-size: 0.9rem;
  font-weight: 750;
  color: #fff;
  margin: 0;
}
.price {
  font-size: 0.85rem;
  color: #ff6b35;
  font-weight: bold;
}
.desc {
  font-size: 0.75rem;
  color: #71717a;
  margin-top: 0.25rem;
}
.banner {
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  border: 1px solid rgba(255,255,255,0.05);
}
.banner-success {
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
  border-color: rgba(16, 185, 129, 0.2);
}
.banner-warning {
  background: rgba(245, 158, 11, 0.1);
  color: #fbbf24;
  border-color: rgba(245, 158, 11, 0.2);
}
.close-btn {
  background: transparent;
  border: none;
  color: currentColor;
  cursor: pointer;
  font-size: 1.1rem;
}`,
    readOnly: true,
    language: 'css'
  },
  'package.json': {
    content: `{
  "name": "react-dojo-app",
  "dependencies": {
    "react": "^18.2.0"
  }
}`,
    readOnly: true,
    language: 'json'
  }
})

// Current Editor code binding
const code = computed({
  get() {
    return files.value[activeFile.value]?.content || ''
  },
  set(val: string) {
    if (files.value[activeFile.value]) {
      files.value[activeFile.value].content = val
      hasUnsavedChanges.value = true
    }
  }
})

// Dynamic checkmarks validation
const activeAssignmentChecklist = computed(() => {
  const currentAssign = assignments[selectedAssignment.value]
  const codeStr = files.value['App.jsx']?.content || ''
  
  return currentAssign.checklist.map(item => {
    return {
      text: item.text,
      passed: item.check(codeStr)
    }
  })
})

const isAssignmentCompleted = computed(() => {
  return activeAssignmentChecklist.value.every(item => item.passed)
})

// Search & Replace states
const searchQuery = ref('')
const replaceQuery = ref('')
const searchOpen = ref(false)
const activeSearchIndex = ref(0)

const searchMatches = computed(() => {
  if (!searchQuery.value) return []
  const text = code.value.toLowerCase()
  const query = searchQuery.value.toLowerCase()
  const indices: number[] = []
  let idx = text.indexOf(query)
  while (idx !== -1) {
    indices.push(idx)
    idx = text.indexOf(query, idx + query.length)
  }
  return indices
})

// Console, runtime states
interface LogEntry {
  type: 'log' | 'warn' | 'error' | 'table'
  content: string
  timestamp: string
}
const consoleLogs = ref<LogEntry[]>([])
const consoleContainerRef = ref<HTMLElement | null>(null)

// Compiler state
const compilationError = ref<string | null>(null)
const runtimeError = ref<string | null>(null)
const isCompiling = ref(false)
const compileTime = ref<number | null>(null)
const runSuccess = ref(false)

// Toast State
const toasts = ref<{ id: number; message: string; type: 'success' | 'info' | 'error' }[]>([])
let toastId = 0
function showToast(message: string, type: 'success' | 'info' | 'error' = 'success') {
  const id = toastId++
  toasts.value.push({ id, message, type })
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 3000)
}

// Live Preview iframe ref
const iframeRef = ref<HTMLIFrameElement | null>(null)
const babelLoaded = ref(false)
const babelLoadError = ref(false)

// Dynamic compiler loading
const loadBabel = () => {
  if (typeof window === 'undefined') return
  if ((window as any).Babel) {
    babelLoaded.value = true
    return
  }
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/@babel/standalone/babel.min.js'
  script.async = true
  script.onload = () => {
    babelLoaded.value = true
  }
  script.onerror = () => {
    babelLoadError.value = true
    showToast('Failed to load Babel compiler from CDN.', 'error')
  }
  document.head.appendChild(script)
}

// Sandbox Iframe srcDoc Template Generator
const getIframeSrcDoc = (compiledCode: string, css: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body {
      margin: 0;
      padding: 1rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #ffffff;
      background-color: #040405;
    }
    ${css}
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin><\/script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin><\/script>
  <script>
    // Console mock — must be set up before user code runs
    const createConsoleMock = (type) => {
      const original = console[type];
      return (...args) => {
        if (original) original(...args);
        try {
          window.parent.postMessage({
            type: 'CONSOLE_LOG',
            logType: type,
            args: args.map(arg => {
              if (arg === null) return 'null';
              if (arg === undefined) return 'undefined';
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); }
                catch { return '[Circular Object]'; }
              }
              return String(arg);
            })
          }, '*');
        } catch(e) {}
      };
    };
    window.console.log = createConsoleMock('log');
    window.console.warn = createConsoleMock('warn');
    window.console.error = createConsoleMock('error');
    window.console.table = createConsoleMock('table');

    window.addEventListener('error', (event) => {
      try {
        window.parent.postMessage({ type: 'RUNTIME_ERROR', message: event.message }, '*');
      } catch(e) {}
    });

    // Wait for React and ReactDOM to be available, then execute user code
    function __runUserCode() {
      if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
        setTimeout(__runUserCode, 50);
        return;
      }
      try {
        const __rootEl = document.getElementById('root');

        // Intercept createElement to capture the last top-level JSX element
        const __origCE = React.createElement;
        let __lastEl = null;
        React.createElement = function() {
          const el = __origCE.apply(this, arguments);
          __lastEl = el;
          return el;
        };

        // Execute compiled user code at global scope
        ${compiledCode}

        // Restore original
        React.createElement = __origCE;

        // Determine what to render
        let __toRender = null;

        // If user code already rendered to root, we're done
        if (__rootEl.childNodes.length > 0) {
          window.parent.postMessage({ type: 'RENDER_SUCCESS' }, '*');
          return;
        }

        // Use the last createElement result if valid
        if (__lastEl && React.isValidElement(__lastEl)) {
          __toRender = __lastEl;
        }

        // Fallback: detect well-known component names
        if (!__toRender) {
          if (typeof WelcomeBadge === 'function') {
            __toRender = __origCE(WelcomeBadge, { name: 'User', role: 'Guest' });
          } else if (typeof ProductCard === 'function') {
            __toRender = __origCE(ProductCard, {
              imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150',
              title: 'Speed Runners', price: 99,
              description: 'Engineered for high performance.'
            });
          } else if (typeof NotificationBanner === 'function') {
            __toRender = __origCE(NotificationBanner, {
              message: 'Welcome to React!', type: 'success', isDismissible: true
            });
          }
        }

        if (__toRender) {
          const root = ReactDOM.createRoot(__rootEl);
          root.render(__toRender);
          window.parent.postMessage({ type: 'RENDER_SUCCESS' }, '*');
        } else {
          window.parent.postMessage({ type: 'RENDER_EMPTY' }, '*');
        }
      } catch (err) {
        window.parent.postMessage({ type: 'RUNTIME_ERROR', message: err.message }, '*');
      }
    }
    __runUserCode();
  <\/script>
</body>
</html>
`

// Debounced Auto-save Watcher & Manual Trigger setup
let saveTimeout: NodeJS.Timeout | null = null

function triggerManualSave() {
  isSaving.value = true
  if (saveTimeout) clearTimeout(saveTimeout)
  setTimeout(() => {
    isSaving.value = false
    hasUnsavedChanges.value = false
    const now = new Date()
    lastSavedTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    runCode()
  }, 350)
}

// Swap templates on assignment selection change
watch(selectedAssignment, (newVal) => {
  files.value['App.jsx'].content = assignments[newVal].template
  activeFile.value = 'App.jsx'
  hasUnsavedChanges.value = false
  compilationError.value = null
  runtimeError.value = null
  consoleLogs.value = []
  
  nextTick(() => {
    runCode()
  })
}, { immediate: true })

watch(code, () => {
  if (!settings.value.autoSave) return
  isSaving.value = true
  if (saveTimeout) clearTimeout(saveTimeout)
  saveTimeout = setTimeout(() => {
    isSaving.value = false
    hasUnsavedChanges.value = false
    const now = new Date()
    lastSavedTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    runCode()
  }, 1000)
})

// JSX compiler logic
let compileTimeout: NodeJS.Timeout | null = null

function runCode() {
  if (typeof window === 'undefined') return
  if (!babelLoaded.value) {
    compilationError.value = 'Babel compiler is loading, please wait...'
    return
  }
  
  isCompiling.value = true
  compilationError.value = null
  runtimeError.value = null
  runSuccess.value = false
  
  if (compileTimeout) clearTimeout(compileTimeout)
  compileTimeout = setTimeout(() => {
    if (isCompiling.value) {
      isCompiling.value = false
      if (!runtimeError.value && !compilationError.value) {
        runSuccess.value = true
        setTimeout(() => { runSuccess.value = false }, 1500)
      }
    }
  }, 2000)
  
  const startTime = performance.now()
  
  try {
    let userJSX = files.value['App.jsx']?.content || ''
    
    // Strip ES6 imports from App.jsx to prevent Babel syntax error inside UMD context
    userJSX = userJSX.replace(/import\s+.*?\s+from\s+['"]react['"]/g, '')
    userJSX = userJSX.replace(/import\s+.*?\s+from\s+['"]react-dom['"]/g, '')
    userJSX = userJSX.replace(/import\s+.*?\s+from\s+['"].*?['"]/g, '') // remove any other imports

    // Compile using Babel Standalone with classic runtime (React.createElement)
    const compiled = (window as any).Babel.transform(userJSX, {
      presets: [['react', { runtime: 'classic' }]],
      filename: 'App.jsx'
    }).code
    
    const css = files.value['index.css']?.content || ''
    const doc = getIframeSrcDoc(compiled, css)
    
    if (iframeRef.value) {
      iframeRef.value.srcdoc = doc
    }
    
    compileTime.value = Math.round(performance.now() - startTime)
  } catch (err: any) {
    compilationError.value = err.message || String(err)
    compileTime.value = Math.round(performance.now() - startTime)
    isCompiling.value = false
    if (compileTimeout) {
      clearTimeout(compileTimeout)
      compileTimeout = null
    }
  }
}

// Iframe event listener
function handleIframeMessage(e: MessageEvent) {
  if (!e.data) return
  
  if (['RENDER_SUCCESS', 'RENDER_EMPTY', 'RUNTIME_ERROR'].includes(e.data.type)) {
    if (compileTimeout) {
      clearTimeout(compileTimeout)
      compileTimeout = null
    }
  }
  
  if (e.data.type === 'RENDER_SUCCESS') {
    isCompiling.value = false
    runtimeError.value = null
    runSuccess.value = true
    setTimeout(() => { runSuccess.value = false }, 1500)
  } else if (e.data.type === 'RENDER_EMPTY') {
    isCompiling.value = false
    runtimeError.value = 'Rendered output empty. Call your component at the bottom of the file (e.g. <WelcomeBadge />).'
  } else if (e.data.type === 'RUNTIME_ERROR') {
    isCompiling.value = false
    runtimeError.value = e.data.message
  } else if (e.data.type === 'CONSOLE_LOG') {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    consoleLogs.value.push({
      type: e.data.logType,
      content: e.data.args.join(' '),
      timestamp
    })
    
    nextTick(() => {
      if (consoleContainerRef.value) {
        consoleContainerRef.value.scrollTop = consoleContainerRef.value.scrollHeight
      }
    })
  }
}

// Formatter
function formatCode() {
  const currentContent = files.value[activeFile.value].content
  let formatted = currentContent
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
  files.value[activeFile.value].content = formatted
  triggerManualSave()
  showToast('Code formatted', 'success')
}

// Layout resize handlers
function startResizeLeft(e: MouseEvent) {
  if (deviceType.value === 'tablet' || deviceType.value === 'mobile') return
  isResizingLeft.value = true
  document.addEventListener('mousemove', handleResizeLeft)
  document.addEventListener('mouseup', stopResizeBoth)
  document.body.style.userSelect = 'none'
  document.body.style.cursor = 'col-resize'
}

function handleResizeLeft(e: MouseEvent) {
  if (!isResizingLeft.value || !playgroundContainerRef.value) return
  const containerRect = playgroundContainerRef.value.getBoundingClientRect()
  const relativeX = e.clientX - containerRect.left
  leftWidth.value = Math.max(15, Math.min(35, (relativeX / containerRect.width) * 100))
}

function startResizeRight(e: MouseEvent) {
  if (deviceType.value === 'tablet' || deviceType.value === 'mobile') return
  isResizingRight.value = true
  document.addEventListener('mousemove', handleResizeRight)
  document.addEventListener('mouseup', stopResizeBoth)
  document.body.style.userSelect = 'none'
  document.body.style.cursor = 'col-resize'
}

function handleResizeRight(e: MouseEvent) {
  if (!isResizingRight.value || !playgroundContainerRef.value) return
  const containerRect = playgroundContainerRef.value.getBoundingClientRect()
  const relativeX = e.clientX - containerRect.left
  const percentage = (relativeX / containerRect.width) * 100
  const newCenterWidth = percentage - leftWidth.value

  const minRightWidth = 20
  const proposedRightWidth = 100 - leftWidth.value - newCenterWidth
  if (proposedRightWidth >= minRightWidth) {
    centerWidth.value = newCenterWidth
  }
}

function stopResizeBoth() {
  isResizingLeft.value = false
  isResizingRight.value = false
  document.removeEventListener('mousemove', handleResizeLeft)
  document.removeEventListener('mousemove', handleResizeRight)
  document.removeEventListener('mouseup', stopResizeBoth)
  document.body.style.userSelect = ''
  document.body.style.cursor = ''
}

// Active Editor Input and Scroll alignment ref
const activeLineIndex = ref(0)
const textareaRef = ref<HTMLTextAreaElement | null>(null)
const preRef = ref<HTMLPreElement | null>(null)

// Sync scrolling
function syncScroll(e: Event) {
  const textarea = e.target as HTMLTextAreaElement
  if (preRef.value) {
    preRef.value.scrollTop = textarea.scrollTop
    preRef.value.scrollLeft = textarea.scrollLeft
  }
}

// Track cursor line index
function updateActiveLine(e: Event) {
  const textarea = e.target as HTMLTextAreaElement
  const cursorPosition = textarea.selectionStart
  const linesBefore = textarea.value.substring(0, cursorPosition).split('\n')
  activeLineIndex.value = linesBefore.length - 1
}

// Highlight matching active file content
const highlightedCode = computed(() => {
  const fixedTokenRegex = /(?<comment>\/\*[\s\S]*?\*\/|\/\/.*)|(?<string>'(?:\\['"]|[^'\\])*?'|"(?:\\['"]|[^"\\])*?"|`(?:\\`|[^`\\])*`)|(?<tag>&lt;\/?[A-Za-z][A-Za-z0-9_]*)|(?<tagClose>\/&gt;|&gt;)|(?<prop>\b[a-zA-Z0-9_]+(?=\s*=))|(?<keyword>\b(?:const|let|var|function|return|import|export|from|default|class|extends|await|async|new|Promise|if|else|for|while|try|catch)\b)|(?<number>\b\d+\b)|(?<func>\b[a-zA-Z0-9_]+(?=\())|(?<other>[\s\S])/gy

  const escaped = code.value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  let match
  let result = ''
  fixedTokenRegex.lastIndex = 0

  while ((match = fixedTokenRegex.exec(escaped)) !== null) {
    const groups = match.groups
    if (!groups) continue

    if (groups.comment) {
      result += `<span class="text-zinc-500 italic">${groups.comment}</span>`
    } else if (groups.string) {
      result += `<span class="text-emerald-400">${groups.string}</span>`
    } else if (groups.tag) {
      if (groups.tag.match(/^&lt;\/?[A-Z]/)) {
        result += `<span class="text-[#38bdf8] font-semibold">${groups.tag}</span>` // React Components in light blue
      } else {
        result += `<span class="text-sky-400">${groups.tag}</span>` // HTML tags in darker blue
      }
    } else if (groups.tagClose) {
      result += `<span class="text-sky-400">${groups.tagClose}</span>`
    } else if (groups.prop) {
      result += `<span class="text-amber-300">${groups.prop}</span>` // Props/Attributes in orange/yellow
    } else if (groups.keyword) {
      result += `<span class="text-rose-500 font-bold">${groups.keyword}</span>`
    } else if (groups.number) {
      result += `<span class="text-amber-400">${groups.number}</span>`
    } else if (groups.func) {
      result += `<span class="text-cyan-400">${groups.func}</span>`
    } else {
      result += groups.other
    }
  }

  return result || escaped
})

const lineCount = computed(() => {
  return code.value.split('\n').length
})

const activeHintOpen = ref(false)
const outputTab = ref('preview')

function resetActiveFile() {
  if (activeFile.value === 'App.jsx') {
    files.value['App.jsx'].content = assignments[selectedAssignment.value].template
    triggerManualSave()
  }
}

function confirmReset() {
  if (confirm('Are you sure you want to reset App.jsx? All unsaved changes will be lost.')) {
    resetActiveFile()
    showToast('Code reset successful', 'info')
  }
}

// Search and replace logic
function findNext() {
  if (searchMatches.value.length === 0) return
  activeSearchIndex.value = (activeSearchIndex.value + 1) % searchMatches.value.length
  scrollToMatch(searchMatches.value[activeSearchIndex.value])
}

function findPrev() {
  if (searchMatches.value.length === 0) return
  activeSearchIndex.value = (activeSearchIndex.value - 1 + searchMatches.value.length) % searchMatches.value.length
  scrollToMatch(searchMatches.value[activeSearchIndex.value])
}

function handleReplace() {
  if (searchMatches.value.length === 0) return
  const index = searchMatches.value[activeSearchIndex.value]
  const len = searchQuery.value.length
  const val = code.value
  code.value = val.substring(0, index) + replaceQuery.value + val.substring(index + len)
  textareaRef.value?.focus()
  showToast('Replaced occurrence', 'success')
}

function handleReplaceAll() {
  if (!searchQuery.value) return
  const regex = new RegExp(searchQuery.value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi')
  code.value = code.value.replace(regex, replaceQuery.value)
  showToast('Replaced all occurrences', 'success')
}

function scrollToMatch(charIndex: number) {
  const textarea = textareaRef.value
  if (!textarea) return
  textarea.focus()
  textarea.setSelectionRange(charIndex, charIndex + searchQuery.value.length)
  
  const lines = textarea.value.substring(0, charIndex).split('\n')
  const lineNum = lines.length
  const lineHeight = settings.value.fontSize * 1.5
  textarea.scrollTop = (lineNum - 5) * lineHeight
  if (preRef.value) {
    preRef.value.scrollTop = textarea.scrollTop
  }
}

// Dynamic Instructions Search
const instructionsSearch = ref('')
const searchedInstructions = computed(() => {
  const instr = assignments[selectedAssignment.value].instructions
  if (!instructionsSearch.value.trim()) return instr
  
  const query = instructionsSearch.value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  const regex = new RegExp(`(${query})`, 'gi')
  return instr.replace(regex, '<mark class="bg-brand-orange/30 text-white font-bold p-0.5 rounded">$1</mark>')
})

// Progress indicators
const completedChecksCount = computed(() => {
  return activeAssignmentChecklist.value.filter(item => item.passed).length
})

const totalChecksCount = computed(() => {
  return activeAssignmentChecklist.value.length
})

const completionPercentage = computed(() => {
  if (totalChecksCount.value === 0) return 0
  return Math.round((completedChecksCount.value / totalChecksCount.value) * 100)
})

// File uploading
const fileInputRef = ref<HTMLInputElement | null>(null)
function uploadCodeFile() {
  fileInputRef.value?.click()
}
function handleFileUpload(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        files.value['App.jsx'].content = event.target.result as string
        runCode()
        showToast('App.jsx uploaded successfully', 'success')
      }
    }
    reader.readAsText(file)
  }
}

// Download Active File
function downloadActiveFile() {
  const content = files.value[activeFile.value].content
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = activeFile.value
  a.click()
  URL.revokeObjectURL(url)
  showToast(`${activeFile.value} downloaded!`, 'success')
}

// Share via base64 URL
function sharePlayground() {
  try {
    const codeStr = files.value['App.jsx']?.content || ''
    const encoded = btoa(unescape(encodeURIComponent(codeStr)))
    const shareUrl = `${window.location.origin}${window.location.pathname}?code=${encoded}`
    navigator.clipboard.writeText(shareUrl)
    showToast('Share link copied to clipboard!', 'success')
  } catch (e) {
    showToast('Failed to copy share link', 'error')
  }
}

// ZIP File Exporter
const crcTable: number[] = []
for (let i = 0; i < 256; i++) {
  let c = i
  for (let j = 0; j < 8; j++) {
    c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1))
  }
  crcTable[i] = c
}

const crc32 = (str: string): number => {
  let crc = 0 ^ (-1)
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i)
    crc = (crc >>> 8) ^ crcTable[(crc ^ code) & 0xff]
  }
  return (crc ^ (-1)) >>> 0
}

function createZip(filesMap: Record<string, string>): Blob {
  const view = new DataView(new ArrayBuffer(1024 * 1024))
  let offset = 0
  
  const writeString = (str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset++, str.charCodeAt(i))
    }
  }
  const writeUint16 = (val: number) => {
    view.setUint16(offset, val, true)
    offset += 2
  }
  const writeUint32 = (val: number) => {
    view.setUint32(offset, val, true)
    offset += 4
  }
  
  const fileHeaders: { name: string; offset: number; size: number; crc: number }[] = []
  
  for (const [name, content] of Object.entries(filesMap)) {
    const startOffset = offset
    const size = content.length
    const crc = crc32(content)
    
    writeUint32(0x04034b50)
    writeUint16(10)
    writeUint16(0)
    writeUint16(0)
    writeUint16(0)
    writeUint16(0)
    writeUint32(crc)
    writeUint32(size)
    writeUint32(size)
    writeUint16(name.length)
    writeUint16(0)
    writeString(name)
    writeString(content)
    
    fileHeaders.push({ name, offset: startOffset, size, crc })
  }
  
  const centralDirectoryOffset = offset
  for (const header of fileHeaders) {
    writeUint32(0x02014b50)
    writeUint16(10)
    writeUint16(10)
    writeUint16(0)
    writeUint16(0)
    writeUint16(0)
    writeUint16(0)
    writeUint32(header.crc)
    writeUint32(header.size)
    writeUint32(header.size)
    writeUint16(header.name.length)
    writeUint16(0)
    writeUint16(0)
    writeUint16(0)
    writeUint16(0)
    writeUint32(0)
    writeUint32(header.offset)
    writeString(header.name)
  }
  
  const centralDirectorySize = offset - centralDirectoryOffset
  writeUint32(0x06054b50)
  writeUint16(0)
  writeUint16(0)
  writeUint16(fileHeaders.length)
  writeUint16(fileHeaders.length)
  writeUint32(centralDirectorySize)
  writeUint32(centralDirectoryOffset)
  writeUint16(0)
  
  return new Blob([view.buffer.slice(0, offset)], { type: 'application/zip' })
}

function exportZip() {
  const zipFiles = {
    'App.jsx': files.value['App.jsx']?.content || '',
    'index.css': files.value['index.css']?.content || '',
    'package.json': files.value['package.json']?.content || ''
  }
  try {
    const blob = createZip(zipFiles)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'react-playground-project.zip'
    a.click()
    URL.revokeObjectURL(url)
    showToast('Project ZIP exported successfully', 'success')
  } catch (e) {
    showToast('Failed to export ZIP', 'error')
  }
}

// Editor configuration font helpers
function increaseFontSize() {
  if (settings.value.fontSize < 24) settings.value.fontSize++
}
function decreaseFontSize() {
  if (settings.value.fontSize > 9) settings.value.fontSize--
}

// Keyboard shortcuts listener
function handleKeyDown(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
    e.preventDefault()
    sidebarOpen.value = !sidebarOpen.value
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
    e.preventDefault()
    searchOpen.value = !searchOpen.value
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
    e.preventDefault()
    triggerManualSave()
    showToast('Code saved manually', 'success')
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r') {
    e.preventDefault()
    confirmReset()
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault()
    runCode()
  }
}

// Auto-closing brackets / Quotes
const brackets: Record<string, string> = {
  '{': '}',
  '[': ']',
  '(': ')',
  '"': '"',
  "'": "'",
  '`': '`'
}

function handleEditorKeyDown(e: KeyboardEvent) {
  const textarea = textareaRef.value
  if (!textarea) return

  if (e.key === 'Tab') {
    e.preventDefault()
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const value = textarea.value
    textarea.value = value.substring(0, start) + '  ' + value.substring(end)
    textarea.selectionStart = textarea.selectionEnd = start + 2
    code.value = textarea.value
    updateActiveLine(e)
    nextTick(() => syncScroll({ target: textarea } as any))
    return
  }

  // Ctrl + / Commenting
  if ((e.ctrlKey || e.metaKey) && e.key === '/') {
    e.preventDefault()
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const value = textarea.value

    const beforeCursor = value.substring(0, start)
    const lastNewLine = beforeCursor.lastIndexOf('\n')
    const lineStart = lastNewLine + 1

    const afterCursor = value.substring(start)
    const nextNewLine = afterCursor.indexOf('\n')
    const lineEnd = nextNewLine === -1 ? value.length : start + nextNewLine

    const lineText = value.substring(lineStart, lineEnd)
    let newLineText = ''
    let cursorOffset = 0

    if (lineText.trim().startsWith('//')) {
      newLineText = lineText.replace(/(\s*)\/\/\s?/, '$1')
      cursorOffset = newLineText.length - lineText.length
    } else {
      const indentMatch = lineText.match(/^(\s*)/)
      const indent = indentMatch ? indentMatch[0] : ''
      newLineText = indent + '// ' + lineText.substring(indent.length)
      cursorOffset = newLineText.length - lineText.length
    }

    textarea.value = value.substring(0, lineStart) + newLineText + value.substring(lineEnd)
    textarea.selectionStart = start + cursorOffset
    textarea.selectionEnd = end + cursorOffset
    code.value = textarea.value
    updateActiveLine(e)
    nextTick(() => syncScroll({ target: textarea } as any))
    return
  }

  // Bracket/Quote auto-closing
  if (['{', '[', '(', '"', "'", '`'].includes(e.key)) {
    e.preventDefault()
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const value = textarea.value
    const closing = brackets[e.key]

    textarea.value = value.substring(0, start) + e.key + value.substring(start, end) + closing + value.substring(end)
    textarea.selectionStart = start + 1
    textarea.selectionEnd = end + 1
    code.value = textarea.value
    
    updateActiveLine(e)
    nextTick(() => syncScroll({ target: textarea } as any))
    return
  }

  // Delete matching bracket/quote pair
  if (e.key === 'Backspace') {
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const value = textarea.value
    
    if (start === end && start > 0) {
      const charBefore = value[start - 1]
      const charAfter = value[start]
      if (brackets[charBefore] === charAfter) {
        e.preventDefault()
        textarea.value = value.substring(0, start - 1) + value.substring(start + 1)
        textarea.selectionStart = textarea.selectionEnd = start - 1
        code.value = textarea.value
        updateActiveLine(e)
        nextTick(() => syncScroll({ target: textarea } as any))
        return
      }
    }
  }

  // Auto Indentation on Enter key
  if (e.key === 'Enter') {
    e.preventDefault()
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const value = textarea.value

    const beforeCursor = value.substring(0, start)
    const lastNewLine = beforeCursor.lastIndexOf('\n')
    const currentLine = beforeCursor.substring(lastNewLine + 1)
    const indentMatch = currentLine.match(/^\s*/)
    const indent = indentMatch ? indentMatch[0] : ''

    const lastChar = currentLine.trim().slice(-1)
    const extraIndent = ['{', '[', '(', ':'].includes(lastChar) ? '  ' : ''

    const insertion = '\n' + indent + extraIndent
    textarea.value = value.substring(0, start) + insertion + value.substring(end)
    textarea.selectionStart = textarea.selectionEnd = start + insertion.length
    code.value = textarea.value
    
    updateActiveLine(e)
    nextTick(() => syncScroll({ target: textarea } as any))
  }
}

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}

// Light & Dark theme color system computed class lists
const isDark = computed(() => theme.value === 'dark')

const themeClasses = computed(() => ({
  mainBg: isDark.value ? 'bg-[#050507]' : 'bg-slate-50',
  panelBg: isDark.value ? 'bg-[#070709]' : 'bg-white',
  headerBg: isDark.value ? 'bg-[#08080a]' : 'bg-slate-100',
  consoleBg: isDark.value ? 'bg-[#040405]/50' : 'bg-slate-100/50',
  border: isDark.value ? 'border-zinc-900/80' : 'border-slate-200',
  text: isDark.value ? 'text-zinc-200' : 'text-slate-800',
  textMuted: isDark.value ? 'text-zinc-500' : 'text-slate-400',
  textTitle: isDark.value ? 'text-white' : 'text-slate-900',
  cardBg: isDark.value ? 'bg-zinc-950/40 border-zinc-900/60' : 'bg-slate-100/50 border-slate-200/60',
  preBg: isDark.value ? 'bg-[#040405]/20' : 'bg-slate-50/50',
  editorTabBg: isDark.value ? 'bg-[#040405]' : 'bg-slate-200/50'
}))

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('message', handleIframeMessage)
  
  loadBabel()
  updateWidth()
  window.addEventListener('resize', updateWidth)

  // URL share support
  const urlParams = new URLSearchParams(window.location.search)
  const codeParam = urlParams.get('code')
  if (codeParam) {
    try {
      const decoded = decodeURIComponent(escape(atob(codeParam)))
      files.value['App.jsx'].content = decoded
      showToast('Shared playground code loaded successfully!', 'success')
    } catch (e) {
      console.error('Failed to decode share code', e)
    }
  }

  // Pre-load default template code
  if (!files.value['App.jsx'].content) {
    files.value['App.jsx'].content = assignments[selectedAssignment.value].template
  }

  // Initial code compile
  setTimeout(() => {
    runCode()
  }, 1000)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('message', handleIframeMessage)
  window.removeEventListener('resize', updateWidth)
})
</script>

<template>
  <div class="w-full flex flex-col gap-6 font-sans select-none relative" :class="themeClasses.text">
    
    <!-- Toast notifications portal container -->
    <div class="fixed top-5 right-5 z-[99999] flex flex-col gap-2 pointer-events-none">
      <div 
        v-for="t in toasts" 
        :key="t.id"
        class="flex items-center gap-2.5 py-3 px-4 rounded-[12px] text-xs font-semibold shadow-xl border animate-fade-in pointer-events-auto"
        :class="[
          t.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
          t.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
          'bg-blue-500/10 border-blue-500/20 text-blue-400'
        ]"
      >
        <Icon :name="t.type === 'success' ? 'mdi:check-circle' : t.type === 'error' ? 'mdi:alert-circle' : 'mdi:information'" class="text-base" />
        <span>{{ t.message }}</span>
      </div>
    </div>

    <!-- Header tabs showing assignment index selector -->
    <div class="flex items-center justify-between p-2.5 rounded-2xl relative overflow-hidden shadow-xl border" :class="[themeClasses.headerBg, themeClasses.border]">
      <span class="text-xs font-extrabold uppercase tracking-widest pl-3" :class="themeClasses.textMuted">Lesson 1 Tasks</span>
      
      <!-- Selector buttons -->
      <div class="flex gap-2 overflow-x-auto scrollbar-none max-w-[80%]">
        <button 
          v-for="(assign, idx) in assignments" 
          :key="idx"
          @click="selectedAssignment = idx"
          class="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap"
          :class="[
            selectedAssignment === idx 
              ? 'bg-brand-orange/15 border border-brand-orange/30 text-brand-orange shadow-[0_0_15px_rgba(255,107,53,0.15)]' 
              : 'hover:bg-white/[0.02]' + ' ' + themeClasses.textMuted
          ]"
        >
          {{ assign.title }}
        </button>
      </div>
    </div>

    <!-- MAIN 3-PANEL IDE WORKSPACE CONTAINER -->
    <div 
      ref="playgroundContainerRef"
      :class="[
        isFullscreen 
          ? 'fixed inset-0 z-[999] rounded-none border-none w-screen h-screen' 
          : 'w-full h-[660px] border rounded-[24px] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.85)]',
        themeClasses.mainBg,
        themeClasses.border
      ]"
      class="flex flex-col overflow-hidden relative transition-all duration-300"
    >
      
      <!-- Top IDE header status toolbar (Sticky) -->
      <div class="h-12 border-b flex items-center justify-between px-5 select-none shrink-0 z-30" :class="[themeClasses.headerBg, themeClasses.border]">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center text-brand-orange">
            <Icon name="mdi:react" class="text-base animate-[spin_30s_linear_infinite]" />
          </div>
          <div class="text-[11px] font-bold tracking-wide flex items-center gap-1.5" :class="themeClasses.text">
            <span>Dojo Workspace</span>
            <span class="opacity-30">/</span>
            <span class="font-mono opacity-80 text-[10px]">{{ activeFile }}</span>
            <span v-if="files[activeFile]?.readOnly" class="text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-1 py-0.5 rounded flex items-center gap-1 font-mono">
              <Icon name="mdi:lock" class="text-[9px]" /> READ-ONLY
            </span>
          </div>
        </div>

        <!-- Toolbar items -->
        <div class="flex items-center gap-2">
          <!-- Save status indicator -->
          <div class="flex items-center gap-1 text-[10px] font-mono mr-2" :class="themeClasses.textMuted">
            <span v-if="isSaving" class="text-brand-orange animate-pulse">Auto-saving...</span>
            <span v-else-if="hasUnsavedChanges" class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-brand-orange rounded-full"></span> Unsaved changes
            </span>
            <span v-else-if="lastSavedTime" class="flex items-center gap-1 text-emerald-500">
              <Icon name="mdi:check" class="text-emerald-500" /> Saved
            </span>
          </div>

          <!-- Upload App.jsx -->
          <input 
            type="file" 
            ref="fileInputRef" 
            accept=".jsx,.js" 
            class="hidden" 
            @change="handleFileUpload" 
          />
          <button 
            @click="uploadCodeFile"
            title="Upload App.jsx File"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]"
          >
            <Icon name="mdi:upload" class="text-xs" />
          </button>

          <!-- Zoom In -->
          <button 
            @click="increaseFontSize"
            title="Zoom In (Increase Font Size)"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]"
          >
            <Icon name="mdi:magnify-plus-outline" class="text-xs" />
          </button>

          <!-- Zoom Out -->
          <button 
            @click="decreaseFontSize"
            title="Zoom Out (Decrease Font Size)"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]"
          >
            <Icon name="mdi:magnify-minus-outline" class="text-xs" />
          </button>

          <!-- Search Toggle -->
          <button 
            @click="searchOpen = !searchOpen"
            title="Search & Replace (Ctrl+F)"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[searchOpen ? 'border-brand-orange/30 text-brand-orange bg-brand-orange/5' : themeClasses.textMuted, themeClasses.headerBg, themeClasses.border]"
          >
            <Icon name="mdi:magnify" class="text-xs" />
          </button>

          <!-- Download Active File -->
          <button 
            @click="downloadActiveFile"
            title="Download Active File"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]"
          >
            <Icon name="mdi:download" class="text-xs" />
          </button>

          <!-- Export ZIP -->
          <button 
            @click="exportZip"
            title="Export Project ZIP"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]"
          >
            <Icon name="mdi:file-zipper" class="text-xs" />
          </button>

          <!-- Share Button -->
          <button 
            @click="sharePlayground"
            title="Share Playground Link"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]"
          >
            <Icon name="mdi:share-variant" class="text-xs" />
          </button>

          <div class="h-4 w-[1px] bg-zinc-800 mx-1"></div>

          <!-- Theme Toggle -->
          <button 
            @click="theme = theme === 'dark' ? 'light' : 'dark'"
            title="Toggle Light/Dark Theme"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]"
          >
            <Icon name="mdi:theme-light-dark" class="text-xs" />
          </button>

          <!-- Run Button -->
          <button 
            @click="runCode"
            title="Run Code (Ctrl + Enter)"
            class="h-7 px-3 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange hover:bg-brand-orange/15 hover:text-white rounded-md text-[10px] font-bold flex items-center gap-1 transition-all duration-200 cursor-pointer"
            :class="{ 'border-emerald-500 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/15 hover:text-emerald-300': runSuccess }"
          >
            <Icon :name="isCompiling ? 'mdi:loading' : runSuccess ? 'mdi:check' : 'mdi:play'" class="text-[10px]" :class="{ 'animate-spin': isCompiling }" />
            <span>{{ isCompiling ? 'Running' : runSuccess ? 'Success' : 'Run' }}</span>
            <span v-if="compileTime !== null && !isCompiling" class="text-[9px] text-zinc-500 font-normal">({{ compileTime }}ms)</span>
          </button>

          <!-- Fullscreen Toggle -->
          <button 
            @click="toggleFullscreen"
            :title="isFullscreen ? 'Exit Fullscreen' : 'Fullscreen (Ctrl+F)'"
            class="h-7 w-7 border hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
            :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]"
          >
            <Icon :name="isFullscreen ? 'mdi:fullscreen-exit' : 'mdi:fullscreen'" class="text-sm" />
          </button>
        </div>
      </div>

      <!-- Main Panels Workspace Layout -->
      <!-- DESKTOP / LAPTOP LAYOUT -->
      <div 
        v-if="deviceType === 'desktop' || deviceType === 'laptop'" 
        class="flex-1 flex overflow-hidden relative"
      >
        <!-- LEFT PANEL: INSTRUCTIONS & VERIFICATIONS -->
        <div 
          :style="{ width: leftWidth + '%' }"
          class="min-w-[260px] h-full border-r flex flex-col overflow-y-auto custom-scrollbar p-5 gap-5 select-text text-left shrink-0"
          :class="[themeClasses.panelBg, themeClasses.border]"
        >
          <!-- Active Assignment Title -->
          <div class="flex flex-col gap-2">
            <span class="text-[9px] text-brand-orange font-extrabold uppercase tracking-widest font-mono">Selected Task</span>
            <h3 class="text-sm font-bold tracking-wide" :class="themeClasses.textTitle">{{ assignments[selectedAssignment].title }}</h3>
          </div>

          <!-- Instructions search -->
          <div class="relative w-full">
            <input 
              v-model="instructionsSearch" 
              placeholder="Search instructions..." 
              class="w-full border rounded-xl py-1.5 pl-8 pr-3 text-[10px] placeholder-zinc-500 outline-none transition-all"
              :class="[isDark ? 'bg-zinc-900/40 border-zinc-900 focus:border-brand-orange/40 text-white' : 'bg-slate-100 border-slate-200 focus:border-brand-orange/40 text-slate-800']"
            />
            <Icon name="mdi:magnify" class="absolute left-2.5 top-2.5 text-zinc-500 text-xs" />
          </div>

          <!-- Objective -->
          <div class="flex flex-col gap-1.5">
            <span class="text-[9px] font-extrabold uppercase tracking-widest font-mono" :class="themeClasses.textMuted">Objective</span>
            <p class="text-xs leading-relaxed font-medium" :class="themeClasses.text">{{ assignments[selectedAssignment].objective }}</p>
          </div>

          <!-- Outcomes -->
          <div class="flex flex-col gap-1.5">
            <span class="text-[9px] font-extrabold uppercase tracking-widest font-mono" :class="themeClasses.textMuted">Learning Outcomes</span>
            <p class="text-xs leading-relaxed" :class="themeClasses.text">{{ assignments[selectedAssignment].outcome }}</p>
          </div>

          <div class="h-[1px]" :class="themeClasses.border" />

          <!-- Instructions -->
          <div class="flex flex-col gap-2">
            <span class="text-[9px] font-extrabold uppercase tracking-widest font-mono" :class="themeClasses.textMuted">Instructions</span>
            <div class="text-xs leading-relaxed flex flex-col gap-2 font-sans" :class="themeClasses.text" v-html="searchedInstructions" />
          </div>

          <div class="h-[1px]" :class="themeClasses.border" />

          <!-- Assignment Checklist -->
          <div class="flex flex-col gap-2.5">
            <div class="flex justify-between items-center">
              <span class="text-[9px] font-extrabold uppercase tracking-widest font-mono" :class="themeClasses.textMuted">Verification Checklist</span>
              <span class="text-[9px] font-bold font-mono text-brand-orange">{{ completionPercentage }}%</span>
            </div>
            
            <div class="w-full bg-zinc-900/40 rounded-full h-1 overflow-hidden">
              <div class="bg-brand-orange h-full rounded-full transition-all duration-500" :style="{ width: completionPercentage + '%' }" />
            </div>
            
            <div class="flex flex-col gap-2">
              <div 
                v-for="(item, idx) in activeAssignmentChecklist" 
                :key="idx"
                class="flex items-center gap-2.5 text-xs font-semibold"
                :class="item.passed ? 'text-emerald-400 animate-[pulse_1s_ease_1]' : themeClasses.textMuted"
              >
                <Icon :name="item.passed ? 'mdi:check-circle' : 'mdi:circle-outline'" class="text-base shrink-0" />
                <span class="leading-tight">{{ item.text }}</span>
              </div>
            </div>
          </div>

          <div class="h-[1px]" :class="themeClasses.border" />

          <!-- Collapsible Hints Section -->
          <div class="flex flex-col gap-2">
            <button 
              @click="activeHintOpen = !activeHintOpen"
              class="w-full flex justify-between items-center border rounded-lg p-2 text-xs font-bold transition-all cursor-pointer"
              :class="[themeClasses.headerBg, themeClasses.border, themeClasses.text]"
            >
              <span class="flex items-center gap-1.5"><Icon name="mdi:lightbulb-outline" class="text-brand-orange text-sm" /> Hints</span>
              <Icon :name="activeHintOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
            </button>
            <p v-if="activeHintOpen" class="text-[11px] leading-relaxed p-2 font-sans rounded-lg border" :class="[themeClasses.cardBg, themeClasses.textMuted]">
              {{ assignments[selectedAssignment].hint }}
            </p>
          </div>

          <!-- Continue in VS Code Section -->
          <div class="mt-6 border-t pt-6" :class="themeClasses.border">
            <h3 class="text-xs font-bold mb-4 flex items-center gap-2" :class="themeClasses.textTitle">
              <span>💻</span> Continue in VS Code
            </h3>
            <p class="text-[11px] mb-4 leading-relaxed" :class="themeClasses.textMuted">
              Ready to take this project local? Follow these steps to set up and run the code on your machine in VS Code.
            </p>
            
            <div class="flex flex-col gap-3">
              <!-- Steps -->
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 1: Get VS Code</div>
                <p class="text-[11px] leading-relaxed mb-2" :class="themeClasses.text">Download Visual Studio Code.</p>
                <a href="https://code.visualstudio.com/" target="_blank" class="inline-flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 font-semibold">
                  Official Site <Icon name="mdi:launch" class="text-[10px]" />
                </a>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 2: Install Node.js</div>
                <p class="text-[11px] leading-relaxed mb-2" :class="themeClasses.text">Download & install Node.js (LTS).</p>
                <a href="https://nodejs.org/" target="_blank" class="inline-flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 font-semibold">
                  Official Site <Icon name="mdi:launch" class="text-[10px]" />
                </a>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 3: Open Project</div>
                <p class="text-[11px] leading-relaxed" :class="themeClasses.text">
                  File &rarr; Open Folder. Select the project directory.
                </p>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 4: Terminal</div>
                <p class="text-[11px] leading-relaxed" :class="themeClasses.text">Open terminal using shortcut: <code class="bg-black/35 px-1 py-0.5 rounded text-[10px]">Ctrl + \`</code></p>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 5: Install</div>
                <p class="text-[11px] leading-relaxed mb-1" :class="themeClasses.text">Run the install script:</p>
                <div class="bg-black/30 p-1.5 rounded font-mono text-[10px] text-center border" :class="themeClasses.border">npm install</div>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 6: Run Local</div>
                <p class="text-[11px] leading-relaxed mb-1" :class="themeClasses.text">Start development build:</p>
                <div class="bg-black/30 p-1.5 rounded font-mono text-[10px] text-center border" :class="themeClasses.border">npm run dev</div>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 7: Launch App</div>
                <p class="text-[11px] leading-relaxed" :class="themeClasses.text">
                  Open the localhost URL output in terminal.
                </p>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 8: Extensions</div>
                <ul class="list-disc pl-4 text-[10px] flex flex-col gap-1 mt-1" :class="themeClasses.textMuted">
                  <li>ES7+ React Snippets</li>
                  <li>Prettier</li>
                  <li>ESLint</li>
                  <li>Tailwind CSS IntelliSense</li>
                  <li>Error Lens</li>
                  <li>Auto Rename Tag</li>
                </ul>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 9: Terminal Scripts</div>
                <div class="font-mono text-[9px] flex flex-col gap-1 mt-1" :class="themeClasses.textMuted">
                  <div>npm install</div>
                  <div>npm run dev</div>
                  <div>npm run build</div>
                  <div>npm run preview</div>
                </div>
              </div>
              <div class="border rounded-xl p-3" :class="themeClasses.cardBg">
                <div class="text-[10px] font-bold text-brand-orange uppercase mb-1">Step 10: Code Layout</div>
                <pre class="font-mono text-[9px] mt-1" :class="themeClasses.textMuted">
src/
├── components/
├── pages/
├── hooks/
├── App.jsx
└── main.jsx</pre>
              </div>
            </div>
          </div>
        </div>

        <!-- RESIZABLE DIVIDER 1 -->
        <div 
          @mousedown="startResizeLeft"
          class="w-1 hover:w-1.5 h-full bg-zinc-900 hover:bg-brand-orange/40 active:bg-brand-orange transition-all cursor-col-resize shrink-0 z-20 select-none"
        />

        <!-- CENTER PANEL: INTERACTIVE EDITOR -->
        <div 
          :style="{ width: centerWidth + '%' }"
          class="min-w-[320px] h-full flex flex-col overflow-hidden shrink-0 relative border-r"
          :class="[themeClasses.border]"
        >
          <!-- Workspace tab headers -->
          <div class="h-9 border-b flex px-2 items-center select-none overflow-x-auto shrink-0 scrollbar-none justify-between" :class="[themeClasses.headerBg, themeClasses.border]">
            <div class="flex">
              <div 
                v-for="(fileInfo, filename) in files" 
                :key="filename"
                @click="activeFile = filename"
                class="h-full px-3.5 flex items-center gap-2 cursor-pointer text-xs font-semibold relative transition-all duration-200"
                :class="activeFile === filename ? 'text-white border-t-2 border-t-brand-orange' + ' ' + themeClasses.mainBg : 'text-zinc-500 hover:text-zinc-300 bg-transparent'"
              >
                <Icon v-if="filename.endsWith('.jsx')" name="mdi:react" class="text-[#38bdf8] text-sm" />
                <Icon v-else-if="filename.endsWith('.css')" name="mdi:language-css3" class="text-emerald-400 text-sm" />
                <Icon v-else-if="filename.endsWith('.json')" name="mdi:code-json" class="text-amber-500 text-sm" />
                <span class="font-mono text-[10px]">{{ filename }}</span>
              </div>
            </div>

            <!-- Editor header actions -->
            <div class="flex items-center gap-1.5 px-2">
              <!-- Word wrap toggle -->
              <button @click="settings.lineWrap = !settings.lineWrap" :title="settings.lineWrap ? 'Disable Word Wrap' : 'Enable Word Wrap'" class="h-6 w-6 border rounded flex items-center justify-center cursor-pointer transition-colors" :class="[settings.lineWrap ? 'border-brand-orange/30 text-brand-orange bg-brand-orange/5' : 'text-zinc-400 hover:text-white', themeClasses.border]"><Icon name="mdi:wrap" class="text-[10px]" /></button>

              <div class="h-3 w-[1px] bg-zinc-800 mx-0.5"></div>
              
              <!-- Small Run Button -->
              <button 
                @click="runCode" 
                title="Run Code (Ctrl + Enter)" 
                class="h-6 px-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange hover:bg-brand-orange/25 hover:text-white rounded flex items-center gap-1 cursor-pointer font-bold text-[9px] transition-all"
              >
                <Icon name="mdi:play" class="text-[10px]" /> Run
              </button>
              
              <button @click="copyCode" title="Copy File Content" class="h-6 px-2 border text-[9px] text-zinc-400 hover:text-white rounded flex items-center gap-1 cursor-pointer" :class="themeClasses.border"><Icon name="mdi:content-copy" /> Copy</button>
              <button @click="formatCode" title="Format File Code" class="h-6 px-2 border text-[9px] text-zinc-400 hover:text-white rounded flex items-center gap-1 cursor-pointer" :class="themeClasses.border">Format</button>
              <button @click="confirmReset" :disabled="files[activeFile]?.readOnly" title="Reset to default template" class="h-6 px-2 border text-[9px] text-zinc-400 hover:text-white rounded flex items-center gap-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed" :class="themeClasses.border"><Icon name="mdi:restore" /> Reset</button>
            </div>
          </div>

          <!-- Code Typing Area -->
          <div class="flex-1 flex relative overflow-hidden p-2">
            
            <!-- Float search replace panel -->
            <div 
              v-if="searchOpen" 
              class="absolute top-2 right-4 z-40 p-3 rounded-xl shadow-2xl border flex flex-col gap-2 w-64 animate-scale-in text-left"
              :class="[isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200']"
            >
              <div class="flex items-center justify-between">
                <span class="text-[9px] font-bold uppercase tracking-wider text-brand-orange">Search & Replace</span>
                <button @click="searchOpen = false" class="text-zinc-500 hover:text-white"><Icon name="mdi:close" /></button>
              </div>
              <div class="flex flex-col gap-1.5">
                <input 
                  v-model="searchQuery" 
                  @keydown.enter="findNext"
                  placeholder="Find text..." 
                  class="w-full border rounded-lg px-2 py-1 text-[11px] bg-transparent outline-none focus:border-brand-orange/40"
                  :class="[themeClasses.border, themeClasses.text]"
                />
                <input 
                  v-model="replaceQuery" 
                  placeholder="Replace with..." 
                  class="w-full border rounded-lg px-2 py-1 text-[11px] bg-transparent outline-none focus:border-brand-orange/40"
                  :class="[themeClasses.border, themeClasses.text]"
                />
              </div>
              <div class="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <span>{{ searchMatches.length ? activeSearchIndex + 1 : 0 }} of {{ searchMatches.length }}</span>
                <div class="flex gap-1.5">
                  <button @click="findPrev" class="px-1.5 py-0.5 border rounded hover:text-white" :class="themeClasses.border">&lt;</button>
                  <button @click="findNext" class="px-1.5 py-0.5 border rounded hover:text-white" :class="themeClasses.border">&gt;</button>
                  <button @click="handleReplace" class="px-1.5 py-0.5 border rounded hover:text-white" :class="themeClasses.border">Rep</button>
                  <button @click="handleReplaceAll" class="px-1.5 py-0.5 border rounded hover:text-white" :class="themeClasses.border">All</button>
                </div>
              </div>
            </div>

            <!-- Line numbers -->
            <div v-if="settings.lineNumbers" class="w-10 py-4 select-none text-right pr-3.5 text-zinc-700 font-mono leading-relaxed border-r" :class="[themeClasses.border, themeClasses.preBg]" :style="{ fontSize: settings.fontSize + 'px' }">
              <div v-for="num in lineCount" :key="num" :class="{ 'text-brand-orange font-bold filter drop-shadow-[0_0_2px_rgba(255,107,53,0.35)]': settings.activeLine && num - 1 === activeLineIndex }">
                {{ num }}
              </div>
            </div>

            <!-- Pre highlights & text area input -->
            <div class="flex-1 relative font-mono leading-relaxed overflow-hidden" :style="{ fontSize: settings.fontSize + 'px' }">
              <pre 
                ref="preRef"
                class="absolute inset-0 p-4 m-0 pointer-events-none whitespace-pre select-none text-white leading-relaxed font-mono custom-scrollbar"
                :class="[
                  settings.lineWrap ? 'whitespace-pre-wrap break-all' : 'whitespace-pre overflow-auto',
                  themeClasses.preBg
                ]"
                :style="{ fontSize: settings.fontSize + 'px' }"
                v-html="highlightedCode"
              />

              <textarea 
                ref="textareaRef"
                v-model="code"
                @scroll="syncScroll"
                @keyup="updateActiveLine"
                @click="updateActiveLine"
                @keydown="handleEditorKeyDown"
                :disabled="files[activeFile]?.readOnly"
                :wrap="settings.lineWrap ? 'soft' : 'off'"
                class="absolute inset-0 p-4 m-0 w-full h-full bg-transparent border-none outline-none resize-none overflow-auto font-mono leading-relaxed text-transparent caret-zinc-200 selection:bg-white/10 custom-scrollbar disabled:cursor-not-allowed"
                :style="{ fontSize: settings.fontSize + 'px' }"
                spellcheck="false"
              />
            </div>
          </div>
        </div>

        <!-- RESIZABLE DIVIDER 2 -->
        <div 
          @mousedown="startResizeRight"
          class="w-1 hover:w-1.5 h-full bg-zinc-900 hover:bg-brand-orange/40 active:bg-brand-orange transition-all cursor-col-resize shrink-0 z-20 select-none"
        />

        <!-- RIGHT PANEL: RENDER & OUTPUTS -->
        <div 
          :style="{ width: (100 - leftWidth - centerWidth) + '%' }"
          class="min-w-[285px] h-full flex flex-col overflow-y-auto custom-scrollbar bg-black/85"
        >
          <!-- Headers tabs -->
          <div class="h-9 border-b flex px-3 items-center justify-between select-none shrink-0" :class="[themeClasses.headerBg, themeClasses.border]">
            <div class="flex gap-2">
              <button 
                @click="outputTab = 'preview'"
                class="px-3.5 py-1 text-[10px] font-bold rounded-md transition-all duration-200 cursor-pointer"
                :class="outputTab === 'preview' ? 'bg-brand-orange/15 text-brand-orange border border-brand-orange/20' : 'text-zinc-500 hover:text-zinc-300 bg-transparent'"
              >
                Live Preview
              </button>
              <button 
                @click="outputTab = 'console'"
                class="px-3.5 py-1 text-[10px] font-bold rounded-md transition-all duration-200 cursor-pointer"
                :class="outputTab === 'console' ? 'bg-brand-orange/15 text-brand-orange border border-brand-orange/20' : 'text-zinc-500 hover:text-zinc-300 bg-transparent'"
              >
                Output Console ({{ consoleLogs.length }})
              </button>
            </div>
            
            <div v-if="outputTab === 'console'" class="flex items-center gap-1.5">
              <button @click="copyConsoleLogs" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="[themeClasses.border, themeClasses.textMuted]">Copy Logs</button>
              <button @click="clearConsole" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="[themeClasses.border, themeClasses.textMuted]">Clear</button>
            </div>
            <div v-else class="flex items-center gap-1.5">
              <button @click="runCode" title="Reload Preview" class="text-zinc-500 hover:text-white text-xs"><Icon name="mdi:refresh" :class="{ 'animate-spin': isCompiling }" /></button>
            </div>
          </div>

          <!-- Tab Content: Live Preview -->
          <div v-show="outputTab === 'preview'" class="flex-1 p-5 flex flex-col gap-4 preview-grid-pattern min-h-[350px] relative">
            <span class="text-[9px] text-zinc-650 font-bold uppercase tracking-widest font-mono text-left select-none">Live Component Render</span>

            <!-- Compilation / Script Load Skeletons -->
            <div v-if="!babelLoaded && !babelLoadError" class="absolute inset-0 bg-[#040405] flex flex-col items-center justify-center p-6 gap-2">
              <Icon name="mdi:loading" class="text-3xl text-brand-orange animate-spin" />
              <span class="text-xs text-zinc-500">Loading compiler engine...</span>
            </div>

            <!-- Main sandboxed preview iframe -->
            <div class="flex-1 flex flex-col relative w-full h-full min-h-[220px] rounded-xl overflow-hidden border border-zinc-900 bg-[#040405]">
              <iframe 
                ref="iframeRef"
                sandbox="allow-scripts allow-same-origin"
                class="w-full h-full bg-[#040405]"
              />

              <!-- Compiler Error Overlay -->
              <div v-if="compilationError" class="absolute inset-0 bg-[#070709] p-5 text-left overflow-y-auto flex flex-col gap-3">
                <div class="flex items-center gap-2 text-red-400 text-xs font-bold uppercase">
                  <Icon name="mdi:alert-circle" class="text-base" /> Compilation Failure
                </div>
                <pre class="text-[10px] font-mono text-red-300 bg-red-950/20 border border-red-900/40 p-3.5 rounded-lg leading-relaxed whitespace-pre-wrap">{{ compilationError }}</pre>
                <p class="text-[10px] text-zinc-500">Check for syntax errors, missing brackets, or typo characters in your JSX code.</p>
              </div>

              <!-- Runtime Error Overlay -->
              <div v-if="runtimeError" class="absolute inset-0 bg-[#070709] p-5 text-left overflow-y-auto flex flex-col gap-3">
                <div class="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase">
                  <Icon name="mdi:alert-circle" class="text-base" /> Runtime Error
                </div>
                <pre class="text-[10px] font-mono text-amber-300 bg-amber-950/20 border border-amber-900/40 p-3.5 rounded-lg leading-relaxed whitespace-pre-wrap">{{ runtimeError }}</pre>
                <p class="text-[10px] text-zinc-500">The component failed to render. Make sure you returned a valid React element at the bottom.</p>
              </div>
            </div>

            <!-- Expected Outcome Reference -->
            <div class="bg-zinc-950/70 border border-zinc-900 rounded-xl p-3.5 text-left text-[11px] select-none shrink-0">
              <span class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block mb-1">Expected Output Reference</span>
              <pre class="text-zinc-400 font-mono bg-black/30 p-2 rounded-lg leading-relaxed whitespace-pre-wrap">{{ assignments[selectedAssignment].expectedOutput }}</pre>
            </div>

            <!-- Validation Results -->
            <div 
              class="border rounded-xl p-3 flex items-start gap-3 text-xs font-semibold text-left select-none shrink-0"
              :class="isAssignmentCompleted ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-zinc-900/30 border-zinc-800 text-zinc-500'"
            >
              <Icon :name="isAssignmentCompleted ? 'mdi:check-decagram' : 'mdi:alert-circle-outline'" class="text-lg shrink-0 mt-0.5" />
              <div>
                <p class="font-bold text-white">{{ isAssignmentCompleted ? 'Validation Successful' : 'Validation Pending' }}</p>
                <p class="font-medium text-[11px] mt-0.5 leading-relaxed" :class="isAssignmentCompleted ? 'text-emerald-400/80' : 'text-zinc-500/80'">
                  {{ isAssignmentCompleted ? 'All requirements met! Mark this lesson as completed.' : 'Make sure to fulfill all checkmarks in the verification checklist.' }}
                </p>
              </div>
            </div>
          </div>

          <!-- Tab Content: Console outputs -->
          <div v-show="outputTab === 'console'" class="flex-1 bg-[#040405]/50 overflow-y-auto custom-scrollbar flex flex-col text-left border-t border-zinc-900" ref="consoleContainerRef">
            <div v-if="consoleLogs.length > 0">
              <div 
                v-for="(log, i) in consoleLogs" 
                :key="i"
                class="py-2 px-3.5 border-b border-zinc-900/60 font-mono text-[10px] flex items-start gap-2 hover:bg-white/[0.02] transition-colors"
              >
                <span class="text-zinc-650 shrink-0 font-normal">{{ log.timestamp }}</span>
                <span v-if="log.type === 'error'" class="text-red-400 shrink-0 font-bold">[ERR]</span>
                <span v-else-if="log.type === 'warn'" class="text-amber-400 shrink-0 font-bold">[WRN]</span>
                <span v-else class="text-emerald-400 shrink-0 font-bold">[LOG]</span>
                <span class="whitespace-pre-wrap break-all leading-normal text-zinc-300" :class="{ 'text-red-400': log.type === 'error', 'text-amber-400': log.type === 'warn' }">{{ log.content }}</span>
              </div>
            </div>
            <div v-else class="flex-1 flex flex-col items-center justify-center text-zinc-650 text-[10px] py-16 gap-1.5 select-none">
              <Icon name="mdi:console" class="text-2xl opacity-40" />
              <span>Console output is empty</span>
            </div>
          </div>
        </div>
      </div>

      <!-- TABLET LAYOUT -->
      <div 
        v-else-if="deviceType === 'tablet'" 
        class="flex-1 flex flex-col overflow-hidden relative"
      >
        <!-- Top Tab bar to toggle Instructions collapse state -->
        <div class="h-9 border-b flex px-3 items-center justify-between select-none shrink-0" :class="[themeClasses.headerBg, themeClasses.border]">
          <div class="flex gap-2">
            <button 
              @click="tabletInstructionsOpen = !tabletInstructionsOpen"
              class="px-3 py-1 text-[10px] font-bold rounded-md border flex items-center gap-1 cursor-pointer transition-all"
              :class="tabletInstructionsOpen ? 'bg-brand-orange/15 text-brand-orange border-brand-orange/30' : 'text-zinc-500 border-zinc-800'"
            >
              <Icon name="mdi:book-open-variant" /> Instructions
            </button>
          </div>
          <span class="text-[9px] font-mono text-zinc-500">Tablet Mode</span>
        </div>

        <div class="flex-1 flex overflow-hidden relative">
          <!-- Collapsible Instructions -->
          <div 
            v-if="tabletInstructionsOpen"
            class="w-[280px] h-full border-r flex flex-col overflow-y-auto custom-scrollbar p-4 gap-4 shrink-0"
            :class="[themeClasses.panelBg, themeClasses.border]"
          >
            <!-- Title -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[8px] text-brand-orange font-extrabold uppercase tracking-widest font-mono">Selected Task</span>
              <h3 class="text-xs font-bold text-white tracking-wide">{{ assignments[selectedAssignment].title }}</h3>
            </div>
            
            <div class="relative w-full">
              <input 
                v-model="instructionsSearch" 
                placeholder="Search instructions..." 
                class="w-full bg-zinc-900/40 border border-zinc-900 rounded-xl py-1 px-3 pl-8 text-[10px] text-white placeholder-zinc-500 outline-none"
              />
              <Icon name="mdi:magnify" class="absolute left-2.5 top-2 text-zinc-500 text-xs" />
            </div>

            <!-- Objective -->
            <p class="text-[11px] leading-relaxed text-zinc-400" v-html="searchedInstructions" />

            <!-- Checklist -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[8px] text-zinc-500 font-extrabold uppercase tracking-widest font-mono">Checklist ({{ completionPercentage }}%)</span>
              <div class="flex flex-col gap-1.5">
                <div 
                  v-for="(item, idx) in activeAssignmentChecklist" 
                  :key="idx"
                  class="flex items-center gap-2 text-[11px]"
                  :class="item.passed ? 'text-emerald-400' : 'text-zinc-500'"
                >
                  <Icon :name="item.passed ? 'mdi:check-circle' : 'mdi:circle-outline'" class="text-sm shrink-0" />
                  <span class="leading-tight">{{ item.text }}</span>
                </div>
              </div>
            </div>

            <!-- Continue in VS Code Step 1-3 -->
            <div class="mt-4 border-t border-zinc-900 pt-4 text-[10px] text-zinc-500 leading-normal flex flex-col gap-1.5">
              <strong class="text-zinc-400">Local Setup:</strong>
              <div>1. Install Node.js & VS Code</div>
              <div>2. Run <code class="bg-black/35 px-1 py-0.5 rounded text-[9px] text-brand-orange">npm install</code></div>
              <div>3. Run <code class="bg-black/35 px-1 py-0.5 rounded text-[9px] text-brand-orange">npm run dev</code></div>
            </div>
          </div>

          <!-- Main editor + output area -->
          <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Top half: Editor -->
            <div class="flex-1 flex flex-col overflow-hidden border-b" :class="[themeClasses.border]">
              <div class="h-8 border-b flex px-2 items-center justify-between" :class="[themeClasses.headerBg, themeClasses.border]">
                <span class="font-mono text-[9px] px-2 text-zinc-400">{{ activeFile }}</span>
                <div class="flex items-center gap-1.5 font-sans">
                  <!-- Small Run Button -->
                  <button 
                    @click="runCode" 
                    title="Run Code (Ctrl + Enter)" 
                    class="h-6 px-2 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange hover:bg-brand-orange/25 hover:text-white rounded flex items-center gap-1 cursor-pointer font-bold text-[9px] transition-all"
                  >
                    <Icon name="mdi:play" class="text-[10px]" /> Run
                  </button>
                  <button @click="copyCode" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="themeClasses.border">Copy</button>
                  <button @click="formatCode" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="themeClasses.border">Format</button>
                  <button @click="confirmReset" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="themeClasses.border">Reset</button>
                </div>
              </div>
              <div class="flex-1 relative font-mono overflow-hidden">
                <pre 
                  ref="preRef"
                  class="absolute inset-0 p-3 m-0 pointer-events-none whitespace-pre text-white leading-relaxed font-mono"
                  :class="[settings.lineWrap ? 'whitespace-pre-wrap break-all' : 'whitespace-pre overflow-auto', themeClasses.preBg]"
                  :style="{ fontSize: settings.fontSize + 'px' }"
                  v-html="highlightedCode"
                />
                <textarea 
                  ref="textareaRef"
                  v-model="code"
                  @scroll="syncScroll"
                  @keyup="updateActiveLine"
                  @click="updateActiveLine"
                  @keydown="handleEditorKeyDown"
                  :wrap="settings.lineWrap ? 'soft' : 'off'"
                  class="absolute inset-0 p-3 m-0 w-full h-full bg-transparent border-none outline-none resize-none overflow-auto font-mono leading-relaxed text-transparent caret-zinc-200 selection:bg-white/10"
                  :style="{ fontSize: settings.fontSize + 'px' }"
                  spellcheck="false"
                />
              </div>
            </div>

            <!-- Bottom half: Preview + Collapsible Console -->
            <div class="flex-1 flex overflow-hidden">
              <!-- Left side: Live Preview -->
              <div class="flex-1 flex flex-col overflow-hidden border-r" :class="[themeClasses.border]">
                <div class="h-8 border-b flex px-3 items-center justify-between" :class="[themeClasses.headerBg, themeClasses.border]">
                  <span class="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Live Preview</span>
                  <button @click="tabletConsoleOpen = !tabletConsoleOpen" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="themeClasses.border">
                    {{ tabletConsoleOpen ? 'Collapse Console' : 'Expand Console' }}
                  </button>
                </div>
                <div class="flex-1 p-3 bg-[#040405] flex flex-col gap-2 relative">
                  <iframe 
                    ref="iframeRef"
                    sandbox="allow-scripts allow-same-origin"
                    class="w-full h-full bg-[#040405] rounded-xl border border-zinc-900"
                  />
                  <!-- Skeletons -->
                  <div v-if="!babelLoaded" class="absolute inset-0 bg-[#040405] flex items-center justify-center">
                    <Icon name="mdi:loading" class="animate-spin text-xl text-brand-orange" />
                  </div>
                  <!-- Error overlay -->
                  <div v-if="compilationError || runtimeError" class="absolute inset-0 bg-[#070709] p-3 text-left overflow-y-auto text-[10px] text-red-400">
                    {{ compilationError || runtimeError }}
                  </div>
                </div>
              </div>

              <!-- Right side: Collapsible Console -->
              <div 
                v-if="tabletConsoleOpen"
                class="w-[260px] flex flex-col overflow-hidden"
              >
                <div class="h-8 border-b flex px-3 items-center justify-between" :class="[themeClasses.headerBg, themeClasses.border]">
                  <span class="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Console</span>
                  <button @click="clearConsole" class="text-[9px] text-zinc-500 hover:text-white">Clear</button>
                </div>
                <div class="flex-1 bg-[#040405]/50 overflow-y-auto custom-scrollbar text-left font-mono" ref="consoleContainerRef">
                  <div v-if="consoleLogs.length > 0">
                    <div v-for="(log, i) in consoleLogs" :key="i" class="py-1 px-2 border-b border-zinc-900/60 text-[9px] flex items-start gap-1">
                      <span class="text-zinc-650 shrink-0">{{ log.timestamp }}</span>
                      <span class="whitespace-pre-wrap break-all" :class="{ 'text-red-400': log.type === 'error', 'text-amber-400': log.type === 'warn', 'text-zinc-300': log.type === 'log' }">{{ log.content }}</span>
                    </div>
                  </div>
                  <div v-else class="py-10 text-center text-zinc-650 text-[9px]">Console empty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MOBILE LAYOUT -->
      <div 
        v-else-if="deviceType === 'mobile'" 
        class="flex-1 overflow-y-auto custom-scrollbar flex flex-col p-4 gap-4"
      >
        <!-- Instructions accordion -->
        <div class="border rounded-xl p-3 flex flex-col gap-2.5 text-left" :class="themeClasses.cardBg">
          <button 
            @click="tabletInstructionsOpen = !tabletInstructionsOpen"
            class="w-full flex justify-between items-center text-xs font-bold text-white transition-all cursor-pointer"
          >
            <span class="flex items-center gap-1.5"><Icon name="mdi:book-open-variant" class="text-brand-orange" /> Task Instructions</span>
            <Icon :name="tabletInstructionsOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </button>
          
          <div v-if="tabletInstructionsOpen" class="flex flex-col gap-3 mt-2 animate-scale-in">
            <h4 class="text-xs font-bold text-white">{{ assignments[selectedAssignment].title }}</h4>
            <p class="text-[11px] text-zinc-400 leading-relaxed font-medium">{{ assignments[selectedAssignment].objective }}</p>
            <div class="text-[11px] text-zinc-300 leading-relaxed" v-html="searchedInstructions" />
            
            <div class="h-[1px] bg-zinc-900 my-1" />
            <!-- Checklist -->
            <div class="flex flex-col gap-2">
              <div 
                v-for="(item, idx) in activeAssignmentChecklist" 
                :key="idx"
                class="flex items-center gap-2 text-[11px]"
                :class="item.passed ? 'text-emerald-400' : 'text-zinc-500'"
              >
                <Icon :name="item.passed ? 'mdi:check-circle' : 'mdi:circle-outline'" class="text-sm shrink-0" />
                <span>{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Editor Title/Settings -->
        <div class="flex justify-between items-center px-1">
          <span class="text-[10px] font-mono text-zinc-400">{{ activeFile }}</span>
          <div class="flex gap-1.5 font-sans">
            <!-- Small Run Button -->
            <button 
              @click="runCode" 
              class="text-[9px] bg-brand-orange/15 border border-brand-orange/30 text-brand-orange hover:bg-brand-orange/25 hover:text-white px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer font-bold transition-all"
            >
              <Icon name="mdi:play" class="text-[10px]" /> Run
            </button>
            <button @click="copyCode" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="themeClasses.border">Copy</button>
            <button @click="formatCode" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="themeClasses.border">Format</button>
            <button @click="confirmReset" class="text-[9px] border hover:text-white px-2 py-0.5 rounded" :class="themeClasses.border">Reset</button>
          </div>
        </div>

        <!-- Editor Card -->
        <div class="h-64 border rounded-xl overflow-hidden flex flex-col relative" :class="[themeClasses.border]">
          <div class="flex-1 relative font-mono overflow-hidden">
            <pre 
              ref="preRef"
              class="absolute inset-0 p-3 m-0 pointer-events-none whitespace-pre text-white leading-relaxed font-mono"
              :class="[settings.lineWrap ? 'whitespace-pre-wrap break-all' : 'whitespace-pre overflow-auto', themeClasses.preBg]"
              :style="{ fontSize: settings.fontSize + 'px' }"
              v-html="highlightedCode"
            />
            <textarea 
              ref="textareaRef"
              v-model="code"
              @scroll="syncScroll"
              @keyup="updateActiveLine"
              @click="updateActiveLine"
              @keydown="handleEditorKeyDown"
              :wrap="settings.lineWrap ? 'soft' : 'off'"
              class="absolute inset-0 p-3 m-0 w-full h-full bg-transparent border-none outline-none resize-none overflow-auto font-mono leading-relaxed text-transparent caret-zinc-200 selection:bg-white/10"
              :style="{ fontSize: settings.fontSize + 'px' }"
              spellcheck="false"
            />
          </div>
        </div>

        <!-- Mobile Run Button -->
        <button 
          @click="runCode"
          class="w-full py-2.5 bg-brand-orange text-white hover:bg-brand-orange-deep rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Icon :name="isCompiling ? 'mdi:loading' : 'mdi:play'" class="text-sm" :class="{ 'animate-spin': isCompiling }" />
          <span>{{ isCompiling ? 'Running Compiler...' : 'Compile & Run Code' }}</span>
        </button>

        <!-- Preview Card -->
        <div class="border rounded-xl overflow-hidden flex flex-col gap-2 p-3 text-left" :class="[themeClasses.border, themeClasses.panelBg]">
          <span class="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Preview Output</span>
          
          <div class="h-48 relative w-full rounded-lg overflow-hidden border border-zinc-900 bg-[#040405]">
            <iframe 
              ref="iframeRef"
              sandbox="allow-scripts allow-same-origin"
              class="w-full h-full bg-[#040405]"
            />
            <!-- Loading -->
            <div v-if="!babelLoaded" class="absolute inset-0 bg-[#040405] flex items-center justify-center">
              <Icon name="mdi:loading" class="animate-spin text-brand-orange text-xl" />
            </div>
            <!-- Errors -->
            <div v-if="compilationError || runtimeError" class="absolute inset-0 bg-[#070709] p-3 text-[10px] text-red-400 overflow-y-auto font-mono">
              {{ compilationError || runtimeError }}
            </div>
          </div>
        </div>

        <!-- Console logs card -->
        <div class="border rounded-xl overflow-hidden flex flex-col p-3 text-left" :class="[themeClasses.border, themeClasses.panelBg]">
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Logs Console</span>
            <button @click="clearConsole" class="text-[9px] text-zinc-500 hover:text-white">Clear</button>
          </div>
          
          <div class="h-32 bg-[#040405]/50 overflow-y-auto custom-scrollbar font-mono rounded-lg p-2 border border-zinc-900 text-[9px]">
            <div v-if="consoleLogs.length > 0">
              <div v-for="(log, i) in consoleLogs" :key="i" class="py-1 px-1 border-b border-zinc-900/60 flex items-start gap-1">
                <span class="text-zinc-650 shrink-0">{{ log.timestamp }}</span>
                <span class="whitespace-pre-wrap break-all text-zinc-300">{{ log.content }}</span>
              </div>
            </div>
            <div v-else class="text-center text-zinc-650 py-10">No logs</div>
          </div>
        </div>

        <!-- Verification Results card -->
        <div 
          class="border rounded-xl p-3 flex items-start gap-2.5 text-xs font-semibold text-left select-none"
          :class="isAssignmentCompleted ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-zinc-900/30 border-zinc-850 text-zinc-500'"
        >
          <Icon :name="isAssignmentCompleted ? 'mdi:check-decagram' : 'mdi:alert-circle-outline'" class="text-base shrink-0 mt-0.5" />
          <div>
            <p class="font-bold text-white">{{ isAssignmentCompleted ? 'Task Validation Successful!' : 'Validation Pending' }}</p>
            <p class="font-medium text-[10px] mt-0.5 leading-normal" :class="isAssignmentCompleted ? 'text-emerald-400/80' : 'text-zinc-500/80'">
              {{ isAssignmentCompleted ? 'All requirements met! Mark this lesson completed.' : ' Fulfill checklist to complete.' }}
            </p>
          </div>
        </div>

        <!-- Local Setup Guide Short Summary -->
        <div class="border rounded-xl p-3 text-left" :class="themeClasses.cardBg">
          <h4 class="text-xs font-bold text-white mb-2 flex items-center gap-1.5"><span>💻</span> Run locally in VS Code</h4>
          <ol class="list-decimal pl-4 text-[10px] text-zinc-400 flex flex-col gap-1">
            <li>Download & install Node.js & VS Code.</li>
            <li>Download files and open the project directory.</li>
            <li>Run <code class="bg-black/35 px-1 rounded text-brand-orange">npm install</code> in terminal.</li>
            <li>Run <code class="bg-black/35 px-1 rounded text-brand-orange">npm run dev</code> to boot local server.</li>
          </ol>
        </div>
      </div>

      <!-- Status Bar footer -->
      <div class="h-6 border-t px-4 flex justify-between items-center text-[10px] font-mono select-none shrink-0 z-20" :class="[themeClasses.headerBg, themeClasses.border, themeClasses.textMuted]">
        <div>IDE Status: Connected | Auto-save: {{ settings.autoSave ? 'ON' : 'OFF' }}</div>
        <div class="max-sm:hidden">UTF-8 | JavaScript JSX | Device: {{ deviceType }}</div>
      </div>

    </div>

  </div>
</template>

<style scoped>
/* Scrollbars */
textarea::-webkit-scrollbar,
pre::-webkit-scrollbar,
div::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
textarea::-webkit-scrollbar-track,
pre::-webkit-scrollbar-track,
div::-webkit-scrollbar-track {
  background: transparent;
}
textarea::-webkit-scrollbar-thumb,
pre::-webkit-scrollbar-thumb,
div::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
}
textarea::-webkit-scrollbar-thumb:hover,
pre::-webkit-scrollbar-thumb:hover,
div::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.08);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.08);
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-scale-in {
  animation: scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

/* Dot grid */
.preview-grid-pattern {
  background-color: #040405;
  background-image: radial-gradient(circle, rgba(255, 107, 53, 0.02) 1px, transparent 1px);
  background-size: 16px 16px;
}
</style>
