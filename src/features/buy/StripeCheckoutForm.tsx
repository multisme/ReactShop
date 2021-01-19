import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe, PaymentMethod, StripeError } from "@stripe/stripe-js";

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

interface StripeCheckoutFormState {
  total: number;
}

const StripeCheckoutForm = ({ total }: StripeCheckoutFormState) => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement("card");
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    if (error) {
      history.push("/error");
    }
    if (paymentMethod) {
      history.push("/thank");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_OPTIONS} className={"stripePaiment"} />
      <button type="submit" disabled={!stripe}>
        Pay {total}€
      </button>
      <Link to="/home">
        <button>CANCEL</button>
      </Link>
    </form>
  );
};

export default StripeCheckoutForm;
