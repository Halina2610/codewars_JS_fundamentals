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
/*Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"*/


function noSpace(x){
return x.split(' ').join(''); // .split вернет упорядоченный массив, .join('') вернет новую строку
	// можно заменить на  return x.replaceAll(' ', ''); все совпадения " "заменяет на "", передать можно любое значение 
}
function noSpace(str){

return str.replace(/\s/g, '');
}

//.replace(/\s/g, '') — это код для удаления пробелов в строке — \s — это
// регулярное выражение для «пробелов», а g — это «глобальный» флаг, означающий совпадение ВСЕХ \s (пробелов).

//Solutions 22
/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59*/
function past(h, m, s){
 return (h * 3600000 + m * 60000 + s * 1000) //#Happy Coding! ^_^
}


//Solutions 23
/*We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural
should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is 
plural (not one of something).

All values will be positive integers or floats, or zero.*/
function plural(n) {
    if (n == 1) return false;
  return true;// ...
}

//Solutions 24
/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine 
('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine.
In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e.
each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.*/

function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U")// create a function which returns an RNA sequence from the given DNA sequence
}


//Solutions 25
/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata*/

 function shortcut (string) {
  return string.replaceAll(/[aeiou]/gi, "");
}

//Solutions 26
/*The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog.
If this one is an alligator (case-insensitive) return small otherwise return wide.*/

function mouthSize(animal) {
  if (animal == 'alligator' || animal == 'ALLIGATOR') return 'small';
  return 'wide';// code here
}

//Solutions 27
/*Complete the function which converts hex number (given as a string) to a decimal number.*/

function hexToDec(hexString){
 return parseInt(hexString, 16) //your code here
}

//Solutions 28
/*Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. 
If you're unsure about the format, look at the sample tests.*/

function multiTable(number) {
return `1 * ${number} = ${1*number}
2 * ${number} = ${2*number}
3 * ${number} = ${3*number}
4 * ${number} = ${4*number}
5 * ${number} = ${5*number}
6 * ${number} = ${6*number}
7 * ${number} = ${7*number}
8 * ${number} = ${8*number}
9 * ${number} = ${9*number}
10 * ${number} = ${10*number}` 
// good luck
}

//Solutions 29
/*Leaderboards
Achieve honor and move up the global leaderboards
Chat
Join our Discord server and chat with your fellow code warriors
Discussions
View our Github Discussions board to discuss general Codewars topics
ABOUT
Docs
Learn about all of the different aspects of Codewars
Halina2610 Avatar
6 kyu
194
8 kyu
Determine offspring sex based on genes XX and XY chromosomes
1445084% of 3,2399,821 of 25,252emporio
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (4)
Discourse (77)
Translations
Fork|Collect|
How satisfied are you with this kata?VERYSOMEWHATNONE
The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. 
They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, 
the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome,
return "Congratulations! You're going to have a son.";*/


function chromosomeCheck(sperm) {
  if (sperm == "XY") return  "Congratulations! You're going to have a son.";
  if (sperm == "XX")  return "Congratulations! You're going to have a daughter.";
}

//Solutions 30
/*In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %

Task
I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every 
function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), 
making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

Series:*/

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3, //set number value to a
      b = v1; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1, //set number value to a
      b = v5; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4, //set number value to a
      b = v5; //set number value to b
  return a / b;
}

function equal5(){
  let a = v2, //set number value to a
      b = v4; //set number value to b
  return a % b;
}

//Solutions 31
/*n javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array() or var arr=[]

Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

Each element in the array has an index, use arr[index] to get the value of element.

index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. 
Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

var arr=[1,2,3];     //define an array arr contains elements 1 2 3
arr.push(4);         //add element 4 to arr
console.log(arr)     //[1,2,3,4]
arr.pop();           //remove the last element from arr
console.log(arr)     //[1,2,3]
Task
I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

Series
( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)*/

function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}

//Solutions 32
/*In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."*/

function animal(obj){
  let animals = {  }
  animals.name = 'dog'
  animals.legs = '4'
  animals.color = 'white'
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
} // делаем копию обьекта и рабаотем уже с ней, оригинальный объект изменять нельзя

