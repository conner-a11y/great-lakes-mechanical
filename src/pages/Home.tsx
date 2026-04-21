import { Link } from 'react-router-dom'
import { Phone, ArrowRight, CheckCircle2, Star, Zap, Wind, Building2, AlertTriangle } from 'lucide-react'

const reviews = [
  {
    name: "Mike T.",
    location: "Fenton, MI",
    text: "Furnace went out on a Sunday night in January. Great Lakes had someone out within 2 hours. Fixed it same night. These guys are the real deal.",
    stars: 5,
  },
  {
    name: "Sarah K.",
    location: "Grand Blanc, MI",
    text: "Replaced our entire AC system — fair quote, clean work, done in one day. The tech walked me through everything. Will never call anyone else.",
    stars: 5,
  },
  {
    name: "Dave R.",
    location: "Linden, MI",
    text: "Been using GLM for our commercial property for 3 years. Always on time, always honest about what's needed. Wouldn't trust anyone else with our equipment.",
    stars: 5,
  },
]

const services = [
  {
    icon: Wind,
    title: "AC Repair & Installation",
    desc: "From tune-ups to full system replacements. We service all major brands and guarantee our work.",
    cta: "Get a Quote",
  },
  {
    icon: Zap,
    title: "Heating Systems",
    desc: "Furnace repair, heat pump installs, boilers. We keep your family warm when it matters most.",
    cta: "Get a Quote",
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    desc: "Preventative maintenance contracts, rooftop units, RTU replacements. We handle the big jobs.",
    cta: "Request Inspection",
  },
]

const steps = [
  { num: "01", title: "Request Service", desc: "Call us or fill out a quick form. We'll respond within the hour." },
  { num: "02", title: "Schedule Visit", desc: "Pick a time that works. We show up on time, every time." },
  { num: "03", title: "Job Done Right", desc: "Clean work, clear pricing, guaranteed results. No surprises." },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-glm-slate via-glm-slate/90 to-glm-slate/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-glm-slate via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Fenton, Michigan · Est. 2009</p>
            <h1 className="font-display font-black text-glm-cream text-6xl sm:text-7xl lg:text-8xl uppercase mb-6 leading-none">
              Michigan's<br />
              <span className="text-glm-amber">Trusted</span><br />
              HVAC Experts
            </h1>
            <p className="text-glm-steel text-lg sm:text-xl max-w-xl mb-10 font-light leading-relaxed">
              Family-owned since 2009. We've kept 4,800+ Michigan homes and businesses comfortable through every season. NATE Certified. 24/7 emergency service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-amber text-base px-8 py-4">
                Request Service <ArrowRight size={17} />
              </Link>
              <a href="tel:+18108880206" className="btn-outline text-base px-8 py-4">
                <Phone size={17} /> Call (810) 888-0206
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-glm-slate to-transparent z-10" />
      </section>

      {/* Trust bar */}
      <section className="bg-glm-slate-light border-y border-glm-steel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              "15 Years Serving Michigan",
              "4,800+ Jobs Completed",
              "NATE Certified",
              "5-Star Rated",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-glm-amber shrink-0" />
                <span className="text-glm-cream font-semibold text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-glm-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="section-label mb-3">What We Do</p>
            <h2 className="font-display font-black text-glm-cream text-5xl sm:text-6xl uppercase">
              Full-Service HVAC<br />
              <span className="text-glm-amber">Done Right</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, cta }) => (
              <div key={title} className="card p-8 group">
                <div className="w-12 h-12 rounded bg-glm-amber/10 flex items-center justify-center mb-6 group-hover:bg-glm-amber/20 transition-colors">
                  <Icon size={22} className="text-glm-amber" />
                </div>
                <h3 className="font-display font-bold text-glm-cream text-2xl uppercase mb-3">{title}</h3>
                <p className="text-glm-steel text-sm leading-relaxed mb-6">{desc}</p>
                <Link to="/contact" className="text-glm-amber text-sm font-semibold uppercase tracking-wider hover:text-glm-amber-bright transition-colors flex items-center gap-1.5">
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-glm-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="section-label mb-3">The Process</p>
            <h2 className="font-display font-black text-glm-cream text-5xl sm:text-6xl uppercase">
              Simple. Fast. <span className="text-glm-amber">Done.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-glm-amber/20" />
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center relative">
                <div className="w-20 h-20 rounded-full border-2 border-glm-amber bg-glm-slate flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="font-display font-black text-glm-amber text-2xl">{num}</span>
                </div>
                <h3 className="font-display font-bold text-glm-cream text-2xl uppercase mb-3">{title}</h3>
                <p className="text-glm-steel text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop"
          alt="HVAC technician at work"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-glm-slate/90 via-glm-slate/50 to-transparent" />
        <div className="absolute inset-0 flex items-center px-4 sm:px-8 lg:px-16">
          <div className="max-w-lg">
            <p className="section-label mb-3">Why GLM?</p>
            <h2 className="font-display font-black text-glm-cream text-4xl sm:text-5xl uppercase leading-tight">
              We Treat Your Home<br />
              Like <span className="text-glm-amber">Our Own</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-glm-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="section-label mb-3">What Customers Say</p>
            <h2 className="font-display font-black text-glm-cream text-5xl sm:text-6xl uppercase">
              5-Star Reviews<br />
              <span className="text-glm-amber">Across Michigan</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(({ name, location, text, stars }) => (
              <div key={name} className="card p-8">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={15} className="text-glm-amber fill-glm-amber" />
                  ))}
                </div>
                <p className="text-glm-cream text-sm leading-relaxed mb-6 italic">"{text}"</p>
                <div>
                  <p className="text-glm-cream font-semibold text-sm">{name}</p>
                  <p className="text-glm-steel text-xs mt-0.5">{location} · Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-glm-amber py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <AlertTriangle size={36} className="text-white/80 shrink-0" />
            <div>
              <h2 className="font-display font-black text-white text-3xl sm:text-4xl uppercase leading-none">
                HVAC Emergency?
              </h2>
              <p className="text-white/80 text-sm mt-1">We answer 24/7 — no voicemail, no wait</p>
            </div>
          </div>
          <a
            href="tel:+18108880206"
            className="bg-white text-glm-amber font-display font-black text-xl uppercase px-10 py-4 rounded hover:bg-glm-cream transition-colors tracking-wide whitespace-nowrap"
          >
            Call (810) 888-0206
          </a>
        </div>
      </section>
    </div>
  )
}
