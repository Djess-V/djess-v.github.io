import React from "react";
import { makeAStep } from "../store/reducerGame/gameSlice";
import { useDispatch } from "react-redux";

let Square = ({ index, value, status }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`board-row__square board-row__square_status_${status}`}
      onClick={() => dispatch(makeAStep(index))}
    >
      {value}
    </button>
  );
};

/* ---------------------------------------------------------------------------------- */

Square = React.memo(Square);

export default Square;
