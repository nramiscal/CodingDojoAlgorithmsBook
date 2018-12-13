function firstPlusLength(arr){
    return arr[0] + arr.length;
}


firstPlusLength([1,2,3,4]) // returns 5
firstPlusLength(["what?",2,3,4]) // returns what?4
firstPlusLength([false,2,3,4]) // returns 4
