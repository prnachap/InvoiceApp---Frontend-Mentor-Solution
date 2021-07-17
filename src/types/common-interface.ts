// status
export interface IStatus {
  status: string;
}
export interface InvoiceState {
  loading: boolean;
  invoiceList: InvoiceItem[] | null;
  error: string | null;
  invoice: InvoiceItem | null;
  filteredInvoices: InvoiceItem[] | null;
}

export interface InvoiceItem {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
}
