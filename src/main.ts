const board = document.getElementById('chessboard');

if (board) {
    const BOARD_SIZE = 8;

    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            const square = document.createElement('div');

            square.classList.add('square');

            if ((row + col) % 2 === 0) {
                square.classList.add('light');
            } else {
                square.classList.add('dark');
            }

            board.appendChild(square);
        }
    }
} else {
    console.error('Element s ID "chessboard" sa nenašiel!');
}