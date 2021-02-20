// Add your functions here

function map(arr, fn) {
    return arr.map (element => fn(element))
}

function reduce(arr, fn, start) {
    let result = (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1;

    for (; i < arr.length; i++) {
        result = fn(arr[i], result);
    }

    return result;
}

// function reduce(arr, reducer, initialValue) {
//  let total = (!!initialValue) ? initialValue : 0
//
//     for (const val of arr) {
//         total = reducer(val, total);
//     }
//     return total;
// }