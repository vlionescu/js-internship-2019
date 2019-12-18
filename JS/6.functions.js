//function declaration function expression
function myFunc () {
    return 'this is a function';
}

const myVar = {};
console.log(myVar);

const myOtherFunction = function () {
    console.log('first step');
    return 'this is another function';
    console.log('second step');
};

const arrowFunc = nr => 'this is an arrow function';
console.log(arrowFunc());
//iife
(function() {
    console.log('this is an iife'); // used for scoping variables
}());

