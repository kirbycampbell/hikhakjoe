const initialState = {
  gameBoard: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  nextPlayer: "o",
  player: "x",
  p1Points: 0,
  p2Points: 0,
  winner: false,
  p1AllPoints: 0,
  p2AllPoints: 0,
  endGame: false,
  gameType: "ask",
  ai1: false,
  ai2: false
};

const types = {
  MAKE_MOVE_A: "MAKE_MOVE_A",
  MAKE_MOVE_B: "MAKE_MOVE_B",
  RESET_GAME: "RESET_GAME",
  POINTS: "POINTS",
  GAME_OVER: "GAME_OVER",
  FINISH: "FINISH",
  START_GAME: "START_GAME",
  GAME_TYPE: "GAME_TYPE",
  CONTINUE: "CONTINUE",
  MAKE_AI_MOVE: "MAKE_AI_MOVE"
};

const reducer = (state = initialState, action) => {
  // :::::::::::::::::: SWITCH REDUCER CASE MAIN::::::::::::::::::::::
  switch (action.type) {
    // GAME_TYPE - Selects 1 player, 2 player, or 0 player games.
    case types.GAME_TYPE:
      return Object.assign({}, state, {
        gameType: action.payload.type_of_game
      });
    //:::: MAKE_MOVE_A - makes the selected move on the board :::::::
    case types.MAKE_MOVE_A:
      let newBoard = action.payload.gameData.newBoard;
      const p1 = action.payload.gameData.wins.xWins.length * 36;
      const p2 = action.payload.gameData.wins.oWins.length * 36;
      return Object.assign({}, state, {
        gameBoard: newBoard,
        player: state.nextPlayer,
        nextPlayer: state.player,
        p1Points: p1,
        p2Points: p2
      });
    //:::: MAKE_MOVE_B - makes the selected move on the board :::::::
    case types.MAKE_MOVE_B:
      let newBoardB = action.payload.gameData.newBoard;
      const human = action.payload.gameData.wins.xWins.length * 36;
      const comp = action.payload.gameData.wins.oWins.length * 36;
      return Object.assign({}, state, {
        gameBoard: newBoardB,
        player: state.nextPlayer,
        nextPlayer: state.player,
        p1Points: human,
        p2Points: comp,
        ai1: true
      });
    // *********** AI MOVE :::::::::::::::::::::::::::::::::::::::::::
    case types.MAKE_AI_MOVE:
      //console.log(action.payload);
      let newBoardAI = action.payload.aiData.newBoard;
      const human1 = action.payload.aiData.wins.xWins.length * 36;
      const comp2 = action.payload.aiData.wins.oWins.length * 36;
      return Object.assign({}, state, {
        gameBoard: newBoardAI,
        player: state.nextPlayer,
        nextPlayer: state.player,
        p1Points: human1,
        p2Points: comp2,
        ai1: false
      });
    // RESET_GAME - resets all global state and returns view to home GAME SELECT
    case types.RESET_GAME:
      return Object.assign({}, state, {
        gameBoard: Array(16).fill(""),
        winner: false,
        p1Points: 0,
        p2Points: 0,
        endGame: false,
        p1AllPoints: 0,
        p2AllPoints: 0,
        gameType: "ask"
      });
    // CONTINUE - adds the points into overall and plays another game
    case types.CONTINUE:
      return Object.assign({}, state, {
        gameBoard: Array(16).fill(""),
        winner: false,
        p1Points: 0,
        p2Points: 0,
        endGame: false,
        playerTurn: state.playerTurn + 1
      });
    // POINTS - keeps track of points each user scores
    // case types.POINTS:
    //   const p1 = action.payload.allPoints.xWins.length * 36;
    //   const p2 = action.payload.allPoints.oWins.length * 36;
    //   return Object.assign({}, state, {
    //     p1Points: p1,
    //     p2Points: p2
    //   });
    // GAME_OVER - when single game is over - adds games points to total points
    case types.GAME_OVER:
      const endP1Points = state.p1AllPoints;
      const endP2Points = state.p2AllPoints;
      console.log("GAME OVER CALLED");
      return Object.assign({}, state, {
        winner: true,
        p1AllPoints: state.p1Points + endP1Points,
        p2AllPoints: state.p2Points + endP2Points
      });
    // FINISH - when user is clicks END (done playing games) this shows the overall winner message
    case types.FINISH:
      console.log("finish called");
      return Object.assign({}, state, {
        gameBoard: Array(16).fill(""),
        winner: false,
        p1Points: 0,
        p2Points: 0,
        endGame: true
      });
    // DEFAULT STATEMENT - catches bad action.types
    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
