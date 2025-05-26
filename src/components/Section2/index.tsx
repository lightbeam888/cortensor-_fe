import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import Network1Img from "@assets/img-section2/network1.png";
import Network2Img from "@assets/img-section2/network2.png";
import Network3Img from "@assets/img-section2/network3.png";
import PlusIcon from "@assets/img-section2/plus.png";
import SubIcon from "@assets/img-section2/sub.png";

const data = [
  {
    title: "Efficient & Scalable AI through Community Collaboration",
    content:
      "Cortensor's decentralized network harnesses diverse hardware resources, from high-performance GPUs to consumer-grade devices, optimizing AI inference capabilities. This collaborative ecosystem fosters innovation, enhances fault tolerance, and ensures data integrity. By distributing tasks across multiple nodes, Cortensor minimizes single points of failure, creating a resilient and adaptive AI infrastructure.",
    photo: Network1Img,
  },
  {
    title: "Enhanced Performance and Accessibility",
    content:
      "Cortensor bridges Web2 and Web3 with seamless AI integration via REST API and Web3 SDK. OpenAI-compatible and customizable, it supports diverse AI use cases. Our smart routing matches tasks to the right nodes by complexity and hardware, ensuring cost-effective, high-quality results. From LLMs to diffusion models and GANs, Cortensor brings advanced AI to all.",
    photo: Network2Img,
  },
  {
    title: "Community-Powered Innovation and Monetization",
    content:
      "Cortensor’s multi-layer blockchain architecture secures AI orchestration, oracle services, and data management. Validator nodes and smart contracts ensure output integrity through comprehensive validation. The AI marketplace enables model and service exchange, while the incentive system rewards contributions in models, prompts, and tooling—fostering innovation and maintaining high quality across the ecosystem.",
    photo: Network3Img,
  },
];

const Section2 = () => {
  const [open, setOpen] = useState<number | null>(0);
  const containerRef = useRef(null);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, data.length - 1]);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = rawIndex.on("change", (latest) => {
      setActiveIndex(Math.round(latest));
    });
    return () => unsubscribe();
  }, [rawIndex]);

  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };

  return (
    <>
      {/* Mobile: Accordion */}
      <div className="pointer-events-auto flex flex-col gap-4 rounded-[16px] px-[5px] md:hidden">
        <div className="md:relative">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 px-[10px] text-center text-[32px] font-medium leading-[120%] md:sticky md:top-[150px] md:mx-auto md:mb-20 md:max-w-[917px] md:text-[48px]"
          >
            Collaborative AI Horizon: Unleashing Decentralized Capabilities
          </motion.div>
        </div>

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Accordion
              open={open === index}
              className="border-blue-gray-100 flex flex-col rounded-[20px] border bg-white px-5"
            >
              <AccordionHeader
                onClick={() => handleOpen(index)}
                className="section-2 flex items-start justify-between border-b-0 py-5"
              >
                <span className="flex-1 text-left text-normal font-medium leading-[110%]">
                  0{index + 1}. {item.title}
                </span>
                <img
                  src={open === index ? SubIcon : PlusIcon}
                  alt="toggle"
                  className="h-10 w-10"
                />
              </AccordionHeader>
              <AccordionBody className="flex flex-col gap-5 !pt-0 pb-5 text-base font-normal">
                <img src={item.photo} alt="section" />
                <div className="text-[16px] font-medium leading-[130%]">
                  {item.content}
                </div>
              </AccordionBody>
            </Accordion>
          </motion.div>
        ))}
      </div>

      {/* Desktop & Tablet: Scroll Slide */}
      <div
        ref={containerRef}
        className="relative mb-[40px] hidden h-[300vh] md:block md:rounded-[24px]"
      >
        <div className="sticky top-[100px]">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="px-[10px] text-center text-[32px] font-medium leading-[120%] md:mx-auto md:mb-20 md:max-w-[917px] md:text-[48px]"
          >
            Collaborative AI Horizon: Unleashing Decentralized Capabilities
          </motion.div>
          <motion.div className="mx-auto flex h-full max-w-[1360px] items-center justify-between gap-8 rounded-[30px] bg-white p-5 md:flex-row md:p-8">
            <motion.div className="flex w-full flex-col items-center md:flex-row md:gap-3 xl:gap-10">
              <motion.div
                key={activeIndex + "-image"}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="origin-top md:max-w-[380px] xl:max-w-[603px]"
              >
                <img
                  src={data[activeIndex].photo}
                  alt="section"
                  className="h-auto w-full object-cover"
                />
              </motion.div>

              <motion.div
                key={activeIndex + "-text"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="ml-4 flex flex-1 flex-col gap-6 md:-mt-10"
              >
                <h2 className="font-[400] leading-snug md:text-[32px]">
                  {data[activeIndex].title}
                </h2>
                <p className="text-[16px] font-[400] leading-[140%] tracking-[0.36px] md:text-[18px]">
                  {data[activeIndex].content}
                </p>
              </motion.div>

              <div className="hidden flex-col items-center pl-10 text-center md:flex">
                <span className="text-[18px] leading-[140%] tracking-[0.36px]">
                  0{activeIndex + 1}
                </span>
                <div className="relative h-[240px] w-[2px] overflow-hidden rounded-full bg-gradient-to-b from-skyCustom to-pinkCustom md:my-[17px]">
                  <motion.div
                    className="absolute left-0 top-0 w-full origin-top rounded-full bg-[#9AA6ED]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: (activeIndex + 1) / data.length }}
                    transition={{ duration: 0.4 }}
                    style={{ height: "100%" }}
                  />
                </div>
                <span className="text-[18px] leading-[140%] tracking-[0.36px]">
                  0{data.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Section2;
