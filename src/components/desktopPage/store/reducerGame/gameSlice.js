import { createSlice } from "@reduxjs/toolkit";
import { calculateWinner } from "./gameAPI";
const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
      position: null,
      style: "#000000",
    },
  ],
  sort: "down",
  stepNumber: 0,
  xIsNext: true,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.history = [
        {
          squares: Array(9).fill(null),
          position: null,
          style: "#000000",
        },
      ];
      state.sort = "down";
      state.stepNumber = 0;
      state.xIsNext = true;
      state.goTo = false;
    },
    newStep: (state, action) => {
      state.history.push({
        squares: action.payload.squares,
        position: action.payload.index,
        style: "#000000",
      });

      state.stepNumber = action.payload.history.length;
      state.xIsNext = !state.xIsNext;
    },
    highlight: (state, action) => {
      let style = state.history[action.payload].style;
      state.history[action.payload].style =
        style === "#000000" ? "#0ee8f8" : "#000000";
    },

    jumpTo: (state, action) => {
      state.stepNumber = action.payload;
      state.xIsNext = action.payload % 2 === 0;

      const newHistory = [];

      for (let i = 0; i <= action.payload; i++) {
        newHistory.push(state.history[i]);
      }

      state.history = newHistory;
    },

    sortHistory: (state, action) => {
      state.sort = action.payload;
    },
  },
});

const makeAStep = (index) => (dispatch, getState) => {
  const state = getState().game;
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares).squares || squares[index]) {
    return;
  }
  squares[index] = state.xIsNext ? "X" : "O";
  dispatch(newStep({ index, history, squares }));
};

const handleClickA = (event, index) => (dispatch) => {
  event.preventDefault();
  dispatch(highlight(index));
};

const clickHistory = (event) => (dispatch, getState) => {
  const state = getState().game;
  if (
    (event.target.parentElement.classList[1] === "game-table-th-sort_mode_up" ||
      event.target.classList[1] === "game-table-th-sort_mode_up") &&
    state.sort === "down"
  ) {
    dispatch(sortHistory("up"));
  } else if (
    (event.target.parentElement.classList[1] ===
      "game-table-th-sort_mode_down" ||
      event.target.classList[1] === "game-table-th-sort_mode_down") &&
    state.sort === "up"
  ) {
    dispatch(sortHistory("down"));
  }
};

/* ---------------------------------------------------------------------------------- */

export default gameSlice.reducer;

export const { startGame, newStep, highlight, jumpTo, sortHistory } =
  gameSlice.actions;

export { makeAStep, handleClickA, clickHistory };
