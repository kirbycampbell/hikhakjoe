import React, { useContext } from "react";
import { StoreContext, StoreProvider } from "./context/StoreContext";

import "./App.css";
import BoxGrid from "./Components/BoxGrid";

function App() {
  const { state, dispatch, actions } = useContext(StoreContext);

  return (
    <div className="App">
      <div className="title">Hik Hak Joe</div>
      <BoxGrid />
    </div>
  );
}

export default App;
