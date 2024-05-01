import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import SectionPromoVideo from "@/components/sections/section-promo-video";
import SectionIconBoxesLayout3 from "@/components/sections/section-icon-boxes-layout-3";
import { Helmet } from "react-helmet";

const Services = useFramerTransition(
  <>
    <Helmet>
      <title>Services</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle
        subtitle="Creatorspe helps businesses grow online through Influencer Marketing and Creating Content. See how our services can help you connect better with your customers.
"
      >
        What We Offer
      </SectionPageTitle>
      <SectionIconBoxes noTitle />
      <SectionPromoVideo />
      <SectionIconBoxesLayout3 />
      <SectionCTALayout4 />
    </main>
  </>,
);

export default Services;
