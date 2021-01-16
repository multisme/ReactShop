import {Dispatch, useEffect} from "react";
import {useDispatch} from "react-redux";
import { fetchItems } from "features/items/itemsSlice";
import { initCart } from "features/cart/cartSlice";

import {
        BrowserRouter as Router,
        Route,
        Switch
} from "react-router-dom";

import Home from "features/home/home";
import Item from "features/items/itemPage";
import ShipPage from "features/buy/ShippingForm";
import BillPage from "features/buy/BillingForm";
import PayPage from "features/buy/PayingForm";
import ThankPage from "features/buy/ThankForm";
import CartPage from "features/cart/cartPage";

import "app/app.css";

const App = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(initCart());
  }, [dispatch]);

  return (
  <Router>
    <div className="App">
       <Switch> 
        <Route path="/products/:id" component={Item}/>
        <Route exact path="/ship" component={ShipPage} />
        <Route exact path="/bill" component={BillPage} />
        <Route exaxt path="/pay" component={PayPage} />
        <Route exact path="/thank" component={ThankPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="/" component={Home}/>
       </Switch> 
    </div>
    </Router>
  );
};

export default App;
