// Add your functions here
let values = [true, false, true, true, false]
let nums = [5, 10, 2, 31, 6]

function map(sourceArray, func) {
     let newArr = [];
     for (let el of sourceArray) {
          newArr.push(func(el));
     }
     return newArr
};

function reduce(array, func, startingPoint) {
     let accum;
     let index;

     if (!!startingPoint) {
          accum = startingPoint;
          index = 0;
     } else {
          accum = func(array[0], array[1]);
          index = 2;
     }
     for (index; index < array.length; index++) {
          accum = func(accum, array[index])
     }
     return accum;
}

// let result = reduce(nums, num => {
//      return num
// })

// console.log(result);