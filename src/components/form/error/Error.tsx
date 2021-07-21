import { FormikProps, FormikValues } from "formik";
import React from "react";
import { StyledList, StyledListItem } from "./Error.style";

const Error = (props: FormikProps<FormikValues>) => {
  return (
    <StyledList>
      <StyledListItem>-All field must be added</StyledListItem>
      <StyledListItem>-An item must be added</StyledListItem>
    </StyledList>
  );
};

export default Error;
