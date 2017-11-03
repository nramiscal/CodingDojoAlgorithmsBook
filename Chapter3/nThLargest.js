function nThLargest(arr, n){

    // bubble sort the array (largest to smallest)
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length -i; j++){
            if (arr[j] < arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    return arr[n-1];

}

nThLargest([42,1,4,Math.PI,7,10,4,9,2],2)
