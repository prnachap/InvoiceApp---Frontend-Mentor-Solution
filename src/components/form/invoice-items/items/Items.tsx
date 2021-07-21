//@ts-nocheck
import { FieldArray } from "formik";
import { Title } from "./Items.style";
import Item from "../item/Item";
import Button from "../../../button/Button";
import React from "react";
import { Container } from "../../../../styles/form-common";

interface IItems {
  name: string;
}

const Items: React.FC<IItems> = ({ name }) => {
  return (
    <>
      <Title>Item List</Title>
      <FieldArray
        name={name}
        render={(helpers) => {
          return (
            <Container>
              {helpers.form.values.items.map((_, index) => {
                return (
                  <Item key={index} index={index} remove={helpers.remove} />
                );
              })}
              <Button
                type="button"
                buttonStyle="secondary"
                className="btn--form btn--fullwidth"
                handleClick={() =>
                  helpers.push({ name: "", qty: "", price: "", total: "" })
                }
              >
                Add Item
              </Button>
            </Container>
          );
        }}
      />
    </>
  );
};

export default Items;

// {(props: FieldArrayRenderProps) => {
//   const {
//     form: {
//       values: { items },
//     },
//     push,
//     remove,
//   } = props;
//   return (

//   );
// }}
