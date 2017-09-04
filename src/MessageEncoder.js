morseCode = {
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


var MessageEncoder = {
  encodeMessage: function(message){
    var msg;

    // check if message is str
    msg = message.toUpperCase()
                     .split("");

    // Check if invalid chars

    return msg.map( function(char, index) {
      if (index == msg.length - 1) return morseCode[char];
      if (msg[index+1] == " ") return morseCode[char] + "/";
      if (msg[index] == " ") return "";
      return morseCode[char] + "|";
    }).join("");
  }
}


module.exports = MessageEncoder;
