//  Q Node. 1:    Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

// this line take number for user and convrt from string to nubmer
// let num1 = parseInt(prompt("Enter first number:"))
// let num2 = parseInt(prompt("Enter Second number:"))
// if (num1 > num2) {
//   console.log("The larger number is " + num1)
// } else if (num2 > num1) {
//   console.log("The larger number is " + num2)
// } else {
//   console.log("The two numbers are equal.")
// }


// Q No 2:   Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

// let num = parseInt(prompt("Enter a number."))
// if(num > 0)
// {
//     alert("The Sign is +")
// }
// else if(num < 0)
// {
//     alert("The Sign is -")
// }
// else if(num === 0)
// {
//     alert("The number is Zero which has not even nor odd.");
// }


// Q Node. 3:     Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

// let number1 = parseInt(prompt("Enter first number: "))
// let number2 = parseInt(prompt("Enter second number: "))
// let number3 = parseInt(prompt("Enter third number: "))
// let number4 = parseInt(prompt("Enter fourth number: "))
// let number5 = parseInt(prompt("Enter fifth number: "))

// let largest = number1; 

// if (number2 > largest) {
//   largest = number2
// }

// if (number3 > largest) {
//   largest = number3
// }

// if (number4 > largest) {
//   largest = number4
// }

// if (number5 > largest) {
//   largest = number5
// }
// console.log("The largest number is " + largest)


// Q No. 4:     Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// for (let i = 0; i <= 15; i++) {
//     if (i === 0){
//         document.write("Zero is not an even nor odd.  ")
//     }
//     else if (i % 2 === 0) {
//         document.write(i + " is even   ");
//     }
//      else {
//         document.write(i + " is odd   ");
//     }
// }


// Q No. 5 :    Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.

// let paper1 = parseInt(prompt("Enter first paper marks: "));
// let paper2 = parseInt(prompt("Enter second paper marks: "));
// let paper3 = parseInt(prompt("Enter third paper marks: "));
// let paper4 = parseInt(prompt("Enter forth paper marks: "));
// let paper5 = parseInt(prompt("Enter fifth paper marks: "));
// let total = paper1 + paper2 + paper3 + paper4 + paper5
// let avg=Math.round(total/5)
// let grade = ""

// if (avg >= 90){
//     grade = "A"
// }
// else if (avg >= 88){
//      grade = "B"
// }
// else if (avg >= 70){
//      grade = "C"
// }
// else if (avg >= 60){
//     grade = "D"
// }
// else if (avg < 60){
//      grade = "F"
// }

// console.log("Total Marks : "+ total+"\nAvrage mrks : "+avg+"\nGrade : "+grade)


// Q No. 6 :    Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }


//   Q No. :    Write a JavaScript program to construct the following pattern, using a nested for loop.


// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
  