//Числовий тип
let num1 = 111.5, num2 = 1;

let text_num1 = '10'; //типу String

let num3 = Number(text_num1);  // 10
let num4 = Number(' 8   ');    // 8
let num5 = Number(' vv8  av ');  
let num6 = " 6 "/"3";


console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);  //NaN     NotANumber
console.log(num6);
//console.log(no_var);

//Стрічковий тип даних 

let text1 = "Hello";
let text2 = 'Hello';
let text3 = `H
             e
             l
             l
             o`;

console.log(text1);
console.log(text2);
console.log(text3);
console.log(`H ${num1+1}
             e
             l ${5+5+num2}
             l
             o`);

console.log("Line1\nLine2");