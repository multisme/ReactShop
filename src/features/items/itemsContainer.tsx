import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { itemsSelector } from "features/items/itemsSlice";

import { ItemListDisplay } from "features/items/itemsDisplay";

import "features/items/itemsContainer.css";

export const ItemsContainer = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { hasError, loading, items } = useSelector(itemsSelector);
 
  if (hasError) {
    return (
      <div>
        <h1>Something went wrong with the database</h1>
        <h3>Is the developper payed well enough?</h3>
      </div>
    );
  }

  let renderedContainer = loading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="itemListWrapper">
        <ItemListDisplay items={items} />
    </div>
  );

  return <div className="ListContainer">{renderedContainer}</div>;
};

export default ItemsContainer;
