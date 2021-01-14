import React from "react";

import ItemsContainer from "features/items/itemsContainer";
import ShowcaseContainer from "features/showcase/showcaseContainer";

const Home = () => {
  return (
    <div id="home">
      <ItemsContainer />
      <ShowcaseContainer />
    </div>
  );
};

export default Home;
