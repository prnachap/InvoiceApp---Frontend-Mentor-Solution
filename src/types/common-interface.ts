// status
export interface IStatus {
  status: string;
}

// invoice reducer interface
export interface InvoiceState {
  loading: boolean;
  allInvoices: InvoiceItem[] | null;
  error: string | null;
  // invoice: InvoiceItem | null;
  // filteredInvoices: InvoiceItem[] | null;
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

// UI interface
export interface UIState {
  showForm: boolean;
  showModal: boolean;
}
