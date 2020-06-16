// Add your functions here 
function map(sourceArray,callbackFunction) {
    return sourceArray.map(callbackFunction)
}

function reduce(sourceArray, callbackFunction, startingPoint) {
    let memo
    let i = 0
    if (!startingPoint) {
        memo = sourceArray[0]
        i = 1
    }
    else {
        memo = startingPoint
    }
    for (i; i < sourceArray.length; i++) {
        // let sum += sourceArray[i]
            memo = callbackFunction(sourceArray[i], memo)
      }
    return memo
};

// function reduce(sourceArray, callbackFunction, startingPoint=0) {
//     return sourceArray.reduce(callbackFunction,startingPoint)
// };

// sourceArray = [1,2,3]
// callbackFunction = function(e, memo){return e + memo}
// resultshouldbe = 6