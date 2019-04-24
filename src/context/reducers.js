const initialState = {
  gameBoard: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  player: 1,
  p1Points: 0,
  p2Points: 0,
  winner: false
};

const types = {
  MAKE_MOVE_A: "MAKE_MOVE_A",
  RESET_GAME: "RESET_GAME",
  POINTS: "POINTS",
  GAME_OVER: "GAME_OVER"
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
      return {
        gameBoard: Array(16).fill(""),
        winner: false
      };
    case types.POINTS:
      const p1 = action.payload.amount[0] * 36;
      const p2 = action.payload.amount[1] * 36;
      return Object.assign({}, state, {
        p1Points: p1,
        p2Points: p2
      });
    case types.GAME_OVER:
      return Object.assign({}, state, {
        gameBoard: Array(16).fill(""),
        winner: true
      });

    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
