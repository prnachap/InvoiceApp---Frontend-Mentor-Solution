import React from "react";
import Button from "../../button/Button";
import { FormFooterWrapper } from "./FormFooter.style";

const FormFooter: React.FC = () => {
  return (
    <FormFooterWrapper className="form__footer">
      <div className="button__container">
        <Button type="button" buttonStyle="secondary" className="btn--form">
          Save as Draft
        </Button>
        <Button buttonStyle="secondary" className="btn--default">
          Save & Send
        </Button>
      </div>
    </FormFooterWrapper>
  );
};

export default FormFooter;
