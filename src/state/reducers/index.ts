import { combineReducers } from "redux";
import invoiceReducer from "./invoiceReducer";
const reducers = combineReducers({
  invoices: invoiceReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
