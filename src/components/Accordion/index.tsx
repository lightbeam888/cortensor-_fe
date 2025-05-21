import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";
import classNames from "classnames";

import ArrowIcon from "@assets/ArrowBlack.png";

interface AccordionGroupProps {
  id: number;
  title: string;
  items: string[] | React.ReactNode[];
  isOpen: boolean;
  onToggle: (id: number) => void;
  classNameHeader?: string;
  classNameItem?: string;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  id,
  title,
  items,
  isOpen,
  onToggle,
  classNameHeader = "",
  classNameItem = "",
}) => {
  return (
    <Accordion open={isOpen}>
      <AccordionHeader onClick={() => onToggle(id)} className="w-ful text-base border-none py-0">
        <div
          className={classNames("flex w-full items-center justify-between text-base pb-2 py-3", {
            "border-b": !isOpen, 
          },classNameHeader)}
        >
          <span>{title}</span>
          <span>
            <img
              src={ArrowIcon}
              alt="arrow"
              className={classNames("w-3 transition-transform duration-300", isOpen ? "rotate-180" : "")}
            />
          </span>
        </div>
      </AccordionHeader>

      {isOpen && (
        <AccordionBody className={classNameItem}>
          <ul className="space-y-1">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </AccordionBody>
      )}
    </Accordion>
  );
};

export default AccordionGroup;

