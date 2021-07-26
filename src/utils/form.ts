import * as Yup from "yup";

export interface InitialValueProps {
  createdAt: Date;
  description: string;
  paymentTerms: string;
  clientName: string;
  clientEmail: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  items:
    | { name: string; quantity: number; price: number; total: number }[]
    | [];
}

export const initialValue: InitialValueProps = {
  createdAt: new Date(),
  description: "",
  paymentTerms: "Net 1 Day",
  clientName: "",
  clientEmail: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },

  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },

  items: [],
};

export const validationSchema = Yup.object({
  createdAt: Yup.date().required("can't be empty"),
  description: Yup.string().required("can't be empty"),
  paymentTerms: Yup.string().required("can't be empty"),
  clientName: Yup.string().min(3).required("can't be empty"),
  clientEmail: Yup.string()
    .email("Invalid Email Format")
    .required("can't be empty"),
  senderAddress: Yup.object().shape({
    street: Yup.string().required("can't be empty"),
    city: Yup.string().required("can't be empty"),
    postCode: Yup.string().required("can't be empty"),
    country: Yup.string().required("can't be empty"),
  }),
  clientAddress: Yup.object().shape({
    street: Yup.string().required("can't be empty"),
    city: Yup.string().required("can't be empty"),
    postCode: Yup.string().required("can't be empty"),
    country: Yup.string().required("can't be empty"),
  }),

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
