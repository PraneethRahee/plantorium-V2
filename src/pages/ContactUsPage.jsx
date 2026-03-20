import { ContactHeroSection } from "../screens/ContactUs/ContactHeroSection";
import { ContactFormSection } from "../screens/HomePage/sections/ContactFormSection";
import { SiteReviewSection } from "../screens/HomePage/sections/SiteReviewSection";
import { FooterSection } from "../screens/HomePage/sections/FooterSection";
import MainLayout from "../layouts/MainLayout";

const ContactUsPage = () => {
  return (
    <MainLayout>
      <ContactHeroSection />
      <ContactFormSection />
      <SiteReviewSection />
      <FooterSection />
    </MainLayout>
  );
};

export default ContactUsPage;

