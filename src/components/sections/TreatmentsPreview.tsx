import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Smile, Stethoscope, Heart, Scissors, AlignCenter, Paintbrush, CircleX } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Treatment {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const treatments: Treatment[] = [
  {
    icon: Crown,
    title: 'Crown & Bridge Work',
    description: 'Durable and natural-looking restorations for damaged or missing teeth.',
    href: '/treatments#crown-bridge',
  },
  {
    icon: Smile,
    title: 'Braces',
    description: 'Orthodontic solutions for aligning teeth and improving bite.',
    href: '/treatments#braces',
  },
  {
    icon: Stethoscope,
    title: 'Dental Implants',
    description: 'Permanent replacements for missing teeth with natural feel and function.',
    href: '/treatments#implants',
  },
  {
    icon: Heart,
    title: 'Root Canal Treatment',
    description: 'Painless procedures to treat infected or damaged tooth pulp.',
    href: '/treatments#root-canal',
  },
  {
    icon: Scissors,
    title: 'Flap Surgery',
    description: 'Advanced gum treatments for periodontal health and tissue regeneration.',
    href: '/treatments#flap-surgery',
  },
  {
    icon: AlignCenter,
    title: 'Clear Aligners',
    description: 'Discreet, comfortable, and removable alternatives to traditional braces.',
    href: '/treatments#clear-aligners',
  },
  {
    icon: Paintbrush,
    title: 'Restorations',
    description: 'Tooth-colored fillings and repairs to restore form and strength.',
    href: '/treatments#restorations',
  },
  {
    icon: CircleX,
    title: 'Tooth Extractions',
    description: 'Safe, precise, and minimally invasive removal of problematic teeth.',
    href: '/treatments#extractions',
  },
];

export function TreatmentsPreview() {
  return (
    <section className="section-padding bg-background">
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
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Dental Care with{' '}
            <span className="text-gradient-primary">Clinical Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our clinic offers a full spectrum of dental services—from preventive care and
            routine check-ups to advanced restorative and cosmetic dentistry.
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                to={treatment.href}
                className="group block h-full p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <treatment.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {treatment.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/treatments">
              View All Treatments
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
