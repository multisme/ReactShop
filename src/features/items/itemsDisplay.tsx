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

const iconPath = process.env.PUBLIC_URL + '/assets/images/';

console.log("cin", iconPath);
export const ItemListDisplay = ({ items }: itemListProps) => {
        const renderedlist = items.map((item: itemData) =>
                        <div className="itemCard"  key={item.id} style={{backgroundImage: "url("  +item.url +")"}}>
                        <Link key={item.id}to={`/products/${item.id}`}>
                        <ItemDisplay item={item}/>
                        </Link>
                        </div>
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
                console.log("mouse enter");
                e.preventDefault();
                dispatch( updateSelectedItem(item) );
        }

        const unselectItem = (e: any) => {
                dispatch( removeSelectedItem() );
        }

        return (
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
               );
};
