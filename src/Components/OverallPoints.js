import React from "react";
import "../CSS/OverallPoints.css";

const OverallPoints = props => {
  return (
    <div className="upper-container">
      <div className="game-point">Overall Points:</div>
      <div className="points">
        P1 Points: <div className="num">{props.p1Points}</div>
      </div>
      <div className="points">
        P2 Points: <div className="num">{props.p2Points}</div>
      </div>
    </div>
  );
};

export default OverallPoints;
