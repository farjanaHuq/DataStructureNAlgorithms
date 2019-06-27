//GIvenn a string, 
//return a new string with the reversed order of characters


function reverse(str){
    let reversed = '';
    for(var i=str.length-1; i>=0; i--){
         reversed += str[i] ;
    }
    // for(let character of str){
    //     reversed = character+str;
    // }
    return reversed;
}


console.log(reverse("hello"));
console.log(reverse("apple"));