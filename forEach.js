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

