var morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--"
}

module.exports = function encodeMessage(message){
  var msgArray,
      validChars = Object.keys(morseCode);

  if (typeof message !== 'string') throw new Error('message must be an array');

  msgArray = message.toUpperCase()
                   .split("");

  // Check if invalid chars
  msgArray.forEach( char => {
    if (char == " ") return;
    if ( !validChars.find(c => c == char) ) {
      throw new Error('characters must be included within the morse code character list');
    }
  });

  // build morse code
  return msgArray.map( function(char, index) {
    if (index == msgArray.length - 1) return morseCode[char];
    if (msgArray[index+1] == " ") return morseCode[char] + "/";
    if (msgArray[index] == " ") return "";
    return morseCode[char] + "|";
  }).join("");
}
