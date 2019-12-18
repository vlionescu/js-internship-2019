var foo = 1;

(function() {
    var foo = 2;
    console.log(foo);
    var baz = 3;
    bar = 4;
})();

console.log(foo);
console.log(bar);
// console.log(baz);
