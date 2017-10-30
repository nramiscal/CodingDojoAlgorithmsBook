// getYearDayNumAndLeapYearCount() takes in dayNum, which represents
// the number of days that have passed since December 31, 2016.
// It assumes that any year number divisible by 4 is a leap year and has 366 days.
function getYearDayNumAndLeapYearCount(dayNum){
    var count = 0;
    var year = 2017;
    var leapYearCount = 0;

    while (dayNum > 0 && dayNum > 366){ // in case resultant year is a leap year
        count++;
        if (count == 2 || (count - 2) % 4 == 0){
            dayNum -= 366;
            year++;
            leapYearCount++;
        }
        else {
            dayNum -= 365;
            year++;
        }
    }
    return [year, dayNum, leapYearCount];
}

// weekDayName3() takes into account the number of leap years since Dec 31, 2016
function weekDayName3(weekdayNum, leapYearCount){

    var rem = (weekdayNum - leapYearCount) % 7;

    switch(rem) {
    case 0:
        return "Saturday";
    case 1:
        return "Sunday";
    case 2:
        return "Monday";
    case 3:
        return "Tuesday";
    case 4:
        return "Wednesday";
    case 5:
        return "Thursday";
    case 6:
        return "Friday";
    }
}

// dayToMonth() takes in a number from 1 to 365 and returns
// the name of the month that number falls within
function dayToMonth(dayNum){

    if (dayNum < 0 || dayNum > 365){
        return "Day number must be between 1 and 365 inclusive.";
    }
    else if (dayNum <= 31){
        return "January";
    }
    else if (dayNum <= 59){
        return "February";
    }
    else if (dayNum <= 90){
        return "March";
    }
    else if (dayNum <= 120){
        return "April";
    }
    else if (dayNum <= 151){
        return "May";
    }
    else if (dayNum <= 181){
        return "June";
    }
    else if (dayNum <= 212){
        return "July";
    }
    else if (dayNum <= 243){
        return "August";
    }
    else if (dayNum <= 273){
        return "September";
    }
    else if (dayNum <= 304){
        return "October";
    }
    else if (dayNum <= 334){
        return "November";
    }
    else if (dayNum <= 365){
        return "December";
    }
}

// getOffset() returns the sum of all the days in the months preceding the current month
function getOffset(monthName){
    var sum = 0;

    var months = [
            ["January", 31],
            ["February", 28],
            ["March", 31],
            ["April", 30],
            ["May", 31],
            ["June", 30],
            ["July", 31],
            ["August", 31],
            ["September", 30],
            ["October", 31],
            ["November", 30],
            ["December", 31]
        ];

    for (var i = 0; i < 12; i++){
        if (months[i][0] == monthName){
            return sum;
        }
        sum += months[i][1];
    }
}

// fullDate2() was adapted from fulldate() to take in an
// array of 3 elements: [year, dayNum, leapYearCount]
function fullDate2(result){
    var dayOfWeek = weekDayName3(result[1], result[2]);
    var monthName = dayToMonth(result[1]);
    var dayOfMonth = result[1] - getOffset(monthName);
    var year = result[0];

    console.log(dayOfWeek + ", " + monthName + " " + dayOfMonth + ", " + year);
}

fullDate2(getYearDayNumAndLeapYearCount(8475)) // "Thursday, March 15, 2040"

// I am not convinced this solution is correct, even though it is returning
// the right answer, because dayToMonth() does not take into account if the
// resultant year is a leap year (which it is) -Nina
