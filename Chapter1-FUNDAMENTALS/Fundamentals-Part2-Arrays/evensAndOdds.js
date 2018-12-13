function evensAndOdds(arr){
    for (var i = 2; i < arr.length; i++){
        if (arr[i] % 2 != 0 && arr[i-1] % 2 != 0){
            if (arr[i-2] % 2 != 0){
                return "That's odd!";
            }
        }
        if (arr[i] % 2 == 0 && arr[i-1] % 2 == 0){
            if (arr[i-2] % 2 == 0){
                return "Even more so!";
            }
        }
    }

    return "No three in a row"

}

evensAndOdds([1,3,2,4,6])
