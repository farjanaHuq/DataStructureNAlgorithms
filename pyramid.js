// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var midCol = Math.floor((2*n-1)/2);
   
    for(var row=1; row<=n; row++){
        var str = '';  
        for(var col=1; col<=2*n-1; col++)     
        {
            if(midCol-row<=col && midCol+row>=col){
                str+= '#';
            }
            else{
                str+= '';
            }
        }
        console.log(str);
    }

}

pyramid(3);