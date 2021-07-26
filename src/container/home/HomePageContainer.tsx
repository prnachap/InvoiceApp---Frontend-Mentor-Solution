import React, { useCallback, useEffect } from "react";
import { Header, Illustrate } from "../../components";
import { useSelector } from "../../hooks/useTypedSelector";
import Modal from "../../components/modal/Modal";
import CreateForm from "../../components/form/create-form/CreateForm";
import { AnimatePresence } from "framer-motion";
import InvoiceItemList from "../../components/invoice/invoice-item-lists/InvoiceItemList";
import { useDispatch } from "react-redux";
import { SearchInvoices } from "../../state/action-creators/invoice-action-creator";

const HomePageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const {
    invoices: { allInvoices },
    ui: { showForm, showModal },
  } = useSelector((state) => state);

  const getData = useCallback(() => {
    dispatch(SearchInvoices());
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Header />
      {!allInvoices && <Illustrate />}
      {allInvoices && <InvoiceItemList />}
      <AnimatePresence>{showModal && <Modal />}</AnimatePresence>
      <AnimatePresence>{showForm && <CreateForm />}</AnimatePresence>
    </>
  );
};

export default HomePageContainer;
