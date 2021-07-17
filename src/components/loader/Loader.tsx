import React from "react";
import { LoaderDiv } from "./Loader.style";
import { loaderVariants } from "../../styles/animation";

interface Props {
  className?: string;
}

const Loader: React.FC<Props> = ({ className = "center" }) => {
  return (
    <LoaderDiv
      data-testid="loader"
      className={className}
      variants={loaderVariants}
      animate="start"
    ></LoaderDiv>
  );
};

export default Loader;
