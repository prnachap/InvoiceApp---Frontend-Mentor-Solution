import { Action } from "../actions/invoiceActions";
import { ActionType } from "../action-types/invoiceActionTypes";
import { Dispatch } from "redux";
import data from "../../data.json";
import { InvoiceItem } from "../../types/common-interface";

export const SearchInvoices = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SEARCH_INVOICES });
  try {
    dispatch({ type: ActionType.SEARCH_INVOICES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionType.SEARCH_INVOICES_ERROR,
      payload: "Something went wrong",
    });
  }
};

export const saveInvoiceAsDraft =
  (data: InvoiceItem) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.CREATE_INVOICE_DRAFT, payload: data });
    } catch (error) {}
  };

export const saveAndSendInvoice =
  (data: InvoiceItem) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.CREATE_INVOICE_SEND, payload: data });
    } catch (error) {}
  };

export const getInvoiceByID =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_INVOICES });
    try {
      const newData = data.filter((item) => item.id === id);
      dispatch({ type: ActionType.GET_INVOICE_BY_ID, payload: newData[0] });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_INVOICES_ERROR,
        payload: "something went wrong",
      });
    }
  };
