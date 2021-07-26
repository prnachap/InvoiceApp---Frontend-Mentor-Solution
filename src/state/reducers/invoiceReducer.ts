import { InvoiceState } from "../../types/common-interface";
import { ActionType } from "../action-types/invoiceActionTypes";
import { Action } from "../actions/invoiceActions";

// eslint-disable-next-line import/no-anonymous-default-export
const INITIALSTATE: InvoiceState = {
  loading: false,
  error: null,
  allInvoices: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIALSTATE, action: Action): InvoiceState => {
  switch (action.type) {
    case ActionType.SEARCH_INVOICES:
      return { ...state, loading: true, error: null, allInvoices: null };
    case ActionType.SEARCH_INVOICES_SUCCESS:
      return { ...state, loading: false, allInvoices: action.payload };
    case ActionType.SEARCH_INVOICES_ERROR:
      return {
        ...state,
        loading: false,
        allInvoices: null,
        error: action.payload,
      };
    case ActionType.CREATE_INVOICE_DRAFT:
      return {
        ...state,
        loading: false,
        allInvoices: state.allInvoices && [
          ...state.allInvoices,
          { ...action.payload, status: "draft" },
        ],
      };
    default:
      return state;
  }
};
