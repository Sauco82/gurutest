describe('encodeMessage', function(){
  var encodeMessage = require('../src/encodeMessage');

  it ('encodes messages', function() {
    var result = encodeMessage('I AM IN TROUBLE'),
        expectedResult = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';

    expect(result).toEqual(expectedResult)
  })

  it ('encodes and obfuscates messages', function() {
    var result = encodeMessage('I AM IN TROUBLE', true),
        expectedResult = '2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1';

    expect(result).toEqual(expectedResult)
  })

  it ('throws an error when the message is not a string', function(){
    expect(encodeMessage).toThrow('message must be an array')
  })

  it ('throws an error when characters are invalid', function(){
    expect( ()=> encodeMessage("@") ).toThrow('characters must be included within the morse code character list')
  })

})
