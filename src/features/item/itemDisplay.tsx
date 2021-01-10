import React from "react";
import {useDispatch} from "react-redux"

import { itemData } from "feature/items/itemSlice";
import { updateSelectedItem } from "features/showcase/showcaseSlice"

export const ItemDisplay = (item: itemData) => {
//change the event type here with the correct one

const dispatch = useDispatch();

const selectItem = (e: any) => {
        e.preventDefault();
       dispatch( updateSelectedItem(item) );
}

  return (
    <li
        onClick={selectItem}
        className={styles.product} key={item.id}
    >
      <div className="name">{item.name}</div>
      <div className={"quantity"}>{item.quantity}</div>
    </li>
  );
};
