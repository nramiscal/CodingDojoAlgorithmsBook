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

console.log(dayToMonth(75))
