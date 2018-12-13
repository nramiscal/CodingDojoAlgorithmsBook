function soaringIQ(IQ){
    var numDays = 14*7;
    var add;
    for (var i = 1; i <= numDays; i++){
        add = i/100;
        IQ += add;
    }
    i--;
    console.log("day is " + i);
    console.log("IQ is " + IQ);
    console.log("add is " + add);
}

soaringIQ(101)
