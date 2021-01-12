import {
        BrowserRouter as Router,
        Route,
        Switch
} from "react-router-dom";

import Home from "features/home/home";
import ItemPage from "features/items/itemPage";

import "./app.css";

const App = () => {
  return (
  <Router>
    <div className="App">
       <Switch> 
        <Route exact path="/" component={Home}/>
        <Route path="/products/:ItemId" component={ItemPage}/>
       </Switch> 
    </div>
    </Router>
  );
};

export default App;
