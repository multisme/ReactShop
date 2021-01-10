import React, {Dispatch, useEffect} from "react";
import {} from "@reduxjs/toolkit";

import {itemData} from "features/items/item";


interface ShowcaseItemDisplayProps{
        item: itemData
}

export const ShowcaseItemDisplay = ( {item}: ShowcaseItemDisplayProps ) => {
       useEffect(() => {})
       return (
       <div>
                <div className="name">{item.name}</div>
                <div className="quantity">{item.quantity}</div>
       </div>
       )
}
