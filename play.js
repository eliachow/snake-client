
// const { connect } = require("./client");
// const { setupInput } = require("./input");
const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
connect();

setupInput();




