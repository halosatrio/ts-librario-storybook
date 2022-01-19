import { CheckoutAction } from "./action";
import { ActionType } from "./action";
import { CheckoutPayload } from "../../types/CheckoutPayload";

const initialState = {
  _id: "",
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
};

export default function checkoutReducer(
  state: CheckoutPayload = initialState,
  action: CheckoutAction
) {
  switch (action.type) {
    case ActionType.CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
}
