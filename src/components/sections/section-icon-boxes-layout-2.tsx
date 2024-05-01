import { motion } from "framer-motion";
import IconBoxLayout2 from "@/components/icon-box-layout-2";
import ContactsLineIcon from "remixicon-react/ContactsLineIcon";
import Message2LineIcon from "remixicon-react/Message2LineIcon";
import ListSettingsLineIcon from "remixicon-react/ListSettingsLineIcon";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import Database2LineIcon from "remixicon-react/Database2LineIcon";
import Key2LineIcon from "remixicon-react/Key2LineIcon";

export const iconBoxes = [
  {
    icon: <ContactsLineIcon className="fill-primary" size={32} />,
    iconBase: "bg-[#FEE8E8]",
    title: "Influencer Connections",
    description:
      "We connect your brand with the right influencers who really speak to your audience and share your values.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
  },
  {
    icon: <Message2LineIcon className="fill-[#44D88D]" size={32} />,
    iconBase: "bg-[#E3F9EE]",
    title: "Video & Reels Creation",
    description:
      "Boost your brand with custom-made videos and Instagram Reels that grab and keep your audience's attention.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#44D88D]",
  },
  {
    icon: <ListSettingsLineIcon className="fill-[#4C86E7]" size={32} />,
    iconBase: "bg-[#D3E9FF]",
    title: "Campaign Management",
    description:
      "We handle everything from start to finish, creating marketing plans that meet your goals and get results.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
  },
  {
    icon: <FileTextLineIcon className="fill-[#7444FF]" size={32} />,
    iconBase: "bg-[#EAE3FF]",
    title: "Insights from Data",
    description:
      "Use our simple reports to see what's working and what's not, so we can keep improving your campaigns.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
  },
  {
    icon: <Database2LineIcon className="fill-[#FFAF13]" size={32} />,
    iconBase: "bg-[#FFF3DC]",
    title: "Market Analysis",
    description:
      "We keep an eye on market trends to make sure your marketing is always on point and effective.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
  },
  {
    icon: <Key2LineIcon className="fill-[#B939E5]" size={32} />,
    iconBase: "bg-[#FAF1FF]",
    title: "Support & Improvement",
    description:
      "Our team is here for you, always ready to help and make your marketing even better as things change.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
  },
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

const SectionIconBoxesLayout2 = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-center lg:w-3/5">
            <h2 className="mb-12">
              Let's Take Your Brand to{" "}
              <span className="text-primary">New Heights</span> to your with
              Creatorspe's Expertise!
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
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
                <IconBoxLayout2 iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout2;
