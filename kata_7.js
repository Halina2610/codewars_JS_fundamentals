//task 1
/*The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

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
//task 5
//task 6
//task 7
//task 8
//task 9
//task 10
//task 11
//task 12
//task 13
//task 14
//task 15
//task 16
//task 17
//task 18
//task 19
//task 20
