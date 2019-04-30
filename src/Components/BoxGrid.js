import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import { types } from "../context/reducers";
import InnerBoxes from "./InnerBoxes";
import { WinnerPerson, OverallWinner } from "./Winners";
import * as Methods from "./methods";

const BoxGrid = () => {
  // ::::::::::: HOOKS SET UP AREA :::::::::::::::::::::::::::::::::::::::::::
  const { state, dispatch } = useContext(StoreContext);

  //totalSpaces is assigned the array of player placements to be used as a .length useEffect check
  const totalSpaces = state.gameBoard.filter(space => space !== "");

  const checkForGameOver = () => {
    if (totalSpaces.length >= 15) {
      dispatch({
        type: types.GAME_OVER
      });
    }
  };

  const setPoints = () => {};

  // :::::::::::::: When a user clicks a box :::::::::::::::::::::::::
  const handleBoxClick = i => {
    if (state.gameBoard[i] === "") {
      const newData = Methods.makeMove(i, state.gameBoard, state.player);
      //setPoints();
      //checkForGameOver();
      console.log(newData);
      dispatch({
        type: types.MAKE_MOVE_A,
        payload: { position: i }
      });
    } else {
      console.log("Invalid MOVE. GO AGAIN!");
    }
  };

  const handleNewGame = () => {
    dispatch({ type: types.CONTINUE });
  };

  const handleEndGame = () => {
    dispatch({ type: types.FINISH });
  };

  return (
    <div className="box-container">
      {!state.winner && !state.endGame && (
        <InnerBoxes handleBoxClick={handleBoxClick} board={state.gameBoard} />
      )}{" "}
      {state.winner && (
        <div className="game-over-container">
          <div className="points-game-over">
            <div className="point-title">
              <WinnerPerson />
            </div>
          </div>
          <div className="end-button-container">
            <div className="new-game" onClick={handleNewGame}>
              Continue
            </div>
            <div className="new-game" onClick={handleEndGame}>
              End
            </div>
          </div>
        </div>
      )}
      {state.endGame && (
        <div className="game-over-container">
          <div className="points-game-over">
            <div className="point-title">
              <OverallWinner />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxGrid;
