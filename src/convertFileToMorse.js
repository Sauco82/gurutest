var fs = require('fs');
var encodeMessage = require('../src/encodeMessage');

var message = fs.readFileSync('assets/message.txt', 'utf8').split('\n')[0]; //Get only first line since newlines are anyways illegal
    encodedMessage = encodeMessage(message);

console.log(encodedMessage);
