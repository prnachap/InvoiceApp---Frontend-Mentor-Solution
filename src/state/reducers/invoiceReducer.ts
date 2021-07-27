import { InvoiceState } from "../../types/common-interface";
import { ActionType } from "../action-types/invoiceActionTypes";
import { Action } from "../actions/invoiceActions";

// eslint-disable-next-line import/no-anonymous-default-export
const INITIALSTATE: InvoiceState = {
  loading: false,
  error: null,
  allInvoices: null,
  currentInvoice: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIALSTATE, action: Action): InvoiceState => {
  switch (action.type) {
    case ActionType.SEARCH_INVOICES:
      return {
        ...state,
        loading: true,
        error: null,
        allInvoices: null,
        currentInvoice: null,
      };
    case ActionType.SEARCH_INVOICES_SUCCESS:
      return {
        ...state,
        loading: false,
        allInvoices: action.payload,
        currentInvoice: null,
      };
    case ActionType.SEARCH_INVOICES_ERROR:
      return {
        ...state,
        loading: false,
        allInvoices: null,
        error: action.payload,
        currentInvoice: null,
      };
    case ActionType.CREATE_INVOICE_DRAFT:
    case ActionType.CREATE_INVOICE_SEND:
      return {
        ...state,
        loading: false,
        allInvoices: state.allInvoices && [
          ...state.allInvoices,
          { ...action.payload },
        ],
      };
    case ActionType.GET_INVOICE_BY_ID:
      return {
        ...state,
        loading: false,
        error: null,
        currentInvoice: action.payload,
      };
    default:
      return state;
  }
};
