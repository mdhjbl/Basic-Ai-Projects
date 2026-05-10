function printBoard(board) {

    for (let i = 0; i < 9; i += 3) {
        console.log(
            board.slice(i, i + 3).join(" ")
        );
    }

    console.log("------------");
}

function getBlankIndex(board) {
    return board.indexOf("_");
}

function swap(board, i, j) {

    const newBoard = [...board];

    [newBoard[i], newBoard[j]] =
    [newBoard[j], newBoard[i]];

    return newBoard;
}

function getNeighbors(board) {

    const neighbors = [];

    const blank = getBlankIndex(board);

    const row = Math.floor(blank / 3);
    const col = blank % 3;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    for (const [dr, dc] of directions) {

        const nr = row + dr;
        const nc = col + dc;

        if (
            nr >= 0 &&
            nr < 3 &&
            nc >= 0 &&
            nc < 3
        ) {

            const nextIndex = nr * 3 + nc;

            const nextBoard =
                swap(board, blank, nextIndex);

            neighbors.push(nextBoard);
        }
    }

    return neighbors;
}

/*
Normalize

تمام ستاره ها یکی درنظر گرفته میشن
*/

function normalize(board) {

    return board
        .map(cell => {

            if (cell === "*") {
                return "STAR";
            }

            return cell;
        })
        .join(",");
}

module.exports = {
    printBoard,
    getNeighbors,
    normalize
};