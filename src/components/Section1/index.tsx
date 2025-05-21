import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { sectionData1 } from "./sectionData1";
import Section1Item from "./Section1Item";

export default function Section1({ id }: { id: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 120 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch md:justify-between">
        {sectionData1.map((data, index) => {
          const isLast = index === sectionData1.length - 1;
          return (
            <React.Fragment key={data.id}>
              <div className="w-full flex-1 md:max-w-[322px]">
                <Section1Item
                  title={data.title}
                  text={data.text}
                  img={data.img}
                />
                {!isLast && (
                  <hr className="mx-5 my-6 border-t border-neutral-stroke-20 md:hidden" />
                )}
              </div>
              {!isLast && (
                <div
                  className="mx-3 hidden w-px self-stretch bg-neutral-stroke-20 md:block"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
}
