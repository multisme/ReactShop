import React from "react";

import { itemData } from "features/item/itemSlice";
import { ItemDisplay } from "features/item/itemDisplay"; 

interface Props{
        items: itemData[]
}

export const ItemListDisplay = ({ items }: Props) => {
        const renderedlist = items.map((item: itemData) => <ItemDisplay {...item} key={item.id}/>);
        return (
        <ul className="productList" id="list">
                {renderedlist}
        </ul>
        );
};
