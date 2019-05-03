import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import "../CSS/GameSelect.css";
import { types } from "../context/reducers";

const GameSelect = () => {
  const { dispatch } = useContext(StoreContext);

  const handleGameType = selection => {
    dispatch({ type: types.GAME_TYPE, payload: { type_of_game: selection } });
  };
  return (
    <div className="main-select-container">
      <div className="title-select">Select Type of Game: </div>
      <div className="game-select-container">
        <button onClick={() => handleGameType("zero")} className="sel-btn">
          <div className="btn-text">0 Player Game</div>
        </button>
        <button onClick={() => handleGameType("single")} className="sel-btn">
          <div className="btn-text">1 Player Game</div>
        </button>
        <button onClick={() => handleGameType("duel")} className="sel-btn">
          <div className="btn-text">2 Player Game</div>
        </button>
      </div>
    </div>
  );
};

export default GameSelect;
