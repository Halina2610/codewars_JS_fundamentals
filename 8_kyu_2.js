//Solutions 1
/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5*/

function litres(time) {
 return Math. floor(time * 0.5)
}

//Solutions 2
/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2){
   if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true;
    }else if(flower1 % 2 !== 0 && flower2 % 2 === 0){
        return true;
    }else{
      return false
  } // moment of truth
} 

//Solutions 3
/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"*/


function sumStr(a,b) {
  a = Number(a)
  b = Number(b)
  let result = a + b
  return String(result)
}

//Solutions 4
/*Now you have to write a function that takes an argument and returns the square of it.*/

function square(number) {
   return number * number;
}
// Write the "square"-function here

//Solutions 5
/*Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

var summation = function (num) {
let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
  // Code here
}

//Solutions 6
/*Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".8*/

function problem(x){
  if (typeof(x) === 'number') {
   return x * 50 + 6//your code here
  }else {
    return "Error"
  }
}

//Solutions 7
/**/
//Solutions 8
/**/
//Solutions 9
/**/
//Solutions 10
/**/
//Solutions 11
/**/
//Solutions 12
/**/
//Solutions 13
/**/
//Solutions 14
/**/
//Solutions 15
/**/
//Solutions 16
/**/
//Solutions 17
/**/
//Solutions 18
/**/
//Solutions 19
/**/
