var nr1 = 123.5;
var nr2 = 76.6;

//Operators
console.log('addition -> ', nr1 + nr2); // + addition
console.log('subtraction -> ', nr1 - nr2); // - subtraction
console.log('multiplication -> ', nr1 * nr2); // * multiplication
console.log('division -> ', nr1 / nr2); // / division
console.log('rest -> ', nr1 % 10); // % rest

//Math object
console.log('Math.max -> ', Math.max(nr1, nr2));
console.log('Math.min -> ', Math.min(nr1, nr2));
console.log('Math.ceil -> ', Math.ceil(nr1));
console.log('Math.floor -> ', Math.floor(nr1));
console.log('Math.round -> ', Math.round(nr1));

//Random
console.log('Math.random -> ', Math.random() * 10);

//NaN
console.log('NaN -> ', nr1 / 'ana'); // NaN
console.log(typeof(nr1));
console.log(typeof NaN);

//Infinity
console.log('Infinity', nr1 / 0);
console.log('Negative infinity', -Infinity);

//TypeOf
console.log(typeof nr1);
console.log(typeof NaN);
console.log(typeof Infinity);

