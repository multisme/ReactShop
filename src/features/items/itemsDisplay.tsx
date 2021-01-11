import React from "react";

import {useDispatch} from "react-redux"

import { itemData } from "features/item/itemSlice";
import { updateSelectedItem } from "features/showcase/showcaseSlice";

import "features/items/itemsDisplay.css";

interface itemListProps{
        items: itemData[]
}

interface itemProps{
        item: itemData
}

export const ItemListDisplay = ({ items }: itemListProps) => {
        const renderedlist = items.map((item: itemData) => <ItemDisplay item={item} key={item.id}/>);
        return (
        <ul className="itemsList" id="list">
                {renderedlist}
        </ul>
        );
};

export const ItemDisplay = ({item}: itemProps) => {
//change the event type here with the correct one

const dispatch = useDispatch();

const selectItem = (e: any) => {
        e.preventDefault();
       dispatch( updateSelectedItem(item) );
}

  return (
    <li
        onClick={selectItem}
        className={"item flex-centered green-border"} key={item.id}
    >
      <div className="name">{item.name}</div>
      <div className={"quantity"}>{item.quantity}</div>
    </li>
  );
};
