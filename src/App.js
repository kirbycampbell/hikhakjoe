import React, { useContext } from "react";
import { StoreContext, StoreProvider } from "./context/StoreContext";
import { types } from "./context/reducers";

import "./App.css";
import BoxGrid from "./Components/BoxGrid";

function App() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const resetGame = () => {
    dispatch({ type: types.RESET_GAME });
  };
  return (
    <div className="App">
      <div className="title">Hik Hak Joe</div>
      <BoxGrid />
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
