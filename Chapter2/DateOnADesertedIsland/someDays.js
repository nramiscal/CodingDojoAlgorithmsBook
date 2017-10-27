function weekDayName2(weekdayNum){

    var rem = weekdayNum % 7;

    switch(rem) {
    case 1:
        console.log("Sunday");
        return 1;
    case 2:
        console.log("Monday");
        return 2;
    case 3:
        console.log("Tuesday");
        return 3;
    case 4:
        console.log("Wednesday");
        return 4;
    case 5:
        console.log("Thursday");
        return 5;
    case 6:
        console.log("Friday");
        return 6;
    case 0:
        console.log("Saturday");
        return 0;
        break;
    }
}

function someDays(){
    var num;
    for (var i = 1; i <= 100; i++){
        var num = weekDayName2(Math.floor(Math.random()*365+1));
        if (num == 1 || num == 0){
            console.log("Enjoy your day off!");
        }
        else {
            console.log("Work hard!");
        }
    }
}

someDays()
