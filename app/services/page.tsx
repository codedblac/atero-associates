import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, BarChart3, TrendingUp, Zap } from 'lucide-react'

export const metadata = {
  title: 'Services | Advisory Accounting & Advisory Firm',
  description: 'Comprehensive accounting, audit, tax, and advisory services. Expert guidance for businesses across East Africa and globally.',
}

export default function Services() {
  const services = [
    {
      id: 'audit',
      title: 'Audit & Assurance',
      icon: Shield,
      color: 'blue',
      description: 'Comprehensive audit services ensuring compliance, financial integrity, and stakeholder confidence',
      features: [
        'Financial Statement Audits',
        'Internal Control Assessments',
        'Compliance Audits',
        'Operational Audits',
        'Management Letters & Recommendations',
        'Regulatory Compliance Review',
      ],
      benefits: [
        'Ensures accurate financial reporting and compliance with IFRS/local standards',
        'Identifies internal control weaknesses and risk areas',
        'Builds confidence with stakeholders, investors, and regulators',
        'Supports strategic decision-making with reliable financial data',
      ],
    },
    {
      id: 'tax',
      title: 'Tax Services',
      icon: BarChart3,
      color: 'green',
      description: 'Strategic tax planning and compliance to optimize your tax position and minimize liability',
      features: [
        'Corporate Tax Planning',
        'Income Tax Compliance',
        'VAT & Indirect Tax Services',
        'Transfer Pricing Studies',
        'Tax Due Diligence',
        'International Tax Advisory',
      ],
      benefits: [
        'Minimize tax liability through strategic planning and optimization',
        'Ensure timely and accurate tax compliance',
        'Navigate complex tax regulations with expert guidance',
        'Prepare for tax audits with comprehensive documentation',
      ],
    },
    {
      id: 'accounting',
      title: 'Accounting & Bookkeeping',
      icon: TrendingUp,
      color: 'blue',
      description: 'Accurate financial record-keeping and management for complete financial visibility',
      features: [
        'Full-Charge Bookkeeping',
        'Monthly Financial Statements',
        'Bank Reconciliations',
        'Accounts Payable/Receivable Management',
        'Payroll Processing',
        'Financial Data Management',
      ],
      benefits: [
        'Maintains accurate and up-to-date financial records',
        'Provides timely financial statements for informed decision-making',
        'Reduces administrative burden on your internal team',
        'Ensures reliable data for tax compliance and audits',
      ],
    },
    {
      id: 'advisory',
      title: 'Advisory & Consulting',
      icon: Zap,
      color: 'green',
      description: 'Strategic insights and business advisory to drive growth, efficiency, and performance',
      features: [
        'Financial Strategy & Planning',
        'Business Performance Analysis',
        'Cost Optimization Studies',
        'Merger & Acquisition Advisory',
        'Risk Assessment & Mitigation',
        'Operational Improvement Consulting',
      ],
      benefits: [
        'Strategic guidance aligned with your business goals and market dynamics',
        'Identifies cost-saving opportunities and efficiency improvements',
        'Prepares your business for growth and expansion opportunities',
        'Mitigates financial and operational risks proactively',
      ],
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive accounting, audit, tax, and advisory solutions designed to help your business thrive with financial clarity and strategic direction.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div key={service.id} className="scroll-mt-20" id={service.id}>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Content */}
                    <div>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        service.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        <Icon className={`${service.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`} size={28} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                      <p className="text-lg text-slate-600 mb-6">{service.description}</p>

                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Services</h3>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className={`flex-shrink-0 ${service.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`} size={20} />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/services/${service.id === 'accounting' ? 'accounting' : service.id === 'advisory' ? 'advisory' : service.id}`}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg hover:opacity-90 transition-colors font-semibold ${
                          service.color === 'blue'
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        Learn More <ArrowRight size={20} />
                      </Link>
                    </div>

                    {/* Benefits */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                      <h3 className="text-xl font-bold text-slate-900 mb-6">Why This Service</h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex gap-3">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                              service.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'
                            }`} />
                            <p className="text-slate-700">{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < services.length - 1 && (
                    <div className="border-t border-slate-200 mt-16" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Overview Comparison */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Integrated Service Delivery</h2>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 bg-slate-200 p-1">
              {['Service', 'Best For', 'Timeline', 'Investment'].map((header) => (
                <div key={header} className="bg-slate-900 text-white p-4 font-semibold text-center text-sm">
                  {header}
                </div>
              ))}
            </div>

            {services.map((service, idx) => (
              <div key={service.id} className="grid grid-cols-1 md:grid-cols-4 gap-1 bg-slate-100 p-1 border-t border-slate-200">
                <div className="bg-white p-4 font-semibold text-slate-900 flex items-center">{service.title}</div>
                <div className="bg-white p-4 text-slate-600 flex items-center text-sm">
                  {service.id === 'audit' && 'Annual compliance & assurance'}
                  {service.id === 'tax' && 'Tax optimization & planning'}
                  {service.id === 'accounting' && 'Ongoing financial management'}
                  {service.id === 'advisory' && 'Strategic growth initiatives'}
                </div>
                <div className="bg-white p-4 text-slate-600 flex items-center text-sm">
                  {service.id === 'audit' && '2-4 months'}
                  {service.id === 'tax' && '1-3 months'}
                  {service.id === 'accounting' && 'Ongoing'}
                  {service.id === 'advisory' && '3-6 months'}
                </div>
                <div className="bg-white p-4 text-slate-600 flex items-center text-sm">
                  {service.id === 'audit' && 'Variable'}
                  {service.id === 'tax' && 'Fixed/Variable'}
                  {service.id === 'accounting' && 'Monthly fee'}
                  {service.id === 'advisory' && 'Project-based'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Why Choose Advisory Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Chartered accountants, auditors, and tax specialists with proven expertise',
              },
              {
                title: 'Personalized Approach',
                description: 'Customized solutions aligned with your specific business needs and goals',
              },
              {
                title: 'Technology-Driven',
                description: 'Modern tools and systems for efficient, accurate service delivery',
              },
              {
                title: 'Industry Knowledge',
                description: 'Deep understanding of challenges across various sectors and industries',
              },
              {
                title: 'Proactive Partnership',
                description: 'Strategic guidance that goes beyond compliance to drive growth',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality standards and continuous improvement practices',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss which services are right for your business and how we can help you achieve your financial goals.
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
