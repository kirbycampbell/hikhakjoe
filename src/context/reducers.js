const initialState = {
  gameBoard: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
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
      return {
        ...state
        //gameBoard: action.payload
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
