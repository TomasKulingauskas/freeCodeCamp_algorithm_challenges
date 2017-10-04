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
  var factorial = 1;
  var n=1;
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

/*
Challenge 10 - Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/

//SOLUTION

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var tempArr = []; //temporary array
  var finalArray = []; //final two-dimensional array
  var k = size; //starting arr[] right index
  var n = 0; //starting arr[] left index 
  while (k<=arr.length){
    tempArr = arr.slice(n, k);
    n+=size;
    k+=size;
    finalArray.push(tempArr);
  }
   /*when k index is bigger than the length of arr, stop incrementing k and n, 
    slice the remaining members starting from the current n position and push them 
    to finalArray */
    tempArr = arr.slice(n);
    if (tempArr.length !== 0){
    finalArray.push(tempArr);
    }
    
  return finalArray;  
} 

chunkArrayInGroups(["a", "b", "c", "d"], 2); // returns [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // returns [[0, 1, 2], [3, 4, 5], [6]]

//END


/*
Challenge 11 - Slasher Flick 
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/

//SOLUTION

function slasher(arr, howMany) {
  var n = 0;
  while (n<howMany){
    arr.splice(0,1);
    n++;
  }
  return arr;
}

slasher([1, 2, 3], 2); //returns [3]

//END

/*
Challenge 12 - Mutations 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, 
ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

//SOLUTION

function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for (var n=0; n<second.length; n++) {
    if (first.indexOf(second[n]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]); //returns false

//END

/*
Challenge 13 - Falsy Bouncer 
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

//SOLUTION

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var falsyValues = [false, null, 0, "", undefined, NaN];
  arr = arr.filter(function(value){
     if (!isNaN(value) || falsyValues.indexOf(value) === -1){  
      return value; 
     }
  });
  return arr;
}

bouncer([7, "ate", "", false, 9]); // returns [7, "ate", 9]

//END

/*
Challenge 14 - Seek and Destroy 
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
*/

//SOLUTION

function destroyer(arr) {
  // Remove all the values
  var argsList = [];
  
  for (var n=1; n<arguments.length; n++){
    argsList.push(arguments[n]);
  }
  
  var newArr = arguments[0];
  newArr = newArr.filter(function(value){
    if(argsList.indexOf(value) === -1){
      return value;
    }
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //returns [1,1]

//END

/*
Challenge 15 - Where do I belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 
is less than 20 (index 2) and greater than 5 (index 1).
*/

//SOLUTION

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a,b){
    return a - b;
   });
  
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50); //returns 1

//END

/*
Challenge 16 - Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
https://en.wikipedia.org/wiki/ROT13
*/

//SOLUTION

function rot13(str) { 
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var index;
  var remainder;
  var decodedStr = [];
  
  decodedStr = str.split("");
  
  for (var n=0; n<decodedStr.length; n++){ //loop through our split str
    if (alphabet.indexOf(decodedStr[n]) !== -1){ // check if the character is a member of the alphabet
        index = alphabet.indexOf(decodedStr[n])+1; //if it is, then check where it is in the alphabet. 
          if (index>13){
            remainder = 26%index; 
            decodedStr[n] = alphabet[13-remainder-1];
          }else{
          decodedStr[n] = alphabet[index-1 + 13];
          }
    }else{
      //if current decodedStr member is a non-alphabetic character, then do nothing with it.
    }
  }
  
  decodedStr = decodedStr.join("");
  
  return decodedStr;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); //returns THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.

//END
