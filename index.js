const connectDB = require("./db");

const generateAllStates =
require("./generator");

const State =
require("./models/State");

const {
    normalize,
    printBoard
} = require("./utils");

async function main() {

    await connectDB();

    /*
        state اولیه
    */

    const initialBoard = [

        "1", "2", "3",
        "4", "*", "6",
        "7", "8", "_"
    ];

    /*
        تولید همه حالت ها
    */

    await generateAllStates(
        initialBoard,
        5
    );

    console.log(
        "\n========== SEARCH ==========\n"
    );

    /*
        حالتی که میخوای سرچ کنی
    */

    const targetBoard = [

        "1", "2", "3",
        "4", "_", "6",
        "7", "8", "*"
    ];

    console.log("Target State:\n");

    printBoard(targetBoard);

    const normalized =
        normalize(targetBoard);

    const result =
        await State.findOne({
            normalized
        });

    if (result) {

        console.log(
            "State Found"
        );

        console.log(
            "Distance:",
            result.distance
        );

    } else {

        console.log(
            "State Not Found"
        );
    }

    process.exit();
}

main();