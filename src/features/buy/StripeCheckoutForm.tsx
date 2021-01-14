import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
CardElement,
useStripe,
useElements
} from "@stripe/react-stripe-js";
import {loadStripe, PaymentMethod, StripeError} from '@stripe/stripe-js';

interface StripeCheckoutFormState{
        total: number;
        }

const StripeCheckoutForm = ({total}: StripeCheckoutFormState) => {
  const stripe = useStripe(); 
  const elements = useElements();
  const [error, setError] = useState<StripeError | null | undefined>(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement('card')
    if (card == null){
            console.log("card error");
            return;
    }
    if (error) {
       card.focus()
       return;
    }

    if (cardComplete) {
            console.log("processing");
      setProcessing(true);
    }
     
    const cardelement = elements.getElement(CardElement);
    if (cardelement == null)
            return;
    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: cardelement
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      if (payload.paymentMethod){
      setPaymentMethod(payload.paymentMethod);
    }
    }
  };
        return ( 
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
          },
        }}
      />
        <Link to="/thank">
      <button type="submit" disabled={!stripe}>
        Pay {total}€
      </button>
        </Link>
        <Link to="/home">
                <button>CANCEL</button>
        </Link>
    </form>
  );
};

export default StripeCheckoutForm;
