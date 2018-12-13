function onlyKeepTheLastFew(arr,x){
    for (var i = 0; i <= arr.length-x; i++){
        for (var j = 0; j < arr.length; j++){
            arr[j] = arr[j+1];
        }
        arr.length--; // or arr.pop();
    }
    return arr;
}

onlyKeepTheLastFew([2,4,6,8,10],3) // [6,8,10]
