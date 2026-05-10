const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({

    board: {
        type: [String],
        required: true
    },

    normalized: {
        type: String,
        unique: true
    },

    distance: Number
});

module.exports = mongoose.model(
    "State",
    stateSchema
);