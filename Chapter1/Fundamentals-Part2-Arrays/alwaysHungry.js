function alwaysHungry(arr){
    var isFood = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy");
            isFood = true;
        }
    }
    if (!isFood){
        console.log("I'm hungry");
    }

}

alwaysHungry([1,2,3,4,5])
