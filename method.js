//  how to copy an array
var a =[ 1 , 2 , 3 , 4 ]
// push - Adds one or more elements to the end of an array.
a.push(4 , 8)
console.log(a) // [ 1 , 2 , 3 , 4 , 4, 8]
//  pop -  Removes the last element from an array.
a.pop()
console.log(a)
// [ 1 , 2 , 3 , 4 , 4]
//  shift -  Removes the first element from an array.
a.shift()
console.log(a)
// [2 , 3 , 4 , 4 ]
//  unshift - Adds one or more elements to the beginning of an array
a.unshift(1 , 9)
console.log(a);
// [ 1 , 9 , 2 , 3 , 4 , 4 ]
// slice - retuns a shallow copy of a portion of an array into a new array
var b = a.slice()
console.log(b);
// [ 1 , 9 , 2 , 3 , 4 , 4 ]
var b = a.slice(1,3)
// here 1 and 3 are the index not the elements 
console.log(b, 'ge');
//  [9, 2] 
// splice - adds or removes elements from an array
a.splice(1, 2)
console.log(a);
// [1, 2, 3, 4, 4]
// concat -Merges two or more arrays.
var c = a.concat([5, 6, 7])
console.log(c);
// [1, 2, 3, 4, 4, 5,6,7]
// map - Creates a new array by applying a function to every element.

// var a =[1, 2, 3, 4, 4]
const double = a.map(i=>i*5)
console.log(double);
// [5, 10, 15, 20, 20]
// filter -Creates a new array with elements that pass a test function or conditions or criteria 
const even = a.filter(i=>i%2==0)
console.log(even);
// [2, 4, 4]
// reduce -Reduces the array to a single value by applying a function cumulatively.

const sum = a.reduce((x,y)=>x+y,0)
console.log(sum);
// 12
// x (accumulator): This holds the accumulated result of the operation as you iterate over the array.
// y (current value): This represents the current element of the array that is being processed in the iteration.
// 0: This is the initial value for x (the accumulator). If you don’t provide an initial value, reduce() will use the first element of the array as the initial value and start the iteration from the second element.

// findIndex - Returns the index of the first element that passes a test function.
const index = a.findIndex(i=>i>2)

console.log(a,index);