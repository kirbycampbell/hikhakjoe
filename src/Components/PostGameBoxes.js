import React from "react";
import "../CSS/InnerBoxes.css";

const PostGameBoxes = props => {
  // [10, 6, 5, 9, 15, 0, 14, 13, 12, 3, 4, 1, 8, 2, 11, 7]
  console.log(props.moveOrder);
  return (
    <div className="game-box" onClick={props.showBoard}>
      <div className="row-container">
        <div className="row">
          <div className="row-item row-itemL">
            {props.board[0] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[0] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
            {props.board[1] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[1] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
            {props.board[2] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[2] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
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
          <div className="row-item row-itemL">
            {props.board[4] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[4] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
            {props.board[5] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[5] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
            {props.board[6] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[6] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
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
          <div className="row-item row-itemL">
            {props.board[8] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[8] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
            {props.board[9] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[9] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
            {props.board[10] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[10] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item">
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
          <div className="row-item row-itemL row-itemB">
            {props.board[12] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[12] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item row-itemB">
            {props.board[13] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[13] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item row-itemB">
            {props.board[14] === "x" && (
              <i className="fas fa-times game-piece" />
            )}
            {props.board[14] === "o" && (
              <i className="far fa-dot-circle game-piece" />
            )}
          </div>
          <div className="row-item row-itemB">
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

export default PostGameBoxes;
