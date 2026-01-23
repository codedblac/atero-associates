import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Blog | Axion Consulting',
  description: 'Insights, trends, and expert perspectives on digital transformation and business strategy.',
}

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Digital Transformation in 2024',
      excerpt: 'Explore emerging trends, technologies, and strategies that will shape digital transformation initiatives this year.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Digital Transformation',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Building Resilient Organizations Through Change Management',
      excerpt: 'Learn proven strategies for navigating organizational change and building teams that embrace transformation.',
      author: 'Emma Rodriguez',
      date: '2024-01-10',
      category: 'Organizational Development',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'AI and Machine Learning: Enterprise Implementation Guide',
      excerpt: 'Practical insights on successfully implementing AI and ML solutions in enterprise environments.',
      author: 'Michael Chen',
      date: '2024-01-05',
      category: 'Technology',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of Cloud Computing',
      excerpt: 'Essential security practices and frameworks for protecting your organization in cloud-native architectures.',
      author: 'Olivia Martinez',
      date: '2023-12-28',
      category: 'Cybersecurity',
      readTime: '9 min read'
    },
    {
      id: 5,
      title: 'Supply Chain Optimization: Data-Driven Approaches',
      excerpt: 'How advanced analytics and data science are revolutionizing supply chain management and operations.',
      author: 'James Murphy',
      date: '2023-12-20',
      category: 'Operations',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Customer Experience in the Digital Age',
      excerpt: 'Creating seamless, personalized customer experiences through digital innovation and strategy.',
      author: 'Robert Park',
      date: '2023-12-15',
      category: 'Strategy',
      readTime: '8 min read'
    },
    {
      id: 7,
      title: 'Enterprise Architecture: Building for Scale',
      excerpt: 'Design principles and best practices for creating scalable, flexible enterprise technology architectures.',
      author: 'Michael Chen',
      date: '2023-12-10',
      category: 'Technology',
      readTime: '11 min read'
    },
    {
      id: 8,
      title: 'The Business Case for Data Privacy and Compliance',
      excerpt: 'Understanding regulatory requirements and building privacy into your digital transformation strategy.',
      author: 'Lisa Wang',
      date: '2023-12-05',
      category: 'Compliance',
      readTime: '7 min read'
    },
    {
      id: 9,
      title: 'Innovation Strategy: From Ideation to Execution',
      excerpt: 'Frameworks and methodologies for fostering innovation and bringing great ideas to market.',
      author: 'Catherine Lewis',
      date: '2023-11-30',
      category: 'Innovation',
      readTime: '9 min read'
    }
  ]

  const categories = ['All', ...new Set(posts.map(p => p.category))]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Insights & Perspectives</h1>
          <p className="text-xl text-primary-foreground/90">
            Expert insights on digital transformation, strategy, and business innovation from our team of consultants.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-card border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  idx === 0
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-background border border-border hover:border-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 && (
            <div className="bg-gradient-to-br from-primary via-primary/80 to-primary/60 text-primary-foreground rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-accent/30 text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-primary-foreground/70 text-sm">{posts[0].category}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{posts[0].title}</h2>
                <p className="text-lg text-primary-foreground/90 mb-6">{posts[0].excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                  </div>
                  <span>{posts[0].readTime}</span>
                </div>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center gap-2 text-accent-foreground font-bold hover:gap-3 transition-all">
                    Read Article <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-lg transition-all flex flex-col"
              >
                <div className="bg-accent/10 h-40"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent font-bold text-xs px-3 py-1 rounded-full bg-accent/10">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <a href="#" className="mt-4 text-accent font-bold text-sm hover:gap-1 inline-flex items-center gap-1 transition-all">
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button className="px-4 py-2 rounded-lg border border-border hover:border-accent transition-colors">
              ← Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  page === 1
                    ? 'bg-accent text-accent-foreground'
                    : 'border border-border hover:border-accent'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 rounded-lg border border-border hover:border-accent transition-colors">
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Stay Updated</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Subscribe to our newsletter for insights on digital transformation and business strategy.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-primary-foreground/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
