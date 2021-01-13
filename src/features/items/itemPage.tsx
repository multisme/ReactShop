import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { RootState } from "app/rootReducer";
import {itemData} from "features/item/itemSlice";
import {itemPageSelector} from "features/items/itemsSlice";
import {addToCart} from "features/cart/cartSlice";

import { useFormFields } from "utils/utils";

interface productPageParams{
        id: string
}

const ItemPage = ()=>{
        const {id}  = useParams<productPageParams>();
        const [fields, handleFieldChange] = useFormFields({
                quantity: 0
        });
        const dispatch = useDispatch();
        const [item] = useSelector((state) =>itemPageSelector(state, id));
 
        if (id == undefined || item == undefined){
                return (
                <h3>Error</h3>
                );
        }
       
        console.log(item);
        const handleClick = (e: any) => {
                e.preventDefault();
                console.log("BUY");
        }
        
        const handleSubmit = (e: any) => {
                e.preventDefault();
                dispatch(addToCart({
                        id: parseInt(id),
                        quantity: fields.quantity,
                        price: item.price}));
        }
        
        const range = [...Array(item.quantity + 1).keys()]
        const availableQuantities = range.map((i) => 
                <option value={i}>{i}</option>
        )
 
        return (
        <div className="itemPage flex-centered">
                <div className="panel left flex-centered">
                <div className="mainImage">
                        <img src="https://placekitten.com/g/200/300" />
                </div>
                </div>
                <div className="panel right">
                        <div className="info">
                                <div className="name">
                                {item.name}
                                </div>
                                <div className="details">
                                {item.details}
                                </div>
                        </div>
                <form className="itemForm" onSubmit={handleSubmit}>
                <fieldset>
                <label>Quantities: </label>
                <select id="quantity" onChange={handleFieldChange}>
                        {availableQuantities}
                </select>
                </fieldset>
                <fieldset>
                <button id="buy" className="buy" onClick={handleSubmit}>
                        addToCart
                </button>
                <button id="buy" className="checkout" onClick={handleSubmit}>
                        Checkout
                </button>
                </fieldset>
                </form>
                </div>
        </div>
        )
}
export default ItemPage;
