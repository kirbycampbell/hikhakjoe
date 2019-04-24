import React, { useState, useContext, useEffect } from "react";
import { StoreContext, StoreProvider } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import { types } from "../context/reducers";

const BoxGrid = () => {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [turn, setTurn] = useState(1);
  let player;
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
    } else {
      console.log("Invalid MOVE SISTERSON");
    }

    // dispatch({ type: types.ADD_TO_TECH_LIST, payload: newTech });
  };

  return (
    <div className="box-container">
      <div className="game-box">
        <div className="row-container">
          <div className="row">
            <div
              className="row-item row-itemL"
              onClick={() => handleBoxClick(0)}
            >
              {state.gameBoard[0] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[0] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(1)}>
              {state.gameBoard[1] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[1] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(2)}>
              {state.gameBoard[2] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[2] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(3)}>
              {state.gameBoard[3] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[3] === "o" && (
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
              {state.gameBoard[4] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[4] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(5)}>
              {state.gameBoard[5] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[5] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(6)}>
              {state.gameBoard[6] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[6] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(7)}>
              {state.gameBoard[7] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[7] === "o" && (
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
              {state.gameBoard[8] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[8] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(9)}>
              {state.gameBoard[9] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[9] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(10)}>
              {state.gameBoard[10] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[10] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(11)}>
              {state.gameBoard[11] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[11] === "o" && (
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
              {state.gameBoard[12] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[12] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div
              className="row-item row-itemB"
              onClick={() => handleBoxClick(13)}
            >
              {state.gameBoard[13] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[13] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div
              className="row-item row-itemB"
              onClick={() => handleBoxClick(14)}
            >
              {state.gameBoard[14] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[14] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
            <div
              className="row-item row-itemB"
              onClick={() => handleBoxClick(15)}
            >
              {state.gameBoard[15] === "x" && (
                <i className="fas fa-times game-piece" />
              )}
              {state.gameBoard[15] === "o" && (
                <i className="far fa-dot-circle game-piece" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxGrid;
