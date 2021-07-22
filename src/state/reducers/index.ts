import { combineReducers } from "redux";
import invoiceReducer from "./invoiceReducer";
import uiReducer from "./uiReducer";
const reducers = combineReducers({
  invoices: invoiceReducer,
  ui: uiReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
