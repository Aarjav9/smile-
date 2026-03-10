import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Award, Clock } from 'lucide-react';

interface Doctor {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Dental Surgeon',
    specialty: 'Cosmetic & Implant Dentistry',
    experience: '18 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Dr. Rahul Verma',
    role: 'Senior Orthodontist',
    specialty: 'Orthodontics & Aligners',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Dr. Anita Reddy',
    role: 'Endodontist',
    specialty: 'Root Canal & Restoration',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces',
  },
];

export function TeamPreview() {
  return (
    <section className="section-padding bg-accent/30">
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
            Our Experts
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our{' '}
            <span className="text-gradient-primary">Skilled Dental Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team of experienced dental professionals is dedicated to providing 
            you with the highest quality care in a comfortable environment.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card shadow-soft mb-5">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-xs">
                      <GraduationCap className="w-3.5 h-3.5 text-primary" />
                      <span className="text-foreground">{doctor.specialty}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-xs">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span className="text-foreground">{doctor.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium text-sm">{doctor.role}</p>
              </div>
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
          <Button variant="outline" size="lg" asChild>
            <Link to="/team">
              Meet the Full Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
