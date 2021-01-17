import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cartItem, cartPageSelector, removeFromCart, updateCartItem} from "features/cart/cartSlice"

interface cartItemProps{
        item: cartItem
}

const CartItem = ({ item }: cartItemProps) => {

                const dispatch = useDispatch();
                const range = [...Array(item.quantity + 1).keys()]
                const availableQuantities = range.map((i) => 
                        <option value={i} key={i}>{i}</option>
                )

        const handleQuantity = (event: any) => {
                event.preventDefault();
                dispatch(updateCartItem(item))
        }

        const handleClick = (event: any) => {
                event.preventDefault();
                dispatch(removeFromCart(item))
        }

        return (
                <li className={"cartItem"}>
                        <div className={"picture"}>
                                <img src={item.url} alt={"item"}/>
                         </div>
                        <div className={"name"}>{item.name}</div>
                        <button className={"remove"} onClick={handleClick}>remove</button>
                        <select name="quantity" id="quantity" value={item.id} onChange={handleQuantity}>
                                {availableQuantities}
                        </select>
                        <div className={"price"}>{item.price * item.quantity}</div>
               </li>
      )
}

const CartPage = () => {
        const cartItems = useSelector(cartPageSelector);
        const history = useHistory();

        const handleSubmit = () => {
                history.push('./bill');
        }

        if (cartItems.length === 0){
                return (<h3> cart is empty </h3>)
        }

        const rendered_list = cartItems.map((item) =>
                <CartItem item={item} key={item.id}/>
        )
        console.log("cart", cartItems)
        return (
                <div className="cartPage">
               <ul className="cartItems">{rendered_list}</ul>
                <button type="submit" id="checkout" className="checkout" onSubmit={handleSubmit}>
                        CHECKOUT
                </button>
                </div>
        )
}

export default CartPage
