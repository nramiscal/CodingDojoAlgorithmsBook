function addSevenToMost(arr){
    var newArr = [];
    for (var i = 1; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

addSevenToMost([1,2,3,4,5])
