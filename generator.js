const State = require("./models/State");

const {
    printBoard,
    getNeighbors,
    normalize
} = require("./utils");

async function generateAllStates(
    initialBoard,
    maxDepth = 5
) {

    const queue = [];

    queue.push({
        board: initialBoard,
        distance: 0
    });

    while (queue.length > 0) {

        const current = queue.shift();

        const normalized =
            normalize(current.board);

        const exists =
            await State.findOne({
                normalized
            });

        if (exists) {
            continue;
        }

        await State.create({
            board: current.board,
            normalized,
            distance: current.distance
        });

        console.log(
            "Distance:",
            current.distance
        );

        printBoard(current.board);

        if (current.distance >= maxDepth) {
            continue;
        }

        const neighbors =
            getNeighbors(current.board);

        for (const next of neighbors) {

            queue.push({
                board: next,
                distance:
                    current.distance + 1
            });
        }
    }

    console.log("Finished");
}

module.exports = generateAllStates;