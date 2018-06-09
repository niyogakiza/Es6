/*
* ForEach :
* */

const  colors = ['red', 'blue', 'green', 'orange'];

for(let i = 0; i < colors.length; i ++){
    console.log(colors[i]);
}

// use forEach
 colors.forEach((color) => {
     console.log(`colors from forEach helper: ${color}`);
 });
/*
* Complicated example in forEach
* */

const numbers = [76,564,65,44,4756,363,646];
// Create a variable to hold the sum
let sum = 0;
function adder(number){
    sum += number;
}
numbers.forEach(adder);
console.log(sum);

/*
* usage
* */
deleteEmail = () => {
    //selected emails to be deleted
};
const emails = [];
emails.forEach((email) => {
    deleteEmail(email);
});

/*
* Exercise
* */

const images = [
    {
        height: 10, width: 30
    },
    {
        height: 20, width: 90
    },
    {
        height: 54, width: 98
    }
];

const areas = [];

images.forEach((image) => {
    areas.push(image.height * image.width);
});

console.log(areas.toString());
