import {
        BrowserRouter as Router,
        Route,
        Switch
} from "react-router-dom";

import Home from "features/home/home";
import Item from "features/items/itemPage";
import Buy from "features/buy/BuyPage";

import "./app.css";

const App = () => {
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
