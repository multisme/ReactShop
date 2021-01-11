import React, { useEffect } from "react";
import {} from "@reduxjs/toolkit";

import { itemData } from "features/item/itemSlice";

interface ShowcaseItemDisplayProps {
  item: itemData;
}

export const ShowcaseItemDisplay = ({ item }: ShowcaseItemDisplayProps) => {
  useEffect(() => {});
  return (
    <div className={"showcaseItem border-green"}>
      <div className="details">
        <div className="name">{item.name}</div>
        <div className="quantity">{item.quantity}</div>
      </div>
    </div>
  );
};
