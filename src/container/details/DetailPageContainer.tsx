import React, { useCallback, useEffect } from "react";
import { Link } from "./DetailPageContainer.style";
import { InvoiceDetail, StatusBar, Loader } from "../../components";
import { ReactComponent as LeftArrow } from "../../assets/icon-arrow-left.svg";
import { useSelector } from "../../hooks/useTypedSelector";
import { getInvoiceByID } from "../../state/action-creators/invoice-action-creator";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ViewPage: React.FC = () => {
  const { currentInvoice, loading } = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const getInvoice = useCallback(() => {
    dispatch(getInvoiceByID(id));
  }, [dispatch, id]);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (loading || !currentInvoice) {
    return <Loader className="center" />;
  }
  return (
    <>
      <Link to="/" className="back__link body-font-medium">
        <LeftArrow /> Go back
      </Link>
      <StatusBar status={currentInvoice.status} id={currentInvoice.id} />
      <InvoiceDetail invoiceItem={currentInvoice} loading={loading} />
    </>
  );
};

export default ViewPage;
