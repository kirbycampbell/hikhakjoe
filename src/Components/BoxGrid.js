import React, { useState, useContext } from "react";
import { StoreContext, StoreProvider } from "../context/StoreContext";
import "../CSS/BoxGrid.css";

const BoxGrid = () => {
  const { state, dispatch, actions } = useContext(StoreContext);
  const handleBoxClick = i => {
    console.log(i);
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
              {state.gameBoard[0]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(1)}>
              {state.gameBoard[1]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(2)}>
              {state.gameBoard[2]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(3)}>
              {state.gameBoard[3]}
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div
              className="row-item row-itemL"
              onClick={() => handleBoxClick(4)}
            >
              {state.gameBoard[4]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(5)}>
              {state.gameBoard[5]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(6)}>
              {state.gameBoard[6]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(7)}>
              {state.gameBoard[7]}
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div
              className="row-item row-itemL"
              onClick={() => handleBoxClick(9)}
            >
              {" "}
              row item 1
            </div>
            <div className="row-item" onClick={() => handleBoxClick(10)}>
              {" "}
              row item 2
            </div>
            <div className="row-item" onClick={() => handleBoxClick(11)}>
              {" "}
              row item 3
            </div>
            <div className="row-item" onClick={() => handleBoxClick(12)}>
              {" "}
              row item 4
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div
              className="row-item row-itemL row-itemB"
              onClick={() => handleBoxClick(13)}
            >
              {" "}
              row item 1
            </div>
            <div
              className="row-item row-itemB"
              onClick={() => handleBoxClick(14)}
            >
              {" "}
              row item 2
            </div>
            <div
              className="row-item row-itemB"
              onClick={() => handleBoxClick(15)}
            >
              {" "}
              row item 3
            </div>
            <div
              className="row-item row-itemB"
              onClick={() => handleBoxClick(16)}
            >
              {" "}
              row item 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxGrid;
