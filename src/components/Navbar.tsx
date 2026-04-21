import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-glm-slate/95 backdrop-blur-sm border-b border-glm-steel/10 shadow-xl shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded bg-glm-amber flex items-center justify-center font-display font-black text-white text-lg leading-none group-hover:bg-glm-amber-bright transition-colors">
              GL
            </div>
            <div className="leading-tight">
              <div className="font-display font-black text-glm-cream text-lg tracking-tight leading-none">
                GREAT LAKES
              </div>
              <div className="text-glm-amber text-[10px] font-semibold tracking-[0.25em] uppercase leading-none mt-0.5">
                Mechanical
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                  location.pathname === to
                    ? 'text-glm-amber'
                    : 'text-glm-steel hover:text-glm-cream'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+18108880206"
              className="flex items-center gap-2 text-glm-amber hover:text-glm-amber-bright transition-colors font-semibold text-sm"
            >
              <Phone size={15} />
              (810) 888-0206
            </a>
            <Link to="/contact" className="btn-amber text-xs py-2.5">
              Request Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-glm-cream hover:text-glm-amber transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-glm-slate-light border-t border-glm-steel/10 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block text-base font-semibold uppercase tracking-widest py-1 transition-colors ${
                  location.pathname === to ? 'text-glm-amber' : 'text-glm-cream hover:text-glm-amber'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4 border-t border-glm-steel/10 flex flex-col gap-3">
              <a
                href="tel:+18108880206"
                className="btn-amber text-center"
              >
                <Phone size={16} /> Call (810) 888-0206
              </a>
              <Link to="/contact" className="btn-outline text-center">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
