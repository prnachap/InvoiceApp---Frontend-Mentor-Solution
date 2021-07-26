import React from "react";
import Button from "../../button/Button";
import { FormFooterWrapper } from "./FormFooter.style";
import {
  formAction,
  modalAction,
} from "../../../state/action-creators/ui-action-creators";
import { saveInvoiceAsDraft } from "../../../state/action-creators/invoice-action-creator";
import { useDispatch } from "react-redux";
import { InitialValueProps } from "../../../utils/form";
import randomize from "randomatic";
import { InvoiceItem } from "../../../types/common-interface";

interface FooterProps {
  data: InitialValueProps;
}

function addProperties(status: string, data: InitialValueProps): InvoiceItem {
  const daysToAdd = parseInt(data.paymentTerms.split(" ")[1]);
  const newDate = new Date(data.createdAt);
  newDate.setDate(newDate.getDate() + daysToAdd);
  console.log(data.paymentTerms);
  return {
    ...data,
    createdAt: data.createdAt.toLocaleDateString(),
    id: randomize("AA0000", 6),
    status: status,
    paymentDue: newDate.toLocaleDateString(),
    total: 0,
  };
}

const FormFooter: React.FC<FooterProps> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <FormFooterWrapper className="form__footer">
      <Button
        type="button"
        buttonStyle="secondary"
        className="btn--form"
        handleClick={() => {
          dispatch(formAction());
          dispatch(modalAction());
        }}
      >
        Discard
      </Button>
      <div className="button__container">
        <Button
          type="button"
          buttonStyle="secondary"
          className="btn--dark"
          handleClick={() => {
            dispatch(saveInvoiceAsDraft({ ...addProperties("draft", data) }));
            dispatch(formAction());
            dispatch(modalAction());
          }}
        >
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
