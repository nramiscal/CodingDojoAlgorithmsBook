function returnArrayCountGreaterThanY(arr, y){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            count++;
        }
    }
    console.log("Num of values greater than " + y + ": " + count)
}

returnArrayCountGreaterThanY([24,7,1,90,4],5)
