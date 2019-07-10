
 var metDataArr = [];
 var idArr = [];

function prioritizedOrders(numOrders, orderList)
{
    var nonPrimeOrders = [];
    var primeOrders = [];
   
    // WRITE YOUR CODE HERE
    for(var i=0; i<orderList.length; i++){
        var order = orderList[i]
        var id = order.split(' ')[0];
        var metaData = order.slice(id.length+1, order.length );
    
        if(isNaN(metaData.charAt(0))){
            //prime order
           var primeOrder = [id, metaData, order];
           primeOrders.push(primeOrder) ;
        }
        else{
            nonPrimeOrders.push(order) ;
        }

    }
    console.log('Prime Orders', primeOrders);
    console.log('Non Prime Orders', nonPrimeOrders);

    primeOrders.sort(function(a, b){
        var metaDataA = a[1];
        var metaDataB = b[1];

        if(metaDataA < metaDataB){
            return -1;
        }else if(metaDataA>metaDataB){
             return 1;
        }else if(metaDataA === metaDataB){
            var idA = a[0];
            var idB = b[0];
            if(idA < idB){
                return -1;
            }else if(idA>idB){
                return 1;
            }else{
                return 0;
            }       
        }
        else{
            return 0;
        }
    })
    console.log(primeOrders);


var finalOrders = [];

for (var i = 0; i < primeOrders.length; i++){
   finalOrders.push(primeOrders[i][2]) ;
}

finalOrders.push(nonPrimeOrders);
return finalOrders;

}



var orderList = ['zid 93 12', 'fp kindle book', 'abs kindle book1'];
prioritizedOrders(2,orderList );
// var order = 'zid 93 12';
// var id = order.split(' ')[0];
// var metaData = order.splice(0, id.length);
// console.log(metaData);
