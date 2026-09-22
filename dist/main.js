"use strict";
// Nájdeme kontajner pre šachovnicu v HTML
const board = document.getElementById('chessboard');
if (board) {
    const BOARD_SIZE = 8;
    // Prechádzamy 8 riadkov
    for (let row = 0; row < BOARD_SIZE; row++) {
        // Prechádzamy 8 stĺpcov
        for (let col = 0; col < BOARD_SIZE; col++) {
            // 1. Vytvoríme nový HTML element <div>
            const square = document.createElement('div');
            // 2. Pridáme mu základnú CSS triedu "square"
            square.classList.add('square');
            // 3. Rozhodnutie o farbe: ak je súčet (row + col) párny -> svetlé pole, inak tmavé
            if ((row + col) % 2 === 0) {
                square.classList.add('light');
            }
            else {
                square.classList.add('dark');
            }
            // 4. Vložíme políčko do šachovnice
            board.appendChild(square);
        }
    }
}
else {
    console.error('Element s ID "chessboard" sa nenašiel!');
}
