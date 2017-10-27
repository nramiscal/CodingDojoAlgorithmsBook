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
    var x = Math.random()*5 + 5;
    var y = Math.random()*10 + 5;

    for (var i = 1; i <= x; i++){
        for (var j = 1; j <= y; j++){
            drawEmpireFleet(Math.random()*15);
        }

        for (var k = 1; k <= x; k++){
            drawRebellionFleet(Math.random()*15);
        }
    }
}

drawEpicBattle()
