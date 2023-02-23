const { connect } = require("http2");
const { stdin } = require("process");

// In the input module, create a variable in the outer-most scope called connection, which can default to undefined.
// Stores the active TCP connection object.

let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
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
  if (key === 'w') {
    connection.write("Move: up");
    // console.log("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === 'c') {
    connection.write("Say: catch me if you can");
  }
  if (key === 'f') {
    connection.write("Say: faster!");
  }
  if (key === 't') {
    connection.write("Say: too slow!");
  }
};

module.exports = { setupInput };