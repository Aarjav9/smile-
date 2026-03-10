import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Target, Eye, Users, UserCheck, Monitor, Sofa, ClipboardList, Stethoscope, CalendarClock, Siren, BookOpen } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Compassion', description: 'We treat every patient with empathy and understanding.' },
  { icon: Target, title: 'Excellence', description: 'Committed to the highest standards of dental care.' },
  { icon: Eye, title: 'Transparency', description: 'Clear communication about treatments and pricing.' },
  { icon: Users, title: 'Teamwork', description: 'Collaborative approach for comprehensive care.' },
];

const whyChooseUs = [
  { icon: UserCheck, title: 'Experienced Dentists', description: 'Our skilled dentists bring years of experience and the latest techniques to ensure the highest quality care for your smile.' },
  { icon: Monitor, title: 'Modern Facilities', description: 'Equipped with state-of-the-art dental technology, our center ensures precise diagnostics and effective treatments.' },
  { icon: Sofa, title: 'Comfortable Environment', description: 'Our clinic provides a calm and welcoming atmosphere to make your visit as relaxing as possible.' },
  { icon: ClipboardList, title: 'Tailored Treatment Plan', description: 'We design personalized dental care programs to fit your unique oral health needs and goals.' },
  { icon: Stethoscope, title: 'Comprehensive Oral Health Services', description: 'From routine cleanings to advanced restorative procedures, we cover all aspects of dental care under one roof.' },
  { icon: CalendarClock, title: 'Flexible Appointment Scheduling', description: 'We offer convenient timings, weekend slots, and hassle-free online booking options to fit your busy lifestyle.' },
  { icon: Siren, title: 'Emergency Dental Service', description: 'Prompt and effective care for unexpected dental emergencies, ensuring relief and recovery when you need it most.' },
  { icon: BookOpen, title: 'Patient Education & Guidance', description: 'We empower you with knowledge about oral hygiene, treatments, and lifestyle tips for lasting dental health.' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | InSmile Dental Clinic Noida</title>
        <meta 
          name="description" 
          content="Learn about InSmile Dental Clinic's 15+ years of excellence in dental care in Noida. Our mission, values, and dedicated team of dental professionals." 
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
                About InSmile
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Committed to Creating{' '}
                <span className="text-gradient-primary">Healthy, Beautiful Smiles</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At InSmile, we combine expert dental care with a personal touch to ensure 
                every patient feels comfortable and confident. With 15+ years of experience, 
                we deliver personalized treatment in a safe, hygienic, and patient-centric environment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-card">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl bg-primary/5 border border-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality dental care that transforms smiles and improves 
                  lives. We strive to ensure long-term oral health while enhancing the aesthetics 
                  and function of your smile through advanced technology and compassionate care.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-2xl bg-secondary/5 border border-secondary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted dental clinic, known for clinical excellence, 
                  innovative treatments, and genuine care for our patients' wellbeing. We envision 
                  a world where everyone smiles with confidence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story & Image */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    InSmile Dental Clinic was founded with a simple yet powerful vision: 
                    to make premium dental care accessible to everyone while maintaining the highest 
                    standards of clinical excellence.
                  </p>
                  <p>
                    With over 15 years of experience, we have grown into one of the most trusted 
                    dental clinics, serving thousands of patients. Our journey has been defined by 
                    continuous learning, technological advancement, and an unwavering commitment 
                    to patient satisfaction.
                  </p>
                  <p>
                    Today, our state-of-the-art facility houses a team of skilled dental 
                    professionals, each bringing their expertise and passion to create beautiful, 
                    healthy smiles every day.
                  </p>
                </div>

                {/* Key Points */}
                <ul className="space-y-3 mt-6">
                  {[
                    'Advanced treatments using the latest dental technology',
                    'Gentle, compassionate care tailored to your needs',
                    'Focus on long-term oral health and patient education',
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=450&fit=crop"
                    alt="InSmile Dental Clinic team and facility"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-accent/30">
          <div className="container-narrow mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                These principles guide everything we do at InSmile.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card shadow-soft"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-gradient-primary">InSmile?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We are dedicated to providing the best dental care with a focus on patient comfort and satisfaction.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-card shadow-soft border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
