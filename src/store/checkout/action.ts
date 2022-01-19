import { Dispatch } from "redux";

import { CheckoutPayload } from "../../types/CheckoutPayload";

export enum ActionType {
  CHECKOUT_BOOKING = "CHECKOUT_BOOKING",
}
export interface CheckoutAction {
  type: ActionType.CHECKOUT_BOOKING;
  payload: CheckoutPayload;
}

export const checkoutBooking =
  (payload: CheckoutPayload) => (dispatch: Dispatch<CheckoutAction>) => {
    dispatch({
      type: ActionType.CHECKOUT_BOOKING,
      payload: payload,
    });
  };
