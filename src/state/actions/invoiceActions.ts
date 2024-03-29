import { InvoiceItem } from "../../types/common-interface";
import { ActionType } from "../action-types/invoiceActionTypes";

interface SearchInvoices {
  type: ActionType.SEARCH_INVOICES;
}
interface SearchRepositoriesSuccess {
  type: ActionType.SEARCH_INVOICES_SUCCESS;
  payload: InvoiceItem[];
}

interface SearchRepositoriesError {
  type: ActionType.SEARCH_INVOICES_ERROR;
  payload: string;
}

interface CreateInvoiceAndSaveAsDraft {
  type: ActionType.CREATE_INVOICE_DRAFT;
  payload: InvoiceItem;
}

interface CreateAndSendInvoice {
  type: ActionType.CREATE_INVOICE_SEND;
  payload: InvoiceItem;
}

interface GetInvoiceByID {
  type: ActionType.GET_INVOICE_BY_ID;
  payload: InvoiceItem;
}

export type Action =
  | SearchInvoices
  | SearchRepositoriesSuccess
  | SearchRepositoriesError
  | CreateInvoiceAndSaveAsDraft
  | CreateAndSendInvoice
  | GetInvoiceByID;
