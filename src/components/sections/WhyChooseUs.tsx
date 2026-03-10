import { motion } from 'framer-motion';
import { UserCheck, Monitor, Sofa, ClipboardList, Stethoscope, CalendarClock, Siren, BookOpen } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Experienced Dentists',
    description: 'Our skilled dentists bring years of experience and the latest techniques to ensure the highest quality care for your smile.',
  },
  {
    icon: Monitor,
    title: 'Modern Facilities',
    description: 'Equipped with state-of-the-art dental technology, our center ensures precise diagnostics and effective treatments.',
  },
  {
    icon: Sofa,
    title: 'Comfortable Environment',
    description: 'Our clinic provides a calm and welcoming atmosphere to make your visit as relaxing as possible.',
  },
  {
    icon: ClipboardList,
    title: 'Tailored Treatment Plan',
    description: 'We design personalized dental care programs to fit your unique oral health needs and goals.',
  },
  {
    icon: Stethoscope,
    title: 'Comprehensive Oral Health Services',
    description: 'From routine cleanings to advanced restorative procedures, we cover all aspects of dental care under one roof.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Appointment Scheduling',
    description: 'We offer convenient timings, weekend slots, and hassle-free online booking options to fit your busy lifestyle.',
  },
  {
    icon: Siren,
    title: 'Emergency Dental Service',
    description: 'Prompt and effective care for unexpected dental emergencies, ensuring relief and recovery when you need it most.',
  },
  {
    icon: BookOpen,
    title: 'Patient Education & Guidance',
    description: 'We empower you with knowledge about oral hygiene, treatments, and lifestyle tips for lasting dental health.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-muted/50">
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
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose{' '}
            <span className="text-gradient-primary">InSmile Dental Clinic?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We are dedicated to providing the best dental care with a focus on patient comfort
            and satisfaction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
