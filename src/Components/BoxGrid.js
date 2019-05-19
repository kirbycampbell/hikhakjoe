import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import { types } from "../context/reducers";
import InnerBoxes from "./InnerBoxes";
import { WinnerPerson, OverallWinner } from "./Winners";
import * as Methods from "./methods";
import * as ai from "./aiMethods";
import useInterval from "./useInterval";
import { MoveHard } from "./aiMethodsHard";

const BoxGrid = props => {
  // ::::::::::: HOOKS SET UP AREA :::::::::::::::::::::::::::::::::::::::::::
  const { state, dispatch } = useContext(StoreContext);
  const [userMove, setUserMove] = useState(false);
  const [gameType, setGameType] = useState("");
  const [endGameTimer, setEndGameTimer] = useState(false);

  useEffect(() => {
    if (props.type === "zero" && gameType !== "gameOver") {
      setUserMove(true);
      setEndGameTimer(false);
    }
  }, [gameType, props.type]);

  useInterval(() => {
    if (userMove && props.type === "zero" && !checkForGameOver()) {
      setUserMove(false);
      makeAIMove();
      setEndGameTimer(false);
    } else if (userMove && props.type === "single" && !checkForGameOver()) {
      makeAIMove();
      setEndGameTimer(false);
      setUserMove(false);
    } else if (userMove && props.type === "duel" && !checkForGameOver()) {
      setEndGameTimer(false);
      setUserMove(false);
    } else if (checkForGameOver()) {
      checkForGameOver();
    }
  }, 500);

  //totalSpaces is assigned the array of player placements to be used as a .length useEffect check
  const totalSpaces = state.gameBoard.filter(space => space !== "");

  useInterval(
    () => {
      if (endGameTimer) {
        setGameType("gameOver");
        setUserMove(false);
        setEndGameTimer(false);
        dispatch({
          type: types.GAME_OVER
        });
      }
    },
    1000,
    [endGameTimer]
  );

  const checkForGameOver = () => {
    if (totalSpaces.length >= 16) {
      setEndGameTimer(true);
      return true;
    } else {
      return false;
    }
  };

  const makeAIMove = () => {
    let aiMove;
    if (state.difficulty === "easy") {
      aiMove = ai.Move(state.gameBoard, state.player);
    } else if (state.difficulty === "hard") {
      aiMove = MoveHard(state.gameBoard, state.player);
    }

    dispatch({
      type: types.MAKE_AI_MOVE,
      payload: {
        aiData: aiMove
      }
    });
    setUserMove(true);
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
  };

  const handleNewGame = () => {
    setGameType("");
    setUserMove(false);
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
            <div className="new-game" onClick={props.resetGame}>
              Reset
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
          <div className="end-button-container">
            <div className="new-game" onClick={props.resetGame}>
              Reset
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxGrid;
