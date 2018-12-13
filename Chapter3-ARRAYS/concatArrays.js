function arrConcat(arr1,arr2){
    for (var i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

arrConcat(['a','b'],[1,2])
