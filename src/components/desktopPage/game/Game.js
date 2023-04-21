import React from "react";
import Board from "./Board";
import Info from "./Info";
import Table from "./Table";
import TableTrTd from "./TableTrTd";
import { useSelector } from "react-redux";
import {
  calculateWinner,
  formatMovePosition,
  selectState,
} from "../store/reducerGame/gameAPI";
import { v4 } from "uuid";

let Game = () => {
  const stateGame = useSelector(selectState).game;
  const history = stateGame.history;
  const current = history[stateGame.stepNumber];
  const winner = calculateWinner(current.squares);

  const lines = winner.lines ? winner.lines : [];

  let status;
  if (winner.standoff === false) {
    status = "Следующий ход: " + (stateGame.xIsNext ? "X" : "O");
  } else if (winner.squares) {
    status = "Выиграл: " + winner.squares;
  } else if (winner.standoff) {
    status = "Ничья";
  }

  const moves = history.map((step, index) => {
    const desc = index ? "Вернуться к ходу #" + index : "К началу игры";
    const position =
      step.position !== null ? `${formatMovePosition(step.position)}` : "";
    const strHl = step.style === "#000000" ? "Выделить" : "Снять выделение";

    return (
      <TableTrTd
        key={v4()}
        style={step.style}
        index={index}
        desc={desc}
        position={position}
        strHl={strHl}
      />
    );
  });

  if (stateGame.sort === "up") {
    moves.reverse();
  }

  return (
    <div className="game">
      <h1 className="game__header">Можно поиграть в крестики-нолики!</h1>
      <h2 className="game__subhead">
        чтобы начать игру - сделайте первый ход!!!
      </h2>
      <div className="game-board">
        <Board squares={current.squares} modify={lines} />
      </div>
      <div>
        <div className="game-info">
          <Info moves={moves} status={status} />
        </div>
        <table className="game-table">
          <Table moves={moves} />
        </table>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

Game = React.memo(Game);

export default Game;
