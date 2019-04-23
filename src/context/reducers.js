const initialState = {
  gameBoard: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  player: 1
};
const types = {
  MAKE_MOVE_A: "MAKE_MOVE_A",
  RESET_GAME: "RESET_GAME",
  MAKE_MOVE_B: "MAKE_MOVE_B"
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MAKE_MOVE_A:
      console.log(action);
      const newState = state.gameBoard;
      newState[action.payload.position] = action.payload.move;
      return {
        gameBoard: newState
      };
    case types.RESET_GAME:
      console.log(action);
      return {
        gameBoard: initialState
      };
    // case types.ADD_TO_TECH_LIST:
    //   return {
    //     ...state,
    //     techList: [...state.techList, action.payload]
    //   };

    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
