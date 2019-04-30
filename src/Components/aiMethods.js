import { winningCombos, highValueSpots, edgeSpots } from "../Data/WinCombos";

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::General Functions (Shuffle, Count, & Sort Objects):::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
  return array;
}

// Returns Object of position and # of times it appears - {0: 2, 3: 1, 12: 2}
function count(array) {
  var counts = {};
  array.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
}

// Sorts object by value
function sortObject(obj) {
  var arr = [];
  var prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push({
        key: prop,
        value: obj[prop]
      });
    }
  }
  arr.sort(function(a, b) {
    return b.value - a.value;
  });
  return arr; // returns array
}
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::: MAIN MOVE FUNCTION ::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
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

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::: STRATEGY SECTION ::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// DECIDE MOVE picks the move type for ai - Offense, Defense, or Starting ::::::
function decideMove(options, board, player, opp) {
  let move;
  let HV = shuffle(highValueSpots);
  let HVEdge = shuffle(edgeSpots);
  // IF GAME IS STARTING HEAD FOR CENTER SPOTS
  if (
    options.aiDoubleCombos.length === 0 &&
    options.opponentDoublecombos.length === 0 &&
    options.aiSingleCombos.length === 0
  ) {
    move = highValueMove(board, options, HV); // Shoot for center spots randomly
  } else if (
    options.aiDoubleCombos.length < options.opponentDoublecombos.length // If Opponent is building a points move
  ) {
    let block; // Block User's points move
    block = blockUserMove(board, options, options.opponentDoublecombos);
    move = block[0].key;
  } else if (
    options.aiDoubleCombos.length > options.opponentDoublecombos.length ||
    options.aiDoubleCombos.length === options.opponentDoublecombos.length // If ai is about to win points
  ) {
    console.log("Go for points & block");
  } else if (options.aiSingleCombos.length > 1) {
    console.log("go for combo ai");
  }
  return move;
}

// Block User Move by searching combos for most important block location
function blockUserMove(board, options, playerCombos) {
  let spacesToBlock = [];
  // Map Through opponentDoubleCombos
  playerCombos.map(combo => {
    // Filter each combo space that is empty
    combo.filter(space => {
      if (board[space] === "") {
        spacesToBlock.push(space);
      }
      return [];
    });
    return [];
  });
  const counts = count(spacesToBlock); // returns array of empty & open spaces
  const weightedCounts = sortObject(counts); // returns sorted Array of open spaces
  return weightedCounts; // First item will be most important spot
}
// ::::::::::::::: Go For Points Or Block ::::::::::::::::::::::::::::::::::
function goForPointsOrBlock(board, options) {
  let block = blockUserMove(board, options); // uses above method
}

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
