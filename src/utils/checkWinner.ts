export const checkWinner = (board:string[]) => {
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
    
      for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        const values = [board[a], board[b], board[c]];

        if (values.every(val => val === "X" || val === "E")) {
          return "X";
        }
        if (values.every(val => val === "O" || val === "E")) {
          return "O";
        }
      }
      return board.some((item) => item === "") ? null : "E";
}