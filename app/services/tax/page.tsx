import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, BarChart3, Zap, TrendingUp, Target } from 'lucide-react'

export const metadata = {
  title: 'Tax Services | Advisory',
  description: 'Strategic tax planning and compliance services to optimize your tax position and minimize liability.',
}

export default function TaxService() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[600px] text-white flex items-center"
        style={{
          backgroundImage: 'url(/service-tax-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-slate-900/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="text-white" size={32} />
            </div>
            <span className="text-green-300 font-semibold text-lg">Tax Services</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            Strategic Tax Planning & Compliance
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
            Minimize tax liability, ensure compliance, and navigate complex tax regulations with expert guidance.
          </p>

          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Schedule Tax Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tax Strategy That Works
              </h2>

              <p className="text-lg text-slate-600 mb-6">
                Taxes are often your largest expense. Our tax specialists combine technical expertise
                with business insight to identify opportunities for optimization while ensuring full compliance.
              </p>

              <p className="text-lg text-slate-600 mb-8">
                We help you understand your tax position, plan for future changes,
                and minimize your tax burden through strategic, compliant approaches.
              </p>

              <ul className="space-y-3">
                {[
                  'Expert knowledge of local and international tax law',
                  'Proactive tax planning, not just compliance',
                  'Industry-specific tax strategies',
                  'Regular tax review and optimization',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Compliance with Confidence
              </h3>
              <p className="text-slate-600">
                We ensure accurate reporting, timely submissions, and professional
                representation before tax authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — UPDATED */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Taxation Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Tax Computation & Returns',
                items: [
                  'Computation of tax',
                  'Filing of tax returns with KRA',
                ],
              },
              {
                title: 'Tax Planning',
                items: [
                  'Tax planning for corporations',
                  'Tax planning for individuals',
                ],
              },
              {
                title: 'PAYE Administration',
                items: [
                  'PAYE administration',
                  'PAYE compliance',
                ],
              },
              {
                title: 'KRA Audits & Verification',
                items: [
                  'Representation during KRA in-depth audits',
                  'Audit verification support',
                ],
              },
              {
                title: 'VAT, Appeals & Indirect Taxes',
                items: [
                  'Lodgment of VAT claims',
                  'Lodging appeals on excessive assessments',
                  'Customs and excise duty advisory',
                ],
              },
              {
                title: 'Statutory & Annual Filings',
                items: [
                  'NSSF, PAYE & NHIF administration',
                  'Filing of annual company returns',
                ],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:shadow-lg transition flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2 text-slate-700">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Planning Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Tax Planning Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Assessment', description: 'Review of your tax position and compliance status.' },
              { step: '2', title: 'Strategy', description: 'Customized tax strategies aligned to objectives.' },
              { step: '3', title: 'Implementation', description: 'Execution and documentation of tax plans.' },
              { step: '4', title: 'Monitoring', description: 'Ongoing updates as laws and business change.' },
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

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why Professional Tax Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Minimize Tax Liability',
                description: 'Identify legitimate opportunities to reduce tax exposure.',
              },
              {
                icon: Target,
                title: 'Ensure Compliance',
                description: 'Meet all statutory and regulatory tax requirements.',
              },
              {
                icon: Zap,
                title: 'Improve Cash Flow',
                description: 'Efficient tax management improves liquidity and planning.',
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Optimize Your Tax Position
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let’s discuss how our tax expertise can help you save money and remain compliant.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Schedule a Tax Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
