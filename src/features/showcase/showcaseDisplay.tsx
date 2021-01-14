import React from "react";
import {} from "@reduxjs/toolkit";

import { itemData } from "features/item/itemSlice";

interface ShowcaseItemDisplayProps {
  item: itemData;
}

export const ShowcaseItemDisplay = ({ item }: ShowcaseItemDisplayProps) => {
  
  return (
    <div className={"showcaseItem border-green"}>
      <div className="price flex-betweened">
      <span>{item.price}</span>
      </div>
      <div className={"showcasePicture border-green"}>
        <img src="https://teamtijger.nl/wp-content/uploads/2018/06/zwarte-trui-transparant-300x300.png"/>
      </div>
      <div className="ShowcaseDetails">
      <div className="name flex-betweened">
      <span>{item.name}</span>
      </div>
      </div>
    </div>
  );
};
