function celciusToFahrenheit(cDegrees){
    return  (cDegrees * 9/5) + 32
}

// celciusToFahrenheit(0)

// Optional:
function whenCelciusEqualsFahrenheit(){
    var cDegrees = 200;
    var fDegrees = celciusToFahrenheit(cDegrees);
    while (cDegrees != fDegrees){
        cDegrees--;
        fDegrees = celciusToFahrenheit(cDegrees);
    }
    console.log("cDegrees: " + cDegrees);
    console.log("fDegrees: " + fDegrees);
}

whenCelciusEqualsFahrenheit()
