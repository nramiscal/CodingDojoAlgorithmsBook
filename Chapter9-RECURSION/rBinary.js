function rBinary(arr, val){

    var idx = Math.floor(arr.length/2);
    var num = arr[idx];
    console.log(arr);
    console.log("idx: " + idx + " num: " + num + " val: " + val);

    if (arr.length <= 1 && arr[0] !== val){
        console.log(val + " is not in the array.");
        return false;
    }

    if (num === val){
        console.log("This number is in the array.");
        return true;
    }
    else {
        if (val < num){
            var newArr = [];
            for (var i = 0; i < idx; i++){
                newArr.push(arr[i]);
            }
            return rBinary(newArr, val);
        }
        else if (val > num){
            var newArr = [];
            for (var i = idx + 1; i < arr.length; i++){
                newArr.push(arr[i]);
            }
            return rBinary(newArr,val);
        }
    }
}

console.log(rBinary([1,2,3,4,5,6,7,8,9], 2));
console.log(rBinary([], 90));
