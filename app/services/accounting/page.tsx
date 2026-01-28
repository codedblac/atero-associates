import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Clock, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'Accounting & Bookkeeping Services | Advisory',
  description: 'Accurate financial record-keeping and management for complete financial visibility and informed decision-making.',
}

export default function AccountingService() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[600px] text-white flex items-center"
        style={{
          backgroundImage: 'url(/service-accounting-hero.jpg)',
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
              <TrendingUp className="text-white" size={32} />
            </div>
            <span className="text-blue-300 font-semibold text-lg">Accounting & Bookkeeping</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">Accounting & Bookkeeping Services</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
            Accurate financial records and timely reporting for informed decision-making and business growth.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Schedule Accounting Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Financial Foundation for Success</h2>
              <p className="text-lg text-slate-600 mb-6">
                Accurate bookkeeping is the foundation of any successful business. Our accounting services ensure your financial records are maintained to the highest standards, providing you with timely insights for decision-making.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Rather than managing time-consuming accounting tasks, let us handle the details while you focus on growing your business.
              </p>
              <ul className="space-y-3">
                {[
                  'Monthly financial statements and reconciliations',
                  'Cloud-based accounting system management',
                  'Accurate accounts receivable and payable management',
                  'Real-time financial visibility and reporting',
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
                  <p className="text-blue-600 font-semibold mb-1">Time Savings</p>
                  <h3 className="text-2xl font-bold text-slate-900">Focus on Growth</h3>
                </div>
                <p className="text-slate-600">
                  Outsource accounting to focus on core business activities. Typical clients save 20+ hours per month.
                </p>
                <div className="border-t border-blue-200 pt-6">
                  <p className="text-blue-600 font-semibold mb-1">Financial Clarity</p>
                  <p className="text-slate-600">
                    Know your financial position at all times with accurate, up-to-date accounting records.
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Accounting Services We Provide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Bookkeeping', items: ['Daily transaction recording', 'Ledger management', 'Journal entries review'] },
              { title: 'Financial Statements', items: ['Preparation in accordance with IFRS and legal framework', 'Income statements, balance sheets, cash flows', 'Supporting schedules and notes'] },
              { title: 'Management Accounting', items: ['Cash flow projections for overdraft and loan applications', 'Budget and variance analysis', 'Cost and price analysis'] },
              { title: 'Financial Analysis', items: ['Cost-benefit analysis', 'Ratio analysis', 'Evaluation of financial institutions and markets', 'Investment analysis and determination'] },
              { title: 'Project & Feasibility Studies', items: ['Project appraisals', 'Feasibility studies', 'Corporate recovery and liquidations'] },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:shadow-lg flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <ul className="space-y-2 text-slate-700">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Integration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology-Enabled Accounting</h3>
              <p className="text-slate-600 mb-6">
                We leverage cloud-based accounting systems to provide you with real-time visibility into your financial position.
              </p>
              <ul className="space-y-3">
                {['Cloud-based accounting software','Mobile accessibility','Real-time reporting','Automated reconciliation','Secure data backup'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="text-blue-600 flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Modern Accounting Solutions</h2>
              <p className="text-lg text-slate-600 mb-6">
                We work with industry-leading accounting software to ensure efficient, accurate financial management. Our systems integrate seamlessly with your existing tools and processes.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Access your financial data anytime, anywhere with secure cloud-based systems designed for modern businesses.
              </p>
              <div className="flex items-center gap-3 text-lg font-semibold text-blue-600">
                <Zap size={20} />
                Efficient, accurate, and accessible
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Flexible Engagement Models</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Monthly Fixed Fee', description: 'Predictable monthly fee for ongoing accounting services.', benefits: ['Budgeting simplicity','Unlimited transactions','Regular financial statements','Professional team access'] },
              { title: 'Project-Based', description: 'Specific accounting projects with defined scope and timeline.', benefits: ['Flexible duration','Clear deliverables','One-time or periodic','Custom pricing'] },
              { title: 'Hybrid Model', description: 'Combination of fixed and variable fees based on your needs.', benefits: ['Customized solution','Scaling flexibility','Cost optimization','Seasonal adjustment'] },
            ].map((model, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{model.title}</h3>
                <p className="text-slate-600 mb-6">{model.description}</p>
                <ul className="space-y-2">
                  {model.benefits.map((benefit, bdx) => (
                    <li key={bdx} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Why Choose Our Accounting Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Clock, label: 'Timely Reporting', desc: 'Monthly statements within 5 business days of month-end' },
              { icon: BarChart3, label: 'Accuracy', desc: 'Error-free accounting with quality control checks' },
              { icon: Zap, label: 'Efficiency', desc: 'Streamlined processes save you time and money' },
              { icon: TrendingUp, label: 'Growth Support', desc: 'Financial insights to support business decisions' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.label}</h3>
                  </div>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Accounting Support?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our accounting services can support your business growth and financial clarity.
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
