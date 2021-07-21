import React from "react";
import { Header, Illustrate } from "../../components";
import { useSelector } from "../../hooks/useTypedSelector";
import Modal from "../../components/modal/Modal";
import CreateForm from "../../components/form/create-form/CreateForm";

const HomePageContainer: React.FC = () => {
  const { allInvoices } = useSelector((state) => state.invoices);

  return (
    <>
      <Header />
      {!allInvoices && <Illustrate />}
      <Modal />
      <CreateForm />
    </>
  );
};

export default HomePageContainer;
