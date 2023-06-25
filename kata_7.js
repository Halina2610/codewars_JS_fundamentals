//task 1
/*The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your 
job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock*/
function sayHello(name) {
   return "Hello, " + name;
}

//task 2
/*Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]*/

function greet(name){
  return "Hello, " + name + " how are you doing today?"//your code here
}

//task 3
/*Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.*/ 

function getGrade (s1, s2, s3) {
   let score = (s1 + s2 + s3) / 3; // средний бал
 if (90 <= score && score  <= 100){ //диапазон
   return "A"
 }else if (80 <= score && score  <= 90){
   return "B"
           }else if (70 <= score && score  <= 80){
   return "C"
                     }else if (60 <= score && score  <= 70){
   return "D"
   }else{
   return "F"
   }// Code here
}
//task 4
/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/
function simpleMultiplication(number) {
  if (number % 2 === 0) {
     return number * 8
     } else {
       return number * 9
     }// your code........
}


//task 5
/*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". 
The first character in the string is always a number.*/

function getAge(inputString){
 return parseInt(inputString); // метод parseInt() возвращает целое число из строки!
}

//task 6
/*Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!*/


function arithmetic(a, b, operator){
  if (operator === 'add') return a + b;
  if (operator === 'subtract') return a - b;
  if (operator === 'multiply') return a * b;
  if (operator === 'divide') return a / b;
  
  //your code here!
}

//task 7
/**/
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
      // final grade
}

//task 8
/*Task
Please refer to two example above and write your first JS function.

mission 1:

use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

mission 2:

use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

mission 3:

type the console.log() in the next line (don't forget to put the str in the parentheses).

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

Series*/
function helloWorld(){
  const str="Hello World!"
  console.log(str)
  }//refer to the example and write your first JS function

//task 9
/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, 
the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str){
  return str.slice(1,-1)//метод удаляет выбранные элементы встроке. 

};

//task 10
/*Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]*/

function maps(x){
return x.map(i => i * 2) //вернет все удвоенные числа. Если изменить оператор и число можно все числа уменьшить вдвое, отнять или добавить число. 
}

//task 11
/*Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17*/
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;// code goes here
}
//task 12
//task 13
//task 14
//task 15
//task 16
//task 17
//task 18
//task 19
//task 20
