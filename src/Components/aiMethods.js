import { winningCombos } from "../Data/WinCombos";
const highValueSpots = [5, 6, 9, 10];
// const shuffled = highValueSpots.sort(function(a, b) {
//   return 0.5 - Math.random();
// });
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
  return array;
}
const edgeSpots = [0, 1, 2, 3, 4, 7, 8, 11, 12, 15];

export function Move(board, player) {
  let opponent;
  if (player === "x") {
    opponent = "o";
  } else if (player === "o") {
    opponent = "x";
  }
  const availableOptions = returnOptions(board, player, opponent);
  console.log(availableOptions);
  const aiChosenMove = decideMove(availableOptions, board, player, opponent);
  const newBoard = tempNewBoard(board, aiChosenMove, player);
  const wins = checkWin(newBoard);
  return { newBoard, wins };
}

function decideMove(options, board, player, opp) {
  let move;
  let HV = shuffle(highValueSpots);
  let HVEdge = shuffle(edgeSpots);
  if (
    // IF GAME IS STARTING HEAD FOR CENTER SPOTS
    options.aiDoubleCombos.length === 0 &&
    options.opponentDoublecombos.length === 0 &&
    options.aiSingleCombos.length === 0
  ) {
    // Shoot for center spots randomly
    move = highValueMove(board, options, HV);
  } else if (
    // If Opponent is building a points move
    options.aiDoubleCombos.length < options.opponentDoublecombos.length
  ) {
    // Block User's points move
    move = blockUserMove(board, options, HV, HVEdge);
  } else if (
    // If ai is about to win points
    options.aiDoubleCombos.length > options.opponentDoublecombos.length
  ) {
    console.log("Go for points");
  } else if (options.aiSingleCombos.length > 1) {
    console.log("go for combo ai");
  }
  return move;
}

function blockUserMove(board, options, HV, HVEdge) {
  //console.log(options);
  let spacesToBlock = [];
  const result = options.opponentDoublecombos.map(combo => {
    combo.filter(space => {
      if (board[space] === "") {
        spacesToBlock.push(space);
      }
    });
  });
  console.log(spacesToBlock);
}

function checkForMultiple(board, options, HV, HVEdge) {}

// :::::::::: Function Returns Random position in the center of the game :::::::::::::::::::::::
function highValueMove(board, options, HV) {
  let move;
  if (options.blankCombos.length > 1) {
    if (board[HV[0]] === "") {
      move = HV[0];
    } else if (board[HV[1]] === "") {
      move = HV[1];
    } else if (board[HV[2]] === "") {
      move = HV[2];
    } else if (board[HV[3]] === "") {
      move = HV[3];
    }
  }
  return move;
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
      board[combo[0]] === "" &&
      board[combo[1]] === opponent &&
      board[combo[2]] === opponent
    ) {
      opponentDoublecombos.push(combo);
    } else if (
      board[combo[0]] === opponent &&
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
