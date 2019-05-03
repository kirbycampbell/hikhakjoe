import React, { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import { types } from "./context/reducers";
import "./App.css";
import BoxGrid from "./Components/BoxGrid";
import GamePoints from "./Components/GamePoints";
import OverallPoints from "./Components/OverallPoints";
import GameSelect from "./Components/GameSelect";

function App() {
  const { state, dispatch } = useContext(StoreContext);
  const resetGame = () => {
    dispatch({ type: types.RESET_GAME });
  };
  return (
    <div className="App">
      <div className="title">Hik Hak Joe</div>
      {/*:::::::::::: HOME GAME TYPE SELECT SECTION :::::::::::::::::::::::::: */}
      {state.gameType === "ask" && <GameSelect />}

      {/*:::::::::::: MAIN GAME SECTION :::::::::::::::::::::::::: */}
      {state.gameType !== "ask" && (
        <React.Fragment>
          <GamePoints />
          <div className="player-turn">{state.player}'s Turn</div>
          <BoxGrid type={state.gameType} />
          <OverallPoints
            p1Points={state.p1AllPoints}
            p2Points={state.p2AllPoints}
          />
          <button className="reset-btn" onClick={resetGame}>
            Reset
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
