import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "app/rootReducer";
import { ShowcaseItemDisplay } from "features/showcase/showcaseDisplay";
import { removeSelectedItem } from "features/showcase/showcaseSlice";

//interface ShowcaseContainerProps{}

const ShowcaseContainer = () => {
  const dispatch = useDispatch();

  const { selected } = useSelector((state: RootState) => state.showcase);

  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch(removeSelectedItem());
    console.log(selected);
  };

  const renderedElement =
    selected == null ? (
      <div className={"header showcaseContainer"}>
        THIS IS A SHOPPING WEBSITE
      </div>
    ) : (
      <div className={"showcaseContainer border-green"}>
        <ShowcaseItemDisplay item={selected} />
        <div className="nav">
          <div className={"button green-border"}>Buy</div>
          <div className={"button green-border"} onClick={handleClick}>
            Go back
          </div>
        </div>
      </div>
    );
  return (
    <div className="ShowcaseContainer green-border flex-centered">
      {renderedElement}
    </div>
  );
};

export default ShowcaseContainer;
