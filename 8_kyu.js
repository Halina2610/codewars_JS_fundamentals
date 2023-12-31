//task 1

function greet() {
    return 'Hello World!'// Write a function "greet" that returns "hello world!"
}
greet();

//task 2
/*After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/
function findNeedle(haystack) {
  for (i = 0 ; i < haystack.length ; i++){ /*.length считает элементы в функции, чтобы определить позицию в массиве необходимо 
добавить 1 (i++)*/
    if(haystack[i]==="needle"){
      return "found the needle at position " + i
    }
  }
}

//task 3
/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.*/
var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}

//task 4
//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toLocaleUpperCase();
}

//task 5
/*We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?
Examples (input --> output):
123 --> "123"
999 --> "999"
-100 --> "-100"*/

function numberToString(num) {
  return String(num) // функция возвращает строку, чтобы вернуть число return Namber(str)
  // Return a string of the number here!
}

//task 6
//Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

//task 7
/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12*/
const quarterOf = (month) => {
 if (month <= 3) {
return 1
   }else if (month <= 6) {
return 2
   }else if (month <= 9) {
return 3
   }else{
     return 4
   } 
  // Your code here 
}

//task 8
/*Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'*/
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }else{
  return 'Hello guest';
}
return
}

//task 9
/*Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and 
including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/
function century(year) {
  let result = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) {
      result++;
    }// Finish this :)
  }
  return result;
}
//task 10
/*Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"*/

function bmi(weight, height) {
     let bmi = weight / (height * height)
  if (bmi <= 18.5 ) {
    return "Underweight"
    }else if(bmi <= 25.0 ) {
return "Normal"
  } else if(bmi <= 30.0 ){
    return "Overweight"
    } else {
      return "Obese"
    }
}

//task 11
/*Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0*/

function paperwork(n, m) {
   if (n <= 0){
    return 0
  }else if(m <= 0){
    return 0
  }else{
    return n * m
  }
}
//task 12
/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/
function removeExclamationMarks(s) {
  return s.replace(/!*/g, "");
}
//task 13
/*Take an array and remove every second element from the array. Always keep the first element and start removing with 
the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/
function removeEveryOther(arr){
  return arr.filter((item, index) => (index+1) % 2);   //фильтрует каждый второй элемент
  }

//task 14
/*You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values
of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/

function twoSort(s) {
return s.sort().shift().split('').join('***')
  //shift удаляет нулевой эл. из массива и возвращает его значение. Затем разбиваем массив, 
    //и возвращаем новый массив с пробелами между буквами ***
}
//task 15
/*This code does not execute properly. Try to figure out why*/

const multiply = (a, b)=>{
 return  a * b //добавила return
}

//task 16
/*Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"*/
function reverseWords(str){
  const words = str.split(' ');
    
  const reversedWords = words.reverse();
  const reversedStr = reversedWords.join(' ');
  return reversedStr; // reverse those words
}
//task 17
/*Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, 
and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her? 
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}*/
function greet(name){
    if(name === "Johnny")  {
      return "Hello, my love!";
      }else{
  return "Hello, " + name + "!";
        
      }
}
//task 18
/*I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements.
I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}*/

function arrayPlusArray(arr1, arr2) {
  const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
  const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
  return sum1 + sum2;
}


//task 19
/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are 
positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5*/

function isDivisible(n, x, y) {
  
  if ( n % x === 0 && n % y === 0) return true
  return false
}
//task 20
/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/
function getAverage(marks) {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  let average = Math.floor(sum / marks.length);
  return average;
}

//task 21
/*It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only
his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$"
(C#, C++, Ruby,
Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).*/
function bonusTime(salary, bonus) {
  let salaryBonus = salary*10
  if (!bonus) return "£" + salary.toString()
  return "£" + salaryBonus.toString()// your code here
}

//task 22
/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]*/
function monkeyCount(n) {
     const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
// your code here
}
//23 task
/*The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"*/

function getPlanetName(id) {
  var name;
  switch(id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
    default:
      name = 'Unknown';
  }
  
  return name;
}

//24 task
/*write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/

function stringy(size) {
  let result = '';
  for (let i = 0; i < size; i++) {
    result += i % 2 === 0 ? '1' : '0';
  }
  return result; // your code here 
}
//25 task
/*Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative 
"hello world" you can think of? What is a "hello world" solution you would want to show your friends?*/

const greet = () => {
  return "hello world!";
}



//26 task
/*DESCRIPTION:
Complete the function which takes two arguments and returns all numbers which are divisible by
the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]*/

const divisibleBy = (numbers, divisor) => {
return numbers.filter(number => number % divisor === 0)
}


//27 task
