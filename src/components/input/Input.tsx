import { ErrorMessage, useField, FieldHookConfig } from "formik";
import React from "react";

import {
  InputGroup,
  Label,
  Input,
  LabelContainer,
  ErrorText,
} from "./Input.style";

interface IInput {
  label?: string;
  type?: string;
}

type CustomInputProps = IInput & FieldHookConfig<string>;

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const [field, meta] = useField<string>(props);
  const { label } = props;
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
      <Input
        id={field.name}
        as="input"
        error={meta.error && meta.touched ? true : false}
        autoComplete="off"
        {...field}
      />
    </InputGroup>
  );
};

export default CustomInput;
