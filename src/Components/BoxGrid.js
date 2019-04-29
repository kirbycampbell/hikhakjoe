import React, { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import { types } from "../context/reducers";
import InnerBoxes from "./InnerBoxes";
import { winningCombos } from "../Data/WinCombos";
import { WinnerPerson, OverallWinner } from "./Winners";

const BoxGrid = () => {
  // ::::::::::: HOOKS SET UP AREA :::::::::::::::::::::::::::::::::::::::::::
  const { state, dispatch } = useContext(StoreContext);
  //const [turn, setTurn] = useState(1);

  //totalSpaces is assigned the array of player placements to be used as a .length useEffect check
  const totalSpaces = state.gameBoard.filter(space => space !== "");

  const checkForGameOver = () => {
    if (totalSpaces.length >= 15) {
      dispatch({
        type: types.GAME_OVER
      });
    }
  };

  // ::::::::::::: Sets up the variables ::::::::::::::::::::::::::::::::::::::
  let player;
  let xWins = 0.0;
  let oWins = 0.0;

  // :::::::::::::: When a user clicks a box :::::::::::::::::::::::::
  const handleBoxClick = i => {
    if (state.gameBoard[i] === "") {
      dispatch({
        type: types.MAKE_MOVE_A,
        payload: { position: i }
      });
      checkForGameOver();
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

  // const WinnerPerson = () => {
  //   if (state.p1Points > state.p2Points) {
  //     return <div>Winner is Player 1!</div>;
  //   } else if (state.p1Points < state.p2Points) {
  //     return <div>Winner is Player 2!</div>;
  //   } else {
  //     return <div>TIE GAME!</div>;
  //   }
  // };

  // const OverallWinner = () => {
  //   if (state.p1AllPoints > state.p2AllPoints) {
  //     return <div>Winner of all games is Player 1!</div>;
  //   } else if (state.p1AllPoints < state.p2AllPoints) {
  //     return <div>Winner of all games is Player 2!</div>;
  //   } else {
  //     return <div>TIE META-GAME! WOW!!!</div>;
  //   }
  // };

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
