import { motion } from "framer-motion";

export interface Section1ItemProps {
  id: number;
  title: string;
  text: string;
  img: string;
}

const Section1Item = ({ title, text, img }: Omit<Section1ItemProps, "id">) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
    >
      <div className="flex h-full flex-col justify-between gap-6 px-5 py-6 md:px-0 md:pb-5 md:pt-10">
        <div>
          <h2 className="text-normal font-normal leading-[110%] text-primary md:text-[32px] md:leading-[130%]">
            {title}
          </h2>
          <p className="mt-4 text-[16px] font-normal leading-[130%] text-[#26262A] md:text-[18px] md:leading-[140%] md:tracking-[0.46px]">
            {text}
          </p>
        </div>

        <img src={img} alt={title} />
      </div>
    </motion.div>
  );
};

export default Section1Item;
