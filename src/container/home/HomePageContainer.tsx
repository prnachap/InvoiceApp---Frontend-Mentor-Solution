import React from "react";
import { Header, Illustrate } from "../../components";
import { useSelector } from "../../hooks/useTypedSelector";
import Modal from "../../components/modal/Modal";
import CreateForm from "../../components/form/create-form/CreateForm";
import { AnimatePresence } from "framer-motion";

const HomePageContainer: React.FC = () => {
  const {
    invoices: { allInvoices },
    ui: { showForm, showModal },
  } = useSelector((state) => state);

  return (
    <>
      <Header />
      {!allInvoices && <Illustrate />}
      <AnimatePresence>{showModal && <Modal />}</AnimatePresence>
      <AnimatePresence>{showForm && <CreateForm />}</AnimatePresence>
    </>
  );
};

export default HomePageContainer;
