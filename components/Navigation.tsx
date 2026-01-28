'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false) // mobile dropdown toggle

  // Links except Services
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Industries', href: '/industries' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ]

  // Sub-services for dropdown
  const services = [
    { label: 'Accounting', href: 'services/accounting' },
    { label: 'Audit', href: 'services/audit' },
    { label: 'Tax', href: 'services/tax' },
    { label: 'Advisory', href: 'services/advisory' },
  ]

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" onClick={handleNavClick} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white hidden sm:inline">Atero and Associates</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {/* Home */}
            <Link
              href="/"
              onClick={handleNavClick}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={handleNavClick}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                onClick={handleNavClick}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
              >
                Services <ChevronDown size={16} />
              </Link>
              <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-150 z-50">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rest of the links */}
            {navLinks
              .filter((link) => link.label !== 'Home' && link.label !== 'About')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/book-consultation"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {/* Home */}
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => {
                setIsOpen(false)
                handleNavClick()
              }}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => {
                setIsOpen(false)
                handleNavClick()
              }}
            >
              About
            </Link>

            {/* Services mobile */}
            <div>
              <Link
                href="/services"
                onClick={() => {
                  setIsOpen(false)
                  handleNavClick()
                }}
                className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                Services <ChevronDown size={16} className={`${servicesOpen ? 'rotate-180' : ''} transition-transform`} />
              </Link>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex justify-end px-4 py-0 text-sm text-slate-500 dark:text-slate-400"></button>
              {servicesOpen && (
                <ul className="pl-6 mt-2 space-y-1">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        onClick={() => {
                          setIsOpen(false)
                          setServicesOpen(false)
                          handleNavClick()
                        }}
                        className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Rest of the links */}
            {navLinks
              .filter((link) => link.label !== 'Home' && link.label !== 'About')
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  onClick={() => {
                    setIsOpen(false)
                    handleNavClick()
                  }}
                >
                  {link.label}
                </Link>
              ))}

            {/* Book Consultation */}
            <Link
              href="/book-consultation"
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium text-center"
              onClick={() => {
                setIsOpen(false)
                handleNavClick()
              }}
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