//Solutions 33
/*In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), 
the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, 
||, ! or some bitwise operators:&, |, ^

Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. 
In other words, the Boolean value is mainly used for conditional judgment. Look this example:

var arr=[];
...
...
......
if (arr.length) return "arr has elements";
else            return "arr is empty";
You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. 
it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

These values are converted to false in the conditional statement:

0, -0, "", null, undefined, NaN
Task
Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, 
if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see if your code is working properly.*/
function trueOrFalse(val){
 if (val) { 
   return 'true';
 }else { 
   return 'false';
}            
}

//Solutions 34
/*In JavaScript, switch can replace multiple if statements.

switch(n){
  case 1:  
    //code block
    break;
  case 2:
    //code block
    break;
  case ...:
    //code block
    break;


  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}
switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what 
to do in that case. The keyword break is used as termination - if you forget break, the code will continue running through the
other case statements and default until a break appears. If no case statements match, default is entered.

In some instances, the switch statement is clearer than the if..else statement.

For example, we can write a function to calculate what day today is, like this:

function whatDayIsToday(n){
  // getDay() is a method of Date() - we will learn this later
  var day=new Date().getDay(),x; 
  switch (day){
    case 0:
      x="Today it's Sunday";
      break;
    case 1:
      x="Today it's Monday";
      break;
    case 2:
      x="Today it's Tuesday";
      break;
    case 3:
      x="Today it's Wednesday";
      break;
    case 4:
      x="Today it's Thursday";
      break;
    case 5:
      x="Today it's Friday";
      break;
    case 6:
      x="Today it's Saturday";
      break;
  }
  return x;
}
Task
Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. 
Different months have a different number of days as shown in the table below. Return the number of days that are in month. 
There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
Tip: Using default for most of the cases can reduce your work.

When you have finished, click "Test" to test your code against initial tests and "Attempt" to test your code against all tests. 
If you pass in all tests you can click "Submit" to submit your code.*/

function howManydays(month){
  var days;
  switch (month){
  case 1 : 
      return 31
      break;
  case 2 : 
      return 28 
      break;
  case 3 : 
      return 31
      break;
  case 4 : 
      return 30 
      break;
  case 5 :
      return 31
      break;
  case 6 :
      return 30
      break;
  case 7 :
      return 31
      break;
  case 8 :
      return 31
      break;
  case 9 :
      return 30
      break;
  case 10 : 
      return 31
      break;
  case 11 :
      return 30
      break;
  case 12 :
      return 31
      break;
  }
}

//Solutions 35
/*If you want your code to do a lot of similar work, a loop statement is a good choice. For example, 
if we need to calculate the cumulative value from 1 to 10, we can write code like this:

function sum1_10(){
  return 1+2+3+4+5+6+7+8+9+10;
}
Wow~~,looks very cool! But if we need to calculate the cumulative value from 1 to 100, the code becomes:

function sum1_100(){
  return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
  +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
  +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
  +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
}
Do you feel a bit tired? We can use a loop statement to do it:

function sum1_100(){
  var sum=0,num=1;    //Initialize two variables sum and num
  while (num<=100){   //Determine the expression in brackets, while true, 
                      //run the code block one time, while false, break the loop
    sum=sum+num;      //Each time num will be added to the current value of sum
                      //It can be simplified as:  sum+=num
    num=num+1;        //Each time the value of num increases by 1
                      //It can be simplified as:  num++
  }
  return sum;         //return the final cumulative value
}
The do..while is a variant of while. The example above can be written like this:

function sum1_100(){
  var sum=0,num=1;
  do{
    sum+=num;
    num++;
  }while (num<=100)
  return sum;
}
while judges the condition at the beginning before executing its code, so if the condition is false the code inside 
the while loop is never executed. In contrast, do..while always runs once, and then starts checking the condition after that.

Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), otherwise 
it will turn into an infinite loop.

Ok, lesson is over. Let us do a task with while.

Task
Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, 
alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.*/

