import React, { useState } from "react";

import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import StripeCheckoutForm from "features/buy/StripeCheckoutForm";

const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

const PayingForm = () => {
  return (
    <div id="payingForm" className="rectangle green-border">
    <Elements stripe={stripePromise}>
    <StripeCheckoutForm />
    </Elements>
    </div>
  );
};

export default PayingForm;
