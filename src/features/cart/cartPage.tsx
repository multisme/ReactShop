import {useDispatch, useSelector} from "react-redux";
import {cartPageSelector} from "features/cart/cartSlice"

const CartPage = () => {
        const cartItems = useSelector(cartPageSelector);

        if (cartItems.length == 0){
                return (<h3> cart is empty </h3>)
        }
        const rendered_list = cartItems.map((item) => 
                <li className={"cartItem"} key={item.id}>
                         {item.id}
                </li>
        )
        return (
               <ul>{rendered_list}</ul>
        )
}

export default CartPage
