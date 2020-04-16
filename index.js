// Add your functions here

function map(array, operation) {
    let newArray = [];
    for (const element of array) {
        newArray.push(operation(element));
    };
    return newArray;
};

function reduce(array, operation, origin = true) {
    function digitize(element) {
        return Number.isInteger(element);
    };
    origin = ( (array.every(digitize) && !Number.isInteger(origin)) ? 0 : origin );
    let i = 0;
    for (i = 0; i < array.length; i++) {
        origin = operation(origin, array[i]);
    };
    return origin;
};