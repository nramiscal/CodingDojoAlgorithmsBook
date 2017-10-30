// weekDayName2() assumes the year is 2017
// weekdayNum is a number between 1 and 365 inclusive
function weekDayName2(weekdayNum){

    var rem = weekdayNum % 7;

    switch(rem) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    }
}

weekDayName2(1)
