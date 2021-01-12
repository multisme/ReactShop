import React from "react";
import { useParams } from "react-router-dom";

import {itemData} from "features/item/itemSlice";

interface productPageParams{
        id: string | undefined
}

const ItemPage = ()=>{
        const {id}  = useParams<productPageParams>();
        if (id == undefined){
                return;
        }
        
        const handleClick = (e: any) => {
                e.preventDefault;
                console.log("BUY");
        }
        return (
        <div>
                <div className="mainImage">
                </div>
                <div className="buy" onClick={handleClick}>
                        BUY
                </div>
        </div>
        )
}
export default ItemPage;
