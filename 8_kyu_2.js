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
/*Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"*/

function nameShuffler(str){
  return str.split(" ").reverse().join(" ") // метод .split(" ") разбивает строку на массив, .reverse() - меняет порядокна обратный, .join(" ") - соединияет строку в массив
   //Shuffle It
}

//Solutions 8
/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.*/

function squareSum(numbers) {
    let result = 0
    numbers.forEach( number => {
        result += (number * number)
    })
    return result
}

//Solutions 9
/*Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234*/

const stringToNumber = function(str){
 return Number(str); // put your code here
}

//Solutions 10
/*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

function basicOp(operation, value1, value2)
{ 
  if (operation == "*") return value1 * value2;
  if (operation == "/") return value1 / value2;
  if (operation == "+") return value1 + value2;
  if (operation == "-") return value1 - value2;
  // Code
}

//Solutions 11
/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

function hoopCount (n) {
   if (n < 10) return "Keep at it until you get it";
  if (n >= 10) return "Great, now move on to tricks";//your code goes here    
}

//Solutions 12
/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".*/

function switchItUp(number){
switch (number) {
    case 0  :
    return "Zero"; 
    break;
    case 1 :
    return "One"; 
    break;
    case 2 :
    return "Two"; 
    break;
    case 3 :
    return "Three"; 
    break;
    case 4  :
    return "Four"; 
    break;
    case 5  :
    return "Five"; 
    break;
    case 6  :
    return "Six"; 
    break;
    case 7  :
    return "Seven"; 
    break;
    case 8  :1
    return "Eight"; 
    break;
    case 9  :
    return "Nine"; 
    break;
    default:
    return ("Sorry")
}
    //Write your own Code!
}

//Solutions 13
/*Bob needs a fast way to calculate the volume of a cuboid with three values: 
the length, width and height of the cuboid. Write a function to help Bob with this calculation.*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
   let cuboid;
    return cuboid = length * width * height;// your code here
  }
}

//Solutions 14
/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent 
ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/

function powersOfTwo(n){
    let arr = [];
  for(let i=0; i<=n; i++)
    arr[i] = 2**i;
  return arr;
}

//Solutions 15
/*Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]*/

function stringToArray(string){
  return string.split(" ") 
	// code code code

}

//Solutions 16
/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!*/

function betterThanAverage(classPoints, yourPoints) {
  let result = (classPoints.reduce((sum,current)=>sum+current,0)+ yourPoints)/classPoints.length+1;
  if (yourPoints > result) return true;
  if (yourPoints < result) return false;
    // Your code here
} 


//Solutions 17
/*In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]*/

function reverseList(list) {
return list.reverse(" ")
}
//Solutions 18
/*Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.*/


function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twiceAs = dadYearsOld - sonYearsOld * 2;
return twiceAs < 0 ? twiceAs * (-1) : twiceAs;// your code here
}

//Solutions 19
/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/

function solution(str){
  return str.split('').reverse().join(''); 
  }

//Solutions 20
/*Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" 
(hence the name of this Kata). The exclusive or evaluates two booleans.
It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) 
where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly 
one of the two expressions evaluate to true, false otherwise.*/

function xor(a, b) {
  if (a == true && b == false) return true;
  if (a == false && b == true) return true;
  return false;// TODO: Program Me
}
  

//Solutions 21
/**/
//Solutions 22
/**/
//Solutions 23
/**/
//Solutions 24
/**/
//Solutions 25
/**/
//Solutions 26
/**/
//Solutions 27
/**/
//Solutions 28
/**/
//Solutions 29
/**/
//Solutions 30
/**/
