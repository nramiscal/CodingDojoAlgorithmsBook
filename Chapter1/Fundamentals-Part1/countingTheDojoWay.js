function countingTheDojoWay(){
    for (var i = 1; i <= 100; i++){
        if (i % 10 == 0){
            console.log("Dojo");
        }
        else if (i % 5 == 0){
            console.log("Coding");
        }
        else{
            console.log(i);
        }
    }
}

countingTheDojoWay()
