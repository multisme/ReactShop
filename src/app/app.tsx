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
import {
        BillPage,
        ShipPage,
        PayPage,
        ThankPage
        } from "features/buy/BuyPage";

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
        <Route exact path="/ship" component={ShipPage} />
        <Route exact path="/bill" component={BillPage} />
        <Route exaxt path="/pay" component={PayPage} />
        <Route exact path="/thank" component={ThankPage} />
        <Route path="/" component={Home}/>
       </Switch> 
    </div>
    </Router>
  );
};

export default App;
