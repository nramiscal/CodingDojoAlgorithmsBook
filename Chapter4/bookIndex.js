function bookIndex(arr){
    let str = "";
    for (var i = 0; i < arr.length; i++){
        if (i < arr.length && i != 0){
            str += ", ";
        }
        if (arr[i+1] == arr[i]+1){
            var start = arr[i];
            while (arr[i+1] == arr[i]+1){
                i++;
            }
            var end = arr[i];
            str += start + "-" + end;
        }
        else {
            str += arr[i];
        }
    }
    return str;
}

bookIndex([1,13,14,15,16,18,37,38,70,71,72])
// "1, 13-16, 18, 37-38, 70-72"
