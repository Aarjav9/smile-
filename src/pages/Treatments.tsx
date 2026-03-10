import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Crown, Smile, Stethoscope, Heart, Scissors, AlignCenter, Paintbrush, CircleX } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Treatment {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const treatments: Treatment[] = [
  {
    id: 'crown-bridge',
    icon: Crown,
    title: 'Crown & Bridge Work',
    description: 'Durable and natural-looking restorations for damaged or missing teeth. Our crowns and bridges are crafted with precision to match your natural teeth, providing both functional and aesthetic solutions for tooth restoration.',
    benefits: [
      'Natural-looking ceramic & zirconia crowns',
      'Restores damaged or broken teeth',
      'Bridges fill gaps from missing teeth',
      'Long-lasting and durable solutions',
      'Custom shade matching for seamless results',
    ],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop',
  },
  {
    id: 'braces',
    icon: Smile,
    title: 'Braces',
    description: 'Orthodontic solutions for aligning teeth and improving bite. We offer a range of braces options including metal, ceramic, and self-ligating braces to straighten your teeth and correct bite issues effectively.',
    benefits: [
      'Metal, ceramic & self-ligating options',
      'Corrects misaligned teeth and bite',
      'Improves oral health and hygiene',
      'Customized treatment plans',
      'Regular progress monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
  },
  {
    id: 'implants',
    icon: Stethoscope,
    title: 'Dental Implants',
    description: 'Permanent replacements for missing teeth with natural feel and function. Our titanium implants integrate with your jawbone to provide a stable, permanent foundation for natural-looking crowns.',
    benefits: [
      'Permanent tooth replacement',
      'Preserves jawbone health',
      'Looks and feels like natural teeth',
      'No impact on adjacent teeth',
      'High success rate',
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
  },
  {
    id: 'root-canal',
    icon: Heart,
    title: 'Root Canal Treatment',
    description: 'Painless procedures to treat infected or damaged tooth pulp. Using advanced rotary instruments and modern anesthesia, we ensure a comfortable experience while saving your natural tooth.',
    benefits: [
      'Pain-free procedure',
      'Saves natural tooth',
      'Single-visit treatment available',
      'Modern rotary instruments',
      'Prevents further infection',
    ],
    image: 'https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?w=600&h=400&fit=crop',
  },
  {
    id: 'flap-surgery',
    icon: Scissors,
    title: 'Flap Surgery',
    description: 'Advanced gum treatments for periodontal health and tissue regeneration. Our periodontists use minimally invasive techniques to treat gum disease and restore gum health effectively.',
    benefits: [
      'Treats advanced gum disease',
      'Regenerates damaged tissue',
      'Minimally invasive techniques',
      'Prevents tooth loss',
      'Improves overall oral health',
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
  },
  {
    id: 'clear-aligners',
    icon: AlignCenter,
    title: 'Clear Aligners',
    description: 'Discreet, comfortable, and removable alternatives to traditional braces. Achieve a perfectly aligned smile without the look of traditional braces using our clear aligner solutions.',
    benefits: [
      'Nearly invisible appearance',
      'Removable for eating & cleaning',
      'Comfortable custom fit',
      'Digital treatment planning',
      'Faster treatment times',
    ],
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop',
  },
  {
    id: 'restorations',
    icon: Paintbrush,
    title: 'Restorations',
    description: 'Tooth-colored fillings and repairs to restore form and strength. We use advanced composite materials that match your natural tooth color for seamless, durable restorations.',
    benefits: [
      'Tooth-colored composite fillings',
      'Restores form and function',
      'Durable and long-lasting',
      'Preserves natural tooth structure',
      'Same-day treatments available',
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
  },
  {
    id: 'extractions',
    icon: CircleX,
    title: 'Tooth Extractions',
    description: 'Safe, precise, and minimally invasive removal of problematic teeth. From wisdom teeth to damaged teeth, we ensure a comfortable extraction experience with proper aftercare guidance.',
    benefits: [
      'Minimally invasive procedures',
      'Pain-free with modern anesthesia',
      'Wisdom tooth removal',
      'Proper aftercare guidance',
      'Quick recovery time',
    ],
    image: 'https://images.unsplash.com/photo-1597003601720-2e25ebe8bebb?w=600&h=400&fit=crop',
  },
];

const Treatments = () => {
  return (
    <>
      <Helmet>
        <title>Dental Treatments & Services | InSmile Dental Clinic Noida</title>
        <meta 
          name="description" 
          content="Comprehensive dental treatments including crown & bridge, braces, implants, root canal, flap surgery, clear aligners, restorations & extractions at InSmile Dental Clinic Noida." 
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
                Our Services
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Comprehensive Dental Care with{' '}
                <span className="text-gradient-primary">Clinical Excellence</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our clinic offers a full spectrum of dental services—from preventive care and
                routine check-ups to advanced restorative and cosmetic dentistry. We are committed to delivering
                personalized treatment in a safe, hygienic, and patient-centric environment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Treatments List */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="space-y-20">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment.id}
                  id={treatment.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="rounded-2xl overflow-hidden shadow-medium">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-auto aspect-[3/2] object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-24 h-24 bg-primary/10 rounded-2xl -z-10`} />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <treatment.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {treatment.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {treatment.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {treatment.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="hero" asChild>
                      <Link to="/contact">
                        Book Consultation
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Not Sure Which Treatment You Need?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Schedule a consultation with our experts. We'll assess your needs and 
                recommend the best treatment options for your unique situation.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule Free Consultation
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

export default Treatments;
