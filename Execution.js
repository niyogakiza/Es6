
function multiplyBy2(inputNumber) {
     return inputNumber * 2;
 }
 const outPut = multiplyBy2(10);
 const anotherOutPut = multiplyBy2(20);

 console.log(outPut);
 console.log(anotherOutPut);

 function squareNum(n) {
     return n * n;
 }
 const number = squareNum(100);
 console.log(number);

 const array = [1,2,3,4,5,6,7,8];
 const store = array.map((i) => {
     return i;
 });
 console.log(store);

 array.forEach((num) => {
     console.log(num);
});

 function copyArrayAndMultiplyBy2(array) {
     let output = [];
     for (let i = 0; i < array.length; i++){
         output.push(array[i] * 2);
     }
     return output;
 }
 const myArray = [1,4,6];
 let result = copyArrayAndMultiplyBy2(myArray);
 result.forEach((item) => {
     console.log(item);
 });

// function copyArrayAndManipulate(array, instructions) {
//     let output = [];
//     for(let i = 0; i < array.length; i++){
//         output.push(instructions(array[i]));
//     }
//     return output;
// }
// function divideByTen(input) {
//     return input / 10;
// }
// let result_3 = copyArrayAndManipulate([700, 56, 98, 109, 482, 940].divideByTen);
//  console.log(result_3);







