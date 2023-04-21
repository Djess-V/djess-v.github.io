const selectState = (state) => state;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let collection = new Set(),
    current;

  for (let i = 0, len = lines.length; i < len; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      current = a;
      for (let j = 0, len = lines[i].length; j < len; j++) {
        collection.add(lines[i][j]);
      }
    }
  }

  collection = Array.from(collection);

  if (collection.length) {
    return {
      squares: squares[current],
      lines: collection,
    };
  }

  let standoff = true;
  for (let square of squares) {
    if (square === null) {
      standoff = false;
    }
  }

  return {
    standoff: standoff,
  };
}

function formatMovePosition(position) {
  const array = [
    "(1,1)",
    "(1,2)",
    "(1,3)",
    "(2,1)",
    "(2,2)",
    "(2,3)",
    "(3,1)",
    "(3,2)",
    "(3,3)",
  ];

  return array[position];
}

/* ---------------------------------------------------------------------------------- */

export { selectState, formatMovePosition, calculateWinner };
