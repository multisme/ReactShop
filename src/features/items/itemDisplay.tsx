import React from "react";
import {useDispatch} from "react-redux"

import { itemData } from "features/items/item";
import { updateSelectedItem } from "features/showcase/showcaseSlice"

import styles from 'features/items/itemDisplay.module.css';


interface Props{
        items: itemData[]
}


export const ItemListDisplay = ({ items }: Props) => {
        const renderedlist = items.map((item: itemData) => <ItemDisplay {...item}/>);
        return <ul className={styles.productList} id="list">{renderedlist}</ul>;
};

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
