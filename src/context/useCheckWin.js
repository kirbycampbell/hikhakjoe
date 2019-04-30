import { useContext } from "react";
import { StoreContext } from "./StoreContext";
import "../CSS/BoxGrid.css";
import { winningCombos } from "../Data/WinCombos";

function useCheckWin() {
  const { state } = useContext(StoreContext);
  let allWins = { xWins: [], oWins: [] };

  winningCombos.filter(combo => {
    if (
      // If combo[0] on the board is equal to combo[1] and combo[2]
      state.gameBoard[combo[0]] === state.gameBoard[combo[1]] &&
      state.gameBoard[combo[1]] === state.gameBoard[combo[2]] &&
      state.gameBoard[combo[0]] !== ""
    ) {
      if (state.gameBoard[combo[0]] === "x") {
        allWins.xWins.push(combo); // Add to the xWins array
      }
      if (state.gameBoard[combo[0]] === "o") {
        allWins.oWins.push(combo); // Add to the oWins array
      }
    }

    return [];
  });
  return allWins;
}

export default useCheckWin;
