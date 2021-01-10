import React from "react";

import { itemData } from "features/item/itemSlice";
import { itemDisplay } from "features/item/itemDisplay"; 

import styles from 'features/items/itemDisplay.module.css';

interface Props{
        items: itemData[]
}

export const ItemsDisplay = ({ items }: Props) => {
        const renderedlist = items.map((item: itemData) => <ItemDisplay {...item}/>);
        return (
        <ul className={styles.productList} id="list">
                {renderedlist}
        </ul>
        );
};
