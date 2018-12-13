function doubleVision(arr){
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        newarr.push(arr[i]*2);
    }
    console.log(arr);
    return newarr;
}

doubleVision([1,2,3])
