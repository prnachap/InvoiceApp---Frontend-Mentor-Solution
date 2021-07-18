import React from "react";
import { Header, Illustrate } from "../../components";
import { useSelector } from "../../hooks/useTypedSelector";

const HomePageContainer: React.FC = () => {
  const { allInvoices } = useSelector((state) => state.invoices);

  return (
    <>
      <Header />
      {!allInvoices && <Illustrate />}
    </>
  );
};

export default HomePageContainer;
