import { Phone, MapPin, Clock, ExternalLink, Calendar } from 'lucide-react'

const TALLY_URL = import.meta.env.VITE_TALLY_FORM_URL
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || 'https://cal.com/greatlakesmechanical/service'

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-glm-slate-light border-b border-glm-steel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="font-display font-black text-glm-cream text-6xl sm:text-7xl uppercase leading-none mb-6">
            Let's Get Your<br />
            <span className="text-glm-amber">System Running</span>
          </h1>
          <p className="text-glm-steel text-lg max-w-xl leading-relaxed">
            Request service online, book directly on our calendar, or just give us a call. We respond to all requests within the hour.
          </p>
        </div>
      </section>

      <section className="py-20 bg-glm-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Contact info */}
            <div className="space-y-8">
              <div>
                <p className="section-label mb-5">Contact Info</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-glm-amber/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-glm-amber" />
                    </div>
                    <div>
                      <p className="text-glm-steel text-xs uppercase tracking-wider font-semibold mb-1">Phone</p>
                      <a href="tel:+18105550192" className="text-glm-cream font-semibold hover:text-glm-amber transition-colors">
                        (810) 555-0192
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-glm-amber/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-glm-amber" />
                    </div>
                    <div>
                      <p className="text-glm-steel text-xs uppercase tracking-wider font-semibold mb-1">Address</p>
                      <p className="text-glm-cream text-sm">4821 Owen Rd<br />Fenton, MI 48430</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-glm-amber/10 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-glm-amber" />
                    </div>
                    <div>
                      <p className="text-glm-steel text-xs uppercase tracking-wider font-semibold mb-1">Hours</p>
                      <div className="text-glm-cream text-sm space-y-1">
                        <p>Mon–Fri: 7:00am – 6:00pm</p>
                        <p>Saturday: 8:00am – 2:00pm</p>
                        <p className="text-glm-amber font-semibold">24/7 Emergency Available</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Book directly */}
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-glm-amber" />
                  <span className="section-label">Book Directly</span>
                </div>
                <p className="text-glm-steel text-sm leading-relaxed mb-4">
                  Skip the form — pick a time on our calendar and we'll confirm within minutes.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber w-full justify-center"
                >
                  Schedule Online <ExternalLink size={14} />
                </a>
              </div>

              {/* Emergency */}
              <div className="bg-glm-amber rounded-lg p-6">
                <p className="font-display font-black text-white text-2xl uppercase mb-2">HVAC Emergency?</p>
                <p className="text-white/80 text-sm mb-4">We answer 24/7 — no voicemail.</p>
                <a
                  href="tel:+18105550192"
                  className="bg-white text-glm-amber font-bold text-sm uppercase tracking-widest px-5 py-3 rounded hover:bg-glm-cream transition-colors w-full flex items-center justify-center gap-2"
                >
                  <Phone size={15} /> Call Now
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <p className="section-label mb-5">Request Service</p>
              {TALLY_URL ? (
                <iframe
                  src={TALLY_URL}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Service Request Form"
                  className="rounded-lg"
                />
              ) : (
                /* Placeholder form when Tally URL not configured */
                <div className="card p-8 space-y-5">
                  <p className="text-glm-steel text-sm mb-6">Fill out this form and we'll get back to you within the hour.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-glm-steel text-xs uppercase tracking-wider font-semibold mb-2">First Name</label>
                      <input type="text" className="w-full bg-glm-slate border border-glm-steel/20 rounded-lg px-4 py-3 text-glm-cream text-sm focus:outline-none focus:border-glm-amber/50 transition-colors" placeholder="Tom" />
                    </div>
                    <div>
                      <label className="block text-glm-steel text-xs uppercase tracking-wider font-semibold mb-2">Last Name</label>
                      <input type="text" className="w-full bg-glm-slate border border-glm-steel/20 rounded-lg px-4 py-3 text-glm-cream text-sm focus:outline-none focus:border-glm-amber/50 transition-colors" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-glm-steel text-xs uppercase tracking-wider font-semibold mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-glm-slate border border-glm-steel/20 rounded-lg px-4 py-3 text-glm-cream text-sm focus:outline-none focus:border-glm-amber/50 transition-colors" placeholder="(810) 555-0000" />
                  </div>
                  <div>
                    <label className="block text-glm-steel text-xs uppercase tracking-wider font-semibold mb-2">Service Address</label>
                    <input type="text" className="w-full bg-glm-slate border border-glm-steel/20 rounded-lg px-4 py-3 text-glm-cream text-sm focus:outline-none focus:border-glm-amber/50 transition-colors" placeholder="123 Main St, Fenton, MI" />
                  </div>
                  <div>
                    <label className="block text-glm-steel text-xs uppercase tracking-wider font-semibold mb-2">Service Needed</label>
                    <select className="w-full bg-glm-slate border border-glm-steel/20 rounded-lg px-4 py-3 text-glm-cream text-sm focus:outline-none focus:border-glm-amber/50 transition-colors">
                      <option value="">Select a service...</option>
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>Heating Repair</option>
                      <option>Heating Installation</option>
                      <option>Commercial HVAC</option>
                      <option>Emergency Service</option>
                      <option>Tune-Up / Maintenance</option>
                      <option>Indoor Air Quality</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-glm-steel text-xs uppercase tracking-wider font-semibold mb-2">Describe the Issue</label>
                    <textarea rows={4} className="w-full bg-glm-slate border border-glm-steel/20 rounded-lg px-4 py-3 text-glm-cream text-sm focus:outline-none focus:border-glm-amber/50 transition-colors resize-none" placeholder="Tell us what's happening..." />
                  </div>
                  <button
                    type="button"
                    onClick={() => alert('To activate form submissions, set VITE_TALLY_FORM_URL in your environment variables.')}
                    className="btn-amber w-full justify-center py-4"
                  >
                    Submit Request
                  </button>
                  <p className="text-glm-steel/50 text-xs text-center">We respond to all requests within 1 hour during business hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
