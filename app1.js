//write a function to remove a number from an array. Nums = [0,1,2,2,3,0,4,2], numberToRemove= 2. Output: [0,1, 3,0,4]
function removenumber(arra, numb) {

  var test = [];

  for(i=0; i<arra.length; i++){
    
    if( arra[i] !== numb)
        {
     test.push(arra[i]);
   }
  }
  return test;
 }

 var output = [];

// console.log(removenumber([0,1,2,2,3,0,4,2], 2))
output = removenumber([0,1,2,2,3,0,4,2], 2);
console.log(output);








//remove duplicates
function removeDuplicates(num){

var uniqueno;
uniqueno = new Set()

  for(var i=0; num.length > i; i++)
  {
   uniqueno.add(num[i]);
  }
  return uniqueno;
}
//removeDuplicates([1, 2, 2, 4, 5, ,5, 6])

 console.log(removeDuplicates([1, 2, 2, 4, 5, 5, 6]));