const initialState = {
  gameBoard: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  player: 1,
  p1Points: 0,
  p2Points: 0
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
        gameBoard: Array(16).fill("")
      };
    case types.POINTS:
      const newPoints = state.p1Points + action.payload.amount;

      return Object.assign({}, state, {
        p1Points: newPoints
      });
    // case types.GAME_OVER:
    //   return {
    //     gameBoard: Array(16).fill("")
    //   };

    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
