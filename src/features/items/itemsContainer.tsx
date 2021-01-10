import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import { RootState } from "app/rootReducer";

import { fetchItems, itemsSelector} from "features/items/itemsSlice";

import { ItemListDisplay } from "features/items/itemsDisplay";

interface ItemContainerProps {
  //    page: number
}

export const ItemsContainer = ({}: //  page = 1

ItemContainerProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  const { hasError, loading, items } = useSelector(itemsSelector);
  useEffect(() => {
            dispatch(fetchItems())
  }, [dispatch]);
  console.log(items, hasError, loading);

  if (hasError) {
    return (
      <div>
        <h1>Something went  wrong with the database</h1>
        <h3>Is the developper payed well enough?</h3>
      </div>
    );
  }

  console.log(items, hasError, loading);
  console.log(items.length);
  let renderedContainer = loading ? (
    <h3>Loading...</h3>
  ) : (
    <ItemListDisplay items={items}/>
  );

  return <ul id="">{renderedContainer}</ul>;
};

export default ItemsContainer;
