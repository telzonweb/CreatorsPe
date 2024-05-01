import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionChecklist from "@/components/sections/section-checklist";
import SectionStats from "@/components/sections/section-stats";
import SectionTeam from "@/components/sections/section-team";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import { Helmet } from "react-helmet";

const About = useFramerTransition(
  <>
    <Helmet>
      <title>CretorsPe : Top Influencer Marketing Company</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle subtitle="Creatorspe is an influencer marketing agency. We connect brands with popular online influencers to create real, successful marketing partnerships. Our agency manages the entire process from beginning to end. We find the right influencers for your brand's message and run full campaigns to increase your reach effectively">
        About
      </SectionPageTitle>
      <SectionChecklist />
      <SectionStats />
      {/* <SectionTeam /> */}
      <SectionCTALayout4 />
    </main>
  </>,
);

export default About;
