import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "app/rootReducer";
import { ShowcaseItemDisplay } from "features/showcase/showcaseDisplay";
import ShowcaseTitle from "features/showcase/showcaseTitle";

import { removeSelectedItem } from "features/showcase/showcaseSlice";

//interface ShowcaseContainerProps{}

const ShowcaseContainer = () => {
  const dispatch = useDispatch();

  const { selected } = useSelector((state: RootState) => state.showcase);

  const renderedElement =
    selected == null ? (
        <ShowcaseTitle />
    ) : (
        <ShowcaseItemDisplay item={selected} />
    );
  return (
    <div className="ShowcaseContainer green-border flex-centered">
      {renderedElement}
    </div>
  );
};

export default ShowcaseContainer;
