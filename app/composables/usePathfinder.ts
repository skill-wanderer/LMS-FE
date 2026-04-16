interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface Source {
  title: string
  url: string
  chunk_index: number
  total_chunks: number
  score: number
}

interface ChatResponse {
  answer: string
  sources: Source[]
}

interface StoredSession {
  history: ChatMessage[]
  personality: string
  expiresAt: number
}

const STORAGE_KEY = 'pathfinder_chat_session'

export function usePathfinder() {
  const config = useRuntimeConfig()
  const {
    apiUrl,
    domains: domainsRaw,
    sessionExpiryMinutes,
    sessionStorage: storageMode,
  } = config.public.pathfinder as {
    apiUrl: string
    domains: string
    sessionExpiryMinutes: number
    sessionStorage: string
  }

  const domains = domainsRaw
    .split(',')
    .map((d: string) => d.trim())
    .filter(Boolean)

  const history = ref<ChatMessage[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const sources = ref<Source[]>([])
  const personality = ref<string>('librarian')

  function getStorage(): Storage | null {
    if (import.meta.server) return null
    return storageMode === 'tab' ? sessionStorage : localStorage
  }

  function loadSession() {
    const storage = getStorage()
    if (!storage) return

    try {
      const raw = storage.getItem(STORAGE_KEY)
      if (!raw) return

      const session: StoredSession = JSON.parse(raw)

      if (Date.now() > session.expiresAt) {
        storage.removeItem(STORAGE_KEY)
        return
      }

      history.value = session.history
      personality.value = session.personality || 'librarian'
    }
    catch {
      storage.removeItem(STORAGE_KEY)
    }
  }

  function saveSession() {
    const storage = getStorage()
    if (!storage) return

    const session: StoredSession = {
      history: history.value,
      personality: personality.value,
      expiresAt: Date.now() + sessionExpiryMinutes * 60 * 1000,
    }
    storage.setItem(STORAGE_KEY, JSON.stringify(session))
  }

  async function sendMessage(question: string): Promise<ChatResponse | null> {
    if (!question.trim()) return null

    loading.value = true
    error.value = null

    history.value.push({ role: 'user', content: question })

    try {
      const data = await $fetch<ChatResponse>(`${apiUrl}/api/chat`, {
        method: 'POST',
        body: {
          question,
          domains,
          personality: personality.value,
          history: history.value.slice(-50),
        },
      })

      history.value.push({ role: 'assistant', content: data.answer })
      sources.value = data.sources || []
      saveSession()

      return data
    }
    catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      // Always surface the error so the UI can display it
      error.value = message

      // Mock fallback: only active in development or when explicitly opted-in via env flag
      if (import.meta.dev || config.public.enableMockFallback) {
        console.warn('[Pathfinder] API failed, using mock fallback:', message)
        await new Promise(resolve => setTimeout(resolve, 700))

        const mockAnswer = generateMockAnswer(question)
        const mockData: ChatResponse = { answer: mockAnswer, sources: [] }

        history.value.push({ role: 'assistant', content: mockAnswer })
        sources.value = []
        saveSession()
        return mockData
      }

      // Production: remove the user message so the conversation is not left in a broken state
      history.value.pop()
      return null
    }
    finally {
      loading.value = false
    }
  }

  function generateMockAnswer(question: string): string {
    const q = question.toLowerCase()

    if (q.includes('course')) {
      return 'We offer structured learning courses designed to help you grow step by step. You can explore different domains and start with beginner-friendly paths.'
    }
    if (q.includes('progress')) {
      return 'Your progress is tracked as you complete lessons and modules. Each step builds your understanding and moves you forward in your learning journey.'
    }
    if (q.includes('path')) {
      return 'Learning paths are curated sequences of courses designed to guide you from fundamentals to advanced topics in a structured way.'
    }
    return 'I am Lyra, the Archivist. I can guide you through courses, lessons, and learning paths. Ask me anything, and I will help you navigate the knowledge within the Dojo.'
  }

  function resetChat() {
    history.value = []
    sources.value = []
    error.value = null

    const storage = getStorage()
    if (storage) {
      storage.removeItem(STORAGE_KEY)
    }
  }

  // Restore session on init (client only)
  if (import.meta.client) {
    loadSession()
  }

  return {
    history,
    loading,
    error,
    sources,
    personality,
    sendMessage,
    resetChat,
  }
}
