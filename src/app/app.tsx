import {Dispatch, useEffect} from "react";
import {useDispatch} from "react-redux";
import { fetchItems } from "features/items/itemsSlice";

import {
        BrowserRouter as Router,
        Route,
        Switch
} from "react-router-dom";

import Home from "features/home/home";
import Item from "features/items/itemPage";
import ShipForm from "features/buy/ShippingForm";
import BillForm from "features/buy/BillingForm";
import PayForm from "features/buy/PayingForm";
import ThankForm from "features/buy/ThankForm";

import "app/app.css";

const App = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
  <Router>
    <div className="App">
       <Switch> 
        <Route path="/products/:id" component={Item}/>
        <Route exact path="/ship" component={ShipForm} />
        <Route exact path="/bill" component={BillForm} />
        <Route exaxt path="/pay" component={PayForm} />
        <Route exact path="/thank" component={ThankForm} />
        <Route path="/" component={Home}/>
       </Switch> 
    </div>
    </Router>
  );
};

export default App;
