import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Award, Target, Heart } from 'lucide-react'

export const metadata = {
  title: 'About Advisory | Professional Accounting & Advisory Firm',
  description: 'Learn about Advisory - your trusted partner in accounting, audit, tax, and advisory services across East Africa and globally.',
}

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Advisory</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a premier accounting and advisory firm dedicated to helping businesses thrive through expert financial guidance, strategic insights, and unwavering integrity.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Founded with a vision to elevate professional financial services in East Africa, Advisory has grown into a trusted partner for hundreds of businesses ranging from startups to multinational corporations.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our journey began with a simple belief: that quality accounting and advisory services should be accessible, transparent, and truly valuable to businesses of all sizes.
              </p>
              <p className="text-lg text-slate-600">
                Today, we combine decades of experience, cutting-edge technology, and a genuine commitment to our clients' success to deliver results that matter.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">20+</div>
                  <p className="text-slate-600 font-semibold">Years of Service</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-slate-600 font-semibold">Clients Served</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-slate-600 font-semibold">Expert Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Our Mission, Vision & Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To deliver exceptional accounting, audit, tax, and advisory services that empower businesses to achieve financial clarity, compliance, and sustainable growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the most trusted and respected advisory partner for businesses across East Africa and beyond, recognized for excellence, innovation, and client impact.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-purple-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
              <p className="text-slate-600">
                Integrity, Excellence, Client-First mindset, Continuous Learning, Teamwork, and Social Responsibility guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Why Partner with Advisory</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expertise You Can Trust',
                description: 'Our team comprises chartered accountants, auditors, tax specialists, and business advisors with extensive experience across industries and markets.',
              },
              {
                title: 'Personalized Solutions',
                description: 'We take time to understand your business, challenges, and goals to deliver tailored solutions that drive real value.',
              },
              {
                title: 'Strategic Partnership',
                description: 'We\'re not just service providers - we\'re strategic partners invested in your long-term success and growth.',
              },
              {
                title: 'Technology-Enabled',
                description: 'We leverage modern tools and automation to deliver efficient, accurate services while maintaining that personal touch.',
              },
              {
                title: 'Industry Knowledge',
                description: 'Deep expertise across manufacturing, technology, healthcare, finance, retail, and other key sectors.',
              },
              {
                title: 'Proactive Approach',
                description: 'We anticipate challenges and opportunities, providing guidance that goes beyond compliance to drive competitive advantage.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Our Journey</h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { year: '2003', title: 'Founded', description: 'Established with a vision to revolutionize accounting services in East Africa' },
              { year: '2008', title: 'First Expansion', description: 'Opened offices across major cities, expanding our reach and capabilities' },
              { year: '2015', title: 'Industry Recognition', description: 'Became one of the region\'s most trusted advisory firms' },
              { year: '2020', title: 'Digital Transformation', description: 'Integrated cutting-edge technology to enhance service delivery' },
              { year: '2024', title: 'Global Expansion', description: 'Expanded operations internationally while maintaining local expertise' },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < 4 && <div className="w-1 h-16 bg-blue-200 mt-4" />}
                </div>
                <div className="pt-2 pb-8">
                  <p className="text-sm font-semibold text-blue-600 mb-1">{milestone.year}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Advisory Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our expertise can help your business achieve financial excellence and sustainable growth.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
          >
            Book a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
