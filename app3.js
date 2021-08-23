//write a function to remove duplicate from an array. Ex: [1, 2,  2, 4, 5, ,5, 6] -> [1, 2, 4, 5, 6]

function removeDuplicates(num){

var uniqueno;
uniqueno = new Set()

  for(var i=0; i<num.length; i++)
  {
   uniqueno.add(num[i]);
  }
  return uniqueno;
}
//removeDuplicates([1, 2, 2, 4, 5, ,5, 6])

 console.log(removeDuplicates([1, 2, 2, 4, 5, 5, 6]));

 //-----------------------------
 const numb = [1, 2,  2, 4, 5, 5, 6]

 function removeDuplicates(num){
 
   var uniqueOutput;
   uniqueOutput = new Set();
 
   for (i=0; i < num.length; i++){
 
     uniqueOutput.add(num[i])
   }
   return uniqueOutput;
 
 }
 console.log(removeDuplicates(numb))

 //--------------------------------------------------



 // function isInt(num) {
//   return num % 1 === 0;
// }

// console.log(isInt(4)); // true
// console.log(isInt(12.2)); // false
// console.log(isInt(0.3)); // false