import React from "react";

import ItemsContainer from "features/items/itemsContainer";
import ShowcaseContainer from "features/showcase/showcaseContainer";
import ShippingForm from "features/buying_funnel/ShippingForm";
//import CheckoutForm from "features/buying_funnel/CheckoutForm";

const Home = () => {
  return (
    <div id="home">
      <ItemsContainer />
      <ShowcaseContainer />
      <ShippingForm />
    </div>
  );
};

export default Home;
