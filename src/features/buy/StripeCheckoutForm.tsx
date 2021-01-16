import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
  const history = useHistory();
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
            return;
    }
    if (error) {
       card.focus()
       return;
    }

    if (cardComplete) {
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
            console.log("error set");
      setError(payload.error);
    } else {
      if (payload.paymentMethod){
        setPaymentMethod(payload.paymentMethod);
        history.push('/thank');
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
      <button type="submit" disabled={!stripe}>
        Pay {21}€
      </button>
        <Link to="/home">
                <button>CANCEL</button>
        </Link>
    </form>
  );
};

export default StripeCheckoutForm;
