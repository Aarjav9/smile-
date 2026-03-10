import { Layout } from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Share2 } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogData';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Helmet>
        <title>{post.title} | InSmile Dental Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://insmile.in/blog/${post.id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: post.image,
            author: { '@type': 'Person', name: post.author },
            datePublished: post.date,
            dateModified: post.date,
            description: post.excerpt,
            publisher: {
              '@type': 'Organization',
              name: 'InSmile Dental Clinic',
              logo: { '@type': 'ImageObject', url: 'https://insmile.in/logo.png' },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://insmile.in/blog/${post.id}`,
            },
          })}
        </script>
      </Helmet>
      <Layout>
        {/* Hero */}
        <article>
          <header className="pt-28 pb-12 bg-gradient-to-b from-accent to-background">
            <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
                <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formattedDate}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
                </div>
              </motion.div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="rounded-2xl overflow-hidden shadow-medium aspect-video">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="eager" />
              </div>
            </motion.div>
          </div>

          {/* Article Content */}
          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-5
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              >
                {post.content.map((block, i) => {
                  if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
                  if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>;
                  if (block.type === 'list')
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-2 mb-6">
                        {block.items!.map((item, j) => <li key={j}>{item}</li>)}
                      </ul>
                    );
                  return <p key={i}>{block.text}</p>;
                })}
              </div>

              {/* Share / CTA */}
              <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm">Found this article helpful? Share it with others.</p>
                <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                  <Share2 className="w-4 h-4 mr-2" /> Copy Link
                </Button>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-accent/30">
          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/blog/${rp.id}`}
                    className="group block bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-medium transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3 text-xs">{rp.category}</Badge>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{rp.title}</h3>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
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

export default BlogPost;
