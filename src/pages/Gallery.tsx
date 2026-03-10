import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

type Category = 'all' | 'implants' | 'cosmetic' | 'whitening' | 'orthodontics';

interface GalleryItem {
  id: number;
  category: Exclude<Category, 'all'>;
  title: string;
  description: string;
  before: string;
  after: string;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Cases' },
  { value: 'implants', label: 'Implants' },
  { value: 'cosmetic', label: 'Cosmetic' },
  { value: 'whitening', label: 'Whitening' },
  { value: 'orthodontics', label: 'Orthodontics' },
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'implants',
    title: 'Full Mouth Rehabilitation',
    description: 'Complete dental implant restoration for missing teeth',
    before: 'https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    category: 'cosmetic',
    title: 'Porcelain Veneers',
    description: 'Custom veneers for a complete smile transformation',
    before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    category: 'whitening',
    title: 'Professional Whitening',
    description: 'In-office teeth whitening for dramatic results',
    before: 'https://images.unsplash.com/photo-1597003601720-2e25ebe8bebb?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    category: 'orthodontics',
    title: 'Clear Aligners',
    description: 'Invisible braces for perfectly aligned teeth',
    before: 'https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    category: 'cosmetic',
    title: 'Dental Bonding',
    description: 'Repair chipped teeth with composite bonding',
    before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    category: 'implants',
    title: 'Single Tooth Implant',
    description: 'Natural-looking replacement for a single missing tooth',
    before: 'https://images.unsplash.com/photo-1597003601720-2e25ebe8bebb?w=600&h=400&fit=crop',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Before & After Gallery | InSmile Dental Clinic</title>
        <meta 
          name="description" 
          content="See real smile transformations at InSmile Dental Clinic. Before and after photos of dental implants, veneers, whitening, and orthodontic treatments." 
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Smile Gallery
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Real Results,{' '}
                <span className="text-gradient-primary">Real Transformations</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Browse our collection of before and after photos showcasing the incredible 
                smile transformations we've achieved for our patients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.value
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-card shadow-soft">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={item.before}
                          alt={`Before ${item.title}`}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                          src={item.after}
                          alt={`After ${item.title}`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                        
                        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground transition-opacity group-hover:opacity-0">
                          Before
                        </div>
                        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-primary text-xs font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                          After
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Hover over images to see the transformation • Click to view details
            </p>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-card rounded-2xl overflow-hidden shadow-medium max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={selectedItem.before}
                      alt={`Before ${selectedItem.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-sm font-medium text-foreground">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={selectedItem.after}
                      alt={`After ${selectedItem.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary text-sm font-medium text-primary-foreground">
                      After
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-3">
                    {selectedItem.title}
                  </h3>
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                  <Button variant="hero" className="mt-6" asChild>
                    <Link to="/contact">
                      Get Similar Results
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <section className="section-padding bg-primary/5">
          <div className="container-narrow mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready for Your Transformation?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of happy patients who have transformed their smiles 
                with InSmile. Schedule your consultation today.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Gallery;
