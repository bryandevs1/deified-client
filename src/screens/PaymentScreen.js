import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "./../components/Header";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState(null); // Set initial state to null

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (paymentMethod) {
      // Ensure a payment method is selected before proceeding
      dispatch(savePaymentMethod(paymentMethod));
      history.push("/placeorder");
    }
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container garp">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  id="paypal"
                  value="PayPal (International Debit Cards)"
                  checked={
                    paymentMethod === "PayPal (International Debit Cards)"
                  }
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="paystack">
                  PayPal (International Debit Cards)
                </label>
              </div>
              <br />
              <input
                className="form-check-input"
                type="radio"
                id="paystack"
                value="PayStack (Nigerian Credit cards)"
                checked={paymentMethod === "PayStack (Nigerian Credit cards)"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="paypal">
                PayStack (Nigerian Credit cards)
              </label>
            </div>
          </div>

          <button disabled={!paymentMethod} type="submit">
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
