import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import { types } from "../context/reducers";
import InnerBoxes from "./InnerBoxes";
import { WinnerPerson, OverallWinner } from "./Winners";
import * as Methods from "./methods";
import * as ai from "./aiMethods";
import useInterval from "./useInterval";

const BoxGrid = () => {
  // ::::::::::: HOOKS SET UP AREA :::::::::::::::::::::::::::::::::::::::::::
  const { state, dispatch } = useContext(StoreContext);
  const [userMove, setUserMove] = useState(false);

  useInterval(() => {
    if (userMove) {
      setUserMove(false);
      makeAIMove();
    }
  }, 1000);
  //totalSpaces is assigned the array of player placements to be used as a .length useEffect check
  const totalSpaces = state.gameBoard.filter(space => space !== "");

  const checkForGameOver = () => {
    if (totalSpaces.length >= 15) {
      dispatch({
        type: types.GAME_OVER
      });
    }
  };

  const makeAIMove = () => {
    let aiMove = ai.Move(state.gameBoard, state.player);
    dispatch({
      type: types.MAKE_AI_MOVE,
      payload: {
        aiData: aiMove
      }
    });
  };

  // :::::::::::::: When a user clicks a box :::::::::::::::::::::::::
  const handleBoxClick = i => {
    if (state.gameType === "duel") {
      if (state.gameBoard[i] === "") {
        const newData = Methods.makeMove(i, state.gameBoard, state.player);
        dispatch({
          type: types.MAKE_MOVE_A,
          payload: { gameData: newData }
        });
      } else {
        console.log("Invalid MOVE. GO AGAIN!");
      }
    } else if (state.gameType === "single") {
      if (state.player === "x") {
        if (state.gameBoard[i] === "") {
          const newData = Methods.makeMove(i, state.gameBoard, state.player);
          dispatch({
            type: types.MAKE_MOVE_B,
            payload: { gameData: newData }
          });
          setUserMove(true);
        } else {
          console.log("Invalid MOVE. GO AGAIN!");
        }
      } else if (state.player === "o") {
        console.log("not your turn");
      }
    }
    checkForGameOver();
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
