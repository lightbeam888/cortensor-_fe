import { useEffect, useRef, useState } from "react";
import { section3Data } from "./section3Data";
import Section3Item from "./Section3Item";
import { motion } from "framer-motion";

export default function Section3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [relativeY, setRelativeY] = useState(0);

  const itemWidth = 896;
  const itemGap = 180;
  const stickyHeight = 600;
  const marginLeftLastItem = 100;

  const totalContentWidth =
    section3Data.length * itemWidth + (section3Data.length - 1) * itemGap;

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const currentY = -rect.top;
        setRelativeY(currentY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (typeof window === "undefined") return null;

  const screenWidth = window.innerWidth;
  const isDesktop = screenWidth >= 768;

  // const extraScroll = isDesktop ? screenWidth / 2 - itemWidth / 2 : 0;

  const maxScrollX = totalContentWidth - itemWidth - marginLeftLastItem;
  // const maxScrollDistance = maxScrollX + extraScroll;

  const translateX = isDesktop
    ? -Math.min(Math.max(relativeY, 0), maxScrollX)
    : 0;

  // const sectionHeight = isDesktop ? stickyHeight + maxScrollDistance : "auto";

  return (
    <section
      ref={containerRef}
      style={{
        height: isDesktop ? `350vh` : "auto",
      }}
      className="relative"
    >
      <div
        className="flex flex-col items-center md:sticky md:top-[20%]"
        style={{
          height: isDesktop ? `${stickyHeight}px` : "auto",
        }}
      >
        {/* Title */}
        <h1 className="mb-[80px] text-center text-[32px] font-medium leading-[120%] tracking-normal text-primary md:text-[48px]">
          How Cortensor Transforms AI
        </h1>

        {/* Slide */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex flex-col gap-[50px] pl-0 md:flex-row md:gap-[180px] md:pl-[200px]"
            style={{
              transform: isDesktop ? `translateX(${translateX}px)` : "none",
              width: isDesktop ? `${totalContentWidth}px` : "full",
            }}
          >
            {section3Data.map((item) => (
              <motion.div
                key={item.id}
                className="w-full shrink-0 md:w-[896px]"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Section3Item
                  title={item.title}
                  description={item.description}
                  img={item.img}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
