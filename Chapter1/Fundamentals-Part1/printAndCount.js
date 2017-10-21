function printAndCount(){
    var i = 512;
    var count = 0;
    var arr = [];
    while(i <= 4096){
        if (i % 5 == 0){
            arr.push(i);
            count++;
        }
        i++;
    }
    console.log(arr);
    console.log("Count is: " + count);
}

printAndCount()
