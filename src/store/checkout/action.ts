import { Dispatch } from "redux";

import { CheckoutPayload } from "../../types/CheckoutPayload";

export const CHECKOUT_BOOKING = "CHECKOUT_BOOKING";

export const checkoutBooking =
  (payload: CheckoutPayload) => (dispatch: Dispatch) => {
    dispatch({
      type: CHECKOUT_BOOKING,
      payload: payload,
    });
  };
