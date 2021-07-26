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
