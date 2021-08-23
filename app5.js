
function countcharE(string){
var chara = 0;
  for (i=0;  i<string.length; i++)
  {

    if (string[i] === 'e') {
    chara++ ;
    }
  }
  return chara;
  }
  console.log(countcharE("kelley jitene hello"));
