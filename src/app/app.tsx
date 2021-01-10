import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "features/home/home";

import "./app.css";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header"></header>
      <Home />
    </div>
  );
};

export default App;
