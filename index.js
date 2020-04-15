// my own map-like methods
  // returns an array with all values made negative
  // map returns an array with the original values
  //returns an array with the original values multiplied by 2
  // returns an array with the original values squared
// transforms correctly:
function map(array, callbackFn) { //callback e.g.: function(a){ return a * a }
  const newArr = [];
  for (const ele of array) {
    newArr.push(callbackFn(ele))
  }
  return newArr;
}

// my own reduce-like methods
  // returns a running total when given/ not given a starting point
  // returns true when all values are truthy
  // returns false when any value is falsy
  // returns true when a true value is present
  // returns false when no true value is present
function reduce(array, callbackFn, startingPt) {
  let memo;
  let idx;

  if (!!startingPt) {
    memo = startingPt;
    idx = 0
  } else { 
    //memo/ aggregator is initially set as first ele
    memo = array[0]
    idx = 1
  }

  for (idx; idx < array.length; idx++){
    memo = callbackFn(memo, array[idx]);
  };
     
  return memo;
}

// example: 
  // reduce([1,2,3], function(e, memo){return e + memo})
  // sourceArray = [1,2,3]
  //     startingPoint = 100
  //     reduce(sourceArray, function(e, memo){return e + memo}, startingPoint)) // 106