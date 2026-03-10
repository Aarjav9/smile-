import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Treatments', href: '/treatments' },
  { name: 'Meet the Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const treatments = [
  { name: 'Crown & Bridge Work', href: '/treatments#crown-bridge' },
  { name: 'Braces', href: '/treatments#braces' },
  { name: 'Dental Implants', href: '/treatments#implants' },
  { name: 'Root Canal Treatment', href: '/treatments#root-canal' },
  { name: 'Clear Aligners', href: '/treatments#clear-aligners' },
  { name: 'Tooth Extractions', href: '/treatments#extractions' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="InSmile Dental Clinic" className="h-10 w-auto rounded-lg" />
              <span className="font-display font-semibold text-xl text-primary-foreground">
                InSmile Dental
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Creating beautiful, healthy smiles with gentle care and advanced dental technology. 
              Your comfort and confidence are our priority.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Treatments</h4>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment.name}>
                  <Link
                    to={treatment.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {treatment.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  InSmile Dental Clinic, Noida, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+918376866066"
                  className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  +91 8376866066
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:care.insmile@gmail.com"
                  className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  care.insmile@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} InSmile Dental Clinic. All rights reserved.</p>
            <p>Managed by <span className="text-primary font-medium">Aarjav Jain</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
