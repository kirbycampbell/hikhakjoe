import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/GamePoints.css";

const GamePoints = () => {
  const { state } = useContext(StoreContext);

  return (
    <div className="upper-container">
      <div className="game-point">Game Points:</div>
      <div className="points">
        P1 Points: <div className="num">{state.p1Points}</div>
      </div>
      <div className="points">
        P2 Points: <div className="num">{state.p2Points}</div>
      </div>
    </div>
  );
};

export default GamePoints;
