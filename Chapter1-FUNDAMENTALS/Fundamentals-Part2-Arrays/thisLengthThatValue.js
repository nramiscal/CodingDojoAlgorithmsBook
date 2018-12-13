function thisLengthThatValue(num1, num2){
    var arr = [];
    if (num1 == num2){
        console.log("Jinx!");
    }
    for (var i = 0; i < num1; i++){
        arr[i] = num2;
    }
    return arr;
}

thisLengthThatValue(5,0)
