import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { cartLengthSelector } from "features/cart/cartSlice";
import ShowcaseTitle from "features/showcase/showcaseTitle";

const Header = () => {
  const cart_quantity = useSelector(cartLengthSelector);
  return (
    <header className={"flex-betweened"}>
      <Link to="/" className="header">
        <ShowcaseTitle />
      </Link>
      <Link to="/cart" className="cart">
        <div>
          <span>cart</span>
          <span>x</span>
          <span>{cart_quantity}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
