import React from "react";
import { BrowserRouter as Router} from 'react-router-dom';


import Home from "features/home/home";

import "./app.css";

const App = () => {
  return (
    <Router >
    <div className="App">
      <header className="App-header"></header>
      <Home />
    </div>
    </Router>
  );
};

export default App;
