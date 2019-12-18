var string = 'Ana are mere';

//Length
console.log('length -> ', string.length);

//Character
console.log('Second character', string[1]);
console.log('Second character', string.charAt(1));

//Addition
string = string + ' si pere si iarasi mere'; // addition to string

//IndexOf
console.log('indexOf -> ', string.indexOf('mere'));
console.log('indexOf -> ', string.indexOf('cirese'));

console.log(string.includes('miere'));

//Slice
console.log('slice -> ', string.slice(4, 7));
console.log('slice -> ', string.slice(4));
console.log('slice -> ', string.slice(-11));
console.log('slice -> ', string.slice(-19, -15)); //calculate from the end

//Split
const text = 'ana are mere';
console.log('split -> ', text.split(' '));
//Replace
console.log('replace -> ', string.replace('mere', 'cirese'));

//Uppercase & Lowercase
console.log('uppercase -> ', string.toUpperCase()); // does not mutate the original string
console.log('lowercase -> ', string.toLowerCase());

//Trim
var stringToTrim = '               Ana nu mai are      mere         ';
console.log('trim -> ', stringToTrim.trim());

//Template string ES6
var price1 = 100;
var price2 = 200;
var oldString = '\nDear mr Smith,\nYour total for the products is ' + (price1 + price2) + '\nThank you.';
console.log('old string -> ', oldString);

var templateString = `
Dear mr Smith,
Your total for the products is ${price1 < 90 ? (price1 + price2) : price2}
Thank you.
`;
console.log('template string -> ', templateString);


