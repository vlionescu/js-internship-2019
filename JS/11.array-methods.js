const arr = [1, 2, 3, 4, 5];
const nr = 2;

//For Each
arr.forEach((elem) => console.log('for each elem -> ', elem));

//Map
const doubledArr = arr.map((elem) => elem * 2);
console.log('map -> ', doubledArr, arr);

//Filter
const evenValuesArr = arr.filter((elem) => elem % 2 === 0);
console.log('filter -> ', evenValuesArr);

//Reduce
const sum = arr.reduce((acc, elem) => {
    console.log(acc);
    acc += elem;
    return acc;
}, 0);
console.log('reduce -> ', sum);

//Every
const ages = [18, 22, 77, 56];
let areAllAgesLegalToDrink = ages.every((age) => age > 18);
console.log('every -> ', areAllAgesLegalToDrink);

ages.push(17);
areAllAgesLegalToDrink = ages.every((age) => age > 18);
console.log('every -> ', areAllAgesLegalToDrink);

//Flat
const arr1 = [1, 2, [3, 4]];
console.log('flat -> ', arr1.flat());

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log('flat -> ', arr2.flat());
console.log('flat -> ', arr2.flat(9));

//Includes
const names = ['john', 'doe', 'sam', 'rick'];
console.log('includes -> ', names.includes('rick'));
console.log('includes -> ', names.includes('will'));

