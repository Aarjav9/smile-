import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
  image: string;
  treatment: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ambhoj Sinha',
    location: 'Noida',
    content: "I've been visiting InSmile Dental for years—for braces, RCT, and consultations. The doctor is highly knowledgeable, patient, and truly understands your concerns. I always feel safe, well-advised, and cared for here.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
    treatment: 'Braces & RCT',
  },
  {
    name: 'Piyush Raj',
    location: 'Delhi',
    content: 'I had multiple implants done at InSmile Dental and had a great experience. The staff is polite and cooperative. Highly recommend—you can trust them completely for any dental needs.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
    treatment: 'Dental Implants',
  },
  {
    name: 'Rajeev Kumar',
    location: 'Delhi',
    content: 'Had a great experience at InSmile Dental Clinic, Noida. Dr. Anupama was kind, thorough, and gave helpful advice for my natural teeth gaps. The 30-minute cleaning was smooth, and I received practical aftercare tips. The team was humble and professional. Highly recommend InSmile for quality dental care!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces',
    treatment: 'Dental Cleaning',
  },
];

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Patient Testimonials | InSmile Dental Clinic Noida</title>
        <meta 
          name="description" 
          content="Read what our patients say about their experience at InSmile Dental Clinic Noida. Real reviews from real patients about our dental treatments and care." 
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
                Testimonials
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                What Our{' '}
                <span className="text-gradient-primary">Clients Say</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Don't just take our word for it – hear from our happy 
                patients who have trusted InSmile with their smiles.
              </p>
            </motion.div>

            {/* Rating Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center items-center gap-8 mt-10"
            >
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl font-display font-bold text-foreground">4.9/5</p>
                <p className="text-sm text-muted-foreground">Google Reviews</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Quote className="w-3 h-3 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-primary/10 text-xs text-primary font-medium">
                        {testimonial.treatment}
                      </span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
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
                Join Our Happy Patients
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Experience the InSmile difference for yourself. 
                Book your appointment and start your journey to a healthier smile.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Your Appointment
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

export default Testimonials;
