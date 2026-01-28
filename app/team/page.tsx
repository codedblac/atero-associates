import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Linkedin, Mail, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Our Team | Advisory Accounting Firm',
  description: 'Meet our team of expert accountants, auditors, tax specialists, and advisors.',
}

const team = [
  {
    name: 'James Omwimwa',
    role: 'Managing Partner',
    expertise: ['Audit', 'Accounting', 'Tax', 'Advisory'],
    bio: `James Omwimwa is a Managing Partner with overall responsibility for all firm assignments, ensuring 
that they meet both professional and international standards. He has over 10 years of experience, holds a BCom and CPA(K) from KCA University, and has attended several tax trainings. James has worked in both private and public sectors and was previously the director of Audit at Atero and Associates. He is a fully qualified Certified Public Accountant of Kenya (ICPAK no. 23698).`,
    experience: [
      'Over 10 years of professional experience',
      'Expert in Audit, Accounting, Tax, and Advisory',
      'Worked in private and public sectors',
      'Director of Audit at Atero and Associates',
    ],
    education: 'BCom, CPA(K) – KCA University',
    email: '#',
    phone: '#',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Elvis Okeyo',
    role: 'Managing Partner',
    expertise: [
      'Board Operations',
      'Finance',
      'Accounting',
      'Management',
      'Advisory',
    ],
    bio: `Elvis Okeyo is the Managing Director at Atero and Associates, bringing over 10 years of experience in board operations, finance, accounting, and management. He has a strong track record in providing advisory services at board level on business strategy and transformation, focusing on operational improvements and cost efficiency. He holds an MBA (Finance) from the University of Nairobi, a BCom (Finance), and a Diploma in Business Administration from Technical University of Kenya.`,
    experience: [
      'Over 10 years of accumulated experience',
      'Board-level advisory on strategy and transformation',
      'Operational improvements to drive productivity',
      'Finance, Accounting, and Management expertise',
    ],
    education: 'MBA (Finance), BCom (Finance), Diploma in Business Administration',
    email: '#',
    phone: '#',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
      facebook: '#',
    },
  },
]

export default function Team() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            James Omwimwa and Elvis Okeyo are Managing Partners with overall responsibility. They ensure 
            that all assignments are performed efficiently and meet both professional and international standards.
          </p>
        </div>
      </section>

      {/* Team Grid with Lawyer-style Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden border border-slate-200 rounded-xl transition-all hover:shadow-xl flex flex-col"
              >
                {/* Header with Image */}
                <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Avatar */}
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Name, Role, Expertise Badges */}
                  <div className="text-center sm:text-left">
                    <h2 className="font-serif text-2xl font-bold text-slate-900">{member.name}</h2>
                    <p className="mt-1 text-green-600">{member.role}</p>
                    <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                      {member.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-800"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Bio */}
                  <p className="text-slate-600 leading-relaxed">{member.bio}</p>

                  {/* Experience */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-slate-900">Experience Highlights</h3>
                    <ul className="mt-3 space-y-2">
                      {member.experience.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-200 pt-6">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-green-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" /> {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-green-600 transition-colors"
                    >
                      <Phone className="h-4 w-4" /> {member.phone}
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="mt-4 flex gap-3 justify-center sm:justify-start">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-green-600 hover:text-white transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-500 hover:text-white transition-colors"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-pink-500 hover:text-white transition-colors"
                      aria-label={`${member.name} on Instagram`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white transition-colors"
                      aria-label={`${member.name} on Facebook`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                    >
                      Schedule Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Accounting | Audit | Tax | Advisory</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Years of Experience', value: '10+' },
              { label: 'Professional Certifications', value: 'CPA(K)' },
              { label: 'Assignments Completed', value: 'Hundreds' },
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
