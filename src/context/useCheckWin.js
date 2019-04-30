import { useContext } from "react";
import { StoreContext } from "./StoreContext";
import "../CSS/BoxGrid.css";
import { winningCombos } from "../Data/WinCombos";

function useCheckWin(i) {
  const { state } = useContext(StoreContext);

  let player;
  const newBoard = state.gameBoard;
  if (state.playerTurn % 2 === 0) {
    player = "o";
  } else {
    player = "x";
  }
  newBoard[i] = player;

  let allWins = { xWins: [], oWins: [] };

  winningCombos.filter(combo => {
    if (
      // If combo[0] on the board is equal to combo[1] and combo[2]
      newBoard[combo[0]] === newBoard[combo[1]] &&
      newBoard[combo[1]] === newBoard[combo[2]] &&
      newBoard[combo[0]] !== ""
    ) {
      if (newBoard[combo[0]] === "x") {
        allWins.xWins.push(combo); // Add to the xWins array
      }
      if (newBoard[combo[0]] === "o") {
        allWins.oWins.push(combo); // Add to the oWins array
      }
    }

    return [];
  });
  //console.log(allWins);
  return allWins;
}

export default useCheckWin;
