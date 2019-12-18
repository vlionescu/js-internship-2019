const arr = [1, 2, 3, 4, 5];

//Bad arrays
const badArray = ['ana', 2, {}, null, undefined];
const worseArray = [1];
worseArray[50] = 2;
console.log('worse array -> ', worseArray);

//Add/Remove elements
arr.push(6);
console.log('push -> ', arr);
arr.pop();
console.log('pop -> ', arr);
arr.unshift(0);
console.log('unshift -> ', arr);
arr.shift();
console.log('shift -> ', arr);

//Concat
const arr2 = [6, 7, 8, 9, 10];
console.log('concat -> ', arr.concat(arr2));

//Splice
console.log('splice -> ', arr.splice(0, 3), arr);

//Slice
console.log('slice -> ', arr2.slice(0, 3), arr2);

//Spread Operator
const arr3 = [1, 2, 3, ...arr, ...arr2];
console.log('spread -> ', arr3);

//Destructuring
const positionalVector  = [23, 76, -4];
const [xAxis, yAxis, zAxis] = positionalVector;
console.log('destructuring -> ', xAxis, yAxis, zAxis);

const positions = [2, 7, 5, 9, 23];
const [firstPos, ...restPos] = positions;
console.log('advanced destructuring -> ', firstPos, restPos);

//For of
for(let item of arr2) {
    console.log('item -> ', item);
}

