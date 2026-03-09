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
      error.value = message
      // Remove the user message on failure
      history.value.pop()
      return null
    }
    finally {
      loading.value = false
    }
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
