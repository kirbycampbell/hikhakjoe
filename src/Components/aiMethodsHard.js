import {
  winningCombos,
  highValueSpots,
  edgeSpots,
  allSpaces
} from "../Data/WinCombos";

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

// Turns 2 arrays of objects, into single array
function spreadObjToArray(obj1, obj2) {
  let i = 0;
  let p = 0;
  let array = [];
  for (i = 0; i < obj2.length; i++) {
    array.push(obj2[`${i}`].key);
  }
  for (p = 0; p < obj1.length; p++) {
    array.push(obj1[`${p}`].key);
  }
  return array;
}

function returnEmptySpace(board) {
  let emptySpace = board.filter(space => {
    return space === "";
  });
  return emptySpace;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// :::::::::::::::::::: MAIN MOVE FUNCTION ::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export function MoveHard(board, player) {
  let opponent;
  if (player === "x") {
    opponent = "o";
  } else if (player === "o") {
    opponent = "x";
  }
  const availableOptions = returnOptions(board, player, opponent);
  //console.log(availableOptions);
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
    options.aiSingleCombos.length === 0 &&
    options.blankCombos.length > 5
  ) {
    console.log("Move 1");
    move = highValueMove(board, options, HV); // Shoot for center spots randomly
  } else if (
    options.aiDoubleCombos.length < options.opponentDoublecombos.length // If Opponent is building a points move
  ) {
    console.log("Move 2");
    let block; // Block User's points move
    block = blockUserMove(board, options.opponentDoublecombos);
    move = block[0].key;
  } else if (
    options.aiDoubleCombos.length === options.opponentDoublecombos.length &&
    options.aiDoubleCombos.length > 0 // If ai is about to win points
  ) {
    console.log("Go for points Move 1");
    move = goForPoints(
      board,
      options.opponentDoublecombos,
      options.aiDoubleCombos
    );
  } else if (
    options.aiDoubleCombos.length > options.opponentDoublecombos.length &&
    options.opponentDoublecombos.length !== 0
  ) {
    console.log("Go for points & block");
    move = goForPointsOrBlock(
      board,
      options.opponentDoublecombos,
      options.aiDoubleCombos
    );
  } else if (
    options.aiDoubleCombos.length > options.opponentDoublecombos.length &&
    options.opponentDoublecombos.length === 0
  ) {
    console.log("GO FOR POINTS BB MOVE 2");
    move = goForPoints(board, options.aiDoubleCombos, options.aiSingleCombos);
  } else if (options.aiSingleCombos.length > 1) {
    console.log("buildCombo");
    move = goForPoints(board, options.aiDoubleCombos, options.aiSingleCombos);
  } else {
    console.log("ELSE");

    let emptySpots = allSpaces.filter(spot => board[spot] === "");
    console.log(emptySpots);
    move = emptySpots[0];
  }
  console.log("MOVE: ");
  console.log(move);
  return move;
}

function goForPoints(board, aiDubCombos, aiSingCombos) {
  let dubMoves = blockUserMove(board, aiDubCombos);
  let singMoves = blockUserMove(board, aiSingCombos);
  let moveArray = spreadObjToArray(singMoves, dubMoves);
  let move;
  console.log(moveArray);
  if (dubMoves.length === 1) {
    move = dubMoves[0].key;
  } else if (dubMoves.length > 1) {
    move = dubMoves[1].key;
  } else if (dubMoves.length === 0 && singMoves.length > 0) {
    move = singMoves[0].key;
  } else {
    move = returnEmptySpace(board);
  }
  return move;
}

// Block User Move by searching combos for most important block location
function blockUserMove(board, playerCombos) {
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
function goForPointsOrBlock(board, playerCombos, aiCombos) {
  let block = blockUserMove(board, playerCombos); // uses above method
  let moves = blockUserMove(board, aiCombos);
  let chosenMove;
  console.log(block);
  console.log(moves);
  if (block[0].value > moves[0].value) {
    chosenMove = block[0].key;
  } else if (moves[0].value > block[0].value) {
    chosenMove = moves[0].key;
  } else if (block[0].value === moves[0].value) {
    chosenMove = block[0].key;
  }
  return chosenMove;
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
