'use client'

import React from "react"
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '', subject: '' })
    setSubmitted(true)
    alert('Thank you for your message. We will get back to you shortly.')
  }

  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our services? We'd love to hear from you. Contact us today for a consultation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'hello@advisory.com',
                subtext: 'Response within 24 hours',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+254 (0) 700 000 000',
                subtext: 'Monday to Friday, 9AM-5PM',
              },
              {
                icon: MapPin,
                title: 'Office',
                content: 'Nairobi, Kenya',
                subtext: 'Serving East Africa & Global',
              },
              {
                icon: Clock,
                title: 'Hours',
                content: 'Mon - Fri: 9AM - 5PM',
                subtext: 'Saturday by appointment',
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-900 font-semibold mb-1">{item.content}</p>
                  <p className="text-sm text-slate-600">{item.subtext}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                <label className="block text-sm font-semibold text-slate-900 mb-3">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="+254 700 000 000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Service of Interest</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="audit">Audit & Assurance</option>
                  <option value="tax">Tax Services</option>
                  <option value="accounting">Accounting & Bookkeeping</option>
                  <option value="advisory">Advisory & Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-900 mb-3">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Tell us about your needs and how we can help"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 text-lg"
            >
              Send Message <ArrowRight size={20} />
            </button>

            <p className="text-sm text-slate-600 text-center mt-6">
              We respect your privacy. Your information will be kept confidential and used only to respond to your inquiry.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'How quickly will I hear back from you?',
                a: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
              },
              {
                q: 'Do you offer remote/virtual services?',
                a: 'Yes, we offer a mix of in-person and virtual services. We can discuss the best approach for your needs during our initial consultation.',
              },
              {
                q: 'What are your pricing models?',
                a: 'Our pricing varies based on the scope of work. We offer fixed fees, hourly rates, and project-based pricing depending on the service.',
              },
              {
                q: 'Can you help with my specific industry?',
                a: 'Yes, we have experience across multiple industries. Visit our Industries page to see if we serve your sector, or contact us to discuss.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Absolutely. Many of our clients engage us for ongoing accounting, tax, and advisory services tailored to their needs.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help your business achieve financial excellence and sustainable growth.
          </p>
          <a
            href="/book-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Schedule a Consultation <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
