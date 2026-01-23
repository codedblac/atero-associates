import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Linkedin, Mail } from 'lucide-react'

export const metadata = {
  title: 'Our Team | Advisory Accounting Firm',
  description: 'Meet our team of expert accountants, auditors, tax specialists, and advisors.',
}

export default function Team() {
  const team = [
    {
      name: 'Samuel Kipchoge',
      role: 'Managing Partner & Head of Audit',
      expertise: 'Financial Audits, Risk Management, IFRS Implementation',
      bio: 'With 25+ years in audit and assurance, Samuel leads our audit practice and brings deep expertise in complex financial reporting.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Margaret Ochieng',
      role: 'Tax Director',
      expertise: 'International Tax, Transfer Pricing, Tax Strategy',
      bio: 'Margaret holds a PhD in Tax Law and specializes in complex international tax matters and strategic tax planning.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'James Kariuki',
      role: 'Head of Advisory Services',
      expertise: 'Business Strategy, M&A Advisory, Financial Planning',
      bio: 'James combines accounting expertise with strategic business insight to guide client growth and transformation.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Grace Muthoni',
      role: 'Senior Accountant',
      expertise: 'Bookkeeping, Financial Reporting, Payroll Services',
      bio: 'Grace ensures accuracy and timeliness in all accounting operations and financial statement preparation.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'David Omondi',
      role: 'Tax Consultant',
      expertise: 'Corporate Tax, VAT Compliance, Tax Audit',
      bio: 'David specializes in helping businesses navigate complex tax regulations and optimize their tax positions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Patricia Nyambura',
      role: 'Audit Manager',
      expertise: 'Internal Audits, Compliance, Governance',
      bio: 'Patricia brings academic and practical expertise in governance and internal control assessments.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experienced professionals dedicated to delivering excellence in accounting, audit, tax, and advisory services.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group">
                {/* Image */}
                <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-slate-500 mb-4 font-medium">Expertise: {member.expertise}</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-100">
                    <a
                      href="#"
                      className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">What Our Team Brings</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Years of Combined Experience', value: '200+' },
              { label: 'Professional Certifications', value: '40+' },
              { label: 'Industries Served', value: '15+' },
              { label: 'Client Satisfaction Rate', value: '99%' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center border border-slate-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
