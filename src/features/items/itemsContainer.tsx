import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import { RootState } from "app/rootReducer";

import { fetchItems, itemsSelector } from "features/items/itemsSlice";

import { ItemListDisplay } from "features/items/itemsDisplay";

import "./itemsContainer.css";

export const ItemsContainer = () => {
  const dispatch: Dispatch<any> = useDispatch();

  console.log(itemsSelector);
  const { hasError, loading, items } = useSelector(itemsSelector);
 
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
    <ItemListDisplay items={items} />
  );

  return <div className="ListContainer green-border">{renderedContainer}</div>;
};

export default ItemsContainer;
