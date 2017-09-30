/*
Challenge 1 - Reverse a String
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

//SOLUTION

function reverseString(str) {
  var arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return str;
}

reverseString("hello"); //returns "olleh"

//END

/*
Challenge 2 - Factorialize a Number
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

//SOLUTION

function factorialize(num) {
  factorial = 1;
  n=1;
  while (n <= num){
    factorial*=n;
    n++;
  }
 return factorial;
}

factorialize(5); //returns 120

//END

/*
Challenge 3 - Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check 
for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".Return the factorial of the 
provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
*/

//SOLUTION

function palindrome(str) {
  var arr=[];
  var reversed;
  var newstr;
  
  newstr = str.toLowerCase();
  newstr = newstr.replace(/[^0-9a-z]/gi, '');
  arr = newstr.split('');
  arr.reverse();
  reversed = arr.join("");
  
  if (newstr === reversed) {
    return true;
  }
   return false;
  
}

palindrome("_eye"); //returns true

//END

/*
Challenge 4 - Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

//SOLUTION

function findLongestWord(str) {
  var max = 0;
  var arr = [];
  arr = str.split(' ');
  arr.map(function(word){
    if (word.length > max){
      max = word.length;
    }
  });
  
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //returns 6

//END

/*
Challenge 5 - Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

//SOLUTION

function titleCase(str) {
  var arr=[];
  var newarr = [];
  str = str.toLowerCase();
  arr = str.split(' ');
  arr.map(function(word){
    newarr.push(word[0].toUpperCase() + word.slice(1, word.length));
  });
  console.log(newarr);
  str = newarr.join(' ');
  return str;
}

titleCase("I'm a little tea pot"); //returns I'm A Little Tea Pot

//END

/*
Challenge 6 - Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain 
exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

//SOLUTION

function largestOfFour(arr) {
  var max = 0;
  var largestArr = [];
  for (x=0; x<arr.length; x++){
    for(y=0; y<arr[x].length; y++){
      if (arr[x][y] > max){
        max = arr[x][y];
      }
    }
    largestArr.push(max);
    max = 0;
  }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //returns [5, 27, 39, 1001]

//END

/*
Challenge 7 - Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead.
*/

//SOLUTION

function confirmEnding(str, target) {
  var lastString = str.substr(-target.length);
  if (lastString === target){
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n"); //returns true

//END

/*
Challenge 8 - Repeat a string repeat a string
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

//SOLUTION

function repeatStringNumTimes(str, num) {
  // repeat after me
  var n = 0;
  var repeatedString = "";
  if (num<=0){
    return '';
  }
  while (n<num){
    repeatedString+=str;
    n++;
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3); //returns abcabcabc

//END

/*
Challenge 9 - Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, 
then the addition of the three dots does not add to the string length in determining the truncated string.
*/

function truncateString(str, num) {
  var truncated = "";
  if (num <= 3 && str.length>num){
      truncated = str.slice(0, num);
      truncated += "...";
      return truncated;
  }else if (num>3 && str.length>num){
      truncated = str.slice(0, num-3);
      truncated+="...";
      return truncated;
    }else if (str.length<=num){
      return str;
    }
}
  
truncateString("A-tisket a-tasket A green and yellow basket", 11); //returns A-tisket...

//END
