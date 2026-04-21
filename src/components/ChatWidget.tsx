import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_PROMPTS = [
  "What does a tune-up cost?",
  "Do you service commercial buildings?",
  "How soon can someone come out?",
  "What brands do you work with?",
]

const SYSTEM_PROMPT = `You are the virtual assistant for Great Lakes Mechanical, an HVAC company in Fenton, Michigan.

Services: AC repair/install, heating repair/install, commercial HVAC, refrigeration, indoor air quality, 24/7 emergency

Service area: Fenton, Flint, Grand Blanc, Linden, Holly, Hartland — Genesee and Livingston counties

Founded 2009, family-owned, NATE Certified, EPA 608, BBB A+

Address: 4821 Owen Rd, Fenton, MI 48430

Phone: (810) 888-0206

Be helpful, warm, and brief. When someone is ready to schedule, direct them to call or use the contact page. Never quote exact prices. Never say you are Claude or mention Anthropic — you are the Great Lakes Mechanical assistant.`

async function callClaude(history: Message[], apiKey: string): Promise<string> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: history,
    }),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  return data.content[0].text
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY
  const available = Boolean(apiKey)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading || !available) return

    const userMsg: Message = { role: 'user', content: text.trim() }
    const newHistory = [...messages, userMsg]
    setMessages(newHistory)
    setInput('')
    setLoading(true)

    try {
      const reply = await callClaude(newHistory, apiKey)
      setMessages([...newHistory, { role: 'assistant', content: reply }])
    } catch {
      setMessages([...newHistory, {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please call us at (810) 888-0206 — we're happy to help!",
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-glm-amber hover:bg-glm-amber-bright shadow-xl shadow-black/40 flex items-center justify-center transition-all duration-200 active:scale-95 ${
          !open ? 'animate-pulse-slow' : ''
        }`}
        aria-label="Open chat"
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth={2}>
            <path d="M12 2a10 10 0 1 0 10 10c0-1.5-.33-2.93-.93-4.2" strokeLinecap="round" />
            <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="19" cy="5" r="3" fill="#F0941E" stroke="none" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[75vh] flex flex-col bg-glm-slate border border-glm-steel/20 rounded-xl shadow-2xl shadow-black/60 animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-glm-slate-light border-b border-glm-steel/10">
            <div className="w-8 h-8 rounded bg-glm-amber flex items-center justify-center font-display font-black text-white text-sm shrink-0">
              GL
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-glm-cream text-sm uppercase tracking-wide leading-none">Great Lakes Mechanical</p>
              <p className="text-glm-steel text-[11px] mt-0.5">Virtual Assistant</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] text-glm-steel">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto chat-messages px-4 py-4 space-y-3 min-h-0">
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded bg-glm-amber-bright/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle size={13} className="text-glm-amber" />
                  </div>
                  <div className="bg-glm-slate-mid rounded-lg rounded-tl-none px-3.5 py-2.5 text-sm text-glm-cream leading-relaxed max-w-[85%]">
                    {available
                      ? "Hi! I'm the Great Lakes Mechanical assistant. How can I help you today?"
                      : "Our AI assistant is currently offline. Please call us at (810) 888-0206 or use our contact form — we'd love to help!"}
                  </div>
                </div>

                {available && (
                  <div className="pl-9 space-y-2">
                    <p className="text-glm-steel text-[11px] uppercase tracking-wider font-semibold">Quick questions</p>
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="block w-full text-left text-xs text-glm-steel border border-glm-steel/20 rounded-lg px-3 py-2 hover:border-glm-amber/50 hover:text-glm-amber transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded bg-glm-amber-bright/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle size={13} className="text-glm-amber" />
                  </div>
                )}
                <div
                  className={`rounded-lg px-3.5 py-2.5 text-sm leading-relaxed max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-glm-amber text-white rounded-tr-none'
                      : 'bg-glm-slate-mid text-glm-cream rounded-tl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded bg-glm-amber-bright/20 flex items-center justify-center shrink-0">
                  <Loader2 size={13} className="text-glm-amber animate-spin" />
                </div>
                <div className="bg-glm-slate-mid rounded-lg rounded-tl-none px-3.5 py-3 flex gap-1 items-center">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-glm-steel animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {available && (
            <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-glm-steel/10 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={loading}
                className="flex-1 bg-glm-slate-mid border border-glm-steel/20 rounded-lg px-3 py-2 text-sm text-glm-cream placeholder:text-glm-steel/50 focus:outline-none focus:border-glm-amber/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-lg bg-glm-amber hover:bg-glm-amber-bright flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                <Send size={14} className="text-white" />
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="px-4 py-2 border-t border-glm-steel/10 text-center">
            <p className="text-[10px] text-glm-steel/40 uppercase tracking-wider">Powered by Great Lakes Mechanical AI</p>
          </div>
        </div>
      )}
    </>
  )
}
