import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Industries | Advisory Accounting Firm',
  description: 'Industry-specific accounting, audit, tax, and advisory solutions across sectors.',
}

export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Supply chain optimization, inventory management, and regulatory compliance for manufacturing operations.',
      challenges: ['Complex inventory accounting', 'Supply chain visibility', 'Regulatory compliance', 'Cost control'],
      solutions: ['Inventory audit & management', 'Cost accounting', 'Risk assessment', 'Process optimization'],
    },
    {
      name: 'Retail & Commerce',
      description: 'Point-of-sale accounting, inventory management, and financial planning for retail businesses.',
      challenges: ['Multi-location accounting', 'Inventory shrinkage', 'Seasonal fluctuations', 'Cash flow management'],
      solutions: ['Multi-entity consolidation', 'POS system integration', 'Cash flow forecasting', 'Financial analysis'],
    },
    {
      name: 'Healthcare',
      description: 'Healthcare-specific accounting, regulatory compliance, and financial management services.',
      challenges: ['Insurance billing', 'Compliance requirements', 'Patient accounting', 'Cost management'],
      solutions: ['Healthcare audit', 'Compliance review', 'Revenue cycle management', 'Cost analysis'],
    },
    {
      name: 'Financial Services',
      description: 'Banking, insurance, and investment advisory services with specialized accounting expertise.',
      challenges: ['Complex regulations', 'Risk management', 'Investment accounting', 'Capital requirements'],
      solutions: ['Regulatory audit', 'Risk assessment', 'Internal controls', 'Compliance advisory'],
    },
    {
      name: 'Technology & Software',
      description: 'SaaS accounting, revenue recognition (ASC 606), and growth-focused advisory for tech companies.',
      challenges: ['Revenue recognition', 'Stock compensation', 'Growth scaling', 'Equity management'],
      solutions: ['SaaS-specific audit', 'Revenue accounting', 'Equity accounting', 'Financial planning'],
    },
    {
      name: 'Real Estate & Construction',
      description: 'Project accounting, contract revenue recognition, and property management financial services.',
      challenges: ['Project profitability', 'Contract accounting', 'Payment processing', 'Compliance'],
      solutions: ['Project accounting', 'Contract audits', 'Cash flow management', 'Cost control'],
    },
    {
      name: 'Non-Profit & NGOs',
      description: 'Specialized accounting for non-profit organizations, donors, and grant management.',
      challenges: ['Grant compliance', 'Fund accounting', 'Donor reporting', 'Regulatory requirements'],
      solutions: ['Non-profit audit', 'Grant accounting', 'Donor reports', 'Compliance advisory'],
    },
    {
      name: 'Energy & Utilities',
      description: 'Specialized accounting for energy sector with focus on regulatory compliance and project management.',
      challenges: ['Regulatory compliance', 'Project accounting', 'Cost management', 'Environmental compliance'],
      solutions: ['Industry-specific audit', 'Regulatory compliance', 'Cost accounting', 'Financial planning'],
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized accounting and advisory solutions tailored to the unique challenges and opportunities of your industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all group">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-lg text-slate-600 mb-6">{industry.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 text-sm">Key Challenges</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 text-sm">Our Solutions</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Callout */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Deep Industry Expertise, Personalized Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Specialized Knowledge',
                description: 'Our team understands industry-specific challenges, regulatory requirements, and best practices.',
              },
              {
                title: 'Proven Solutions',
                description: 'We bring solutions tested across multiple companies in your industry for proven results.',
              },
              {
                title: 'Strategic Guidance',
                description: 'Beyond compliance, we provide strategic insights to help your business competitive advantage.',
              },
            ].map((point, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Industry Experts?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our industry-specific expertise can drive your success.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Schedule a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
