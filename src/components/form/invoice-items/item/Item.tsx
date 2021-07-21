import React, { useEffect } from "react";
import { FormikValues, useFormikContext } from "formik";
import { GridContainerItem } from "./Item.style";
import CustomInput from "../../custom-input/Input";
import { ReactComponent as DeleteIcon } from "../../../../assets/icon-delete.svg";

interface IItem {
  index: number;
  remove: (index: number) => void;
}

const Item: React.FC<IItem> = ({ index, remove }) => {
  const { values, setFieldValue } = useFormikContext<FormikValues>();

  useEffect(() => {
    const total = values.items[index].qty * values.items[index].price;
    setFieldValue(`items[${index}].total`, total.toFixed(2) || 0.0);
  }, [index, setFieldValue, values.items]);

  return (
    <GridContainerItem>
      {console.log(values)}
      <div className="label-1">
        <CustomInput
          name={`items[${index}].name`}
          label={index > 0 ? "" : "name"}
        />
      </div>
      <div className="label-2">
        <CustomInput
          name={`items[${index}].qty`}
          label={index > 0 ? "" : "Qty."}
        />
      </div>
      <div className="label-3">
        <CustomInput
          name={`items[${index}].price`}
          label={index > 0 ? "" : "price"}
        />
      </div>
      <div className="label-4">
        <CustomInput
          name={`items[${index}].total`}
          label={index > 0 ? "" : "total"}
          disabled={true}
          className="faded"
        />
      </div>
      <div className="label-5">
        <DeleteIcon onClick={() => remove(index)} />
      </div>
    </GridContainerItem>
  );
};

export default Item;
