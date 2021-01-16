import React from "react";
import {useSelector} from "react-redux";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import {cartPriceSelector} from "features/cart/cartSlice";
import StripeCheckoutForm from "features/buy/StripeCheckoutForm";
const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");


const PayingForm = () => {
  const price = useSelector(cartPriceSelector);

  return (
    <div id="payingForm" className="rectangle">
    <Elements stripe={stripePromise}>
    <StripeCheckoutForm total={price}/>
    </Elements>
    </div>
  );
};

export default PayingForm;
