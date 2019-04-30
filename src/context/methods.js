import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/BoxGrid.css";
import { types } from "../context/reducers";
import { winningCombos } from "../Data/WinCombos";

function checkWin(i) {
  const { state, dispatch } = useContext(StoreContext);

  let player;
  const newBoard = state.gameBoard;
  if (state.playerTurn % 2 === 0) {
    player = "o";
  } else {
    player = "x";
  }
  newBoard[i] = player;

  let xWins = 0;
  let oWins = 0;
  let allWins = [xWins, oWins];
  winningCombos.filter(combo => {
    if (
      // If combo[0] on the board is equal to combo[1] and combo[2]
      newBoard[combo[0]] === newBoard[combo[1]] &&
      newBoard[combo[1]] === newBoard[combo[2]] &&
      newBoard[combo[0]] !== ""
    ) {
      if (newBoard[combo[0]] === "x") {
        xWins++; // Add to the xWins array
      }
      if (newBoard[combo[0]] === "o") {
        oWins++; // Add to the oWins array
      }
    }
    allWins = [xWins, oWins];
    return [];
  });
}

export default checkWin;
