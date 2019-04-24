import React, { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import { types } from "./context/reducers";

import "./App.css";
import BoxGrid from "./Components/BoxGrid";

function App() {
  const { state, dispatch } = useContext(StoreContext);
  const resetGame = () => {
    dispatch({ type: types.RESET_GAME });
  };
  return (
    <div className="App">
      <div className="title">Hik Hak Joe</div>
      <div>
        Game Points: <br />
        P1 Points: {state.p1Points} ---- P2 Points: {state.p2Points}
      </div>
      <BoxGrid />
      <div>
        Overall Points: <br />
        P1 Overall Points: {state.p1AllPoints} ------ P2 Overall Points:
        {state.p2AllPoints}
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
