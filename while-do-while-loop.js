// 1.Print out series 1,4,9,16....,n

let number=Number(prompt('Enter The Number='));
    console.log(typeof number);

// for(let w=1; w<=number;w++){
//     console.log(w*w);
// }

// 2.print out series 1,4,3,16,5,...,n

// let number = Number(prompt('Enter number: '));
// console.log(typeof number)

// let i=1;

// while(i<=number){
//     if (i%2==1) {
//         console.log(i);
//     }
//     else{
//         console.log(i*i);
//     }
//     i++;
// }


// 3.print out series 1,2,4,8,16,...n
 
let value = 1;

while (value <= number) {
    console.log(value);
    value *= 2; 
}


// 4.Print out series 1,4,12,32,80,...,n
// let num=1;  
// for (let i = 1; i<=number; i++) { 
//     console.log(num*i);
//         num*=2;
// }



// 5.Find the sum of numbers from 1 to 100
// let sum=0;
// for(let d=1; d<=100; d++){
//     sum +=d;
// }
// console.log('The sum of numbers from 1 to 100 is:',sum);

//6.Find the factorial of a given number.
// let factorial = 1;
//   for (let k = 2; k <= number; k++) {
//     factorial *= k;
// }
// console.log("The factorial of "  + number +  "is= "  + factorial);

// 7.Program to Print Fibonacci Series up to n

// let n = 100; 
// let a = 0, b = 1, nextTerm;

// console.log("Fibonacci Series:");

// for (let a = 1; a <= n; a++) {
//     console.log(a);
//     next = a + b;
//     a = b;
//     b = next;
// }


// 8. Program to Find the Sum of Digits of a Number

// let sum = 0;
// let num = Math.abs(number); 

// while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }

// console.log("Sum of digits of " + number + " is: " + sum);


