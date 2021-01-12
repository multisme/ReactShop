import React from "react";

import ItemsContainer from "features/items/itemsContainer";
import ShowcaseContainer from "features/showcase/showcaseContainer";
//import ShippingForm from "features/buying_funnel/ShippingForm";
import ItemPage  from "features/items/itemPage";
//import CheckoutForm from "features/buying_funnel/CheckoutForm";

import{Route} from "react-router-dom"

const Home = () => {
  return (
    <div id="home">
      <ItemsContainer />
      <ShowcaseContainer />
    </div>
  );
};

export default Home;
