// Add your functions here
function map(arr, fun) {
    let otherArray = []
    arr.forEach(index => {
        otherArray.push(fun(index))
    })
    return otherArray
}

function reduce(arr, fun, start){
    let accum
    let init
    if (!!start) {
        accum = start
        init = 0
    } else {
        accum = fun(arr[0], arr[1])
        init = 2
    }
    for(init; init < arr.length; init++) {
        accum = fun(accum, arr[init])
    }
    return accum
}
