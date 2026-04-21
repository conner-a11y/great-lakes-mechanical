import { Link } from 'react-router-dom'
import { Wind, Flame, Building2, AlertTriangle, Thermometer, Droplets, ArrowRight, Clock } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: "Residential AC",
    headline: "Cool when it counts.",
    desc: "Central AC repair and installation, mini-split systems, seasonal tune-ups, and refrigerant recharge. We service all major brands including Carrier, Trane, Lennox, Bryant, and Rheem.",
    timeline: "Same-day repairs · Installations in 1–2 days",
    image: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Flame,
    title: "Heating Systems",
    headline: "Never go cold.",
    desc: "Gas furnace repair and replacement, heat pump systems, boiler service, and emergency heating calls. If your heat goes out, we're there — any time, any temperature.",
    timeline: "Emergency same-day · Replacements in 1 day",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Commercial HVAC",
    headline: "Downtime is expensive.",
    desc: "Rooftop unit (RTU) maintenance and replacement, commercial refrigeration, preventative maintenance contracts, and priority emergency response for businesses in Genesee and Livingston counties.",
    timeline: "Inspections within 48h · Priority contract clients same-day",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Service",
    headline: "We answer when it matters.",
    desc: "No voicemail. No waiting until Monday. If your HVAC system fails, call us any time — nights, weekends, holidays. Michigan winters don't wait, and neither do we.",
    timeline: "Average response: under 2 hours",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Thermometer,
    title: "Refrigeration",
    headline: "Keep it cold.",
    desc: "Commercial refrigeration units, walk-in coolers and freezers, reach-in cases, and ice machine maintenance. Serving restaurants, grocery stores, and food service businesses across Genesee County.",
    timeline: "Commercial refrigeration: priority response",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Droplets,
    title: "Indoor Air Quality",
    headline: "Breathe better.",
    desc: "Whole-home humidifiers and dehumidifiers, UV air purifiers, HEPA filtration systems, duct cleaning, and air quality testing. Especially beneficial for allergy sufferers and homes with pets.",
    timeline: "Installation: typically 1 day",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&auto=format&fit=crop",
  },
]

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-glm-slate-light border-b border-glm-steel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">What We Offer</p>
          <h1 className="font-display font-black text-glm-cream text-6xl sm:text-7xl uppercase leading-none mb-6">
            Every HVAC Service<br />
            <span className="text-glm-amber">Michigan Needs</span>
          </h1>
          <p className="text-glm-steel text-lg max-w-2xl leading-relaxed">
            From a quick tune-up to a full commercial system replacement — Great Lakes Mechanical handles it all. Family-owned since 2009 with over 4,800 jobs completed.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-glm-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map(({ icon: Icon, title, headline, desc, timeline, image }, i) => (
            <div
              key={title}
              className={`card grid grid-cols-1 lg:grid-cols-2 overflow-hidden ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative h-56 lg:h-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center opacity-60 hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-glm-slate-light/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-glm-amber/10 flex items-center justify-center">
                    <Icon size={20} className="text-glm-amber" />
                  </div>
                  <span className="section-label">{title}</span>
                </div>
                <h2 className="font-display font-black text-glm-cream text-4xl sm:text-5xl uppercase leading-none mb-4">
                  {headline}
                </h2>
                <p className="text-glm-steel text-sm leading-relaxed mb-6">{desc}</p>
                <div className="flex items-center gap-2 mb-8 text-xs text-glm-steel border-l-2 border-glm-amber pl-4">
                  <Clock size={13} className="text-glm-amber shrink-0" />
                  <span>{timeline}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-amber">
                    Get a Quote <ArrowRight size={15} />
                  </Link>
                  <a href="tel:+18108880206" className="btn-outline">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-glm-amber py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl uppercase mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Describe your problem and we'll figure it out together — no commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-glm-amber font-bold text-sm uppercase tracking-widest px-8 py-4 rounded hover:bg-glm-cream transition-colors">
              Send Us a Message
            </Link>
            <a href="tel:+18108880206" className="border border-white/40 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded hover:bg-white/10 transition-colors">
              Call (810) 888-0206
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
