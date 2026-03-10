import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Clock, Linkedin, Mail, ArrowRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  education: string;
  bio: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Dental Surgeon & Founder',
    specialty: 'Cosmetic & Implant Dentistry',
    experience: '18 years',
    education: 'BDS, MDS (Prosthodontics) - AIIMS Delhi',
    bio: 'Dr. Priya founded InSmile with a vision to make premium dental care accessible. Her expertise in implants and cosmetic dentistry has transformed thousands of smiles.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Dr. Rahul Verma',
    role: 'Senior Orthodontist',
    specialty: 'Orthodontics & Clear Aligners',
    experience: '12 years',
    education: 'BDS, MDS (Orthodontics) - MAHE Manipal',
    bio: 'Specializing in modern orthodontic techniques, Dr. Rahul has helped hundreds of patients achieve perfectly aligned smiles with minimal discomfort.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Dr. Anita Reddy',
    role: 'Endodontist',
    specialty: 'Root Canal & Restoration',
    experience: '10 years',
    education: 'BDS, MDS (Conservative Dentistry) - NIMHANS',
    bio: 'Known for her gentle approach, Dr. Anita specializes in pain-free root canal treatments using the latest rotary techniques.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Dr. Vikram Singh',
    role: 'Oral & Maxillofacial Surgeon',
    specialty: 'Oral Surgery & Implants',
    experience: '15 years',
    education: 'BDS, MDS (Oral Surgery) - KMC Mangalore',
    bio: 'Dr. Vikram brings extensive surgical expertise, handling complex extractions, jaw surgeries, and advanced implant procedures.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Dr. Kavitha Nair',
    role: 'Pediatric Dentist',
    specialty: 'Children\'s Dentistry',
    experience: '8 years',
    education: 'BDS, MDS (Pedodontics) - SDM Dharwad',
    bio: 'Dr. Kavitha creates positive dental experiences for children, using child-friendly techniques that make visits fun and stress-free.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Dr. Arun Kumar',
    role: 'Periodontist',
    specialty: 'Gum Treatment & Laser Dentistry',
    experience: '11 years',
    education: 'BDS, MDS (Periodontics) - RGUHS Bangalore',
    bio: 'An expert in gum health, Dr. Arun uses advanced laser techniques for minimally invasive treatment of periodontal conditions.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&crop=faces',
  },
];

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Dental Team | InSmile Dental Clinic</title>
        <meta 
          name="description" 
          content="Meet our team of experienced dental professionals. Expert dentists specializing in implants, cosmetics, orthodontics, and more at InSmile Dental Clinic." 
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
                Our Team
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Meet Our{' '}
                <span className="text-gradient-primary">Expert Dental Team</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of highly qualified dental professionals brings together decades of 
                experience and a shared passion for creating beautiful, healthy smiles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 hover:shadow-medium transition-shadow">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span>{member.specialty}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{member.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="line-clamp-1">{member.education}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {member.bio}
                      </p>

                      <div className="flex gap-2">
                        <a
                          href="#"
                          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4 text-muted-foreground" />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4 text-muted-foreground" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="section-padding bg-accent/30">
          <div className="container-narrow mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Meet Our Team?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Schedule an appointment and experience the difference our expert 
                team can make for your dental health.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book an Appointment
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

export default Team;
