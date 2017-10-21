function drawEmpireFleet(num){
    var empire = "";
    for (var i = 1; i <= num; i++){
        empire += ' =*= ';
    }
    console.log(empire);
}


function drawRebellionFleet(num){
    var rebellion = "";
    for (var i = 1; i <= 75-num; i++){
        rebellion += ' ';
    }
    for (var i = 1; i <= num; i++){
        rebellion += ' >o< ';
    }
    console.log(rebellion);
}


function drawEpicBattle(){
    for (var i = 1; i <= 4; i++){
        for (var j = 1; j <= 10; j++){
            drawEmpireFleet(15);
        }

        for (var k = 1; k <= 10; k++){
            drawRebellionFleet(15);
        }
    }
}

drawEpicBattle()
