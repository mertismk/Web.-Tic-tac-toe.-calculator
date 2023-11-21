let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

const cells = document.getElementsByClassName('cell');
for (let cell of cells) {
    cell.addEventListener('click', makeMove);
}

const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetBoard);

function makeMove(event) {
    const index = event.target.dataset.index;
    if (board[index] === '') {
        board[index] = currentPlayer;
        event.target.innerText = currentPlayer;
        event.target.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWin();
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(board[a] + ' победил!');
            resetBoard();
            return;
        }
    }

    if (!board.includes('')) {
        alert('Ничья!');
        resetBoard();
    }
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    for (let cell of cells) {
        cell.innerText = '';
        cell.classList.remove('X', 'O');
    }
}