function padIt(str,n){
  let times = 0;
  while ( times < n ) {
    times % 2 ? str += '*' : str = '*' + str;
    times ++
  }
  return str;
}


//Solutions 36
/*The for loop is a very frequently used loop in JS.

Recall in lesson 9 we wrote a while loop:

function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}
We can rewrite it using a for loop, like this:

function sum1_100(){
  for (var sum=0,num=1;num<=100;num++){
    sum+=num;
  }
  return sum;
}
As you see, there are three parts in the parentheses, separated by ";". The first part, var sum=0,num=1, is the initialization. 
This part will run before the loop starts. The second part, num<=100 is the conditional expression. The conditional expression is 
checked before the start of each time through the loop. When the value of the expression is false, the loop will be terminated.
The third part, num++ will run after the code block, and is usually used for increasing and decreasing variables.

For the example above, the running order of the code is:

                              <--- back to part 2
                  -------------------------------------------
                  |                 true                    |
var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
                                |  
                           false|
                       loop terminated
When you need to traverse an array, you can use the for loop to access each element using its index. Here's an example:

function displayElements(array){
  for (var i=0;i<array.length;i++){
    console.log(array[i]);
  }
}
This function will display every element of the array on your screen.

Ok, lesson is over, let's do a task with for.

Task
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. 
If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

If you forgot how to push an element to an array, please refer to lesson 4.*/

function pickIt(arr){
  var odd=[],even=[];
  for (i = 0; i < arr.length; i++) { // проходится по каждому эллементу
    if (arr[i] % 2 == 0) { //если элемент четный
      even.push(arr[i]); //добавить в even массив
    } else {
      odd.push(arr[i]); //иначе в нечетный
    }
    console.log(arr[i]);
  } //coding here
  
  return [odd,even];
}


//Solutions 37
/*We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

function findFirstOddNumber(arr){
  var result;
  for (var i=0;i<arr.length;i++){
    if (arr[i]%2==1){
      result=arr[i];
      break;
    }
  }
  return result;
}
In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

function dontDisplayNegative(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0) continue;   
    console.log(arr[i])
  }
}
In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.
Through the use of break and continue, you can make the loop statement more flexible and convenient.
Ok, lesson is over. let's us do some task with break and continue.

Task
Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array,
I've defined in the function); if it's other strings, we should use continue skip it.
When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
Return the bag after for loop finished.
You should use for, break and continue in your code. otherwise, your solution may not pass this kata.*/

function grabDoll(dolls){
  const bag=[];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue; //пропустить, если dolls[i] не равно китти или барби.
    bag.push(dolls[i]);
    if (bag.length === 3) break; //закончить если длинна массива строго равно 3
  }
  return bag;
}

//Solutions 38
/*In lesson #11, we learned that the for loop can be used to traverse an array. If we want to traverse an object, we can use a variant of the for: for..in. This can traverse all the keys of the object. An example:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);
Code results:

keys of ob:
item1
item2
item3
item4
values of ob:
This
is
an
example
for..in can also be used with arrays. Modifying the code above:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);
Code results:

keys of arr:
0
1
2
values of arr:
one
two
three
As you can see, the keys are the indices of the array elements. Important: When using for..in with an array, 
the key (index) is always a string, not a number. In the example above, the keys are "0", "1", and "2". 
We can't see the quotes because console.log() doesn't show them.

Although for..in can be used to traverse the array, this is discouraged because in some cases the order may be unexpected. 
So it's recommended that you use another variant for this: for..of (new in ES6). for..of can traverse all the values of the array 
(without accessing them through their index). Function showObjectValues() from above can be modified like this:

function showArrayValues(arr){
  for (var value of arr){
    console.log(value);
  }
}
Ok, lesson is over, let's do a task with for..in.

Task
The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. 
If the length of the key is equal to 5, then push the key to your array. Separately, 
if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.
You should use for..in in your code, otherwise your solution may not pass this kata.*/

function giveMeFive(obj) {
  var myArray = [];
  for (var key in obj) {
    if (key.length === 5) myArray.push(key);
    if (obj[key].length === 5) myArray.push(obj[key]);
  }
  return myArray;
}
//coding here



