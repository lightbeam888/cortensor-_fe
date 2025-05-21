import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { section6Data } from "./section6Data";
import Section6Item from "./Section6Item";

export default function Section6() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  return (
    <>
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <h1 className="mb-10 hidden px-5 text-center text-[32px] font-[400] !leading-[120%] text-primary md:mx-auto md:mb-20 md:block md:max-w-[859px] md:px-0 md:text-5xl md:font-[500]">
          Revolutionizing AI Access: Your Gateway to Decentralized AI Solutions
        </h1>
        <h1 className="mb-10 px-0 text-center text-[32px] font-[400] !leading-[120%] text-primary md:mx-auto md:mb-20 md:hidden md:max-w-[859px] md:px-0 md:text-5xl md:font-[500]">
          <span>Revolutionizing AI Access:</span>
          <br />
          <span>Your Gateway to </span>
          <br />
          <span>Decentralized AI Solutions</span>
        </h1>
      </motion.div>

      <div className=" flex flex-col gap-4 md:flex-row md:justify-between">
        {section6Data.map((data) => {
          return (
            <Section6Item
              caption={data.caption}
              title={data.title}
              img={data.img}
              description={data.description}
              bgCaption={data.bgCaption}
              key={data.id}
              featureItems={data.featureItems}
            />
          );
        })}
      </div>
    </>
  );
}
