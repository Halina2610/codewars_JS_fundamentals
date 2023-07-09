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
/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9*/
const areaOrPerimeter = function(l , w) {
  if ( l === w) {
    return l * w
    }else{
      return (l + w) * 2
      } //Return your answer
};

//task 13
/*Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it 
returns the wrong number.

Can you help me fix the function?*/
function addFive(num) {
  const total = num + 5
  return total
}
//task 14
/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to 
take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
FUNDAMENTALS
Suggest kata description edits*/

function getRealFloor(n) {
   if (n <= 0) {
     return n
     } else if (n >= 13) {
       return n-2;
       } else{
        return n - 1  
       }
}


//task 15
/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
ОСНОВЫ*/
function makeNegative(num) {
  if(num  === 0) return num;
  if (num > 0) return num * (-1);
  if (num < 0 ) return num;
// Code?
}

//task 16
/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]*/
function between(a, b) {
  let array = [];
  for (let i = a; i <= b; i++) array.push(i);
 
  return array;// your code here
}

//task 17
/*A hero is on his way to the castle to complete his mission. However, he's been told that the castle is 
surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no
idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and 
move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)*/

function hero(bullets, dragons){
if ( bullets >= (dragons * 2)) {
    return true
    }else{
  return false
  }//Get Coding!
}


//task 18
/*
Учебный JS №7: if..else и тернарный оператор
В JavaScript if..elseэто самый простой условный оператор, он состоит из трех частей: condition, statement1, statement2, например:

if (condition) statementa
else           statementb
Это означает, что если условие истинно, то выполнить оператор a, в противном случае выполнить оператор b. Если оператор a или 
оператор b состоит из более чем одной строки, вам нужно добавить {и }в начале и в конце операторов в JS, чтобы сохранить тот же
отступ на Python и поместить endв Ruby, где он действительно заканчивается.

Например, если мы хотим определить, является ли число нечетным или четным, мы можем написать такой код:

function oddEven(n){
  if (n % 2 == 1) return "odd number";
  else            return "even number";
}
Если есть более одного условия для оценки, мы можем использовать составной оператор if...else. Например:

function oldYoung(age){
  if (age < 16)      return "children"
  else if (age < 50) return "young man"   //use "else if" if needed
  else               return "old man"
}
Эта функция возвращает другое значение в зависимости от возраста параметра.

Выглядит очень сложно? Ну, JS и Ruby также поддерживают, ternary operatorи у Python тоже есть что-то подобное:

condition ? statementa : statementb
Условие и оператор разделены знаком «?», другой оператор разделен знаком «:» как в Ruby, так и в JS; в 
Python вы помещаете условие посередине двух альтернатив. Два приведенных выше примера можно упростить с помощью тернарного оператора:

function oddEven(n){
  return n%2 == 1 ? "odd number" : "even number";
}
function oldYoung(age){
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";
}
Задача:
Полная функция saleHotdogs/ SaleHotDogs/ sale_hotdogs, функция принимает 1 параметр: n, n — 
количество хот-догов, которые купит клиент, разные числа имеют разные цены (см. следующую таблицу),
возвращает, сколько денег покупатель потратит, чтобы купить это количество хот-догов.

количество хот-догов	цена за единицу (центы)
п < 5	100
n >= 5 и n < 10	95
п >= 10	90
Вы можете использовать if..else или тернарный оператор для его завершения.
*/

function saleHotdogs(n){
  if (n < 5 ) {
    return 100 * n 
  }else if (n >= 5 && n < 10) {
    return 95 * n 
  } else {
    return 90 * n 
  }
}

// Или
function saleHotdogs(n){
  return n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n 
}

//task 19
/*This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.*/

function checkForFactor (base, factor) {
  if (base % factor === 0) {
    return true
  }else{
    return false
    }// code here
}

//task 20
/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
let sum = 0; //значение по умолчанию (if there is nothing to sum, the sum is default to 0.)
 for(let i = 0; i < arr.length; i++) { //цикл 
   if(arr[i] >= 0) {
    sum += arr[i];
  }
 }
return sum;
}

//task 21
/*You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is
running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.*/


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
let myDistance = mpg * fuelLeft
if(myDistance >= distanceToPump){ 
   return true; 
  }else{ 
   return false 
}// TODO
};

//task 22
/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state 
the light should change to.

For example, when the input is green, output should be yellow.*/

function updateLight(current) {
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  //your code here!

}


//task 23
/*Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"*/

const rps = (p1, p2) => {
 if (p1 === p2) return "Draw!";
 if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper')) return "Player 1 won!";
 if ((p2 === 'rock' && p1 === 'scissors') || (p2 === 'paper' && p1 === 'rock') || (p2 === 'scissors' && p1 === 'paper')) return "Player 2 won!";  
};

//task 24
/*Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.*/

function booleanToString(b){
  return b.toString()//your code here
}

//task 25
/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend 
and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent 
the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).*/
function rentalCarCost(d) {
  let costDay = 40;
  let myCosts = d * costDay;
  if ( d < 3) {
    return myCosts;
   } else if ( d >= 7 ) {
    return myCosts - (50);
    } else if ( d >= 3 && d < 7) {
    return myCosts - (20);
 }else {
      return myCosts
      }
}// Your solution here

//task 26
/*DESCRIPTION:
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of 
the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a 
given number of petals. The number of petals is always greater than 0.*/

function howMuchILoveYou(nbPetals) {
   if(nbPetals%6 == 1) return ("I love you");
   if(nbPetals%6 == 2) return ("a little");
   if(nbPetals%6 ==3)return ("a lot");
   if(nbPetals%6 ==4) return ("passionately");
   if(nbPetals%6 == 5) return ("madly");
   return ("not at all");
  // your code
}

//task 27
/*Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"*/

function peopleWithAgeDrink(old) {
 if (old < 14) return "drink toddy"
 if (old < 18 && old >= 14) return "drink coke"
 if (old < 21 && old >= 18) return "drink beer"
 if (old >= 21) return "drink whisky"
     
}
//task 28
/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
function evenOrOdd(number) {
  if (number % 2) {
    return "Odd";
    }else{
      return "Even";
    } 
}
//task 29
/*Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.*/

function main (verb, noun){
  return verb + noun
}

//task 30
/*You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!*/

function rainAmount(mm){
    if (mm >= 40) return "Your plant has had more than enough water for today!";
    if(mm < 40) return 'You need to give your plant ' + ((mm-40)*-1) + 'mm of water';
}
