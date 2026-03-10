import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const beforeAfterCases = [
  {
    before: 'https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop',
    treatment: 'Dental Veneers',
    description: 'Complete smile makeover with porcelain veneers',
  },
  {
    before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    treatment: 'Teeth Whitening',
    description: 'Professional whitening for a brighter smile',
  },
  {
    before: 'https://images.unsplash.com/photo-1597003601720-2e25ebe8bebb?w=400&h=300&fit=crop',
    after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
    treatment: 'Orthodontics',
    description: 'Clear aligners for perfectly aligned teeth',
  },
];

export function GalleryPreview() {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Smile Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Results,{' '}
            <span className="text-gradient-primary">Real Smiles</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See the transformative results we've achieved for our patients. 
            Every smile tells a story of confidence restored.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {beforeAfterCases.map((item, index) => (
            <motion.div
              key={item.treatment}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-background shadow-soft">
                {/* Before/After Images */}
                <div className="relative aspect-[4/3]">
                  <img
                    src={item.before}
                    alt={`Before ${item.treatment}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={item.after}
                    alt={`After ${item.treatment}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  
                  {/* Labels */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground transition-opacity group-hover:opacity-0">
                    Before
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-primary text-xs font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    After
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {item.treatment}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hover instruction */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Hover over images to see the transformation
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
