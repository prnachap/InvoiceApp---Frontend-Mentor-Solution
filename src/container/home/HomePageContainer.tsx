import {
  Field,
  FieldHookConfig,
  Form,
  Formik,
  FormikProps,
  FormikValues,
} from "formik";
import React from "react";
import { Header, Illustrate } from "../../components";
import CustomInput from "../../components/input/Input";
import { useSelector } from "../../hooks/useTypedSelector";
import * as Yup from "yup";

const HomePageContainer: React.FC = () => {
  const { allInvoices } = useSelector((state) => state.invoices);
  const initialValues = {
    name: "hello",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Can't be Empty"),
  });
  return (
    <>
      <Header />
      {!allInvoices && <Illustrate />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {() => (
          <Form>
            <CustomInput type="input" name="name" label={"name"} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default HomePageContainer;
