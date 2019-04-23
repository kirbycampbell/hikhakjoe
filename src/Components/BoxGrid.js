import React, { useState } from "react";
import "../CSS/BoxGrid.css";

const BoxGrid = () => {
  const [game, setGame] = useState({
    col1Row1: "",
    col2Row1: "",
    col3Row1: "",
    col4Row1: "",
    e: "",
    f: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: ""
  });
  const handleBoxClick = i => {
    const letter = [
      "az",
      "col1Row1",
      "col2Row1",
      "col3Row1",
      "col4Row1",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n"
    ];
    const chosenBox = letter[i];
    //const upState = game;
    //console.log(chosenBox);
    const x = "x";
    const o = "o";
    game[`${chosenBox}`] = x;
    // console.log(upState);

    setGame({ game });
  };
  return (
    <div className="box-container">
      <div className="game-box">
        <div className="row-container">
          <div className="row">
            <div
              className="row-item row-itemL"
              onClick={() => handleBoxClick(1)}
            >
              {game.col1Row1}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(2)}>
              {game.col2Row1}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(3)}>
              {game[3]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(4)}>
              {game[4]}
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div
              className="row-item row-itemL"
              onClick={() => handleBoxClick(5)}
            >
              {game[5]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(6)}>
              {game[6]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(7)}>
              {game[7]}
            </div>
            <div className="row-item" onClick={() => handleBoxClick(8)}>
              {game[8]}
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
