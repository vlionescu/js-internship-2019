const lamborghiniGallardo = {
    producedIn: 2003,
    hp: '520 hp',
    topSpeed: '196 mph',
    '0-60 mph': 3.9,
    currentSpeed: 0,
    start: () => console.log('engine has started'),
    accelerate: function() {
        this.currentSpeed +=10;
        console.log(this.currentSpeed + ' mph');
    },
    equippedWith: ['nox', 'ac'],
    interior: {
        material: 'leather',
        panels: 'mahogany wood',
    }
};

lamborghiniGallardo.start();
lamborghiniGallardo.accelerate();
lamborghiniGallardo.accelerate();
lamborghiniGallardo.accelerate();
lamborghiniGallardo.accelerate();
console.log(lamborghiniGallardo.producedIn);
console.log(lamborghiniGallardo['0-60 mph']);

//For in
console.log('----------------------------');
for(let key in lamborghiniGallardo) {
    console.log(key, lamborghiniGallardo[key])
}

//Object keys
console.log('----------------------------');
console.log('keys -> ', Object.keys(lamborghiniGallardo));

//Object values
console.log('----------------------------');
console.log('values -> ', Object.values(lamborghiniGallardo));

//Object entries
console.log('----------------------------');
console.log('entries -> ', Object.entries(lamborghiniGallardo));

//Copying the object
console.log('----------------------------');

const fastCar = lamborghiniGallardo;
fastCar.currentSpeed = 100;
console.log(lamborghiniGallardo.currentSpeed);
const fasterCar = Object.assign({}, lamborghiniGallardo);

fasterCar.currentSpeed = 200;
console.log(lamborghiniGallardo.currentSpeed);

const fastestCar = {...lamborghiniGallardo};
fastestCar.currentSpeed = 300;
console.log(lamborghiniGallardo.currentSpeed);

fastestCar.interior.material = 'plastic';
console.log('shallow copy -> ', lamborghiniGallardo);

/** solutions: function, JSON */
JSON.parse();
JSON.stringify();
