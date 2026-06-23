<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

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
    }
  }
})

// Debounced Auto-save Watcher & Manual Trigger setup
let saveTimeout: NodeJS.Timeout | null = null

function triggerManualSave() {
  isSaving.value = true
  if (saveTimeout) clearTimeout(saveTimeout)
  setTimeout(() => {
    isSaving.value = false
    const now = new Date()
    lastSavedTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }, 350)
}

// Swap templates on assignment selection change
watch(selectedAssignment, (newVal) => {
  files.value['App.jsx'].content = assignments[newVal].template
  activeFile.value = 'App.jsx'
  triggerManualSave()
}, { immediate: true })

watch(code, () => {
  if (!settings.value.autoSave) return
  isSaving.value = true
  if (saveTimeout) clearTimeout(saveTimeout)
  saveTimeout = setTimeout(() => {
    isSaving.value = false
    const now = new Date()
    lastSavedTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }, 1000)
})

function formatCode() {
  const currentContent = files.value[activeFile.value].content
  let formatted = currentContent
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
  files.value[activeFile.value].content = formatted
  triggerManualSave()
}

// Layout resize handlers
function startResizeLeft(e: MouseEvent) {
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

// Dynamic props extractor for preview
const parsedComponentInstances = computed(() => {
  const codeStr = files.value['App.jsx']?.content || ''
  const list: any[] = []

  if (selectedAssignment.value === 0) {
    if (codeStr.match(/<WelcomeBadge\s*\/?>/)) {
      list.push({ type: 'welcome', name: 'User', role: 'Guest' })
    }
  } else if (selectedAssignment.value === 1) {
    const regex = /<WelcomeBadge\s+([^>]*)\/>/g
    let match
    while ((match = regex.exec(codeStr)) !== null) {
      const propsStr = match[1]
      const nameMatch = propsStr.match(/name=(?:{["'](.*?)["']}|["'](.*?)["'])/)
      const roleMatch = propsStr.match(/role=(?:{["'](.*?)["']}|["'](.*?)["'])/)
      list.push({
        type: 'welcome',
        name: nameMatch ? (nameMatch[1] || nameMatch[2]) : 'Unknown',
        role: roleMatch ? (roleMatch[1] || roleMatch[2]) : 'Member'
      })
    }
  } else if (selectedAssignment.value === 2) {
    const regex = /<ProductCard\s+([^>]*)\/>/g
    let match
    while ((match = regex.exec(codeStr)) !== null) {
      const propsStr = match[1]
      const titleMatch = propsStr.match(/title=(?:{["'](.*?)["']}|["'](.*?)["'])/)
      const priceMatch = propsStr.match(/price=(?:{(\d+)}|["'](\d+)["'])/)
      const descMatch = propsStr.match(/description=(?:{["'](.*?)["']}|["'](.*?)["'])/)
      const imgMatch = propsStr.match(/imageUrl=(?:{["'](.*?)["']}|["'](.*?)["'])/)
      list.push({
        type: 'product',
        title: titleMatch ? (titleMatch[1] || titleMatch[2]) : 'Default Product',
        price: priceMatch ? (priceMatch[1] || priceMatch[2] || '0') : '0',
        description: descMatch ? (descMatch[1] || descMatch[2]) : 'No description provided.',
        imageUrl: imgMatch ? (imgMatch[1] || imgMatch[2]) : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150'
      })
    }
  } else if (selectedAssignment.value === 3) {
    const regex = /<NotificationBanner\s+([^>]*)\/>/g
    let match
    while ((match = regex.exec(codeStr)) !== null) {
      const propsStr = match[1]
      const msgMatch = propsStr.match(/message=(?:{["'](.*?)["']}|["'](.*?)["'])/)
      const typeMatch = propsStr.match(/type=(?:{["'](.*?)["']}|["'](.*?)["'])/)
      const dismissMatch = propsStr.match(/isDismissible=(?:{(true|false)}|["'](true|false)["'])/)
      list.push({
        type: 'banner',
        message: msgMatch ? (msgMatch[1] || msgMatch[2]) : 'Default notification.',
        bannerType: typeMatch ? (typeMatch[1] || typeMatch[2]) : 'success',
        isDismissible: dismissMatch ? (dismissMatch[1] || dismissMatch[2]) === 'true' : false
      })
    }
  }

  return list
})

// Highlight matching active file content
const highlightedCode = computed(() => {
  const fixedTokenRegex = /(?<comment>\/\*[\s\S]*?\*\/|\/\/.*)|(?<string>'(?:\\['"]|[^'\\])*?'|"(?:\\['"]|[^"\\])*?"|`(?:\\`|[^`\\])*`)|(?<tag>&lt;\/?[a-zA-Z][a-zA-Z0-9_]*)|(?<tagClose>\/&gt;|&gt;)|(?<keyword>\b(?:const|let|var|function|return|import|export|from|default|class|extends|await|async|new|Promise)\b)|(?<number>\b\d+\b)|(?<func>\b[a-zA-Z0-9_]+(?=\())|(?<other>[\s\S])/gy

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
        result += `<span class="text-amber-500 font-semibold">${groups.tag}</span>`
      } else {
        result += `<span class="text-sky-400">${groups.tag}</span>`
      }
    } else if (groups.tagClose) {
      result += `<span class="text-amber-500">${groups.tagClose}</span>`
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

// Evaluator: extract values line-by-line of current code
interface EvaluatedLine {
  line: number
  value: string
  type: 'string' | 'number' | 'object' | 'none'
}

const parsedExpressions = computed(() => {
  const lines = code.value.split('\n')
  const results: EvaluatedLine[] = []

  lines.forEach((lineText, idx) => {
    const cleanLine = lineText.trim()
    if (cleanLine.match(/^\d+\s*[\+\-\*\/]\s*\d+$/)) {
      try {
        const val = eval(cleanLine)
        results.push({ line: idx, value: String(val), type: 'number' })
      } catch {
        results.push({ line: idx, value: '', type: 'none' })
      }
      return
    }
    results.push({ line: idx, value: '', type: 'none' })
  })

  return results
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

const activeHintOpen = ref(false)
const outputTab = ref('preview')

function resetActiveFile() {
  if (activeFile.value === 'App.jsx') {
    files.value['App.jsx'].content = assignments[selectedAssignment.value].template
    triggerManualSave()
  }
}

// Keyboard shortcuts listener
function handleKeyDown(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
    e.preventDefault()
    sidebarOpen.value = !sidebarOpen.value
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
    e.preventDefault()
    toggleFullscreen()
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
    e.preventDefault()
    triggerManualSave()
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r') {
    e.preventDefault()
    resetActiveFile()
  }
}

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div class="w-full flex flex-col gap-6 font-sans">
    
    <!-- Header tabs showing assignment index selector -->
    <div class="flex items-center justify-between bg-zinc-900/35 border border-white/[0.04] p-2.5 rounded-2xl select-none relative overflow-hidden shadow-xl">
      <span class="text-xs font-extrabold uppercase tracking-widest text-zinc-500 pl-3">Lesson 1 Tasks</span>
      
      <!-- Selector buttons -->
      <div class="flex gap-2">
        <button 
          v-for="(assign, idx) in assignments" 
          :key="idx"
          @click="selectedAssignment = idx"
          class="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer"
          :class="[
            selectedAssignment === idx 
              ? 'bg-gradient-to-r from-brand-orange/15 to-brand-orange/5 border border-brand-orange/30 text-brand-orange shadow-[0_0_15px_rgba(255,107,53,0.15)]' 
              : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02]'
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
          : 'w-full h-[620px] border border-white/[0.06] rounded-[24px] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.85)]'
      ]"
      class="bg-[#050507] flex flex-col overflow-hidden relative transition-all duration-300"
    >
      
      <!-- Top IDE header status toolbar (Sticky) -->
      <div class="h-12 bg-[#08080a] border-b border-zinc-900 flex items-center justify-between px-5 select-none shrink-0 z-30">
        <div class="flex items-center gap-3">
          <div class="w-6.5 h-6.5 bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center text-brand-orange">
            <Icon name="mdi:react" class="text-base animate-[spin_30s_linear_infinite]" />
          </div>
          <div class="text-[11px] font-bold text-zinc-200 tracking-wide flex items-center gap-1.5">
            <span>Dojo Workspace</span>
            <span class="text-zinc-700">/</span>
            <span class="font-mono text-zinc-400 text-[10px]">{{ activeFile }}</span>
            <span v-if="files[activeFile]?.readOnly" class="text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-500 px-1 py-0.5 rounded flex items-center gap-1 font-mono">
              <Icon name="mdi:lock" class="text-[9px]" /> READ-ONLY
            </span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1 text-[10px] font-mono text-zinc-500 mr-2">
            <span v-if="isSaving" class="text-brand-orange animate-pulse">Auto-saving...</span>
            <span v-else-if="lastSavedTime" class="flex items-center gap-1"><Icon name="mdi:check" class="text-emerald-500" /> Saved</span>
          </div>
          
          <button 
            @click="triggerManualSave"
            class="h-7 px-3 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange hover:bg-brand-orange/15 hover:text-white rounded-md text-[10px] font-bold flex items-center gap-1 transition-all duration-200 cursor-pointer"
          >
            <Icon name="mdi:play" class="text-[10px]" /> Run
          </button>

          <button 
            @click="formatCode"
            title="Format Code"
            class="h-7 px-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-850 rounded-md text-[10px] font-bold flex items-center gap-1 transition-all duration-200 cursor-pointer"
          >
            Format
          </button>

          <button 
            @click="toggleFullscreen"
            :title="isFullscreen ? 'Exit Fullscreen' : 'Fullscreen (Ctrl+F)'"
            class="h-7 w-7 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-md flex items-center justify-center cursor-pointer transition-colors"
          >
            <Icon :name="isFullscreen ? 'mdi:fullscreen-exit' : 'mdi:fullscreen'" class="text-sm" />
          </button>
        </div>
      </div>

      <!-- Main Panels Workspace Layout -->
      <div class="flex-1 flex overflow-hidden relative max-lg:flex-col">
        
        <!-- LEFT PANEL: INSTRUCTIONS & VERIFICATIONS -->
        <div 
          :style="{ width: leftWidth + '%' }"
          class="min-w-[260px] h-full border-r border-zinc-900 flex flex-col overflow-y-auto custom-scrollbar p-5 gap-5 select-text text-left shrink-0 bg-[#070709]"
        >
          <!-- Active Assignment Description -->
          <div class="flex flex-col gap-2">
            <span class="text-[9px] text-brand-orange font-extrabold uppercase tracking-widest font-mono">Selected Task</span>
            <h3 class="text-sm font-bold text-white tracking-wide">{{ assignments[selectedAssignment].title }}</h3>
          </div>

          <!-- Objective -->
          <div class="flex flex-col gap-1.5">
            <span class="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest font-mono">Objective</span>
            <p class="text-xs text-zinc-400 leading-relaxed font-medium">{{ assignments[selectedAssignment].objective }}</p>
          </div>

          <!-- Outcomes -->
          <div class="flex flex-col gap-1.5">
            <span class="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest font-mono">Learning Outcomes</span>
            <p class="text-xs text-zinc-400 leading-relaxed">{{ assignments[selectedAssignment].outcome }}</p>
          </div>

          <div class="h-[1px] bg-zinc-900" />

          <!-- Instructions -->
          <div class="flex flex-col gap-2">
            <span class="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest font-mono">Instructions</span>
            <div class="text-xs text-zinc-300 leading-relaxed flex flex-col gap-2 font-sans" v-html="assignments[selectedAssignment].instructions" />
          </div>

          <div class="h-[1px] bg-zinc-900" />

          <!-- Assignment Checklist -->
          <div class="flex flex-col gap-2.5">
            <span class="text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest font-mono">Verification Checklist</span>
            
            <div class="flex flex-col gap-2">
              <div 
                v-for="(item, idx) in activeAssignmentChecklist" 
                :key="idx"
                class="flex items-center gap-2.5 text-xs font-semibold"
                :class="item.passed ? 'text-emerald-400' : 'text-zinc-500'"
              >
                <Icon :name="item.passed ? 'mdi:check-circle' : 'mdi:circle-outline'" class="text-base shrink-0" />
                <span class="leading-tight">{{ item.text }}</span>
              </div>
            </div>
          </div>

          <div class="h-[1px] bg-zinc-900" />

          <!-- Collapsible Hints Section -->
          <div class="flex flex-col gap-2">
            <button 
              @click="activeHintOpen = !activeHintOpen"
              class="w-full flex justify-between items-center bg-zinc-900/30 hover:bg-zinc-900/50 border border-zinc-900 rounded-lg p-2 text-xs font-bold text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <span class="flex items-center gap-1.5"><Icon name="mdi:lightbulb-outline" class="text-brand-orange text-sm" /> Hints</span>
              <Icon :name="activeHintOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
            </button>
            <p v-if="activeHintOpen" class="text-[11px] text-zinc-500 leading-relaxed p-2 font-sans bg-zinc-950/40 rounded-lg border border-zinc-900/30">
              {{ assignments[selectedAssignment].hint }}
            </p>
          </div>
        </div>

        <!-- RESIZABLE DIVIDER 1 -->
        <div 
          @mousedown="startResizeLeft"
          class="w-1 hover:w-1.5 h-full bg-zinc-900 hover:bg-brand-orange/40 active:bg-brand-orange transition-all cursor-col-resize shrink-0 z-20 max-lg:hidden select-none"
        />

        <!-- CENTER PANEL: INTERACTIVE EDITOR -->
        <div 
          :style="{ width: centerWidth + '%' }"
          class="min-w-[320px] h-full flex flex-col overflow-hidden shrink-0 bg-black/60 relative"
        >
          <!-- Workspace tab headers -->
          <div class="h-9 bg-[#040405] border-b border-zinc-900 flex px-2 items-center select-none overflow-x-auto shrink-0 scrollbar-none">
            <div 
              v-for="(fileInfo, filename) in files" 
              :key="filename"
              @click="activeFile = filename"
              class="h-full px-3.5 flex items-center gap-2 border-r border-zinc-900/60 cursor-pointer text-xs font-semibold relative transition-all duration-200"
              :class="activeFile === filename ? 'bg-zinc-900/40 text-white border-t-2 border-t-brand-orange' : 'text-zinc-500 hover:text-zinc-300 bg-transparent'"
            >
              <Icon v-if="filename.endsWith('.jsx')" name="mdi:react" class="text-[#38bdf8] text-sm" />
              <Icon v-else-if="filename.endsWith('.css')" name="mdi:language-css3" class="text-emerald-400 text-sm" />
              <Icon v-else-if="filename.endsWith('.json')" name="mdi:code-json" class="text-amber-500 text-sm" />
              <span class="font-mono text-[10px]">{{ filename }}</span>
            </div>
          </div>

          <!-- Code Typing Area -->
          <div class="flex-1 flex relative overflow-hidden p-2 bg-[#040405]/20">
            <!-- Line numbers -->
            <div v-if="settings.lineNumbers" class="w-10 py-4 select-none text-right pr-3.5 text-zinc-700 font-mono leading-relaxed border-r border-zinc-900/60 bg-zinc-950/20 rounded-l-xl" :style="{ fontSize: settings.fontSize + 'px' }">
              <div v-for="num in lineCount" :key="num" :class="{ 'text-brand-orange font-bold filter drop-shadow-[0_0_2px_rgba(255,107,53,0.35)]': settings.activeLine && num - 1 === activeLineIndex }">
                {{ num }}
              </div>
            </div>

            <!-- Pre highlights & text area input -->
            <div class="flex-1 relative font-mono leading-relaxed overflow-hidden" :style="{ fontSize: settings.fontSize + 'px' }">
              <pre 
                ref="preRef"
                class="absolute inset-0 p-4 m-0 overflow-auto pointer-events-none whitespace-pre select-none text-white leading-relaxed font-mono custom-scrollbar"
                :style="{ fontSize: settings.fontSize + 'px' }"
                v-html="highlightedCode"
              />

              <textarea 
                ref="textareaRef"
                v-model="code"
                @scroll="syncScroll"
                @keyup="updateActiveLine"
                @click="updateActiveLine"
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
          class="w-1 hover:w-1.5 h-full bg-zinc-900 hover:bg-brand-orange/40 active:bg-brand-orange transition-all cursor-col-resize shrink-0 z-20 max-lg:hidden select-none"
        />

        <!-- RIGHT PANEL: RENDER & OUTPUTS -->
        <div 
          :style="{ width: (100 - leftWidth - centerWidth) + '%' }"
          class="min-w-[285px] h-full flex flex-col overflow-y-auto custom-scrollbar bg-black/85"
        >
          <!-- Headers tabs -->
          <div class="h-9 bg-[#040405] border-b border-zinc-900 flex px-3 items-center justify-between select-none shrink-0">
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
                RunJS Console
              </button>
            </div>
          </div>

          <!-- Tab Content: Live Preview -->
          <div v-show="outputTab === 'preview'" class="flex-1 p-5 flex flex-col gap-4 preview-grid-pattern min-h-[350px]">
            <span class="text-[9px] text-zinc-650 font-bold uppercase tracking-widest font-mono text-left select-none">Live Component Render</span>

            <div class="flex-1 flex flex-col justify-center items-center py-5">
              
              <!-- Simulated Component Renderers -->
              <div v-if="parsedComponentInstances.length > 0" class="w-full flex flex-col items-center gap-3">
                <div 
                  v-for="(inst, i) in parsedComponentInstances" 
                  :key="i"
                  class="w-full max-w-[280px]"
                >
                  <!-- Badge renderer -->
                  <div v-if="inst.type === 'welcome'" class="badge">
                    <h1>Welcome, {{ inst.name }}!</h1>
                    <p>Role: {{ inst.role }}</p>
                  </div>

                  <!-- ProductCard renderer -->
                  <div v-else-if="inst.type === 'product'" class="product-card">
                    <img :src="inst.imageUrl" :alt="inst.title" class="product-img" />
                    <h3>{{ inst.title }}</h3>
                    <span class="price">${{ inst.price }}</span>
                    <p class="desc">{{ inst.description }}</p>
                  </div>

                  <!-- Banner renderer -->
                  <div v-else-if="inst.type === 'banner'" class="banner" :class="'banner-' + inst.bannerType">
                    <span class="message">{{ inst.message }}</span>
                    <button v-if="inst.isDismissible" class="close-btn">&times;</button>
                  </div>
                </div>
              </div>

              <div v-else class="text-zinc-600 text-xs py-10 font-sans max-w-[220px] text-center leading-relaxed select-none">
                No components rendered. Add your React element calls inside `App.jsx`.
              </div>

            </div>

            <!-- Expected Outcome Reference -->
            <div class="bg-zinc-950/70 border border-zinc-900 rounded-xl p-3.5 text-left text-[11px] select-none shrink-0">
              <span class="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block mb-1">Expected Output Reference</span>
              <pre class="text-zinc-400 font-mono bg-black/30 p-2 rounded-lg leading-relaxed whitespace-pre-wrap">{{ assignments[selectedAssignment].expectedOutput }}</pre>
            </div>

            <!-- Validation Results -->
            <div 
              class="border rounded-xl p-3 flex items-start gap-3 text-xs font-semibold text-left select-none shrink-0 animate-fade-in"
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
          <div v-show="outputTab === 'console'" class="flex-1 bg-[#040405]/50 p-4 font-mono text-[10px] leading-relaxed overflow-y-auto custom-scrollbar flex flex-col text-left">
            <div 
              v-for="(res, i) in parsedExpressions" 
              :key="i" 
              class="min-h-[1.5rem] flex items-center justify-between border-b border-zinc-900 px-1 hover:bg-zinc-900/25"
            >
              <span class="text-zinc-650">Line {{ res.line + 1 }}</span>
              <span v-if="res.value" class="text-amber-400 font-semibold">{{ res.value }}</span>
              <span v-else class="text-zinc-800">—</span>
            </div>
          </div>

        </div>

      </div>

      <!-- Status Bar footer -->
      <div class="h-6 bg-black border-t border-zinc-900 px-4 flex justify-between items-center text-[10px] text-zinc-600 font-mono select-none shrink-0 z-20">
        <div>IDE Status: Connected | Auto-save: {{ settings.autoSave ? 'ON' : 'OFF' }}</div>
        <div>UTF-8 | JavaScript JSX</div>
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
