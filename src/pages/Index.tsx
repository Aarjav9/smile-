import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { TreatmentsPreview } from '@/components/sections/TreatmentsPreview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { TeamPreview } from '@/components/sections/TeamPreview';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { TestimonialsPreview } from '@/components/sections/TestimonialsPreview';
import { CTASection } from '@/components/sections/CTASection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>InSmile Dental Clinic | Best Dental Care in Noida</title>
        <meta 
          name="description" 
          content="InSmile Dental Clinic offers comprehensive dental care with 15+ years of excellence in Noida. From implants to cosmetic dentistry, experience gentle, personalized treatment." 
        />
        <meta name="keywords" content="dental clinic, dentist noida, dental implants, braces, root canal treatment, clear aligners, crown bridge work, tooth extraction" />
        <link rel="canonical" href="https://insmile.in/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "InSmile Dental Clinic",
            "image": "https://insmile.in/logo.png",
            "telephone": "+91-8376866066",
            "email": "care.insmile@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Sa 09:00-20:00",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>
      </Helmet>
      <Layout>
        <Hero />
        <AboutPreview />
        <TreatmentsPreview />
        <WhyChooseUs />
        <TeamPreview />
        <GalleryPreview />
        <TestimonialsPreview />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
