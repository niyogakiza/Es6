
const numbers = [30, 60, 90];

let doubledNumbers = [];

for(let i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers.toString());
/*
* map
* */
let doubled = numbers.map((number) => {
   return number * 2;
});
console.log(`From map helper : ${doubled}`);

const cars = [
    {model: 'Jaguar', price: 100.000 },
    {model: 'Mercedes', price: 80000},
    {model: 'Jeep', price: 786555},
    {model: 'Maselati', price: 23473384}
];

let carsStore = [];
 cars.map((car) => {
    return carsStore.push(car);
});
console.log(carsStore);
