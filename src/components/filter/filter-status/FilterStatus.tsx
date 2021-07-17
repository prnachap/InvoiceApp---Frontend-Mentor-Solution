import React, { useState } from "react";
import { Wrapper, FilterWrapper, FilterDropdown } from "./FilterStatus.style";
import FilterList from "../filter-list/FilterList";
import { motion } from "framer-motion";
import { arrowAnimate, subMenuAnimate } from "../../../styles/animation";
import { HeadingTertiary } from "../../../styles/typography";

interface FProps {
  classname?: string;
}

const options = ["draft", "pending", "paid"];

const FilterStatus: React.FC<FProps> = ({ classname }) => {
  const [hovered, setHovered] = useState(false);
  const handleHoverDropdown = () => {
    setHovered((prevState) => !prevState);
  };

  return (
    <Wrapper
      onHoverStart={handleHoverDropdown}
      onHoverEnd={handleHoverDropdown}
    >
      <FilterWrapper className={classname}>
        <HeadingTertiary className="secondary text__desktop">
          Filter Status
        </HeadingTertiary>
        <HeadingTertiary className="secondary text__mobile">
          Filter
        </HeadingTertiary>
        <motion.svg
          role="img"
          className="arrow"
          variants={arrowAnimate}
          initial="initial"
          animate={hovered ? "final" : "initial"}
          width="11"
          height="7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1l4.228 4.228L9.456 1"
            stroke="#7C5DFA"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </motion.svg>
      </FilterWrapper>
      <FilterDropdown
        data-testid="dropdown"
        variants={subMenuAnimate}
        initial="exit"
        animate={hovered ? "enter" : "exit"}
      >
        {options.map((option) => (
          <FilterList key={option} option={option} />
        ))}
      </FilterDropdown>
    </Wrapper>
  );
};

export default FilterStatus;
