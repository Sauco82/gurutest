describe('encodeMessage', function(){
  var encodeMessage = require('../src/encodeMessage');

  it ('encodes messages', function() {
    var result = encodeMessage('I AM IN TROUBLE'),
        expectedResult = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';

    expect(result).toEqual(expectedResult)
  })

  it ('throws an error when the message is not a string', function(){
    expect(encodeMessage).toThrow('message must be an array')
  })

  it ('throws an error when characters are invalid', function(){
    expect( ()=> encodeMessage("@") ).toThrow('characters must be included within the morse code character list')
  })

})
