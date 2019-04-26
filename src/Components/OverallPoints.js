import React from "react";
import "../CSS/OverallPoints.css";

const OverallPoints = props => {
  return (
    <div className="bottom-container">
      <div className="overall-point">Overall Points:</div>
      <div className="points-o">
        P1 Points: <div className="num-o">{props.p1Points}</div>
      </div>
      <div className="points-o">
        P2 Points: <div className="num-o">{props.p2Points}</div>
      </div>
    </div>
  );
};

export default OverallPoints;
