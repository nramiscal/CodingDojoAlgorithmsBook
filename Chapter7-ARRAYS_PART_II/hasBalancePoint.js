function hasBalancePoint(arr){
    var total = arr[0];
    var sub = arr[0];
    for (var i = 1; i < arr.length; i++){
        total += arr[i];
    }
    for (var i = 1; i < arr.length ; i++){
        if (sub === total-sub){
            return true;
        }
        sub += arr[i];
    }
    return false;
}

console.log(hasBalancePoint([5,5,5,4,4,4,1,1,1,0]))
