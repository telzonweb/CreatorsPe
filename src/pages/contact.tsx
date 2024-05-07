import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionGoogleMap from "@/components/sections/section-google-map";
import SectionContactForm from "@/components/sections/section-contact-form";
import { Helmet } from "react-helmet";
import SectionCTALayout3 from "@/components/sections/section-cta-layout-3";

const Contact = useFramerTransition(
  <>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle subtitle="Let’s have a dicussion about your business">
        Contact
      </SectionPageTitle>
      <SectionCTALayout3 />
      {/* <SectionContactForm /> */}
      {/* <SectionGoogleMap /> */}
    </main>
  </>,
);

export default Contact;
