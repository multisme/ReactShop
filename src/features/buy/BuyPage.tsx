import React from "react";

import ShippingForm from "features/buy/ShippingForm";
import BillingForm from "features/buy/BillingForm";
import PayingForm from "features/buy/PayingForm";
import ThankForm from "features/buy/ThankForm";

const BuyPage = () => {
        return (
        <div className={"buyPage flex-centered"}>
        <ShippingForm />
        <BillingForm />
        <PayingForm />
        <ThankForm />
        </div>
        )
};

export default BuyPage;
