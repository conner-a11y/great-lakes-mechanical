import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-glm-slate border-t border-glm-steel/10">
      {/* Emergency strip */}
      <div className="bg-glm-amber py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-display font-bold text-lg tracking-wide">
            HEATING OR AC EMERGENCY? WE ANSWER 24/7
          </p>
          <a
            href="tel:+18105550192"
            className="bg-white text-glm-amber font-bold text-sm uppercase tracking-widest px-5 py-2 rounded hover:bg-glm-cream transition-colors whitespace-nowrap"
          >
            Call Now: (810) 555-0192
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded bg-glm-amber flex items-center justify-center font-display font-black text-white text-lg">
                GL
              </div>
              <div className="leading-tight">
                <div className="font-display font-black text-glm-cream text-lg tracking-tight leading-none">GREAT LAKES</div>
                <div className="text-glm-amber text-[10px] font-semibold tracking-[0.25em] uppercase leading-none mt-0.5">Mechanical</div>
              </div>
            </div>
            <p className="text-glm-steel text-sm leading-relaxed">
              Michigan's trusted HVAC experts since 2009. Family-owned, NATE Certified, serving Genesee and Livingston counties.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-glm-cream text-base uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['AC Repair & Install', 'Heating Systems', 'Commercial HVAC', 'Emergency Service', 'Refrigeration', 'Indoor Air Quality'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-glm-steel hover:text-glm-amber transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-glm-cream text-base uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[['About Us', '/about'], ['Services', '/services'], ['Contact', '/contact']].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-glm-steel hover:text-glm-amber transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-1">
              <p className="text-glm-steel text-xs uppercase tracking-widest font-semibold">Certifications</p>
              <p className="text-glm-cream text-sm">NATE Certified</p>
              <p className="text-glm-cream text-sm">EPA 608 Licensed</p>
              <p className="text-glm-cream text-sm">BBB A+ Rated</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-glm-cream text-base uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-glm-steel">
                <Phone size={14} className="mt-0.5 text-glm-amber shrink-0" />
                <a href="tel:+18105550192" className="hover:text-glm-amber transition-colors">(810) 555-0192</a>
              </li>
              <li className="flex items-start gap-2 text-glm-steel">
                <MapPin size={14} className="mt-0.5 text-glm-amber shrink-0" />
                <span>4821 Owen Rd<br />Fenton, MI 48430</span>
              </li>
              <li className="flex items-start gap-2 text-glm-steel">
                <Clock size={14} className="mt-0.5 text-glm-amber shrink-0" />
                <div>
                  <p>Mon–Fri: 7am–6pm</p>
                  <p>Sat: 8am–2pm</p>
                  <p className="text-glm-amber font-semibold">24/7 Emergency</p>
                </div>
              </li>
            </ul>
            <div className="mt-5">
              <p className="text-glm-steel text-xs uppercase tracking-widest font-semibold mb-2">Service Area</p>
              <p className="text-glm-steel text-sm">Fenton · Flint · Grand Blanc<br />Linden · Holly · Hartland</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glm-steel/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-glm-steel text-xs">
            © {new Date().getFullYear()} Great Lakes Mechanical LLC. All rights reserved.
          </p>
          <p className="text-glm-steel/50 text-xs">
            Fenton · Flint · Grand Blanc · Linden · Holly · Hartland — Genesee & Livingston Counties, MI
          </p>
        </div>
      </div>
    </footer>
  )
}
