import React, {useState} from "react";

import ShippingForm from "features/buy/ShippingForm";
import BillingForm from "features/buy/BillingForm";
import PayingForm from "features/buy/PayingForm";
import ThankForm from "features/buy/ThankForm";

const BuyPage = () => {
        return (
        <div className={"buyPage flex-centered"}>
        </div>
        )
};

export const ShipPage = () => {
        return (
         <ShippingForm />
        )
}

export const BillPage = () => {
        return (
        <BillingForm />
        )
}

export const PayPage = () => {
        return (
                <PayingForm />
        )
}

export const ThankPage= () => {
        return (
                <ThankForm />
        )
}

export default BuyPage;
