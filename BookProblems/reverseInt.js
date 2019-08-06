// Write a program that takes  an integer and return a corresponding Interger of reverse order

//using string
function solution(x){
   var str = x.toString();
   var reverseStr = '';
   for(var i=str.length-1; i>=0; i--){
        reverseStr+=str[i];
   }

   return Number(reverseStr);
}

 console.log(solution(-256));

//solution(256);