function claireisWhere(){
    var x = 0;
    var y = 0;

    function reset(){
        x = 0;
        y = 0;
    }

    function moveBy(xOffset, yOffset){
        x += xOffset,
        y += yOffset;
    }

    function xLocation(){
        return x;
    }

    function yLocation(){
        return y;
    }

    function distFromHome(){
        return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    }

    reset();
    moveBy(1,-2)
    moveBy(3,1)

    console.log("Claire's coordinates: (" + xLocation() + ", " + yLocation() + ")");
    console.log("Distance from home: " + distFromHome().toFixed([2]));
}

claireisWhere()
