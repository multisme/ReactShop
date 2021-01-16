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
                        <ItemDisplay item={item} key={item.id}/>
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
                dispatch( updateSelectedItem(item) );
        }

        const unselectItem = (e: any) => {
                dispatch( removeSelectedItem() );
        }

        return (
                        <div className="itemCard"  key={item.id} style={{backgroundImage: "url("  +item.url +")"}}>
                        <Link key={item.id}to={`/products/${item.id}`}>
                        <li
                        onMouseEnter={selectItem}
                        onMouseLeave={unselectItem}
                        className={"flex-centered"}
                        >
                        <div className="picture">
                        </div>
                        <div className={"detailsSmall flex-centered"}>
                        <div className="name">{item.name}</div>
                        <div className={"price"}>{item.price}€</div>
                        </div>
                        </li>
                        </Link>
                        </div>
               );
};
