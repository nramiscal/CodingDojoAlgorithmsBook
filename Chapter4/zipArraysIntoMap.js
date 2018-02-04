function zipArraysIntoMap(arr1,arr2){
    var obj = {};

    if (arr1.length < arr2.length) {
        return "Length of arr1 must be greater than or equal to length of arr2";
    }

    for (var i = 0; i < arr1.length; i++){
        obj[arr1[i]] = arr2[i];
    }

    return obj;
}


console.log(zipArraysIntoMap(['a','b','c'],[1,2,3,4]));
// console.log(zipArraysIntoMap([1,2,3],['a','b','c']));
