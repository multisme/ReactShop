import {useDispatch, useSelector} from "react-redux";
import {addToCart, cartPageSelector} from "features/cart/cartSlice"

const CartPage = () => {
        const cartItems = useSelector(cartPageSelector);
        const dispatch = useDispatch()

        if (cartItems.length == 0){
                return (<h3> cart is empty </h3>)
        }

        const handleQuantity = (event: any) => {
                event.preventDefault();
                const id = event.target.value
                const item = cartItems.find(item => item.id === id)
                if (item != undefined){
                        dispatch(addToCart(item))
                }
        }

        const rendered_list = cartItems.map((item) =>{

                const range = [...Array(item.quantity + 1).keys()]
                const availableQuantities = range.map((i) => 
                <option value={i} key={i}>{i}</option>
        )
        return (
                <li className={"cartItem"} key={item.id}>
                        <div className={"picture"}>
                                <img src={item.url} />
                         </div>
                        <div className={"name"}>{item.name}</div>
                <select name="quantity" id="quantity" value={item.id} onChange={handleQuantity}>
                        {availableQuantities}
                </select>
                        <div className={"price"}>{item.price * item.quantity}</div>
               </li>
               )

        })
        return (
               <ul className="cartItems">{rendered_list}</ul>
        )
}

export default CartPage
