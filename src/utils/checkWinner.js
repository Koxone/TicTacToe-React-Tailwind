export default function checkWinner(board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningCombinations) {
    const cellA = board[a];
    const cellB = board[b];
    const cellC = board[c];

    if (
      cellA.value &&
      cellA.value === cellB.value &&
      cellA.value === cellC.value
    ) {
      return {
        symbol: cellA.value, // 'X' o 'O'
        player: cellA.player, // 'P1' o 'P2'
      };
    }
  }

  return null;
}
