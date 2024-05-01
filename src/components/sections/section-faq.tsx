import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    title: "1. What services does Creatorspe offer?",
    content:
      "Creatorspe specializes in influencer marketing and content creation, focusing on connecting brands with top influencers and producing engaging videos and Instagram Reels.",
  },
  {
    title: "2. How do we choose the right influencers for our brand?",
    content:
      "We select influencers based on their alignment with your brand’s values, audience demographics, and engagement rates to ensure the best fit and impact.",
  },
  {
    title: "3. What types of content can you create for us?",
    content:
      "We produce a variety of content types including promotional videos, educational clips, Instagram Reels, and other social media content tailored to your needs.",
  },
  {
    title: "4. How do you measure the success of a campaign?",
    content:
      "Success is measured using key performance indicators such as engagement rates, reach, conversions, and overall campaign ROI. We provide detailed reports to show these metrics.",
  },
  {
    title:
      "5. Can Creatorspe help with a one-time project or do you offer long-term partnerships?",
    content:
      "We are flexible and can help with both one-time projects and long-term partnerships, adapting our approach to meet your specific marketing goals.",
  },
  {
    title: "6.What makes Creatorspe different from other marketing agencies?",
    content:
      "Our dedication to crafting personalized strategies and creating genuine connections between brands and their audiences sets us apart. Plus, our ongoing support ensures your campaigns continue to perform well.",
  },
];

const SectionFAQ = () => {
  return (
    <section className="relative overflow-hidden py-24 dark:bg-slate-900 lg:py-32">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
          <div className="lg:w-[45%] lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <h2>Frequently Asked Questions</h2>
              <p className="mb-8 text-lg">
                The most comprehensive complete-system warranty in the solar
                industry. Hassle-free replacement, repair or reimbursement.
              </p>
              <Accordion
                type="multiple"
                defaultValue={[accordionItems[0].title]}
                className="w-full"
              >
                {accordionItems?.map((item, index) => (
                  <AccordionItem key={index} value={item.title}>
                    <AccordionTrigger className="text-start">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <span className="mt-14 inline-block text-lg">
                Any Question?{" "}
                <a href="mailto:support@margin.com" className="text-primary">
                  info@creatorspe.com
                </a>
              </span>
            </motion.div>
          </div>

          <div className="relative z-[1] mb-10 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <img
                src="circles_pattern_2.png"
                alt="circles pattern"
                width={526}
                height={531}
                className="absolute right-10 top-4 -z-[1] -translate-y-8 scale-110 dark:opacity-10"
              />
              <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                <img
                  src="faq.jpg"
                  alt="benefits"
                  width={320}
                  height={320}
                  className="mb-8 inline-block rounded-xl"
                />
                <div className="relative mb-8 max-w-[13.125rem] self-end rounded-xl bg-white bg-gradient-to-b from-secondary/70 to-quaternary/70 p-8 shadow-lg">
                  <span className="mb-4 block text-base font-semibold text-white">
                    Individual Investors
                  </span>
                  <span className="mb-4 block text-3xl font-bold text-white">
                    7,000+
                  </span>
                  <span className="block text-base text-white">
                    Sed do eiusmod tempor.
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto max-w-xs self-start rounded-xl bg-white bg-gradient-to-l from-primary/70 to-tertiary/70 p-8 shadow-lg">
                  <div className="absolute right-8 top-8 rounded-full bg-white p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-primary"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z"></path>
                    </svg>
                  </div>

                  <div className="text-left">
                    <span className="mb-4 block text-base font-semibold text-white">
                      Invested to date
                    </span>
                    <span className="mb-4 block text-3xl font-bold text-white">
                      $3.7B
                    </span>
                    <span className="block text-base text-white">
                      Sed do eiusmod tempor.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ;
