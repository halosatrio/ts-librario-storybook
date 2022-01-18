import { CHECKOUT_BOOKING } from "./action";
import { CheckoutPayload } from "../../types/CheckoutPayload";

interface CHECKOUT_BOOKING {
  type: "CHECKOUT_BOOKING";
  payload: CheckoutPayload;
}

const initialState: CheckoutPayload = {
  _id: "",
  date: {
    startDate: new Date(),
    endDate: new Date(),
  },
};

export default function checkoutReducer(
  state = initialState,
  action: CHECKOUT_BOOKING
) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload;
    default:
      return state;
  }
}
