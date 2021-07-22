// @ts-nocheck
import React from "react";
import { WrapperDiv, FormikForm as Form } from "./CreateForm.style";
import { ReactComponent as LeftArrow } from "../../../assets/icon-arrow-left.svg";
import { HeadingSecondary } from "../../../styles/typography";
import { Formik } from "formik";
import FieldSet from "../fieldset/FieldSet";
import FormFooter from "../form-footer/FormFooter";
import { initialValue, validationSchema } from "../../../utils/form";
import Items from "../invoice-items/items/Items";
import Error from "../error/Error";
import { formVariants } from "../../../styles/animation";
import {
  formAction,
  modalAction,
} from "../../../state/action-creators/ui-action-creators";
import { useDispatch } from "react-redux";

const CreateForm: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <WrapperDiv
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div
        className="back__link body-font-medium"
        onClick={() => {
          dispatch(formAction());
          dispatch(modalAction());
        }}
      >
        <LeftArrow />
        Go back
      </div>
      <HeadingSecondary>New Invoice</HeadingSecondary>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(props) => (
          <>
            <Form className="scroll__container">
              <FieldSet />
              <Items name="items" />
              <FormFooter />
              {props.submitCount > 0 && props.errors && <Error {...props} />}
            </Form>
          </>
        )}
      </Formik>
    </WrapperDiv>
  );
};

export default CreateForm;
