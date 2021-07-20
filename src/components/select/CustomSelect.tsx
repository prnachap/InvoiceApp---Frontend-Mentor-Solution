import { FieldHookConfig, useField } from "formik";
import React from "react";
import {
  SelectWrapper,
  Wrapper,
  StyledSelect,
  Label,
} from "./CustomSelect.style";

interface CustomSelectInterface {
  label: string;
  options: string[];
}

const CustomSelect: React.FC<CustomSelectInterface & FieldHookConfig<string>> =
  ({ label, options, ...props }) => {
    const [field] = useField<string>(props);
    return (
      <Wrapper>
        <Label>{label}</Label>
        <SelectWrapper>
          <StyledSelect {...field}>
            {options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </StyledSelect>
        </SelectWrapper>
      </Wrapper>
    );
  };

export default CustomSelect;
