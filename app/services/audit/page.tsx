import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, Clock } from 'lucide-react'

export const metadata = {
  title: 'Audit & Assurance Services | Advisory',
  description: 'Comprehensive audit and assurance services ensuring financial compliance, accuracy, and stakeholder confidence.',
}

export default function AuditService() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[600px] text-white flex items-center"
        style={{
          backgroundImage: 'url(/service-audit-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center">
              <Shield className="text-white" size={32} />
            </div>
            <span className="text-blue-300 font-semibold text-lg">Audit & Assurance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">Comprehensive Audit & Assurance Services</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
            Ensure financial integrity, compliance, and stakeholder confidence with our comprehensive audit and assurance services.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Schedule Audit Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Audit Matters</h2>
              <p className="text-lg text-slate-600 mb-6">
                Financial audits go beyond compliance. They provide independent verification of your financial statements, identify internal control weaknesses, and give stakeholders confidence in your financial reporting.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our audit team combines technical expertise with industry knowledge to deliver insights that help you strengthen operations and demonstrate integrity to investors, lenders, and regulators.
              </p>
              <ul className="space-y-3">
                {[
                  'IFRS compliant audit methodology',
                  'Industry-specific expertise',
                  'Risk-based audit approach',
                  'Comprehensive management letters with actionable recommendations',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="space-y-6">
                <div>
                  <p className="text-blue-600 font-semibold mb-1">Key Benefits</p>
                  <h3 className="text-2xl font-bold text-slate-900">Built-in Risk Identification</h3>
                </div>
                <p className="text-slate-600">
                  Our audits identify control weaknesses and areas for operational improvement, helping you strengthen your organization.
                </p>
                <div className="border-t border-blue-200 pt-6">
                  <p className="text-blue-600 font-semibold mb-1">Stakeholder Confidence</p>
                  <p className="text-slate-600">
                    Independent audit opinions provide credibility with banks, investors, regulators, and business partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Audit Services We Provide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Financial Statement Audits',
                description: 'Complete audits of financial statements in accordance with IFRS and local accounting standards, ensuring accuracy and compliance.',
                features: [
                  'Annual statutory audits',
                  'Half-yearly reviews',
                  'Quarterly reviews',
                  'Ad-hoc audits',
                ],
              },
              {
                title: 'Internal Control Assessments',
                description: 'Evaluate the effectiveness of your internal control systems to identify weaknesses and improve operational efficiency.',
                features: [
                  'Control environment review',
                  'Risk assessment',
                  'Control testing',
                  'Recommendations for improvement',
                ],
              },
              {
                title: 'Compliance Audits',
                description: 'Verify compliance with applicable laws, regulations, and contractual obligations relevant to your business.',
                features: [
                  'Regulatory compliance verification',
                  'Industry-specific compliance',
                  'Contractual compliance reviews',
                  'Risk-based approach',
                ],
              },
              {
                title: 'Special Audits & Reviews',
                description: 'Tailored audit engagements addressing specific areas of concern or stakeholder requirements.',
                features: [
                  'Due diligence audits',
                  'Agreed-upon procedures',
                  'Special investigations',
                  'Feasibility studies',
                ],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fdx) => (
                    <li key={fdx} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Our Audit Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Planning',
                description: 'We understand your business, identify key risks, and plan audit procedures accordingly.',
              },
              {
                step: '2',
                title: 'Testing',
                description: 'Comprehensive testing of transactions, balances, and controls to ensure accuracy and compliance.',
              },
              {
                step: '3',
                title: 'Analysis',
                description: 'Detailed analysis of findings, management letters, and recommendations for improvements.',
              },
              {
                step: '4',
                title: 'Reporting',
                description: 'Clear, actionable audit reports with management letters and follow-up recommendations.',
              },
            ].map((phase, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-slate-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Audit */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industries We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Manufacturing & Distribution',
              'Technology & Software',
              'Financial Services',
              'Healthcare & Pharmaceuticals',
              'Retail & E-commerce',
              'Telecommunications',
              'Real Estate & Construction',
              'Educational Institutions',
              'Non-Profit Organizations',
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200 text-center hover:border-blue-300 transition-colors">
                <p className="font-semibold text-slate-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: 'Audits Completed', value: '500+' },
              { icon: Users, label: 'Satisfied Clients', value: '95%' },
              { icon: Clock, label: 'Avg. Audit Duration', value: '6-8 weeks' },
              { icon: TrendingUp, label: 'Average Finding Reduction', value: '40%' },
            ].map((metric, idx) => {
              const Icon = metric.icon
              return (
                <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</p>
                  <p className="text-slate-600">{metric.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Audit?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our audit services can strengthen your financial position and build stakeholder confidence.
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
