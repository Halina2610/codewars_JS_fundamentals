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
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

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
// перешла на 7 kyu