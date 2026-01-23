import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp, Users } from 'lucide-react'

export const metadata = {
  title: 'Advisory & Consulting Services | Advisory',
  description: 'Strategic insights and business advisory to drive growth, efficiency, and competitive advantage.',
}

export default function AdvisoryService() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[600px] text-white flex items-center"
        style={{
          backgroundImage: 'url(/service-advisory-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-slate-900/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={32} />
            </div>
            <span className="text-green-300 font-semibold text-lg">Advisory & Consulting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">Strategic Business Advisory Services</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
            Transform your financial strategy, optimize operations, and unlock growth opportunities with expert advisory guidance.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Schedule Advisory Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Beyond Compliance to Strategy</h2>
              <p className="text-lg text-slate-600 mb-6">
                While compliance is important, true business excellence requires strategic financial guidance. Our advisory services help you leverage financial data to make better business decisions.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We analyze your financial position, identify opportunities for improvement, and guide you through strategic initiatives that drive growth and efficiency.
              </p>
              <ul className="space-y-3">
                {[
                  'Strategic financial planning and forecasting',
                  'Performance analysis and improvement opportunities',
                  'Cost optimization and operational efficiency',
                  'Business valuation and financial modeling',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="space-y-6">
                <div>
                  <p className="text-green-600 font-semibold mb-1">Business Impact</p>
                  <h3 className="text-2xl font-bold text-slate-900">Strategic Growth</h3>
                </div>
                <p className="text-slate-600">
                  Our advisory clients typically achieve 20-30% improvement in financial performance within the first year.
                </p>
                <div className="border-t border-green-200 pt-6">
                  <p className="text-green-600 font-semibold mb-1">Informed Decisions</p>
                  <p className="text-slate-600">
                    Make strategic decisions with confidence backed by financial analysis and industry insights.
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Advisory Services We Provide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Financial Strategy & Planning',
                description: 'Develop comprehensive financial strategies aligned with your business goals.',
                features: [
                  '3-5 year financial planning',
                  'Cash flow forecasting',
                  'Scenario analysis',
                  'Strategic recommendations',
                ],
              },
              {
                title: 'Business Performance Analysis',
                description: 'Analyze your financial performance and identify improvement opportunities.',
                features: [
                  'KPI analysis',
                  'Profitability analysis',
                  'Variance analysis',
                  'Benchmarking',
                ],
              },
              {
                title: 'Cost Optimization',
                description: 'Identify and implement cost savings while maintaining quality.',
                features: [
                  'Expense analysis',
                  'Process improvement',
                  'Vendor optimization',
                  'Resource efficiency',
                ],
              },
              {
                title: 'Merger & Acquisition Advisory',
                description: 'Expert guidance for M&A transactions and integrations.',
                features: [
                  'Target identification',
                  'Financial due diligence',
                  'Valuation analysis',
                  'Integration planning',
                ],
              },
              {
                title: 'Business Valuation',
                description: 'Professional valuation for M&A, financing, or investment purposes.',
                features: [
                  'Enterprise valuation',
                  'Equity valuation',
                  'Fairness opinions',
                  'Sensitivity analysis',
                ],
              },
              {
                title: 'Financial Modeling',
                description: 'Advanced financial models for strategic planning and decision-making.',
                features: [
                  'Operating models',
                  'Valuation models',
                  'Scenario modeling',
                  'Sensitivity analysis',
                ],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fdx) => (
                    <li key={fdx} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Our Advisory Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Discovery',
                description: 'Deep dive into your business, strategy, and financial objectives.',
              },
              {
                step: '2',
                title: 'Analysis',
                description: 'Comprehensive financial and operational analysis to identify opportunities.',
              },
              {
                step: '3',
                title: 'Strategy',
                description: 'Develop actionable strategies and implementation roadmap.',
              },
              {
                step: '4',
                title: 'Implementation',
                description: 'Support execution and track results to ensure success.',
              },
            ].map((phase, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-slate-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Specialties */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industry Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Manufacturing & Distribution',
              'Technology & Software',
              'Financial Services',
              'Healthcare & Pharmaceuticals',
              'Retail & E-commerce',
              'Real Estate & Construction',
              'Hospitality & Tourism',
              'Education & Non-Profit',
              'Energy & Utilities',
            ].map((industry, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200 text-center hover:border-green-300 transition-colors">
                <p className="font-semibold text-slate-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Results */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Results We Deliver</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '25%', label: 'Average Cost Reduction' },
              { metric: '35%', label: 'Profit Improvement' },
              { metric: '40%', label: 'Operational Efficiency Gain' },
              { metric: '20%', label: 'Growth Acceleration' },
            ].map((result, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 text-center hover:shadow-lg transition-all">
                <p className="text-4xl font-bold text-green-600 mb-2">{result.metric}</p>
                <p className="text-slate-600 font-semibold">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Why Choose Advisory Consulting</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Results-Focused',
                description: 'Every engagement is structured to deliver measurable business results.',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Access to experienced advisors with deep industry and functional expertise.',
              },
              {
                icon: TrendingUp,
                title: 'Strategic Partnership',
                description: 'We partner with you to implement recommendations and drive sustainable change.',
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss strategic opportunities to drive growth, efficiency, and profitability.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Schedule Advisory Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
