var nr1 = 10;
var nr2 = 37;
var str1 = '10';

//Greater than Less then equal
console.log('greater than -> ', nr2 > nr1);
console.log('greater than or equal -> ', nr2 >= nr1);
console.log('less than -> ', nr1 < nr2);
console.log('less than or equal -> ', nr1 <= nr2);
console.log('equal -> ', nr1 === nr2);
console.log('deep comparison -> ', nr1 === str1);
console.log('shallow comparison -> ', nr1 == str1);

console.log('deep comparison -> ', null === undefined);
console.log('shallow comparison -> ', null == undefined);

//And Or Nullish
console.log('and both true -> ', true && true);
console.log('and both false -> ', false && false);
console.log('first false -> ', false && true);
console.log('second false -> ', true && false);

console.log('first true -> ', true && 300);
console.log('first true -> ', true || 300);

// falsey
var myVar = '';
var myArray = [];
if(NaN) {
    console.log('truthy')
}
// truthy

//ternary operator
var myVar = [];
console.log(myVar)

myVar.length && myFunction(myVar);

var thisIsCamelCase;
