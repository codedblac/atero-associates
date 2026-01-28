"use client"

import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Award, Target, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const clients = [
  'Village to Global Group of Schools',
  'Stars Mentor Initiative',
  'Patoipa Group',
  'Kerean Ltd',
  'Tofam Ltd',
  'HELB Benevolent Fund',
  'Tripple J Group',
  'Polytech Sacco',
]

export default function About() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About ATERO & OPIJA ASSOCIATES
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a premier accounting and advisory firm dedicated to helping
            organizations thrive through expert financial guidance, strategic
            insight, and unwavering integrity.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Atero & Opija Associates traces its roots to Mentor and
                Associates, founded in 2017. In 2019, the firm evolved into
                Atero & Opija Associates, growing steadily from its Nairobi
                offices with a strong team of professionals.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our clients span local and international organizations across
                the private sector, NGOs, parastatals, manufacturing,
                education, finance, agriculture, and service industries.
              </p>
              <p className="text-lg text-slate-600">
                Our motivating force is service excellence — driven by deep
                industry understanding and a practical, solutions-oriented
                approach.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-slate-600 font-semibold">
                    Years of Professional Service
                  </p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-green-600 mb-2">
                    500+
                  </div>
                  <p className="text-slate-600 font-semibold">
                    Clients Served
                  </p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-slate-600 font-semibold">
                    Skilled Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Mission, Vision & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
              <Target className="text-blue-600 mb-4" size={28} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To make businesses better through innovation, insight, and
                practical problem-solving.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
              <Award className="text-green-600 mb-4" size={28} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the benchmark firm in transforming businesses for
                sustainable economic growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
              <Heart className="text-purple-600 mb-4" size={28} />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-slate-600">
                Integrity, professionalism, quality, and innovation guide
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Partner With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expertise You Can Trust',
                description:
                  'Experienced professionals across accounting, audit, tax, and advisory services.',
              },
              {
                title: 'Personalized Solutions',
                description:
                  'Tailored strategies aligned with your organization’s goals.',
              },
              {
                title: 'Strategic Partnership',
                description:
                  'We work with you as long-term partners invested in your success.',
              },
              {
                title: 'Technology-Enabled Delivery',
                description:
                  'Modern tools and automation for accuracy and efficiency.',
              },
              {
                title: 'Industry Experience',
                description:
                  'Deep exposure across education, finance, manufacturing, and more.',
              },
              {
                title: 'Proactive Advisory',
                description:
                  'Forward-thinking guidance that goes beyond compliance.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2
                  className="text-green-500 mt-1 flex-shrink-0"
                  size={22}
                />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Clients
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-slate-800">{client}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with Atero & Opija Associates
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let’s discuss how our expertise can help your organization grow with
            confidence.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Book a Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
