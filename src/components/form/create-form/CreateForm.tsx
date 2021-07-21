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

const CreateForm: React.FC = () => {
  return (
    <WrapperDiv>
      <div to="/" className="back__link body-font-medium">
        <LeftArrow /> Go back
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
