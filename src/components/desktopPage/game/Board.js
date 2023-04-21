import React from "react";
import Square from "./Square";
import { v4 } from "uuid";

let Board = ({ squares, modify }) => {
  let divs = [],
    status = "ordinary",
    lines = modify;

  for (let i = 0; i < 3; i++) {
    let squares = [];
    for (let j = 0; j < 3; j++) {
      let current = 3 * i + j;
      if (lines.length !== 0) {
        for (let elem of lines) {
          status = elem === current ? "winner" : "ordinary";
          if (status === "winner") {
            break;
          }
        }
      }
      squares.push(renderSquare(current, status));
    }
    divs[i] = (
      <div key={v4()} className="board-row">
        {squares}
      </div>
    );
  }

  function renderSquare(i, status) {
    return <Square key={v4()} index={i} value={squares[i]} status={status} />;
  }

  return <div>{divs}</div>;
};

/* ---------------------------------------------------------------------------------- */

Board = React.memo(Board);

export default Board;
