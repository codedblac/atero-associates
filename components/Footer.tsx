import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg">Atero and Associates</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">Professional accounting, audit, tax, and advisory services for businesses across East Africa and internationally.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#audit" className="text-slate-400 hover:text-green-400 transition-colors">Audit & Assurance</Link></li>
              <li><Link href="/services#tax" className="text-slate-400 hover:text-green-400 transition-colors">Tax Services</Link></li>
              <li><Link href="/services#accounting" className="text-slate-400 hover:text-green-400 transition-colors">Accounting & Bookkeeping</Link></li>
              <li><Link href="/services#advisory" className="text-slate-400 hover:text-green-400 transition-colors">Advisory & Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-400 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-slate-400 hover:text-green-400 transition-colors">Our Team</Link></li>
              <li><Link href="/industries" className="text-slate-400 hover:text-green-400 transition-colors">Industries</Link></li>
              <li><Link href="/insights" className="text-slate-400 hover:text-green-400 transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <a href="mailto:info@ateroandassociates.com" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors">
                <Mail size={16} />
                <span>info@ateroandassociates.com</span>
              </a>
              <a href="tel:+254728146422" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors">
                <Phone size={16} />
                <span>+254 728 146 422</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">&copy; {currentYear} Atero and Associates. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-slate-400 hover:text-green-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-slate-400 hover:text-green-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
