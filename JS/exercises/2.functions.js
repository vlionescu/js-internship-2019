/** Fibonacci **/

var nr1 = 1;
var nr2 = 1;

function fib() {
    for(let i = 0; i <= 10; i++) {
        var sum = nr1 + nr2;
        console.log(sum);
        nr1 = nr2;
        nr2 = sum;
    }
}

fib();
