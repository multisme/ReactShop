import React from "react";
import { useDispatch } from "react-redux";

import { itemData } from "features/item/itemSlice";
import { updateSelectedItem } from "features/showcase/showcaseSlice";

import "features/item/itemDisplay.css";

export const ItemDisplay = (item: itemData) => {
  //change the event type here with the correct one

  const dispatch = useDispatch();

  const selectItem = (e: any) => {
    e.preventDefault();
    dispatch(updateSelectedItem(item));
  };

  return (
    <li
      onClick={selectItem}
      className={"item flex-centered green-border"}
      key={item.id}
    >
      <div className="name">{item.name}</div>
      <div className={"quantity"}>{item.quantity}</div>
    </li>
  );
};
