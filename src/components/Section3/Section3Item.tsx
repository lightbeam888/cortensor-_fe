import { motion } from "framer-motion";
export interface Section3DataItem {
  id: number;
  title: string;
  description: string;
  img: string;
}

const Section3Item = ({
  title,
  description,
  img,
}: Omit<Section3DataItem, "id">) => {
  return (
    <div className="flex flex-col-reverse justify-center gap-[40px] md:max-w-[896px] md:flex-row md:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full flex-col gap-6 md:mt-[25px] md:w-[50%]"
      >
        <h1 className="h-auto text-normal font-medium leading-[110%] text-primary md:h-[84px] md:text-[32px] md:leading-[130%]">
          {title}
        </h1>
        <p className="text-[16px] font-thin leading-[130%] text-primary md:text-[18px] md:leading-[140%]">
          {description}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex w-full justify-center md:w-[50%]"
      >
        <img src={img} alt={title} />
      </motion.div>
    </div>
  );
};

export default Section3Item;
