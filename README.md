# 8 Puzzle State Generator with Wildcards

This project implements the 8 Puzzle problem using JavaScript and MongoDB.

The program generates all reachable puzzle states using BFS (Breadth First Search), stores them in MongoDB, and supports wildcard cells using `*`.

---

# Features

- Generate all possible puzzle states
- BFS traversal
- Store states in MongoDB
- Calculate distance from initial state
- Search states inside database
- Wildcard (`*`) support
- Avoid duplicate states

---

# Wildcard Logic

Cells marked with `*` are treated as wildcard cells.

This means:

- Swapping stars does NOT create a new state
- States differing only in star positions are considered identical

Example:

State A:

1 * 2
4 * 6
7 8 _

State B:

1 * 2
4 * 6
7 8 _

These two states are considered the same.

---

# Technologies

- Node.js
- MongoDB
- Mongoose

---

# Project Structure

project/

│

├── index.js

├── db.js

├── utils.js

├── generator.js

└── models/

    └── State.js

---

# Installation

Install dependencies:

npm install mongoose

---

# Run MongoDB

Make sure MongoDB is running locally:

mongodb://127.0.0.1:27017/puzzleDB

---

# Run Project

node index.js

---

# Initial State Example

const initialBoard = [

    "1", "2", "3",

    "4", "*", "6",

    "7", "8", "_"
];

---

# Output Example

Distance: 0

1 2 3
4 * 6
7 8 _

------------

Distance: 1

1 2 3
4 * _
7 8 6

------------

---

# Database Schema

Each state stores:

- board
- normalized state
- distance

---

# Search Feature

After generating all states, the program can search a target state inside MongoDB and print its distance.

Example:

Target State:

1 2 3
4 _ 6
7 8 *

Distance: 1

---

# Algorithm

The project uses:

- Breadth First Search (BFS)
- State normalization
- Duplicate detection
- MongoDB storage

---

# Author

8 Puzzle State Generator Project
Using JavaScript and MongoDB
