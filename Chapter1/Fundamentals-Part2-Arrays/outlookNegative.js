function outlookNegative(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            newArr.push(arr[i] - arr[i]*2);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

outlookNegative([1,-3,5])
