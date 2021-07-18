import { Action } from "../actions/invoiceActions";
import { ActionType } from "../action-types/invoiceActionTypes";
import { Dispatch } from "redux";

export const SearchInvoices = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.SEARCH_INVOICES });
  dispatch({ type: ActionType.SEARCH_INVOICES_SUCCESS, payload: [] });
  dispatch({
    type: ActionType.SEARCH_INVOICES_ERROR,
    payload: "Something went wrong",
  });
};
