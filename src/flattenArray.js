module.exports = function(arrayToFlatten) {
  if (arrayToFlatten.constructor !== Array) {
    throw new Error("argument must be an array");
  }

  function recursivelyFlatten(acc, current){
    if (current.constructor !== Array) return acc.concat(current);

    return current.reduce(recursivelyFlatten, acc);
  }

  return recursivelyFlatten([], arrayToFlatten);
}
