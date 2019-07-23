// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    
    
    for(var row=0; row<n; row++){
        var stair = '';
        for(var col=0; col<n; col++){
            if(col <= row){
                stair+= '#';
            }
            else{
                stair+= '';
            }
        }
        console.log(stair);
    }
}

steps(4);

//recursion

function stepsRecurs(n, row =0, col=0){
    var stair = '';
    if(col <= row){
        stair+= '#';
    }
    else{
        stair+= '';
    }
    console.log(stair);
}