import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { emptyCart } from "features/cart/cartSlice";

const ThankForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart);
  });
  setTimeout(() => {
    history.push("./");
  }, 5000);
  return (
    <div className="rectangle">
      <h3>Thank You</h3>
    </div>
  );
};

export default ThankForm;
