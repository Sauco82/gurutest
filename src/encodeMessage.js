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

function obfuscateMorse(morseString) {
  var charArray,
      charCount,
      lastChar;

  if (!morseString) return;

  charArray = morseString.split("")

  charCount = charArray.reduce( function(acc, char) {
    var last = acc.length - 1;

    if (!acc.length || char != acc[last].char) {
      acc.push({count: 1, char: char});
      return acc;
    }

    acc[last].count++
    return acc;
   }, []);

  return charCount.map( c => c.char == "-" ? String.fromCharCode(64 + c.count) : c.count ).join("");
}

module.exports = function encodeMessage(message, obfuscate = false){
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
    var encodedChar = obfuscate ? obfuscateMorse(morseCode[char]) : morseCode[char];

    if (index == msgArray.length - 1) return encodedChar;
    if (msgArray[index+1] == " ") return encodedChar + "/";
    if (char == " ") return "";
    return encodedChar + "|";
  }).join("");
}
