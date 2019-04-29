import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export const WinnerPerson = () => {
  const { state } = useContext(StoreContext);

  if (state.p1Points > state.p2Points) {
    return <div>Winner is Player 1!</div>;
  } else if (state.p1Points < state.p2Points) {
    return <div>Winner is Player 2!</div>;
  } else {
    return <div>TIE GAME!</div>;
  }
};

export const OverallWinner = () => {
  const { state } = useContext(StoreContext);

  if (state.p1AllPoints > state.p2AllPoints) {
    return <div>Winner of all games is Player 1!</div>;
  } else if (state.p1AllPoints < state.p2AllPoints) {
    return <div>Winner of all games is Player 2!</div>;
  } else {
    return <div>TIE META-GAME! WOW!!!</div>;
  }
};
