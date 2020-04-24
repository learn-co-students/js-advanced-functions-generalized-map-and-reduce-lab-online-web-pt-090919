// Add your functions here
// function map(array, func){
//   return array.map(num => num*-1);
// } 

function map(array, func) {
  let newArray = [];
  for (let value of array) {
    newArray.push(func(value));
  }
  return newArray;
}

function reduce(array, func, startValue) {
     let value;
     let index;

     if (!!startValue) {
          value = startValue;
          index = 0;
     } else {
          value = func(array[0], array[1]);
          index = 2;
     }
     for (index; index < array.length; index++) {
          value = func(value, array[index])
     }
     return value;
}