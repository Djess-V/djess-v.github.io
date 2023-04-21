import React from "react";
import { useDispatch } from "react-redux";
import { jumpTo, startGame } from "../store/reducerGame/gameSlice";

let Button = ({ modify, moves, index, desc }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`game-table-td__button game-table-td__button_mode_${modify} ${
        moves && moves.length === 1 ? "game-table-td__button_hidden" : ""
      }`}
      onClick={
        modify ? () => dispatch(startGame()) : () => dispatch(jumpTo(index))
      }
    >
      {desc}
    </button>
  );
};

/* ---------------------------------------------------------------------------------- */

Button = React.memo(Button);

export default Button;
