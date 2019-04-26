import React from "react";
import "../CSS/InnerBoxes.css";

const InnerBoxes = props => {
  return (
    <div className="game-box">
      <div className="row-container">
        <div className="row">
          <div
            className="row-item row-itemL"
            onClick={() => props.handleBoxClick(0)}
          >
            {props.board[0] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[0] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(1)}>
            {props.board[1] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[1] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(2)}>
            {props.board[2] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[2] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(3)}>
            {props.board[3] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[3] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
        </div>
      </div>
      <div className="row-container">
        <div className="row">
          <div
            className="row-item row-itemL"
            onClick={() => props.handleBoxClick(4)}
          >
            {props.board[4] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[4] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(5)}>
            {props.board[5] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[5] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(6)}>
            {props.board[6] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[6] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(7)}>
            {props.board[7] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[7] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
        </div>
      </div>
      <div className="row-container">
        <div className="row">
          <div
            className="row-item row-itemL"
            onClick={() => props.handleBoxClick(8)}
          >
            {props.board[8] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[8] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(9)}>
            {props.board[9] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[9] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(10)}>
            {props.board[10] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[10] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item" onClick={() => props.handleBoxClick(11)}>
            {props.board[11] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[11] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
        </div>
      </div>
      <div className="row-container">
        <div className="row">
          <div
            className="row-item row-itemL row-itemB"
            onClick={() => props.handleBoxClick(12)}
          >
            {props.board[12] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[12] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div
            className="row-item row-itemB"
            onClick={() => props.handleBoxClick(13)}
          >
            {props.board[13] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[13] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div
            className="row-item row-itemB"
            onClick={() => props.handleBoxClick(14)}
          >
            {props.board[14] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[14] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div
            className="row-item row-itemB"
            onClick={() => props.handleBoxClick(15)}
          >
            {props.board[15] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[15] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBoxes;
