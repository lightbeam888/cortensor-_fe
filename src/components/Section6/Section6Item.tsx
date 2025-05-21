import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import classNames from "classnames";

interface FeatureItem {
  id: number;
  title: string;
  text: string;
}

export interface Section6DataItem {
  id: number;
  caption: string;
  bgCaption: string;
  title: string;
  description: string;
  featureItems: FeatureItem[];
  img: string;
}

const Section6Item = ({
  caption,
  bgCaption,
  title,
  description,
  featureItems,
  img,
}: Omit<Section6DataItem, "id">) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 120 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, ease: "easeOut" }}
    >
      <div className="flex h-full w-full flex-col rounded-[16px] border border-neutral-stroke-6 bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_100%,rgba(255,255,255,0)_100%)] px-5 py-6 md:max-w-[553px] md:gap-8 md:rounded-[20px] md:p-8">
        <div className="flex flex-col gap-6 border-b border-neutral-stroke-6">
          <div>
            <p
              className="inline-block w-auto rounded-[30px] px-3 py-[4px] text-[14px] font-normal uppercase leading-[140%] tracking-[0.32px] md:space-y-[16px] md:text-[16px] md:leading-[20px]"
              style={{ backgroundColor: bgCaption }}
            >
              {caption}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-normal font-normal leading-[110%] text-primary md:text-[32px] md:leading-[1.3]">
              {title}
            </h1>
            <p className="text-4 md:max-w-auto font-normal leading-[1.3] text-primary md:text-[18px] md:leading-[1.4] md:tracking-[0.32px]">
              {description}
            </p>
            <hr className="border-1 mt-[7px] border border-custom-gray" />

            {featureItems.map((item, index) => {
              return (
                <ul
                  className={classNames(
                    "flex list-disc gap-4 pl-5 text-[16px] font-normal tracking-[0.02em] md:pl-[26px] md:text-[18px] md:tracking-[0.32px]",
                    index == 0 ? "md:mt-2 " : "md:-mt-2",
                  )}
                  key={item.id}
                >
                  <li className="leading-[1.3] md:leading-[1.4] ">
                    <span className="text-primary">{item.title}: </span>
                    <span className="text-neutral-bi-50">{item.text}</span>
                  </li>
                </ul>
              );
            })}
            <div className="mt-[7px] h-[203px] overflow-hidden rounded-[12px] md:h-[244.5px]">
              <img
                src={img}
                alt={caption}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section6Item;
