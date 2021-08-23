// var words = ["the", "quick", "brown", "fox"];

// var wordLengths = words.map(word => word.length);

// function findLength(arrayString) {

//   var arrayLengths = [];
//   for (i=0; i < arrayString.length; i++ ){
//     arrayLengths[i] = arrayString[i].length;
//   }
// return arrayLengths;
// }
// console.log(findLength(["the", "quick", "brown", "fox"]));

// const nums = [1, 2, 3, 4, 5];

function sumofnumbers(nums){
  var sumnum = 0;

  for(i=0; i<nums.length; i++)
  {
  sumnum = sumnum + nums[i]
}
return sumnum;
}
console.log(sumofnumbers(nums));

(function(){
  var a = b = 42;
})();
 
console.log(typeof a);
console.log(typeof b);

