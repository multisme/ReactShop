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
import Buy from "features/buy/BuyPage";

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
        <Route exact path="/" component={Home}/>
        <Route path="/products/:id" component={Item}/>
        <Route Buy="/buy" component={Buy} />
       </Switch> 
    </div>
    </Router>
  );
};

export default App;
