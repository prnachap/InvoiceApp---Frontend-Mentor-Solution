// @ts-nocheck
import { ErrorMessage, useField, FieldHookConfig } from "formik";
import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as IconCalander } from "../../../assets/icon-calendar.svg";

import {
  InputGroup,
  Label,
  Button,
  LabelContainer,
  ErrorText,
} from "./DatePicker.style";

interface IInput {
  label?: string;
  type?: string;
}

type CustomInputProps = IInput & FieldHookConfig<Date>;

const CustomDatePicker: React.FC<CustomInputProps> = (props) => {
  const [field, meta, { setValue } = helper] = useField<Date>(props);
  const { label } = props;

  const CustomInput = forwardRef<HTMLButtonElement>((props, ref) => (
    <Button
      className="example-custom-input"
      ref={ref}
      error={false}
      type="button"
      onClick={props.onClick}
    >
      <span>{props.value}</span>
      <IconCalander />
    </Button>
  ));

  return (
    <InputGroup>
      <LabelContainer>
        {label && (
          <Label
            htmlFor={field.name}
            className="form__label"
            error={meta.error && meta.touched ? true : false}
          >
            {label}
          </Label>
        )}
        <ErrorText>
          <ErrorMessage name={field.name} />
        </ErrorText>
      </LabelContainer>

      <ReactDatePicker
        selected={field.value}
        onChange={(value) => setValue(value)}
        customInput={<CustomInput />}
        dateFormat="d MMM yyyy"
      />
    </InputGroup>
  );
};

export default CustomDatePicker;
