import { types } from "./reducers";

const winningCombos = [
  [0, 1, 2],
  [1, 2, 3],
  [3, 6, 9],
  [3, 7, 11],
  [5, 6, 7],
  [4, 5, 6],
  [8, 9, 10],
  [9, 10, 11],
  [13, 14, 15],
  [5, 10, 15],
  [0, 4, 8],
  [0, 5, 10],
  [4, 8, 12],
  [12, 13, 14],
  [6, 9, 12],
  [7, 11, 15],
  [1, 6, 11],
  [2, 5, 8],
  [4, 9, 14],
  [6, 10, 14],
  [5, 9, 13],
  [1, 5, 9],
  [2, 6, 10],
  [7, 10, 13]
];

export const checkForWin = (state, dispatch) => {
  winningCombos.filter(combo => {
    if (
      state.gameBoard[combo[0]] === state.gameBoard[combo[1]] &&
      state.gameBoard[combo[1]] === state.gameBoard[combo[2]] &&
      state.gameBoard[combo[0]] != ""
    ) {
      //setWinner("We've Got A Winner");
      dispatch({
        type: types.WINNER
      });
    }
  });
};
