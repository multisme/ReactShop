import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "app/rootReducer";
import {itemData} from "features/item/itemSlice";
import {itemPageSelector} from "features/items/itemsSlice";
import {addToCart} from "features/cart/cartSlice";

import { useFormFields } from "utils/utils";

interface productPageParams{
        id: string | undefined
}

const ItemPage = ()=>{
        const {id}  = useParams<productPageParams>();
        const [fields, handleFieldChange] = useFormFields({
                quantities: 0
        });
        const dispatch = useDispatch();
        const item = useSelector((state) =>itemPageSelector(state, 2));
 
        if (id == undefined){
                return (
                <h3>Error</h3>
                );
        }
       
        console.log(item);
        const handleClick = (e: any) => {
                e.preventDefault();
                console.log("BUY");
        }
        
        const handleSubmit = () => {
                //dispatch();
        }
        
        const range = [...Array(10).keys()]
        const availableQuantities = range.map((i) => 
                <option value="`{i}`">{i}</option>
        )
 
        return (
        <div className="itemPage flex-centered">
                <div className="panel left">
                <div className="mainImage">
                        <img src="https://placekitten.com/g/200/300" />
                </div>
                </div>
                <div className="panel right">
                        <div className="details"></div>
                <form className="ItemForm" onSubmit={handleSubmit}>
                <label>Quantities: </label>
                <select name="quantities">
                        {availableQuantities}
                </select><br/>
                <button className="buy" onClick={handleClick}>
                        addToCart
                </button>
                <button className="checkout" onClick={handleClick}>
                        Checkout
                </button>
                </form>
                </div>
        </div>
        )
}
export default ItemPage;
