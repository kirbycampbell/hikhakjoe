import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import "../CSS/Difficulty.css";
import { types } from "../context/reducers";

const Difficulty = () => {
  const { state, dispatch } = useContext(StoreContext);
  const [easy, setEasy] = useState(true);
  const [hard, setHard] = useState(false);

  useEffect(() => {
    if (state.difficulty === "easy") {
      setEasy(true);
      setHard(false);
    } else if (state.difficulty === "hard") {
      setEasy(false);
      setHard(true);
    }
  }, [state.difficulty]);

  const handleRadioClick = e => {
    let selection = e.target.value;
    dispatch({
      type: types.SET_DIFFICULTY,
      payload: {
        difficulty: selection
      }
    });
  };
  if (state.gameType === "single") {
    return (
      <div className="outer-difficulty-container">
        <div className="radio">
          <label>
            <input
              type="radio"
              value="easy"
              checked={easy}
              onChange={handleRadioClick}
            />
            EASY
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="hard"
              checked={hard}
              onChange={handleRadioClick}
            />
            HARD
          </label>
        </div>
      </div>
    );
  } else return null;
};

export default Difficulty;
