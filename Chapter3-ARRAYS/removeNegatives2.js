// removed nested loop in removeNegatives()
function removeNegatives2(arr){
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            newarr.push(arr[i]);
        }
    }
    arr = newarr;
    return arr;
}

removeNegatives2([3,6,-2,8,-1,-7,9])
