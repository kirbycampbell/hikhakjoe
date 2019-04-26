const initialState = {
  gameBoard: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  player: 1,
  p1Points: 0,
  p2Points: 0,
  winner: false,
  p1AllPoints: 0,
  p2AllPoints: 0,
  endGame: false,
  gameType: "ask"
};

const types = {
  MAKE_MOVE_A: "MAKE_MOVE_A",
  RESET_GAME: "RESET_GAME",
  POINTS: "POINTS",
  GAME_OVER: "GAME_OVER",
  FINISH: "FINISH",
  START_GAME: "START_GAME",
  GAME_TYPE: "GAME_TYPE"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MAKE_MOVE_A:
      const newBoard = state.gameBoard;
      newBoard[action.payload.position] = action.payload.move;

      return Object.assign({}, state, {
        gameBoard: newBoard
      });
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
    case types.POINTS:
      const p1 = action.payload.amount[0] * 36;
      const p2 = action.payload.amount[1] * 36;
      return Object.assign({}, state, {
        p1Points: p1,
        p2Points: p2
      });
    case types.GAME_OVER:
      const endP1Points = state.p1AllPoints;
      const endP2Points = state.p2AllPoints;
      console.log("GAME OVER CALLED");
      return Object.assign({}, state, {
        winner: true,
        p1AllPoints: state.p1Points + endP1Points,
        p2AllPoints: state.p2Points + endP2Points
      });
    case types.FINISH:
      return Object.assign({}, state, {
        gameBoard: Array(16).fill(""),
        winner: false,
        p1Points: 0,
        p2Points: 0,
        endGame: true
      });

    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
