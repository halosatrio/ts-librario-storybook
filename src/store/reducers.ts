import { combineReducers } from "redux";
import checkoutReducer from "./checkout/reducer";

export const rootReducer = combineReducers({
  Checkout: checkoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
