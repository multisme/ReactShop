import React from "react";
import { useSelector } from "react-redux";

import { itemListSelector } from "features/items/itemsSlice";

import { ItemListDisplay } from "features/items/itemsDisplay";

import "features/items/itemsContainer.css";

export const ItemsContainer = () => {

  const { hasError, loading, items } = useSelector(itemListSelector);
 
  if (hasError) {
    return (
      <div style={{fontSize: "30px"}}>
        <h1>Something went wrong with the backend</h1>
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
