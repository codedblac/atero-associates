'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, BarChart3, TrendingUp, Shield, Zap } from 'lucide-react'

const heroSlides = [
  {
    title: 'Trust-Driven Financial Excellence',
    subtitle: 'Expert accounting, audit, and advisory services for enterprise success',
    image: '/hero-audit.jpg',
  },
  {
    title: 'Strategic Financial Growth',
    subtitle: 'Navigate complexity with our team of seasoned advisors',
    image: '/hero-tax.jpg',
  },
  {
    title: 'Compliance & Beyond',
    subtitle: 'Audit, tax optimization, and strategic advisory in one partnership',
    image: '/hero-strategy.jpg',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setAutoPlay(false)
  }

  return (
    <>
      <Navigation />

      {/* Hero Carousel */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 text-balance">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-consultation"
                  className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Book Consultation <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold border border-white/30"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive accounting, audit, tax, and advisory solutions designed for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="text-blue-600" size={32} />,
                title: 'Audit & Assurance',
                description: 'Comprehensive audit services ensuring compliance and financial integrity',
              },
              {
                icon: <BarChart3 className="text-green-600" size={32} />,
                title: 'Tax Services',
                description: 'Strategic tax planning and compliance to optimize your tax position',
              },
              {
                icon: <TrendingUp className="text-blue-600" size={32} />,
                title: 'Accounting & Bookkeeping',
                description: 'Accurate financial record-keeping and management for your business',
              },
              {
                icon: <Zap className="text-green-600" size={32} />,
                title: 'Advisory & Consulting',
                description: 'Strategic insights to drive growth, efficiency, and performance',
              },
            ].map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="mb-4 p-3 bg-white rounded-lg w-fit group-hover:bg-blue-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Advisory?</h2>
              <ul className="space-y-4">
                {[
                  'Expert team with decades of combined experience',
                  'Trusted by businesses across East Africa and globally',
                  'Personalized service tailored to your needs',
                  'Commitment to excellence and integrity',
                  'Competitive pricing without compromise on quality',
                  'Proactive strategic guidance, not just compliance',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                  <p className="text-gray-300">Businesses Served</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">20+</div>
                  <p className="text-gray-300">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                  <p className="text-gray-300">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Transform Your Financial Future?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss how Advisory can help your business thrive with expert guidance and strategic solutions.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg"
          >
            Book Your Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
