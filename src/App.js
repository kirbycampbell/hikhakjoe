import React, { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import { types } from "./context/reducers";
import "./App.css";
import BoxGrid from "./Components/BoxGrid";
import GamePoints from "./Components/GamePoints";
import OverallPoints from "./Components/OverallPoints";
import GameSelect from "./Components/GameSelect";
import Difficulty from "./Components/Difficulty";

function App() {
  const { state, dispatch } = useContext(StoreContext);
  const resetGame = () => {
    dispatch({ type: types.RESET_GAME });
  };
  return (
    <div className="App">
      <div className="title">Hik Hak Joe</div>
      <div className="App-inner">
        {/*:::::::::::: HOME GAME TYPE SELECT SECTION :::::::::::::::::::::::::: */}
        {state.gameType === "ask" && <GameSelect />}

        {/*:::::::::::: MAIN GAME SECTION :::::::::::::::::::::::::: */}
        {state.gameType !== "ask" && (
          <React.Fragment>
            <GamePoints />
            <Difficulty />
            <BoxGrid type={state.gameType} resetGame={resetGame} />
            <OverallPoints
              p1Points={state.p1AllPoints}
              p2Points={state.p2AllPoints}
            />
          </React.Fragment>
        )}
      </div>
      <div className="footer">Made with Love by Kirby Campbell</div>
    </div>
  );
}

export default App;
