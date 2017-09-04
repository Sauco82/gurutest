describe('flattenArray', function(){
  var flattenArray = require('../src/flattenArray');

  it('should flatten Arrays', function(){
    var arr = [1,[2],[3,4,[5]]],
        result = flattenArray(arr),
        expectedResult = [1,2,3,4,5];

    expect(result).toEqual(expectedResult);
  });

  it('should keep left to right reading order regardless of the nesting', function(){
    var arr = [1,[2],[3,4,[5]]],
        arr2 = [[1,[2,[3]],[4],5]],
        expectedResult = [1,2,3,4,5];

    expect(flattenArray(arr)).toEqual(expectedResult);
    expect(flattenArray(arr2)).toEqual(expectedResult);
  })

  it('should throw an error if something different than an array is provided', function(){
    var notAnArray = 'potato';

    expect(()=> flattenArray(notAnArray)).toThrow('argument must be an array')
  })
})
