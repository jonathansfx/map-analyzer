// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables
let row, column; // Row & Column of Mouse on the Map
let outputEl = document.getElementById("currentTile");

// Solution Functions...
function level1Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 4) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level2Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 2) {
    outputEl.innerHTML = "hills";
  } else if (column >= 3 && column <= 7) {
    outputEl.innerHTML = "sand";
  } else if (column >= 8) {
    outputEl.innerHTML = "water";
  }
}

function level3Solution() {
  // USE BINARY IF STATEMENT
  if (column >= 3 && column <= 7) {
    outputEl.innerHTML = "sand";
  } else outputEl.innerHTML = "hills";
}

function level4Solution() {
  // USE BINARY IF STATEMENT
  if (row <= 2) {
    outputEl.innerHTML = "hills";
  } else if (row >= 3) {
    outputEl.innerHTML = "sand";
  }
}

function level5Solution() {
  // USE CHAINED IF STATEMENT
  if (row <= 2) {
    outputEl.innerHTML = "hills";
  } else if (row >= 3 && row <= 5) {
    outputEl.innerHTML = "sand";
  } else outputEl.innerHTML = "water";
}

function level6Solution() {
  // USE BINARY IF STATEMENT
  if (row >= 2 && row <= 5) {
    outputEl.innerHTML = "sand";
  } else outputEl.innerHTML = "water";
}

function level7Solution() {
  // USE BINARY IF STATEMENT
  if (column == 7 && row == 4) {
    outputEl.innerHTML = "water";
  } else outputEl.innerHTML = "sand";
}

function level8Solution() {
  // USE BINARY IF STATEMENT
  if (column == 2 || row == 5) {
    outputEl.innerHTML = "tree";
  } else outputEl.innerHTML = "sand";
}

function level9Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 5 && row <= 5) {
    outputEl.innerHTML = "water";
  } else outputEl.innerHTML = "sand";
}

function level10Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 1) {
    outputEl.innerHTML = "hills";
  } else if (column == 2 || column == 3) {
    outputEl.innerHTML = "tree";
  } else if (column >= 4 && column <= 7) {
    outputEl.innerHTML = "sand";
  } else outputEl.innerHTML = "water";
}

function level11Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 5 && row <= 3) {
    outputEl.innerHTML = "water";
  } else if (column >= 6 && row <= 3) {
    outputEl.innerHTML = "hills";
  } else if (column <= 5 && row >= 4) {
    outputEl.innerHTML = "sand";
  } else if (column >= 6 && row >= 4) {
    outputEl.innerHTML = "tree";
  }
}

function level12Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 5 && row <= 4) {
    outputEl.innerHTML = "water";
  } else if (column >= 6 && row >= 5) {
    outputEl.innerHTML = "water";
  } else outputEl.innerHTML = "sand";
}
function level13Solution() {
  // USE BINARY IF STATEMENT
  if (column >= 4 && column <= 9 && row >= 2 && row <= 5) {
    outputEl.innerHTML = "sand";
  } else outputEl.innerHTML = "tree";
}

function level14Solution() {
  // USE CHAINED IF STATEMENT
  if (column >= 2 && column <= 4 && row >= 1 && row <= 5) {
    outputEl.innerHTML = "tree";
  } else if (column >= 7 && column <= 10 && row >= 3 && row <= 5) {
    outputEl.innerHTML = "water";
  } else outputEl.innerHTML = "sand";
}
