import React from "react";
import {} from "@reduxjs/toolkit";

import { itemData } from "features/item/itemSlice";

interface ShowcaseItemDisplayProps {
  item: itemData;
}

export const ShowcaseItemDisplay = ({ item }: ShowcaseItemDisplayProps) => {
  
  return (
    <div className={"showcaseItem"}>
      <div className="price flex-betweened">
      <span>{item.price}€</span>
      </div>
      <div className={"showcasePicture border-green"}>
        <img src={item.url}/>
      </div>
      <div className="ShowcaseDetails">
      </div>
    </div>
  );
};
