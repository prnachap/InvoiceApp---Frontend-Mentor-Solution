import React from "react";
import { StatusCirle, StyledStatusDiv } from "../../styles/common-styles";
import { TextPrimary } from "../../styles/typography";
import Button from "../button/Button";
// import useActions from "../../hooks/useActions";
import {
  StatusWrapperDiv,
  StatusFlexContainer,
  ButtonFlexContainer,
} from "./StatusBar.style";

interface Props {
  id: string;
  status: string;
}

const StatusBar: React.FC<Props> = ({ status, id }) => {
  //   const { setStatus } = useActions();

  const handleStatus = () => {
    // setStatus(id);
  };

  return (
    <StatusWrapperDiv>
      <StatusFlexContainer>
        <TextPrimary>Status</TextPrimary>
        <StyledStatusDiv className="status" status={status}>
          <StatusCirle status={status} /> {status}
        </StyledStatusDiv>
      </StatusFlexContainer>
      <ButtonFlexContainer>
        <Button buttonStyle="secondary" className="btn--form">
          Edit
        </Button>
        <Button buttonStyle="secondary" className="btn--danger">
          Delete
        </Button>
        {status !== "paid" && (
          <Button
            buttonStyle="secondary"
            className="btn--default"
            handleClick={handleStatus}
          >
            Mark as Paid
          </Button>
        )}
      </ButtonFlexContainer>
    </StatusWrapperDiv>
  );
};

export default StatusBar;
