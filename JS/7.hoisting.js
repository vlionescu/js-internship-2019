var nr = 100;

myFunction();

function myFunction() {
    console.log('from my function -> ', myOtherFunction);
    // var nr = 200;
    console.log(nr) // looks for local scope before going up
}

var nr = 300;

const myOtherFunction = function () {
    console.log(nr++);
};
myOtherFunction();

var str = 'ana are mere';
console.log('final output -> ', nr, str);











// var nr;
// var str;
// const myOtherFunction;
//
// function myFunction() {
//     var nr;
//     console.log('from my function -> ', nr,  str);
//     nr = 200;
//     console.log(nr);
// }
//
// myFunction();
// nr = 300;
//
// myOtherFunction();
// myOtherFunction = function () {
//     console.log(nr++);
// };
//
// str = 'ana are mere';
// console.log('final output -> ', nr, str);
