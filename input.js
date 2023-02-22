const { stdin } = require("process");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Create a function called handleUserInput and register it as the "data" callback handler for stdin.

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = setupInput;