'use client'

import React from "react"

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Calendar, Clock, User, CheckCircle2 } from 'lucide-react'

export default function BookConsultation() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Consultation booked:', formData)
    setSubmitted(true)
    setTimeout(() => {
      // Redirect or reset as needed
    }, 2000)
  }

  const services = [
    'Audit & Assurance',
    'Tax Services',
    'Accounting & Bookkeeping',
    'Advisory & Consulting',
  ]

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Consultation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule a meeting with our experts to discuss your accounting and advisory needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Progress Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-slate-200 sticky top-20">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Booking Steps</h3>
                <div className="space-y-4">
                  {[
                    { number: 1, title: 'Your Information' },
                    { number: 2, title: 'Service & Date' },
                    { number: 3, title: 'Confirmation' },
                  ].map((item) => (
                    <div key={item.number} className={`flex items-start gap-4 pb-4 ${item.number < 3 ? 'border-b border-slate-200' : ''}`}>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                          step >= item.number
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {step > item.number ? <CheckCircle2 size={24} /> : item.number}
                      </div>
                      <div>
                        <p className={`font-semibold ${step >= item.number ? 'text-slate-900' : 'text-slate-600'}`}>
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-200">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-green-600" size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Consultation Booked!</h2>
                    <p className="text-lg text-slate-600 mb-4">
                      Thank you for booking a consultation with Advisory.
                    </p>
                    <p className="text-slate-600 mb-8">
                      We've sent a confirmation email to <span className="font-semibold">{formData.email}</span>. Our team will reach out shortly to confirm the details.
                    </p>
                    <a href="/" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      Return Home
                    </a>
                  </div>
                ) : (
                  <>
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Tell Us About Yourself</h2>

                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-3">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-3">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-3">Phone *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="+254 700 000 000"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-3">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Service & Date Selection */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Choose Your Service & Time</h2>

                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-3">Service of Interest *</label>
                          <div className="space-y-3">
                            {services.map((svc) => (
                              <label key={svc} className="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                                <input
                                  type="radio"
                                  name="service"
                                  value={svc}
                                  checked={formData.service === svc}
                                  onChange={handleChange}
                                  required
                                  className="w-4 h-4 text-blue-600"
                                />
                                <span className="ml-3 font-medium text-slate-900">{svc}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-3">Preferred Date *</label>
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-3">Preferred Time *</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="">Select a time slot</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Confirmation */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Confirm Your Booking</h2>

                        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                          <div className="flex items-start gap-3">
                            <User className="text-blue-600 flex-shrink-0" size={20} />
                            <div>
                              <p className="text-sm text-slate-600">Name</p>
                              <p className="font-semibold text-slate-900">{formData.name}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <User className="text-blue-600 flex-shrink-0" size={20} />
                            <div>
                              <p className="text-sm text-slate-600">Service</p>
                              <p className="font-semibold text-slate-900">{formData.service}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Calendar className="text-blue-600 flex-shrink-0" size={20} />
                            <div>
                              <p className="text-sm text-slate-600">Date</p>
                              <p className="font-semibold text-slate-900">{formData.preferredDate}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="text-blue-600 flex-shrink-0" size={20} />
                            <div>
                              <p className="text-sm text-slate-600">Time</p>
                              <p className="font-semibold text-slate-900">{formData.preferredTime}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-3">Additional Notes (Optional)</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            placeholder="Any additional information you'd like to share..."
                          />
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-10 pt-6 border-t border-slate-200">
                      <button
                        type="button"
                        onClick={handlePreviousStep}
                        disabled={step === 1}
                        className="flex-1 px-6 py-3 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                        >
                          Confirm Booking
                        </button>
                      )}
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Consultation FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'How long is a consultation?',
                a: 'Our initial consultations are typically 30-45 minutes, allowing time to understand your needs and discuss how we can help.',
              },
              {
                q: 'Is there a cost for the consultation?',
                a: 'No, our initial consultation is complimentary. There\'s no obligation to engage our services.',
              },
              {
                q: 'Can I reschedule my consultation?',
                a: 'Yes, you can reschedule or cancel up to 24 hours before your scheduled time via email or phone.',
              },
              {
                q: 'Will I meet with the same person?',
                a: 'You\'ll start with a consultant who will assess your needs and introduce you to the appropriate specialist for your situation.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
