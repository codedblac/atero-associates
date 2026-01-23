import Navigation from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata = {
  title: 'Insights & Resources | Advisory',
  description: 'Expert articles, guides, and insights on accounting, audit, tax, and business advisory.',
}

export default function Insights() {
  const articles = [
    {
      title: 'Understanding ASC 606: Revenue Recognition Best Practices',
      category: 'Accounting',
      author: 'Samuel Kipchoge',
      date: 'January 15, 2024',
      excerpt: 'Learn how to properly implement revenue recognition standards and avoid common pitfalls in your financial reporting.',
      readTime: '8 min read',
    },
    {
      title: 'Tax Planning Strategies for 2024: Maximize Your Tax Efficiency',
      category: 'Tax',
      author: 'Dr. Margaret Ochieng',
      date: 'January 10, 2024',
      excerpt: 'Discover proactive tax planning techniques to optimize your business tax position and improve cash flow.',
      readTime: '6 min read',
    },
    {
      title: 'Building Effective Internal Controls: A Framework for Growth',
      category: 'Audit',
      author: 'Dr. Patricia Nyambura',
      date: 'January 5, 2024',
      excerpt: 'Explore how strong internal controls support business growth while maintaining regulatory compliance.',
      readTime: '10 min read',
    },
    {
      title: 'M&A Due Diligence: Financial Considerations for Success',
      category: 'Advisory',
      author: 'James Kariuki',
      date: 'December 28, 2023',
      excerpt: 'A comprehensive guide to conducting thorough financial due diligence in mergers and acquisitions.',
      readTime: '12 min read',
    },
    {
      title: 'Navigating International Taxation: Compliance Made Simple',
      category: 'Tax',
      author: 'Dr. Margaret Ochieng',
      date: 'December 20, 2023',
      excerpt: 'Essential guidance on international tax compliance requirements for expanding businesses.',
      readTime: '9 min read',
    },
    {
      title: 'Financial Forecasting: Tools and Techniques for Better Planning',
      category: 'Advisory',
      author: 'James Kariuki',
      date: 'December 15, 2023',
      excerpt: 'Master financial forecasting to improve business planning and decision-making accuracy.',
      readTime: '7 min read',
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert articles, guides, and industry insights to help you stay informed and make better financial decisions.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Featured Article</h2>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  Featured
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Understanding ASC 606: Revenue Recognition Best Practices
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Proper revenue recognition is critical for accurate financial reporting. Learn how to implement ASC 606 effectively and avoid common mistakes that could impact your financial statements.
                </p>
                <div className="flex flex-wrap gap-6 mb-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    <span>Samuel Kipchoge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>January 15, 2024</span>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Read Article <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                href="#"
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-all group"
              >
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold mb-4 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-6">{article.excerpt}</p>

                <div className="flex flex-wrap gap-6 text-sm text-slate-500 pb-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>

                <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest insights, tips, and updates delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
