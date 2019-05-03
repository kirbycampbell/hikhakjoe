import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import useInterval from "./useInterval";
import { CSSTransition } from "react-transition-group";
import "../CSS/GamePoints.css";

const GamePoints = () => {
  const { state } = useContext(StoreContext);
  const [pointsChangeP1, setPointsChangeP1] = useState(false);
  const [pointsChangeP2, setPointsChangeP2] = useState(false);

  useEffect(() => {
    setPointsChangeP1(true);
  }, [state.p1Points]);

  useEffect(() => {
    setPointsChangeP2(true);
  }, [state.p2Points]);

  useEffect(() => {
    setPointsChangeP1(false);
    setPointsChangeP2(false);
  }, [pointsChangeP1, pointsChangeP2]);

  // useInterval(
  //   () => {
  //     if (pointsChangeP1) {
  //       setPointsChangeP1(false);
  //     } else if (pointsChangeP2) {
  //       setPointsChangeP2(false);
  //     }
  //   },
  //   [pointsChangeP1 ? 2000 : null],
  //   [pointsChangeP2 ? 2000 : null]
  // );

  return (
    <div className="upper-container">
      <div className="game-point">Game Points:</div>
      <CSSTransition
        in={pointsChangeP1}
        timeout={2000}
        classNames="showScore"
        unmountOnExit
        onEnter={() => setPointsChangeP1(true)}
        onExited={() => setPointsChangeP1(false)}
      >
        <div className="points big">
          P1 Scores! <div className="num big">{state.p1Points}</div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!pointsChangeP1}
        timeout={2000}
        classNames="showPoints"
        unmountOnExit
      >
        <div className="points">
          P1 Points: <div className="num">{state.p1Points}</div>
        </div>
      </CSSTransition>

      {/* {!pointsChangeP1 && (
        <div className="points big">
          P1 Score: <div className="num">{state.p1Points}</div>
        </div>
      )} */}
      {!pointsChangeP2 && (
        <div className="points">
          P2 Points: <div className="num">{state.p2Points}</div>
        </div>
      )}
      {pointsChangeP2 && (
        <div className="points big">
          P2 Scores! <div className="num big">{state.p2Points}</div>
        </div>
      )}
    </div>
  );
};

export default GamePoints;
