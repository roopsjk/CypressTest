

function reversestring(str) {

  var splitString =  str.split("");

  console.log(splitString);

  var revArray = splitString.reverse();

  var joinArray = revArray.join("");

  return joinArray;
}

//reversestring("apple")

//var outputString

console.log(reversestring("apple"));


// const express = require ('express');
// const app = express();

// function reverseString2(inputString){

//   var outputString = "";
//     for (var i = inputString.length-1 ; i >= 0; i--)
//     {
//       outputString = outputString + inputString[i];
//     }
//     return outputString;
// }

// var  out = reverseString2("Rupal");

// console.log(reverseString2("Rupal"));

// // function reverseString(str) {
// //   var splitString = str.split("");

// //   var revString = splitString.reverse();

// //   var joinString = revString.join("");

// //   return joinString;
// // }

// //  var outputString = reverseString("Rupal");
// //  console.log(outputString);
 

// // function doSomething(){
// //  var x = 0;
// //  var y = 23;
// //  if(x) { console.log(x) }
// //  if(y) { console.log(y) }

 
// // }
// // return doSomething();

// //ROUTES
// app.get('/', (req,res) => {
//  res.send('we are home');

// });

// // app.get('/posts', (req,res) => {
// //   res.send('we are on posts ');
// //  });
 
//  //Connect to DB 
// //How to we start listening to the server

// app.listen(3000);
