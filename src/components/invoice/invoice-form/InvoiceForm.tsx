import React from "react";
import { Link } from "react-router-dom";
import {
  WrapperDiv,
  Container,
  FormikForm as Form,
  FormSubTitle,
  GridContainer,
  FormFooter,
} from "./InvoiceForm.style";
import CustomInput from "../../input/Input";
import Button from "../../button/Button";
import { ReactComponent as LeftArrow } from "../../../assets/icon-arrow-left.svg";
import { HeadingSecondary } from "../../../styles/typography";
import { Formik } from "formik";
// import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import CustomSelect from "../../select/CustomSelect";
import * as Yup from "yup";
import Dates from "../../date-picker/DatePicker";

const options = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];

const validationSchema = Yup.object({
  address: Yup.string().required("can't be empty"),
  city: Yup.string().required("can't be empty"),
  postcode: Yup.string().required("can't be empty"),
  country: Yup.string().required("can't be empty"),
  clientName: Yup.string().min(3).required("can't be empty"),
  clientEmail: Yup.string()
    .email("Invalid Email Format")
    .required("can't be empty"),
  clientAddress: Yup.string().min(3).required("can't be empty"),
  clientCity: Yup.string().min(3).required("can't be empty"),
  clientPostcode: Yup.string().required("can't be empty"),
  clientCountry: Yup.string().required("can't be empty"),
  projectDescription: Yup.string().required("can't be empty"),
});

const InvoiceForm: React.FC = () => {
  const initialValue = {
    address: "",
    city: "",
    postcode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    clientCity: "",
    clientPostcode: "",
    clientCountry: "",
    date: new Date(),
    payment: "Net 1 Day",
    projectDescription: "",
  };

  return (
    <WrapperDiv>
      <Link to="/" className="back__link body-font-medium">
        <LeftArrow /> Go back
      </Link>
      <HeadingSecondary>New Invoice</HeadingSecondary>
      <Formik
        initialValues={initialValue}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form className="scroll__container">
            <Container>
              <FormSubTitle>Bill From</FormSubTitle>
              <CustomInput name="address" label="Street address" />
              <GridContainer className="input__container">
                <CustomInput name="city" label="city" />
                <CustomInput name="postcode" label="post code" type="number" />
                <CustomInput name="country" label="country" />
              </GridContainer>
            </Container>
            <Container>
              <FormSubTitle>Bill To</FormSubTitle>
              <CustomInput name="clientName" label="Client's Name" />
              <CustomInput
                name="clientEmail"
                label="Client's Email"
                type="email"
              />
              <CustomInput name="clientAddress" label="Street address" />
              <GridContainer className="input__container">
                <CustomInput name="clientCity" label="city" />
                <CustomInput
                  name="clientPostcode"
                  label="post code"
                  type="number"
                />
                <CustomInput name="clientCountry" label="country" />
              </GridContainer>
            </Container>
            <Container>
              <GridContainer className="input__container date__container">
                <Dates name="date" label="Invoice Data" />
                <CustomSelect
                  label="Payment terms"
                  name="payment"
                  options={options}
                />
              </GridContainer>
              <CustomInput
                name="projectDescription"
                label="Project Description"
              />
            </Container>
            <FormFooter className="form__footer">
              <div className="button__container">
                <Button
                  type="button"
                  buttonStyle="secondary"
                  className="btn--form"
                >
                  Cancel
                </Button>
                <Button buttonStyle="secondary" className="btn--default">
                  Save & Send
                </Button>
              </div>
            </FormFooter>
          </Form>
        )}
      </Formik>
    </WrapperDiv>
  );
};

export default InvoiceForm;
