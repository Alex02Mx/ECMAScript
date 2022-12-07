const array = [1,2,3,4,5,6,7,[2,3,4,5,[5,4,6,7]]]

console.log(array.flat(2));

//----------------flatMap----------------------

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));


