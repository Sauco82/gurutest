var encodeMessage = require('../src/encodeMessage');

var message = process.argv.slice(2).join(" ");

console.log(encodeMessage(message));
