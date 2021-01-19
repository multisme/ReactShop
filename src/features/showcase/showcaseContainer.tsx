import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "app/rootReducer";
import { ShowcaseItemDisplay } from "features/showcase/showcaseDisplay";
import ShowcaseTitle from "features/showcase/showcaseTitle";

//interface ShowcaseContainerProps{}

const ShowcaseContainer = () => {
  const { selected } = useSelector((state: RootState) => state.showcase);

  const renderedElement =
    selected == null ? (
      <ShowcaseTitle />
    ) : (
      <ShowcaseItemDisplay item={selected} />
    );
  return (
    <div className="showcaseContainer flex-centered">{renderedElement}</div>
  );
};

export default ShowcaseContainer;
