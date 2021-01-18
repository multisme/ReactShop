import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItem,
  cartPageSelector,
  cartPriceSelector,
  removeFromCart,
  updateCartItem,
} from "features/cart/cartSlice";
import { itemSelector } from "features/items/itemsSlice";

interface cartItemProps {
  cart_item: cartItem;
}

const CartItem = ({ cart_item }: cartItemProps) => {
  const [totalPrice, setTotalPrice] = useState(
    cart_item.quantity * cart_item.price
  );
  const [quantity, setQuantity] = useState(cart_item.quantity);
  const dispatch = useDispatch();
  const [item] = useSelector((state) =>
    itemSelector(state, cart_item.id.toString())
  );

  if (item === undefined) return <h3>Loading</h3>;

  const range = [...Array(item.quantity + 1).keys()];
  const availableQuantities = range.map((i) => (
    <option value={i} key={i}>
      {i}
    </option>
  ));

  const handleQuantity = (event: any) => {
    event.preventDefault();
    const new_quantity = parseInt(event.currentTarget.value);
    event.target.value = new_quantity;
    setQuantity(new_quantity);
    setTotalPrice(item.price * new_quantity);
    dispatch(updateCartItem({ id: item.id, quantity: new_quantity }));
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    dispatch(removeFromCart({ id: item.id }));
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
        <div className={"priceCalculator flex-centered"}>
          <select
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={handleQuantity}
          >
            {availableQuantities}
          </select>
          <div className={"price"}>
            <span>X</span>
            <span>{item.price}</span>
          </div>
          <div className={"totalPrice"}>
            <span>{totalPrice}</span>€
          </div>
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
    return <CartItem cart_item={cart_item} key={cart_item.id} />;
  });
  return (
    <div className="cartPage flex-centered">
      <ul className="cartItems">{rendered_list}</ul>
      <div className="cartTotal flex-betweened">
        <span>Total</span>
        <span>{total}€</span>
      </div>
      <fieldset className="button">
        <Link to={"/"}>
         <button>GO BACK</button>
        </Link>
        <button
          type="submit"
          id="checkout"
          className="checkout"
          onClick={handleSubmit}
        >
          CHECKOUT
        </button>
      </fieldset>
    </div>
  );
};

export default CartPage;
