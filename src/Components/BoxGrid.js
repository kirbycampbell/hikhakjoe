import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import { types } from "../context/reducers";
import InnerBoxes from "./InnerBoxes";
import { winningCombos } from "../Data/WinCombos";

// const winningCombos = [
//   [0, 1, 2],
//   [1, 2, 3],
//   [3, 6, 9],
//   [3, 7, 11],
//   [5, 6, 7],
//   [4, 5, 6],
//   [8, 9, 10],
//   [9, 10, 11],
//   [13, 14, 15],
//   [5, 10, 15],
//   [0, 4, 8],
//   [0, 5, 10],
//   [4, 8, 12],
//   [12, 13, 14],
//   [6, 9, 12],
//   [7, 11, 15],
//   [1, 6, 11],
//   [2, 5, 8],
//   [4, 9, 14],
//   [6, 10, 14],
//   [5, 9, 13],
//   [1, 5, 9],
//   [2, 6, 10],
//   [7, 10, 13]
// ];

const BoxGrid = () => {
  // ::::::::::: HOOKS SET UP AREA :::::::::::::::::::::::::::::::::::::::::::
  const { state, dispatch } = useContext(StoreContext);
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState(1);

  const checkForGameOver = () => {
    if (totalSpaces.length >= 15) {
      dispatch({
        type: types.GAME_OVER
      });
    }
  };

  // :::::::::::: Update Component's State when Global State Changes :::::::::::::::
  useEffect(() => {
    //console.log(state);
    setBoard(state.gameBoard);
  }, [state]);

  // ::::::::::::: Sets up the variables ::::::::::::::::::::::::::::::::::::::
  let player;
  let xWins = 0.0;
  let oWins = 0.0;

  // :::::::::::::::::::: CHECK FOR WIN :::::::::::::::::::::::::::::::::::::::
  const checkForWin = () => {
    let allWins = [xWins, oWins]; // Array of player's win count in this game
    winningCombos.filter(combo => {
      if (
        // If combo[0] on the board is equal to combo[1] and combo[2]
        state.gameBoard[combo[0]] === state.gameBoard[combo[1]] &&
        state.gameBoard[combo[1]] === state.gameBoard[combo[2]] &&
        state.gameBoard[combo[0]] !== ""
      ) {
        //setWinner("We've Got A Winner");
        if (state.gameBoard[combo[0]] === "x") {
          xWins++; // Add to the xWins array
        }
        if (state.gameBoard[combo[0]] === "o") {
          oWins++; // Add to the oWins array
        }
        allWins = [xWins, oWins]; // Assigns allWins to total number of wins for each player
      }

      return [];
    });
    //console.log(allWins);
    dispatch({
      // Send number of wins to global state for points
      type: types.POINTS,
      payload: { amount: allWins }
    });
    checkForGameOver();
  };

  // totalSpaces is assigned the array of player placements to be used as a .length useEffect check
  const totalSpaces = state.gameBoard.filter(space => space !== "");

  // :::::::::::::: When a user clicks a box :::::::::::::::::::::::::
  const handleBoxClick = i => {
    if (state.gameType === "duel") {
      if (state.gameBoard[i] === "") {
        setTurn(turn + 1);

        if (state.playerTurn % 2 === 0) {
          player = "o";
        } else {
          player = "x";
        }
        dispatch({
          type: types.MAKE_MOVE_A,
          payload: { move: player, position: i }
        });
        checkForWin();
      } else {
        console.log("Invalid MOVE. GO AGAIN!");
      }
    } else if (state.gameType === "single") {
      if (state.gameBoard[i] === "") {
        setTurn(turn + 1);

        if (state.playerTurn % 2 === 0) {
          player = "o";
        } else {
          player = "x";
        }
        dispatch({
          type: types.MAKE_MOVE_A,
          payload: { move: player, position: i }
        });
        checkForWin();
      } else {
        console.log("Invalid MOVE. GO AGAIN!");
      }
    } else if (state.gameType === "zero") {
      console.log("Zero Called... TODO");
    }
  };

  const handleNewGame = () => {
    dispatch({ type: types.CONTINUE });
  };

  const handleEndGame = () => {
    dispatch({ type: types.FINISH });
  };

  const WinnerPerson = () => {
    if (state.p1Points > state.p2Points) {
      return <div>Winner is Player 1!</div>;
    } else if (state.p1Points < state.p2Points) {
      return <div>Winner is Player 2!</div>;
    } else {
      return <div>TIE GAME!</div>;
    }
  };

  const OverallWinner = () => {
    if (state.p1AllPoints > state.p2AllPoints) {
      return <div>Winner of all games is Player 1!</div>;
    } else if (state.p1AllPoints < state.p2AllPoints) {
      return <div>Winner of all games is Player 2!</div>;
    } else {
      return <div>TIE META-GAME! WOW!!!</div>;
    }
  };

  return (
    <div className="box-container">
      {!state.winner && !state.endGame && (
        <InnerBoxes handleBoxClick={handleBoxClick} board={board} />
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
