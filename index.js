function map(arr, fn) {
    let mappedArr = []
    arr.map(i => {
        mappedArr.push(fn(i))
    })
    return mappedArr
}

function reduce(arr, fn, start) {
    let a
    let b
    if (!!start) {
        a = start
        b = 0
    } else {
        a = fn(arr[0], arr[1])
        b = 2
    }
    for (b; b < arr.length; b++) {
        a = fn(a, arr[b])
    }
    return a
}