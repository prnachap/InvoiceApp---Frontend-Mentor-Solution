import CustomInput from "../custom-input/Input";
import { FormLegend, GridContainer, StyledFieldSet } from "./FieldSet.style";
import CustomSelect from "../custom-select/CustomSelect";
import CustomDatePicker from "../date-picker/DatePicker";

const Fields = () => {
  return (
    <div>
      <StyledFieldSet>
        <FormLegend>Bill From</FormLegend>
        <CustomInput name="sender.address" label="Street address" />
        <GridContainer className="input__container">
          <CustomInput name="sender.city" label="city" />
          <CustomInput name="sender.postcode" label="post code" type="number" />
          <CustomInput name="sender.country" label="country" />
        </GridContainer>
      </StyledFieldSet>
      <StyledFieldSet>
        <FormLegend>Bill To</FormLegend>
        <CustomInput name="clientName" label="Client's Name" />
        <CustomInput name="clientEmail" label="Client's Email" type="email" />
        <CustomInput name="client.address" label="Street address" />
        <GridContainer className="input__container">
          <CustomInput name="client.city" label="city" />
          <CustomInput name="client.postcode" label="post code" type="number" />
          <CustomInput name="client.country" label="country" />
        </GridContainer>
      </StyledFieldSet>
      <StyledFieldSet>
        <GridContainer className="input__container date__container">
          <CustomDatePicker name="date" label="Invoice Data" />
          <CustomSelect name="payment" />
        </GridContainer>
        <CustomInput name="projectDescription" label="Project Description" />
      </StyledFieldSet>
    </div>
  );
};

export default Fields;
