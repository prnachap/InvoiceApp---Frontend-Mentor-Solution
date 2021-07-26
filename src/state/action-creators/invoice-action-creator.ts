import { Action } from "../actions/invoiceActions";
import { ActionType } from "../action-types/invoiceActionTypes";
import { Dispatch } from "redux";
import data from "../../data.json";

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
