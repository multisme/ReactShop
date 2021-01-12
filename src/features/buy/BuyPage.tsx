import React from "react";

import ShippinForm from "features/buy/ShippingForm";
import PayingForm from "features/buy/PayingForm";

const BuyPage = () => {
        return (
        <div className={"buy flex-centered"}>
        <ShippinForm />
        <PayingForm />
        </div>
        )
};

export default BuyPage;
