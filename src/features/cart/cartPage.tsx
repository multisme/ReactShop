import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItem,
  cartPageSelector,
  cartPriceSelector,
  removeFromCart,
  updateCartItem,
} from "features/cart/cartSlice";
import {itemSelector} from "features/items/itemsSlice";

interface cartItemProps {
  cart_item: cartItem;
}

const CartItem = ({ cart_item }: cartItemProps) => {
  const [price, setPrice] = useState(cart_item.quantity * cart_item.price);
  const [quantity, setQuantity] = useState(cart_item.quantity);
  const dispatch = useDispatch();
  const [item] = useSelector(
        (state) => itemSelector(state, cart_item.id.toString())
  );
 
  if (item === undefined)
          return(<h3>Loading</h3>);
 
  const range = [...Array(item.quantity + 1).keys()];
  const availableQuantities = range.map((i) => (
    <option value={i} key={i}>
      {i}
    </option>
  ));

  const handleQuantity = (event: any) => {
    event.preventDefault();
    const new_quantity = parseInt(event.currentTarget.value);
    setQuantity(new_quantity);
    setPrice(item.price * new_quantity);
    dispatch(updateCartItem({id: item.id, quantity: new_quantity}))
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    dispatch(removeFromCart({id: item.id}));
  };

  return (
    <li className={"cartItem"}>
      <div className={"picture"}>
        <img src={item.url} alt={"item"} />
      </div>
      <div className={"cartItemHeader flex-betweened"}>
        <div className={"name"}>{item.name}</div>
        <div className={"remove"} onClick={handleClick}>
          remove
        </div>
      </div>
      <div className={"cartItemBody flex-betweened"}>
        <div className={"details"}></div>
        <div className={"priceCalculator"}>
          <select
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={handleQuantity}
          >
            {availableQuantities}
          </select>
          <div className={"price"}>{price}</div>
        </div>
      </div>
    </li>
  );
};

const CartPage = () => {
  const cartItems = useSelector(cartPageSelector);
  const total = useSelector(cartPriceSelector);

  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push("/bill");
  };

  if (cartItems.length === 0) {
    return <h3> cart is empty </h3>;
  }

  const rendered_list = cartItems.map((cart_item) => {
    return (
        <CartItem cart_item={cart_item} key={cart_item.id} />
    )
  });
  return (
    <div className="cartPage flex-centered">
      <ul className="cartItems">{rendered_list}</ul>
      <div className="cartTotal">{total}</div>
      <button
        type="submit"
        id="checkout"
        className="checkout"
        onClick={handleSubmit}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default CartPage;
