import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {
        useHistory,
        useParams
 } from "react-router-dom";

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
        const history = useHistory();
        if (id === undefined || item === undefined){
                return (
                <h3>Error</h3>
                );
        }
       
        const handleSubmit = (e: any) => {
                e.preventDefault();
                if (fields.quantity.content > 0){
                        dispatch(addToCart({
                                        id: parseInt(id),
                                        quantity: fields.quantity.content,
                                        price: item.price,
                                        url: item.url,
                                        name: item.name
                                })
                        );
                } else {
                        alert("Please choose something before checkout");
                }
        }
        
        const range = [...Array(item.quantity + 1).keys()]
        const availableQuantities = range.map((i) => 
                <option value={i} key={i}>{i}</option>
        )
 
        return (
        <div className="itemPage flex-centered">
                <div className="panel left flex-centered">
                <div className="mainImage">
                <img src={item.url} alt={item.name}/>;
                </div>
                </div>
                <div className="panel right">
                        <div className="info">
                                <div className="name">
                                {item.name}
                                </div>
                                <div className="price">
                                {item.price}€
                                </div>
                                <div className="details">
                                {item.details}
                                </div>
                        </div>
                <form className="itemForm" onSubmit={handleSubmit}>
                <fieldset className="quantity">
                <select name="quantity" id="quantity" onChange={handleFieldChange}>
                        {availableQuantities}
                </select>
                </fieldset>
                <fieldset className="button">
                <Link to="/">
                <button id="goBack" className="buy" >
                        GO BACK
                </button>
                </Link>
                <button type="submit" id="checkout" className="checkout">
                        ADD TO CART
                </button>
                </fieldset>
                </form>
                </div>
        </div>
        )
}
export default ItemPage;
