var fs = require('fs');
var encodeMessage = require('../src/encodeMessage');

var obfuscate = process.argv[2] === "obfuscate";

var messages = fs.readFileSync('assets/message.txt', 'utf8').split('\n');

messages.forEach( m => console.log(encodeMessage(m, obfuscate)) );
