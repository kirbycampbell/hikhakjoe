import React, { useState, useContext, useEffect } from "react";
import { StoreContext, StoreProvider } from "../context/StoreContext";
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
  const { state, dispatch, actions } = useContext(StoreContext);
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState("noone");
  useEffect(() => {
    console.log(state);
    setBoard(state.gameBoard);
  }, [state]);
  let player;

  const checkForWin = () => {
    winningCombos.filter(combo => {
      if (
        state.gameBoard[combo[0]] === state.gameBoard[combo[1]] &&
        state.gameBoard[combo[1]] === state.gameBoard[combo[2]] &&
        state.gameBoard[combo[0]] != ""
      ) {
        //setWinner("We've Got A Winner");
        dispatch({
          type: types.POINTS,
          payload: { amount: 50 }
        });
      }
    });
  };
  // The rendering of the icon state.gameBoard[0] is causing errors currently
  const handleBoxClick = i => {
    console.log(i);
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
      console.log("Invalid MOVE SISTERSON");
    }
  };

  return (
    <div className="box-container">
      {winner === "noone" && (
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
      {/* {winner != "noone" && <div>We've Got A Winner!</div>} */}
    </div>
  );
};

export default BoxGrid;
