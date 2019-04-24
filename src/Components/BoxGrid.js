import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import { types } from "../context/reducers";

const winningCombos = [
  [0, 1, 2],
  [1, 2, 3],
  [3, 6, 9],
  [3, 7, 11],
  [5, 6, 7],
  [4, 5, 6],
  [8, 9, 10],
  [9, 10, 11],
  [13, 14, 15],
  [5, 10, 15],
  [0, 4, 8],
  [0, 5, 10],
  [4, 8, 12],
  [12, 13, 14],
  [6, 9, 12],
  [7, 11, 15],
  [1, 6, 11],
  [2, 5, 8],
  [4, 9, 14],
  [6, 10, 14],
  [5, 9, 13],
  [1, 5, 9],
  [2, 6, 10],
  [7, 10, 13]
];

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
    //console.log(i);
    if (state.gameBoard[i] === "") {
      setTurn(turn + 1);

      if (turn % 2 === 0) {
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
  };

  return (
    <div className="box-container">
      {!state.winner && (
        <div className="game-box">
          <div className="row-container">
            <div className="row">
              <div
                className="row-item row-itemL"
                onClick={() => handleBoxClick(0)}
              >
                {board[0] === "x" && <i className="fas fa-times game-piece" />}
                {board[0] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(1)}>
                {board[1] === "x" && <i className="fas fa-times game-piece" />}
                {board[1] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(2)}>
                {board[2] === "x" && <i className="fas fa-times game-piece" />}
                {board[2] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(3)}>
                {board[3] === "x" && <i className="fas fa-times game-piece" />}
                {board[3] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
            </div>
          </div>
          <div className="row-container">
            <div className="row">
              <div
                className="row-item row-itemL"
                onClick={() => handleBoxClick(4)}
              >
                {board[4] === "x" && <i className="fas fa-times game-piece" />}
                {board[4] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(5)}>
                {board[5] === "x" && <i className="fas fa-times game-piece" />}
                {board[5] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(6)}>
                {board[6] === "x" && <i className="fas fa-times game-piece" />}
                {board[6] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(7)}>
                {board[7] === "x" && <i className="fas fa-times game-piece" />}
                {board[7] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
            </div>
          </div>
          <div className="row-container">
            <div className="row">
              <div
                className="row-item row-itemL"
                onClick={() => handleBoxClick(8)}
              >
                {board[8] === "x" && <i className="fas fa-times game-piece" />}
                {board[8] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(9)}>
                {board[9] === "x" && <i className="fas fa-times game-piece" />}
                {board[9] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(10)}>
                {board[10] === "x" && <i className="fas fa-times game-piece" />}
                {board[10] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div className="row-item" onClick={() => handleBoxClick(11)}>
                {board[11] === "x" && <i className="fas fa-times game-piece" />}
                {board[11] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
            </div>
          </div>
          <div className="row-container">
            <div className="row">
              <div
                className="row-item row-itemL row-itemB"
                onClick={() => handleBoxClick(12)}
              >
                {board[12] === "x" && <i className="fas fa-times game-piece" />}
                {board[12] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div
                className="row-item row-itemB"
                onClick={() => handleBoxClick(13)}
              >
                {board[13] === "x" && <i className="fas fa-times game-piece" />}
                {board[13] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div
                className="row-item row-itemB"
                onClick={() => handleBoxClick(14)}
              >
                {board[14] === "x" && <i className="fas fa-times game-piece" />}
                {board[14] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
              <div
                className="row-item row-itemB"
                onClick={() => handleBoxClick(15)}
              >
                {board[15] === "x" && <i className="fas fa-times game-piece" />}
                {board[15] === "o" && (
                  <i className="far fa-dot-circle game-piece" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}{" "}
      {state.winner && <div>END OF GAME - PRESS RESET</div>}
    </div>
  );
};

export default BoxGrid;
