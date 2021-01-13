import React, { useEffect } from "react";
import {} from "@reduxjs/toolkit";

import { itemData } from "features/item/itemSlice";

interface ShowcaseItemDisplayProps {
  item: itemData;
}

export const ShowcaseItemDisplay = ({ item }: ShowcaseItemDisplayProps) => {
  useEffect(() => {});
  
  console.log("details", item);
  return (
    <div className={"showcaseItem border-green"}>
      <div className={"showcasePicture border-green"}>
        <img src="https://teamtijger.nl/wp-content/uploads/2018/06/zwarte-trui-transparant-300x300.png"/>
      </div>
      <div className="ShowcaseDetails">
      <div className="name flex-betweened">
      <span>name</span>
      <span>{item.name}</span>
      </div>
      <div className="quantity flex-betweened">
      <span>quantity</span>
      <span>{item.quantity}</span>
      </div>
      <div className="price flex-betweened">
      <span>price</span>
      <span>{item.price}</span>
      </div>
      </div>
    </div>
  );
};
