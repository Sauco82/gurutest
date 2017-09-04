describe('MessageEncoder', function(){
  var {encodeMessage} = require('../src/MessageEncoder');

  it ('encodes messages', function() {
    expect(encodeMessage('I AM IN TROUBLE')).toEqual('../.-|--/..|-./-|.-.|---|..-|-...|.-..|.')
  })

})
