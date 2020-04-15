function map(sourceArray, fn){
 let mappedArray = [] 
 sourceArray.forEach(index => {
   mappedArray.push(fn(index))
 })
 return mappedArray
}

function reduce(sourceArray, fn, startingPoint) {
    let accumulator
    let i

    if (!!startingPoint) {
        accumulator = startingPoint
        i = 0
    } else {
        accumulator = fn(sourceArray[0], sourceArray[1])
        i = 2
    }
    for(i; i < sourceArray.length; i++) {
        accumulator = fn(accumulator, sourceArray[i])
    }
    return accumulator
} 
 