//Solutions 39
/*The number is a basic data type in javascript. javascript also supports Number objects. The object is the original value of the package object. When necessary, JavaScript automatically converts between the original data and the objects. You can explicitly create a Number object with the constructor Number(). Although it is not necessary to do so. Usage:

var num=new Number(value);
Parameter value is the value of the Number object to be created or the value to be converted into a numeric value.

Constructor Number() can be used without operator new and directly as a transformation function to use. In this way, when the Number is called, it transforms itself into a number and then returns the converted value (or NaN). Usage:

var num=Number(value);
Number object has two generic object properties: constructor and prototype. all the objects in JS have these two properties. they are two very important attributes. because of their importance and complexity, we will learn it in the future.

In addition to the above two, the Number objects have five attributes (or called constant):

MAX_VALUE: The maximum number that can be expressed in JS. Usage:Number.MAX_VALUE. Its approximate value is 1.7976931348623157e+308

MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage:Number.MIN_VALUE. Its approximate value is 5e-324

NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) 
or the result of the method are not numbers, return NaN. Usage:Number.NaN. It can be simplified and replaced with NaN.

Please note: the results of comparison between NaN and other values are always not equal(including its own). Therefore, can not be compared
with Number.NaN to detect a value is not a number but can only call isNaN() to compare.

NEGATIVE_INFINITY: The value represents the negative infinity. Usage:Number.NEGATIVE_INFINITY. When a number is generated in an arithmetic
operation or function and it smaller than -Number.MAX_VALUE return this value. It can be simplified and replaced with -Infinity.

POSITIVE_INFINITY: The value represents the positive infinity. Usage:Number.POSITIVE_INFINITY. When a number is generated in an arithmetic 
operation or function and it larger than Number.MAX_VALUE return this value. It can be simplified and replaced with Infinity.

Ok, lesson is over. let's us do some task with Number objects.

Task
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().*/

function whatNumberIsIt(n){
  if (n == Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n == Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  if (n == Number.NaN ) return "Input number is Number.NaN";
  if (n == Number.NEGATIVE_INFINITY) return "Input number is Number.NEGATIVE_INFINITY";
  if (n == Number.POSITIVE_INFINITY) return "Input number is Number.POSITIVE_INFINITY";//coding here
  if (n == n) return "Input number is "+ n;
  return "Input number is Number.NaN";
} //можно сделать через switch оператор 


//Solutions 40
/*This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:

var num=111;
var a=num.toString(), 
    b=num.toLocaleString(), 
    c=num+""
console.log([a,b,c])   //put them to an array, we can see the quotes
//output: [ '111', '111', '111' ]
We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, cause I'm lazy ;-)

But these two methods have other uses as well.

When used toLocaleString() converted a number to a string. the results obtained are in the order of the local numeric format(I don't have this experience. it is always the same as toString() in my here).

And toString() of Number object has a more special usage: According to the base output different strings.

NumberObject.toString(radix)
radix is optional parameter. if ignored it, the output will be the default decimal. If not, like this:

var num=111;
var a=num.toString(2), 
    b=num.toString(8), 
    c=num.toString(16), 
console.log([a,b,c])
//output: [ '1101111', '157', '6f' ]
They are converted to binary, octal and hexadecimal.

Ok, lesson is over. let's us do some task with Number .toString().

Task
Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
That's all of your work. My work is print your color code on your screen.*/

function colorOf(r,g,b){
  let colorRed = r.toString(16);
  let colorGreen = g.toString(16);
  let colorBlue = b.toString(16);
  
  colorRed  = colorRed .length < 2 ? '0' + colorRed : colorRed ;
  colorGreen = colorGreen.length < 2 ? '0' + colorGreen : colorGreen;
  colorBlue = colorBlue.length < 2 ? '0' + colorBlue : colorBlue;
  
  return '#' + colorRed + colorGreen + colorBlue;
}


//Solutions 41
/**/
//Solutions 42
/**/
//Solutions 43
/**/
//Solutions 44
/**/
//Solutions 45
/**/
