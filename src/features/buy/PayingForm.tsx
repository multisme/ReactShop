import React, { useState } from "react";
import {useSelector} from "react-redux";

import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import {cartSelector} from "features/cart/cartSlice";
import StripeCheckoutForm from "features/buy/StripeCheckoutForm";
const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");


const PayingForm = () => {
  const price = useSelector(cartSelector);
 /* if (price == 0){
          return <h3>Please buy some stuff before Paying</h3>
          }
          */
  return (
    <div id="payingForm" className="rectangle green-border">
    <Elements stripe={stripePromise}>
    <StripeCheckoutForm total={price}/>
    </Elements>
    </div>
  );
};

export default PayingForm;
