import React from "react";

import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"

import { itemData } from "features/item/itemSlice";
import {
        updateSelectedItem,
        removeSelectedItem
} from "features/showcase/showcaseSlice";

import "features/items/itemsDisplay.css";

interface itemListProps{
items: itemData[]
}

interface itemProps{
item: itemData
}

export const ItemListDisplay = ({ items }: itemListProps) => {
        const renderedlist = items.map((item: itemData) =>
                        <Link to={`/products/${item.id}`}>
                        <ItemDisplay item={item} key={item.id}/>
                        </Link>
                        );
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
        //        e.preventDefault();
                dispatch( updateSelectedItem(item) );
        }

        const unselectItem = (e: any) => {
                dispatch( removeSelectedItem() );
        }

        return (
                        <li
                        onMouseEnter={selectItem}
                        onMouseLeave={unselectItem}
                        className={"itemCard flex-centered green-border"} key={item.id}
                        >
                        <div className="picture">
                           <img src="http://placekitten.com/g/300/300"/>     
                        </div>
                        <div className={"detailsSmall flex-centered"}>
                        <div className="name">{item.name}</div>
                        <div className={"quantity"}>x{item.quantity}</div>
                        </div>
                        </li>
               );
};
