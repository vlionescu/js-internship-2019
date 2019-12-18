//This in simple function calls
function foo () {
    console.log(this === window);
}

foo();

//Object constructors
function Car(model, price) {
    this.model = model;
    this.price = price;

    this.displayModelAndPrice = function() {
        console.log(this.model, this.price);
    };
}

const car1 = new Car('avantador', 300000);
car1.displayModelAndPrice();
const car2 = new Car('clio', 3000);
car2.displayModelAndPrice(); // what comes before the dot

const fn = car1.displayModelAndPrice;
console.log('global scope -> ', fn());
window.model = 'Batmobile';
console.log('global scope -> ', fn());

//Bind, call
console.log('---------------');
console.log('call -> ');
car1.displayModelAndPrice.call(car2);
car1.displayModelAndPrice();
console.log('---------------');
console.log('bind -> ');
const boundToCar2Display = car1.displayModelAndPrice.bind(car2);
boundToCar2Display();
console.log('---------------');
//Arrow functions

const person = {
    name: 'John',
    income: 300,
    logNameAndIncome: function() {
        console.log(this.name, this.income);
    },
    updateIncome: function () {
        const inflation = 2;
        function addInflation() {
            console.log(this.income);
            this.income = this.income + (inflation * this.income) / 100;
        }

        addInflation();
    }
};

person.updateIncome(); // self = this, transform to arrow
person.logNameAndIncome();

person.logNameAndIncome(); //arrow function

//
