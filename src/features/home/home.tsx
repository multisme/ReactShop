import React from "react";

import Header from "features/header/header"
import ItemsContainer from "features/items/itemsContainer";
import ShowcaseContainer from "features/showcase/showcaseContainer";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <ItemsContainer />
    </div>
  );
};

export default Home;
