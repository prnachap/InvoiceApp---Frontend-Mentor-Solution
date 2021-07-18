import React, { useState } from "react";
import { Wrapper, Input, Label, Span, FormGroup } from "./FilterList.style";
import { ReactComponent as IconCheck } from "../../../assets/icon-check.svg";

interface IOptions {
  option: string;
}

const FilterOptions: React.FC<IOptions> = ({ option }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((previousState) => !previousState);
  };
  return (
    <Wrapper data-testid="list">
      <FormGroup>
        <Input
          type="checkbox"
          name={option}
          id={option}
          onClick={handleClick}
        />
        <Label htmlFor={option}>
          <Span className={`${selected ? "fill" : null}`}>
            {selected && <IconCheck className="checkIcon" />}
          </Span>
          {option}
        </Label>
      </FormGroup>
    </Wrapper>
  );
};

export default FilterOptions;
