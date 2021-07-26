import CustomInput from "../custom-input/Input";
import { FormLegend, GridContainer, StyledFieldSet } from "./FieldSet.style";
import CustomSelect from "../custom-select/CustomSelect";
import CustomDatePicker from "../date-picker/DatePicker";

const Fields = () => {
  return (
    <div>
      <StyledFieldSet>
        <FormLegend>Bill From</FormLegend>
        <CustomInput name="senderAddress.street" label="Street address" />
        <GridContainer className="input__container">
          <CustomInput name="senderAddress.city" label="city" />
          <CustomInput
            name="senderAddress.postCode"
            label="post code"
            type="number"
          />
          <CustomInput name="senderAddress.country" label="country" />
        </GridContainer>
      </StyledFieldSet>
      <StyledFieldSet>
        <FormLegend>Bill To</FormLegend>
        <CustomInput name="clientName" label="Client's Name" />
        <CustomInput name="clientEmail" label="Client's Email" type="email" />
        <CustomInput name="clientAddress.street" label="Street address" />
        <GridContainer className="input__container">
          <CustomInput name="clientAddress.city" label="city" />
          <CustomInput
            name="clientAddress.postCode"
            label="post code"
            type="number"
          />
          <CustomInput name="clientAddress.country" label="country" />
        </GridContainer>
      </StyledFieldSet>
      <StyledFieldSet>
        <GridContainer className="input__container date__container">
          <CustomDatePicker name="createdAt" label="Invoice Data" />
          <CustomSelect name="paymentTerms" />
        </GridContainer>
        <CustomInput name="description" label="Project Description" />
      </StyledFieldSet>
    </div>
  );
};

export default Fields;
