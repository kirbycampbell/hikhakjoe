import { winningCombos } from "../Data/WinCombos";

export function Move(board, player) {
  let opponent;
  if (player === "x") {
    opponent = "o";
  } else if (player === "o") {
    opponent = "x";
  }
  const availableOptions = returnOptions(board, player, opponent);
  //console.log(availableOptions);
  const aiChosenMove = decideMove(availableOptions, player, opponent);
  const newBoard = tempNewBoard(board, aiChosenMove, player);
  const wins = checkWin(newBoard);
  return { newBoard, wins };
}

function decideMove(options, player, opp) {
  console.log(options);
}

function returnOptions(board, ai, opponent) {
  let blankCombos = [];
  let aiSingleCombos = [];
  let aiDoubleCombos = [];
  let opponentSinglecombos = [];
  let opponentDoublecombos = [];
  winningCombos.filter(combo => {
    if (
      board[combo[0]] === "" &&
      board[combo[1]] === "" &&
      board[combo[2]] === ""
    ) {
      blankCombos.push(combo);
    } else if (
      board[combo[0]] === ai &&
      board[combo[1]] === "" &&
      board[combo[2]] === ""
    ) {
      aiSingleCombos.push(combo);
    } else if (
      board[combo[0]] === "" &&
      board[combo[1]] === ai &&
      board[combo[2]] === ""
    ) {
      aiSingleCombos.push(combo);
    } else if (
      board[combo[0]] === "" &&
      board[combo[1]] === "" &&
      board[combo[2]] === ai
    ) {
      aiSingleCombos.push(combo);
    } else if (
      board[combo[0]] === opponent &&
      board[combo[1]] === "" &&
      board[combo[2]] === ""
    ) {
      opponentSinglecombos.push(combo);
    } else if (
      board[combo[0]] === "" &&
      board[combo[1]] === opponent &&
      board[combo[2]] === ""
    ) {
      opponentSinglecombos.push(combo);
    } else if (
      board[combo[0]] === "" &&
      board[combo[1]] === "" &&
      board[combo[2]] === opponent
    ) {
      opponentSinglecombos.push(combo);
    } else if (
      board[combo[0]] === ai &&
      board[combo[1]] === ai &&
      board[combo[2]] === ""
    ) {
      aiDoubleCombos.push(combo);
    } else if (
      board[combo[0]] === "" &&
      board[combo[1]] === ai &&
      board[combo[2]] === ai
    ) {
      aiDoubleCombos.push(combo);
    } else if (
      board[combo[0]] === ai &&
      board[combo[1]] === "" &&
      board[combo[2]] === ai
    ) {
      aiDoubleCombos.push(combo);
    } else if (
      board[combo[0]] === opponent &&
      board[combo[1]] === opponent &&
      board[combo[2]] === ""
    ) {
      opponentDoublecombos.push(combo);
    } else if (
      board[combo[0]] === opponent &&
      board[combo[1]] === opponent &&
      board[combo[2]] === opponent
    ) {
      opponentDoublecombos.push(combo);
    } else if (
      board[combo[0]] === "" &&
      board[combo[1]] === "" &&
      board[combo[2]] === opponent
    ) {
      opponentDoublecombos.push(combo);
    }
    return [];
  });
  return {
    blankCombos,
    aiSingleCombos,
    aiDoubleCombos,
    opponentSinglecombos,
    opponentDoublecombos
  };
}

function tempNewBoard(board, i, player) {
  let newBoard = board;
  newBoard[i] = player;
  return newBoard;
}

function checkWin(board) {
  let allWins = { xWins: [], oWins: [] };

  winningCombos.filter(combo => {
    if (
      // If combo[0] on the board is equal to combo[1] and combo[2]
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]] &&
      board[combo[0]] !== ""
    ) {
      if (board[combo[0]] === "x") {
        allWins.xWins.push(combo); // Add to the xWins array
      }
      if (board[combo[0]] === "o") {
        allWins.oWins.push(combo); // Add to the oWins array
      }
    }

    return [];
  });
  return allWins;
}
