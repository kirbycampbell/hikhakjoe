import React from "react";
import "../CSS/BoxGrid.css";

const BoxGrid = () => {
  return (
    <div className="box-container">
      <div className="game-box">
        <div className="row-container">
          <div className="row">
            <div className="row-item row-itemL"> row item 1</div>
            <div className="row-item"> row item 2</div>
            <div className="row-item"> row item 3</div>
            <div className="row-item"> row item 4</div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div className="row-item row-itemL"> row item 1</div>
            <div className="row-item"> row item 2</div>
            <div className="row-item"> row item 3</div>
            <div className="row-item"> row item 4</div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div className="row-item row-itemL"> row item 1</div>
            <div className="row-item"> row item 2</div>
            <div className="row-item"> row item 3</div>
            <div className="row-item"> row item 4</div>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <div className="row-item row-itemL row-itemB"> row item 1</div>
            <div className="row-item row-itemB"> row item 2</div>
            <div className="row-item row-itemB"> row item 3</div>
            <div className="row-item row-itemB"> row item 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxGrid;
