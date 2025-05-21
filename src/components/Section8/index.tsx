import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { section8Data } from "./section8Data";
import Section8Item from "./Section8Item";

export default function Section8() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems(openItems.includes(id) ? [] : [id]);
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 120 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, ease: "easeOut" }}
      className="pointer-events-auto"
    >
      <div className=" flex flex-col gap-10 md:gap-20">
        <h1 className="text-center text-[32px] md:max-w-none max-w-[359px] mx-auto  font-[500] leading-[120%] text-primary md:text-[48px]">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-4 md:gap-5">
          {section8Data.map((item) => {
            return (
              <Section8Item
                key={item.id}
                questionHeading={item.questionHeading}
                answerText={item.answerText}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
