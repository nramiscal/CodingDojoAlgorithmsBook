function secondToLast(arr){
    if (arr.length < 2){
        return null;
    }
    return arr[arr.length-2];
}

secondToLast([42,true,"Kate",7]) // "Kate"
secondToLast(["Kate"]) // null
