import { Layout } from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogData';

const Blog = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Dental Health Blog | InSmile Dental Clinic</title>
        <meta name="description" content="Read expert dental health tips, treatment guides, and oral care advice from InSmile Dental Clinic, Noida." />
        <link rel="canonical" href="https://insmile.in/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'InSmile Dental Blog',
            description: 'Expert dental health tips, treatment guides, and oral care advice.',
            url: 'https://insmile.in/blog',
            publisher: {
              '@type': 'Organization',
              name: 'InSmile Dental Clinic',
            },
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-accent to-background">
          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Our Blog</Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Dental Health Insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert tips, treatment guides, and the latest in dental care from our team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/blog/${featured.id}`} className="block group">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-0 bg-card rounded-2xl overflow-hidden shadow-soft border border-border group-hover:shadow-medium transition-shadow"
              >
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">{featured.category}</Badge>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><User className="w-4 h-4" />{featured.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            </Link>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 pb-24">
          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="group block bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-medium transition-shadow h-full"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3 text-xs">{post.category}</Badge>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
