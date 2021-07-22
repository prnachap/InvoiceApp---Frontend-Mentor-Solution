// @ts-nocheck
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  InputWrapper,
  Label,
  StyledSelect,
  DropDown,
  List,
} from "./CustomSelect.style";
import { useField } from "formik";
import { arrowAnimate } from "../../../styles/animation";
import { motion } from "framer-motion";

const options = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];

interface SInterface {
  name: string;
}

const Select: React.FC<SInterface> = ({ name }) => {
  const [field, , helpers] = useField(name);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // const { setFieldValue } = useFormikContext();

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!ref.current.contains(e.target as Node)) {
        if (dropdown) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
        setOpen(false);
      }
    },
    [dropdown]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleClick = (item: string) => {
    helpers.setValue(item);
    setOpen(false);
    setDropdown((prevState) => !prevState);
  };
  return (
    <InputWrapper ref={ref} onClick={(e) => {}}>
      <Label className="body-font-medium">Payment Terms</Label>
      <StyledSelect
        role="combobox"
        onClick={() => {
          setOpen(true);
          setDropdown((prevState) => !prevState);
        }}
        className={open && "open"}
      >
        {field.value}
        <motion.svg
          role="img"
          className="arrow"
          variants={arrowAnimate}
          initial="initial"
          animate={dropdown ? "final" : "initial"}
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
      </StyledSelect>
      {dropdown && (
        <DropDown className={open ? "open" : "close"}>
          {options.map((item, index) => (
            <List
              role="option"
              key={index}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </List>
          ))}
        </DropDown>
      )}
    </InputWrapper>
  );
};

export default Select;
