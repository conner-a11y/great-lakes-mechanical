import { Link } from 'react-router-dom'
import { MapPin, Award, Users, Wrench } from 'lucide-react'

const team = [
  {
    name: "Tom Greer",
    title: "Owner & Master Technician",
    bio: "Started GLM in 2009 after 12 years with a regional HVAC company. NATE Certified, EPA 608 licensed. Tom still runs service calls every week — he says he'll know it's time to retire when he stops enjoying the work.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&face",
  },
  {
    name: "Lisa Greer",
    title: "Operations Manager",
    bio: "Joined the business full-time in 2013. Lisa runs scheduling, customer relations, and accounting. She's the reason jobs get done on time and customers actually hear back when they call.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&face",
  },
  {
    name: "Marcus Webb",
    title: "Lead Technician",
    bio: "With GLM since 2015. Marcus specializes in commercial rooftop systems and refrigeration. NATE Certified in both HVAC installation and service. Customers specifically request him by name.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop&face",
  },
]

const serviceArea = [
  "Fenton", "Flint", "Grand Blanc", "Linden", "Holly", "Hartland",
  "Burton", "Swartz Creek", "Davison", "Brighton", "Howell",
]

const certs = [
  { label: "NATE Certified", desc: "North American Technician Excellence — the industry's gold standard" },
  { label: "EPA 608 Licensed", desc: "Certified for handling all refrigerant types" },
  { label: "BBB A+ Rated", desc: "Better Business Bureau accredited since 2012" },
  { label: "Licensed & Insured", desc: "Michigan HVAC contractor license #HVAC-040291" },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-glm-slate/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Our Story</p>
          <h1 className="font-display font-black text-glm-cream text-6xl sm:text-7xl uppercase leading-none mb-6">
            Family-Owned.<br />
            <span className="text-glm-amber">Michigan Built.</span>
          </h1>
          <p className="text-glm-steel text-lg max-w-2xl leading-relaxed">
            Tom Greer started Great Lakes Mechanical in 2009 with a single service van and a straightforward idea: do honest work, charge fair prices, and treat every home like your own. 15 years later, GLM has grown to a 6-person team completing over 400 jobs a year — with the same values that started it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-glm-slate-light border-y border-glm-steel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2009", label: "Founded" },
              { value: "4,800+", label: "Jobs Completed" },
              { value: "6", label: "Team Members" },
              { value: "5★", label: "Average Rating" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-black text-glm-amber text-5xl sm:text-6xl">{value}</p>
                <p className="text-glm-steel text-sm uppercase tracking-widest font-semibold mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-glm-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="section-label mb-3">The Team</p>
            <h2 className="font-display font-black text-glm-cream text-5xl sm:text-6xl uppercase">
              People You Can <span className="text-glm-amber">Trust</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(({ name, title, bio, image }) => (
              <div key={name} className="card overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top opacity-80 hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-1">
                    <Wrench size={13} className="text-glm-amber" />
                    <span className="text-glm-amber text-xs font-semibold uppercase tracking-wider">{title}</span>
                  </div>
                  <h3 className="font-display font-bold text-glm-cream text-2xl uppercase mb-3">{name}</h3>
                  <p className="text-glm-steel text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-glm-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Where We Work</p>
              <h2 className="font-display font-black text-glm-cream text-5xl sm:text-6xl uppercase mb-6">
                Serving Genesee &<br />
                <span className="text-glm-amber">Livingston Counties</span>
              </h2>
              <p className="text-glm-steel text-sm leading-relaxed mb-8">
                Based in Fenton, we serve the communities we live in. If you're in Genesee or Livingston County and need HVAC service, we can be there — often same day.
              </p>
              <div className="flex items-start gap-2 text-glm-steel text-sm">
                <MapPin size={15} className="text-glm-amber mt-0.5 shrink-0" />
                <span>4821 Owen Rd, Fenton, MI 48430</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Users size={16} className="text-glm-amber" />
                <span className="section-label">Communities We Serve</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceArea.map(city => (
                  <span
                    key={city}
                    className="bg-glm-slate border border-glm-steel/20 text-glm-cream text-sm px-4 py-2 rounded font-medium hover:border-glm-amber/40 transition-colors"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-glm-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label mb-3">Credentials</p>
            <h2 className="font-display font-black text-glm-cream text-5xl uppercase">
              Certified & <span className="text-glm-amber">Accountable</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certs.map(({ label, desc }) => (
              <div key={label} className="card p-6 flex gap-4">
                <Award size={24} className="text-glm-amber shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-bold text-glm-cream text-xl uppercase">{label}</p>
                  <p className="text-glm-steel text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-glm-amber py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl uppercase mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 text-lg mb-8">Request service online or give us a call.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-glm-amber font-bold text-sm uppercase tracking-widest px-8 py-4 rounded hover:bg-glm-cream transition-colors">
              Request Service
            </Link>
            <a href="tel:+18108880206" className="border border-white/40 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded hover:bg-white/10 transition-colors">
              (810) 888-0206
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
