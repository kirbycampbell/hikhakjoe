import React, { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import { types } from "./context/reducers";
import "./App.css";
import BoxGrid from "./Components/BoxGrid";
import GamePoints from "./Components/GamePoints";
import OverallPoints from "./Components/OverallPoints";

function App() {
  const { state, dispatch } = useContext(StoreContext);
  const resetGame = () => {
    dispatch({ type: types.RESET_GAME });
  };
  return (
    <div className="App">
      <div className="title">Hik Hak Joe</div>
      <GamePoints />
      <BoxGrid />

      <OverallPoints
        p1Points={state.p1AllPoints}
        p2Points={state.p2AllPoints}
      />

      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
