import { Suspense, lazy } from "react";
import { HeroSection } from "../screens/HomePage/sections/HeroSection";
import { FeaturesSection } from "../screens/HomePage/sections/FeaturesSection";
import MainLayout from "../layouts/MainLayout";

const ProjectAndInquirySection = lazy(() =>
  import("../screens/HomePage/sections/ProjectAndInquirySection").then((module) => ({
    default: module.ProjectAndInquirySection,
  }))
);
const LatestProjectSnapshotSection = lazy(() =>
  import("../screens/HomePage/sections/LatestProjectSnapshotSection").then((module) => ({
    default: module.LatestProjectSnapshotSection,
  }))
);
const ContactFormSection = lazy(() =>
  import("../screens/HomePage/sections/ContactFormSection").then((module) => ({
    default: module.ContactFormSection,
  }))
);
const SiteReviewSection = lazy(() =>
  import("../screens/HomePage/sections/SiteReviewSection").then((module) => ({
    default: module.SiteReviewSection,
  }))
);
const FooterSection = lazy(() =>
  import("../screens/HomePage/sections/FooterSection").then((module) => ({
    default: module.FooterSection,
  }))
);

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <Suspense fallback={null}>
        <ProjectAndInquirySection />
        <LatestProjectSnapshotSection />
        <ContactFormSection />
        <SiteReviewSection />
        <FooterSection />
      </Suspense>
    </MainLayout>
  );
};

export default HomePage;

