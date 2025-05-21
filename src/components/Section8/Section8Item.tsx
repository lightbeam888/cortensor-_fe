import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import useMeasure from "react-use-measure";

import MinusDeskop from "@assets/img-section8/Minus-Deskop.svg";
import MinusMobile from "@assets/img-section8/Minus-Mobile.svg";
import CornerDownLeftMobile from "@assets/img-section8/Corner-DownLeft-Mobile.svg";
import CornerDownLeftDeskop from "@assets/img-section8/Corner-DownLeft-Deskop.svg";

export interface Section8DataItem {
  id: number;
  questionHeading: string;
  answerText: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Section8Item = ({
  questionHeading,
  answerText,
  isOpen,
  onToggle,
}: Omit<Section8DataItem, "id">) => {
  const [ref, { height }] = useMeasure();

  return (
    <div
      className={`flex flex-col gap-10 rounded-[16px] px-[20px] py-[24px] transition-all duration-300 md:gap-8 md:rounded-[20px] md:p-8 ${
        isOpen ? "bg-neutral-glass-60" : "bg-neutral-glass-20"
      } p-8`}
    >
      <div
        className="flex cursor-pointer flex-row justify-between "
        onClick={onToggle}
      >
        <h2 className="flex-1 text-normal font-medium leading-[110%] text-primary md:text-[32px] md:leading-[130%]">
          {questionHeading}
        </h2>
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[2px] border-[#D9D9D9] md:-mr-[1px] md:mt-[3px] md:h-[33px] md:w-[33px] md:border-none">
          <img
            className={classNames(
              "md:hidden",
              !isOpen ? "ml-[-5px] mt-[-5px]" : "",
            )}
            src={isOpen ? MinusMobile : CornerDownLeftMobile}
            alt="toggle-icon"
          />
          <img
            className="hidden md:block"
            src={isOpen ? MinusDeskop : CornerDownLeftDeskop}
            alt="toggle-icon"
          />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: height,
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div ref={ref}>
              <p className="whitespace-pre-line text-[16px] font-[300] leading-[140%] tracking-[2%] text-primary md:text-[18px]">
                {answerText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Section8Item;
