function zipIt2(arr1,arr2){
    for (var i = 0, j = 0; i < arr1.length && j < arr2.length; i+=2, j++){
        for (var k = arr1.length-1; k > i; k--){
            arr1[k+1] = arr1[k];
        }
        arr1[i+1] = arr2[j];
    }
    for (var l = j; l < arr2.length; l++){
        arr1.push(arr2[l]);
    }
    return arr1;
}


zipIt2([1,2],[10,20,30,40])
