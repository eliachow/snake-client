// const { connect } = require("http2");
// const { stdin } = require("process");
const { keyInputs } = require('./constants');

// In the input module, create a variable in the outer-most scope called connection, which can default to undefined.
// Stores the active TCP connection object.

let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


// Create a function called handleUserInput and register it as the "data" callback handler for stdin.

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  //only handle input if the keyInput matches one of the keyInputs
  const keyInput = key;
  for (const key in keyInputs) {
    if (keyInput === key) {
      connection.write(keyInputs[keyInput]);
    }
  }
  
  //connection.write(keyInputs[key]);
};

module.exports = {
  setupInput,
};