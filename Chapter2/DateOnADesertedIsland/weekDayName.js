// weekDayName() assumes the year is 2017
// weekdayNum is a number between 1 and 7 inclusive
function weekDayName(weekdayNum){
    switch(weekdayNum) {
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
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid week day number");
    }
}

weekDayName(5)
