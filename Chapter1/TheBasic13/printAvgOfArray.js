function printAvgOfArray(arr){
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    console.log("Average is " + sum/arr.length);
}

printAvgOfArray([2,4,6,8,10])
