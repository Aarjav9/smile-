import { motion } from 'framer-motion';
import { Target, Users, Award, Stethoscope } from 'lucide-react';

const stats = [
  { number: '15+', label: 'Years Experience', icon: Award },
  { number: '10,000+', label: 'Happy Patients', icon: Users },
  { number: '25+', label: 'Expert Dentists', icon: Stethoscope },
  { number: '98%', label: 'Success Rate', icon: Target },
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/3 -skew-x-12 origin-top-right" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=500&fit=crop"
                  alt="Modern InSmile Dental Clinic interior with advanced equipment"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute bottom-6 left-6 bg-card rounded-xl p-4 shadow-medium"
              >
                <p className="text-3xl font-display font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Committed to Creating{' '}
              <span className="text-gradient-primary">Healthy, Beautiful Smiles</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At InSmile, we combine expert dental care with a personal touch to ensure 
              every patient feels comfortable and confident.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our clinic offers a full spectrum of dental services—from preventive care and
              routine check-ups to advanced restorative and cosmetic dentistry. We are committed to delivering
              personalized treatment in a safe, hygienic, and patient-centric environment.
            </p>

            {/* Key Points */}
            <ul className="space-y-4">
              {[
                'Advanced treatments using the latest dental technology',
                'Gentle, compassionate care tailored to your needs',
                'Focus on long-term oral health and patient education',
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-background shadow-soft border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
