// Add your functions here
function map(arr, fn) {
    let mappedArr = []
    arr.forEach(index => {
        mappedArr.push(fn(index))
    })
    return mappedArr
}

function reduce(arr, fn, startingPt) {
    let acc
    let ind

    if (!!startingPt) {
        acc = startingPt
        ind = 0
    } else {
        acc = fn(arr[0], arr[1])
        ind = 2
    }
    for(ind; ind < arr.length; ind++) {
        acc = fn(acc, arr[ind])
    }
    return acc
}
