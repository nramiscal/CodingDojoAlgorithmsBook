function printOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0){
            return arr[i];
        }
    }
    return "no odd values";
}


printOneReturnAnother([2,4,6,8,11,12,14,16])
