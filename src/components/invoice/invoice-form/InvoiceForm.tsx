// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import {
  WrapperDiv,
  Container,
  FormikForm as Form,
  FormSubTitle,
  GridContainer,
  Title,
} from "./InvoiceForm.style";
import CustomInput from "../../form/custom-input/Input";
import Button from "../../button/Button";
import { ReactComponent as LeftArrow } from "../../../assets/icon-arrow-left.svg";
import { HeadingSecondary } from "../../../styles/typography";
import { Formik, FieldArray } from "formik";
import CustomSelect from "../../form/custom-select/CustomSelect";
import * as Yup from "yup";
import Dates from "../../form/date-picker/DatePicker";
import Item from "../../form/invoice-items/item/Item";
import FormFooter from "../../form/form-footer/FormFooter";
import Fields from "../../form/fieldset/FieldSet";

const validationSchema = Yup.object({
  sender: Yup.object().shape({
    address: Yup.string().required("can't be empty"),
    city: Yup.string().required("can't be empty"),
    postcode: Yup.string().required("can't be empty"),
    country: Yup.string().required("can't be empty"),
  }),

  clientName: Yup.string().min(3).required("can't be empty"),
  clientEmail: Yup.string()
    .email("Invalid Email Format")
    .required("can't be empty"),
  client: Yup.object().shape({
    address: Yup.string().required("can't be empty"),
    city: Yup.string().required("can't be empty"),
    postcode: Yup.string().required("can't be empty"),
    country: Yup.string().required("can't be empty"),
  }),
  projectDescription: Yup.string().required("can't be empty"),
  date: Yup.date().required("can't be empty"),
  payment: Yup.string().required("can't be empty"),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Required"),
        qty: Yup.number().typeError("Invalid Input").required("Required"),
        price: Yup.number().typeError("Invalid Input").required("Required"),
        total: Yup.number(),
      })
    )
    .min(1, "An item must be added"),
});

const InvoiceForm: React.FC = () => {
  const initialValue = {
    sender: {
      address: "",
      city: "",
      postcode: "",
      country: "",
    },
    clientName: "",
    clientEmail: "",
    client: {
      address: "",
      city: "",
      postcode: "",
      country: "",
    },
    date: new Date(),
    payment: "Net 1 Day",
    projectDescription: "",
    items: [],
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
            <Fields />
            <Container>
              <FormSubTitle>Bill From</FormSubTitle>
              <CustomInput name="sender.address" label="Street address" />
              <GridContainer className="input__container">
                <CustomInput name="sender.city" label="city" />
                <CustomInput
                  name="sender.postcode"
                  label="post code"
                  type="number"
                />
                <CustomInput name="sender.country" label="country" />
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
              <CustomInput name="client.address" label="Street address" />
              <GridContainer className="input__container">
                <CustomInput name="client.city" label="city" />
                <CustomInput
                  name="client.postcode"
                  label="post code"
                  type="number"
                />
                <CustomInput name="client.country" label="country" />
              </GridContainer>
            </Container>
            <Container>
              <GridContainer className="input__container date__container">
                <Dates name="date" label="Invoice Data" />
                <CustomSelect name="payment" />
              </GridContainer>
              <CustomInput
                name="projectDescription"
                label="Project Description"
              />
            </Container>
            <Container>
              <Title>Item List</Title>
              <FieldArray name="items">
                {(props) => {
                  const {
                    form: {
                      values: { items },
                    },
                    remove,
                    push,
                  } = props;
                  return (
                    <>
                      {items.map((item, index) => {
                        return (
                          <Item key={index} index={index} remove={remove} />
                        );
                      })}
                      <Button
                        type="button"
                        buttonStyle="secondary"
                        className="btn--form btn--fullwidth"
                        handleClick={() =>
                          push({ name: "", qty: "", price: "", total: "" })
                        }
                      >
                        Add Item
                      </Button>
                    </>
                  );
                }}
              </FieldArray>
            </Container>
            <FormFooter />
            <FormFooter className="form__footer">
              <div className="button__container">
                <Button
                  type="button"
                  buttonStyle="secondary"
                  className="btn--form"
                >
                  Save as Draft
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
