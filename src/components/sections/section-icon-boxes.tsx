import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";

export const iconBoxes = [
  {
    icon: "icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "Influencer Marketing",
    description:
      "Increase your brand's reach by partnering with popular online influencers. We carefully match your brand with the right influencers who share your values and can promote your products/services successfully.",
    benefits:
      "Finding the perfect influencer fit Managing influencer campaigns Tracking results and performance Optimizing campaigns for better results",
  },
  {
    icon: "icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "Content Creation",
    description:
      "Get high-quality content like videos, blog posts and graphics made by our skilled team. Our content attracts new customers and keeps existing ones interested",
    benefits:
      "Planning an effective content strategy Creating various types of multimedia content Optimizing content for better online visibility Regularly updating content",
  },
  // {
  //   icon: "icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
  //   title: "Sales growth",
  //   description:
  //     "We also provide tangible results and measurable long-term value business.",
  // },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container items-center border border-red-500">
        {!noTitle && (
          <div className="flex justify-center text-center">
            <div className="text-center lg:w-3/5">
              <h2 className="mb-12">
                Do you want to{" "}
                <span className="text-primary">generate more traffic</span> to
                your website? We know the solution.
              </h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxes;
