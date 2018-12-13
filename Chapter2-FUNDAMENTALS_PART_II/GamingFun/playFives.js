function rollOne(){
    return Math.floor(Math.random()*6+1);
}

function playFives(num){
    for (var i = 1; i <= num; i++){
        var result = rollOne();
        console.log(result);
        if (result == 5){
            console.log("That's good luck!")
        }
    }
}

playFives(50)
