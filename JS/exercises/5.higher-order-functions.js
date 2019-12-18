//Frequency of each number inside an array
const names = ['gabi', 'iulia', 'diana', 'morandi', 'morandi', 'cristi', 'cristi', 'cristi'];

var result = {
    gabi: 1,
    iulia: 1,
    diana: 1,
    morandi: 2,
    cristi: 3,
};

const obj = {}
console.log(obj.a)
const frequency = names.reduce((acc, name) => {
    acc[name] ? acc[name]++ : acc[name] = 1;
    return {...acc};
}, {});
//
console.log(frequency);
