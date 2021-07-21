import * as Yup from "yup";

interface InitialValueProps {
  sender: {
    address: string;
    city: string;
    postcode: string;
    country: string;
  };
  clientName: string;
  clientEmail: string;
  client: {
    address: string;
    city: string;
    postcode: string;
    country: string;
  };
  date: Date;
  payment: string;
  projectDescription: string;
  items: { name: string; qty: number; price: number; total: number }[] | [];
}

export const initialValue: InitialValueProps = {
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

export const validationSchema = Yup.object({
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
